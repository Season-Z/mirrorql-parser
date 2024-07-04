import { ParserRuleContext, ParseTree, ParseTreeVisitor, Token } from "antlr4";
import MirrorQLParser, * as MP from "../antlr/MirrorQLParser";
import MirrorQLVisitor from "../antlr/MirrorQLVisitor";
import * as AST from "../typings/ast-types";
import { atomTypeRef } from "../typings/type-factory";
import { ParseOptions } from "../typings/types";
import ErrorListener from "./error-listener";
import { ParsingManager } from "./parser";
// import { PackageBuilder } from "./package-builder";

interface WithMeta {
  __withMeta: never;
}

type ASTBuilderNode = AST.ASTNode & WithMeta;

const DefaultInputType = "file";
const DefaultOutputType = "file";

export class ASTBuilder extends ParseTreeVisitor<ASTBuilderNode> implements MirrorQLVisitor<ASTBuilderNode | ASTBuilderNode[]> {
  public result: AST.ModuleContent | null = null;
  // public parsingManager: ParsingManager;/

  constructor(private options: ParseOptions, private manager: ParsingManager, private errorListener: ErrorListener) {
    super();
    // this.parsingManager = manager;
  }

  // getDefaultResultOrder(): AST.ASTNode & WithMeta {
  //     throw new Error("Unknown node");
  // }
  //
  // aggregateResult() {
  //     return { category: " " } as unknown as AST.ASTNode & WithMeta;
  // }

  public visitModuleContent(ctx: MP.Module_contentContext): AST.ModuleContent & WithMeta {
    const declCtxList = ctx.top_level_decl_list() ?? [];
    // console.log(declCtxList)
    const node: AST.ModuleContent = {
      category: "ModuleContent",
      decls: declCtxList.map((declCtx) => this.visitTopLevel(declCtx)),
    };

    // console.log(node)
    const result = this._addMeta(node, ctx);
    this.result = result;
    return result;
  }

  public visitTopLevel(ctx: MP.Top_level_declContext): any {
    const allChildren = ctx.children ?? [];
    if (allChildren === null || allChildren.length === 0) {
      return null;
    }

    const children = allChildren[0];
    if (children instanceof MP.Func_declartionContext) {
      return this.visitFuncDeclaration(children);
    }

    if (children instanceof MP.Class_declarationContext) {
      return this.visitClassDeclaration(children);
    }

    if (children instanceof MP.Impl_trait_declarationContext) {
      return this.visitImplTraitDeclaration(children);
    }

    if (children instanceof MP.Trait_declarationContext) {
      return this.visitTraitDeclaration(children);
    }

    if (children instanceof MP.Impl_declarationContext) {
      // throw new Error("no implementation for 'impl X { }'");
      this.errorListener.processError("no implementation for 'impl X { }'");
    }

    if (children instanceof MP.Impl_copyContext) {
      return this.visitImplCopy(children);
    }

    if (children instanceof MP.Local_moduleContext) {
      return this.visitLocalModule(children);
    }

    if (children instanceof MP.Input_func_declContext) {
      return this.visitInputFuncDecl(children);
    }

    if (children instanceof MP.Use_stmtContext) {
      return this.visitUseStmt(children);
    }

    this.errorListener.processError("Unsupported Top-Level Declaration");
    // throw new Error("Unsupported Top-Level Declaration");
  }

  public buildVariableDecl(name: string, type: AST.Expressible) {
    const node: AST.VariableDecl = {
      category: "VariableDecl",
      name,
      type,
    };
    return node;
  }

  public buildVariable(name: string, typeInfo: AST.Expressible | undefined) {
    const node: AST.Variable = {
      category: "Variable",
      name,
      typeInfo,
    };
    return node;
  }

  public visitField(ctx: MP.Field_declarationContext) {
    const name = this._toText(ctx.identifier());
    const typeAnnotation = this.visitTypeExpr(ctx._field_type);
    const node = this.buildVariableDecl(name, typeAnnotation);
    return this._addMeta(node, ctx);
  }

  public visitTypePara(ctx: MP.Type_paraContext) {
    const typeParas = ctx.type_expr_list() ? ctx.type_expr_list().map((x) => this.visitTypeExpr(x)) : [];
    const name = this._toText(ctx.type_name());
    const node: AST.TypePara = {
      category: "TypePara",
      name,
      traitList: typeParas,
    };
    return node;
  }

  public visitTypeParaList(ctx: MP.Type_para_listContext) {
    return ctx.type_para_list().map((x) => this.visitTypePara(x));
  }

  public visitExtendTarget(ctx: MP.Base_type_declarationContext) {
    const name = ctx.identifier() === null ? undefined : this._toText(ctx.identifier());
    const type = this.visitTypeExpr(ctx.type_expr());
    const node: AST.ExtendTarget = {
      category: "ExtendTarget",
      name,
      type,
    };
    return this._addMeta(node, ctx);
  }

  public visitClassDeclaration(ctx: MP.Class_declarationContext) {
    const name = this._toText(ctx._name);

    const typeParaList = ctx.type_para_list() ? this.visitTypeParaList(ctx.type_para_list()) : [];

    const fields = ctx.field_declaration_list() ? ctx.field_declaration_list()?.map((x) => this.visitField(x)) : [];

    const bases = ctx.base_type_declaration_list() ? ctx.base_type_declaration_list().map((x) => this.visitExtendTarget(x)) : [];

    let members: Array<AST.FunctionDecl> = new Array<AST.FunctionDecl>();
    if (ctx.func_declartion_list() !== undefined) {
      members = ctx.func_declartion_list() ? ctx.func_declartion_list().map((x) => this.visitFuncDeclaration(x)) : [];
    }

    const node: AST.ClassDecl = {
      category: "ClassDecl",
      name,
      typeParas: typeParaList,
      fields,
      bases,
      members,
    };
    return this._addMeta(node, ctx);
  }

  public visitImplDecl(traitTypeCtx: MP.Type_exprContext, classTypeCtx: MP.Type_exprContext, funcDecls: Array<MP.Func_declartionContext>) {
    const traitTypeExpr = this.visitTypeExpr(traitTypeCtx);
    const traitTypeLoc = this._loc(traitTypeCtx);
    const classTypeExpr = this.visitTypeExpr(classTypeCtx);
    const classTypeLoc = this._loc(classTypeCtx);

    let members = new Array<AST.FunctionDecl>();
    if (funcDecls !== undefined) {
      members = funcDecls.map((x) => this.visitFuncDeclaration(x));
    }

    const node: AST.ImplTraitDecl = {
      category: "ImplTraitDecl",
      traitType: traitTypeExpr,
      traitTypeLoc,
      classType: classTypeExpr,
      classTypeLoc,
      members,
    };
    return node;
  }

  public visitImplTraitDeclaration(ctx: MP.Impl_trait_declarationContext) {
    const node = this.visitImplDecl(ctx._trait_type_expr, ctx._class_type_expr, ctx.func_declartion_list());
    return this._addMeta(node, ctx);
  }

  public visitParameterDeclareList(ctx: MP.Parameter_declare_listContext) {
    return ctx.parameter_declare_list().map((x) => this.visitParameterDeclare(x));
  }

  public visitFuncSigDeclaration(ctx: MP.Func_sig_declContext) {
    const name = this._toText(ctx.identifier());
    const typeParaList = ctx.type_para_list() ? this.visitTypeParaList(ctx.type_para_list()) : [];

    const paraList = this.visitParameterDeclareList(ctx.parameter_declare_list());
    const returnTy = ctx._ret_type !== undefined ? this.visitTypeExpr(ctx._ret_type) : atomTypeRef;

    const node: AST.FunctionSignature = {
      category: "FunctionSignature",
      name,
      typeParas: typeParaList,
      paras: paraList,
      returnTy,
    };

    return this._addMeta(node, ctx);
  }

  public visitTraitDeclaration(ctx: MP.Trait_declarationContext) {
    const name = this._toText(ctx._name);
    const typeParaList = ctx.type_para_list() ? this.visitTypeParaList(ctx.type_para_list()) : [];

    const members = ctx.func_sig_decl_list() ? ctx.func_sig_decl_list().map((x) => this.visitFuncSigDeclaration(x)) : [];

    const node: AST.TraitDecl = {
      category: "TraitDecl",
      name,
      typeParas: typeParaList,
      members,
    };

    return this._addMeta(node, ctx);
  }

  public visitImplCopy(ctx: MP.Impl_copyContext) {
    const node = this.visitImplDecl(ctx._trait_type_expr, ctx._class_type_expr, []);
    return this._addMeta(node, ctx);
  }

  public visitLocalModule(ctx: MP.Local_moduleContext) {
    const moduleName = this._toText(ctx._name);
    const typeParaList = ctx.type_para_list() ? this.visitTypeParaList(ctx.type_para_list()) : [];
    const moduleContent = this.visitModuleContent(ctx.module_content());
    const node: AST.LocalModule = {
      category: "LocalModule",
      name: moduleName,
      typeParas: typeParaList,
      content: moduleContent,
    };
    return this._addMeta(node, ctx);
  }

  public visitUseStmt(ctx: MP.Use_stmtContext) {
    console.log("visitUseStmt", ctx);
    // if (ctx instanceof MP.ModuleAliasContext) {
    //     return this.visitModuleAliasUse(ctx);
    // } else if (ctx instanceof MP.EntityAliasContext) {
    //     return this.visitEntityAlias(ctx);
    // } else if (ctx instanceof MP.WildcardUseContext) {
    //     return this.visitWildcardUse(ctx);
    // } else {
    //     throw new Error(`Unknown use statement: ${ctx.getText()}`);
    // this.errorListener.processError(`Unknown use statement: ${ctx.getText()}`);
    // }
  }

  public visitModuleExprList(ctx: MP.Module_exprContext[]): AST.ModuleExpr[] {
    return ctx.map((it) => this.visitModuleExpr(it));
  }

  // public visitModuleAliasUse(ctx: MP.ModuleAliasContext) {
  //   let access = this.visitModuleExprList(ctx.module_expr_list());
  //   const alias = ctx._alias == null ? access[access.length - 1].base : this._toText(ctx._alias);

  //   const packageBuilder = new PackageBuilder(this.options, this.manager);
  //   access = packageBuilder.buildUseAccess(access, ctx._prefix.text);

  //   const node: AST.UseModuleAlias = {
  //     category: "UseModuleAlias",
  //     access: new AST.ModuleAccess(access),
  //     alias,
  //   };

  //   return this._addMeta(node, ctx);
  // }

  // public visitEntityAlias(ctx: MP.EntityAliasContext) {
  //   let access = this.visitModuleExprList(ctx.module_expr_list());
  //   const entityName = this._toText(ctx._entity);
  //   const alias = ctx._alias == null ? entityName : this._toText(ctx._alias);

  //   const newAccess = new Array<AST.ModuleExpr>();
  //   newAccess.push(...access);
  //   newAccess.push(AST.makeModuleExpr(entityName, []));

  //   const packageBuilder = new PackageBuilder(this.options, this.manager);
  //   access = packageBuilder.buildUseAccess(newAccess, ctx._prefix.text);

  //   const node: AST.UseModuleAlias = {
  //     category: "UseModuleAlias",
  //     access: new AST.ModuleAccess(access),
  //     alias,
  //   };
  //   return this._addMeta(node, ctx);
  // }

  // public visitWildcardUse(ctx: MP.WildcardUseContext) {
  //   let access = this.visitModuleExprList(ctx.module_expr_list());
  //   const newAccess = new Array<AST.ModuleExpr>();
  //   newAccess.push(...access);
  //   newAccess.push(AST.makeModuleExpr("*", []));

  //   const packageBuilder = new PackageBuilder(this.options, this.manager);
  //   access = packageBuilder.buildUseAccess(newAccess, ctx._prefix.text);
  //   access = access.slice(0, access.length - 1); // remove the last "*"

  //   const node: AST.UseWildcard = {
  //     category: "UseWildcard",
  //     access: new AST.ModuleAccess(access),
  //   };

  //   return this._addMeta(node, ctx);
  // }

  public visitInputFuncDecl(ctx: MP.Input_func_declContext) {
    const funcSig = this.visitFuncSigDeclaration(ctx.func_sig_decl());
    const ioAttribute = this.visitMetaInfo(ctx.outside_func_meta_info().meta_attrs(), funcSig.name);

    const node: AST.InputFunction = {
      category: "InputFunction",
      signature: funcSig,
      metaInfo: ioAttribute!,
    };
    return this._addMeta(node, ctx);
  }

  public visitFuncDeclaration(ctx: MP.Func_declartionContext): AST.FunctionDecl & WithMeta {
    const name = this._toText(ctx.identifier());
    const parameters = this.visitParameterDeclareList(ctx.parameter_declare_list());

    const returnTy = ctx._ret_type !== undefined ? this.visitTypeExpr(ctx._ret_type) : undefined;

    const body = this.visitFunctionBody(ctx.func_body());

    const ioAttributeOpt = ctx.meta_attrs() != null ? this.visitMetaInfo(ctx.meta_attrs(), name) : undefined;

    const node: AST.FunctionDecl = {
      category: "FunctionDecl",
      name,
      typeParas: [],
      paras: parameters,
      returnTy,
      body,
      query: ioAttributeOpt,
    };

    return this._addMeta(node, ctx);
  }

  public visitFunctionBody(
    ctx: MP.Func_bodyContext
    // funcName: string,
    // ExtendTargets: AST.ExtendTarget[]
  ): AST.FunctionBody {
    if (ctx?.expr_root() == undefined) {
      const body: AST.EmptyBody = {
        category: "EmptyBody",
      };
      return this._addMeta(body, ctx);
    }

    const expr = this.visitExpr(ctx?.expr_root().expr());
    const body: AST.NormalBody = {
      category: "NormalBody",
      expr,
    };
    return this._addMeta(body, ctx);
  }

  public visitExpr(ctx: MP.ExprContext): AST.Expression {
    if (ctx instanceof MP.PrimaryExprContext) {
      return this.visitPrimaryExpr(ctx);
    } else if (ctx instanceof MP.StaticInvokeExprContext) {
      return this.visitStaticInvokeExpr(ctx);
    } else if (ctx instanceof MP.MethodInvokeExprContext) {
      return this.visitMethodInvokeExpr(ctx);
    } else if (ctx instanceof MP.UnaryExprContext) {
      return this.visitUnaryExpr(ctx);
    } else if (ctx instanceof MP.ArithmeticExprContext) {
      return this.visitArithmeticExpr(ctx);
    } else if (ctx instanceof MP.CompareExprContext) {
      return this.visitCompareExpr(ctx);
    } else if (ctx instanceof MP.EqualExprContext) {
      return this.visitEqualExpr(ctx);
    } else if (ctx instanceof MP.AndExprContext) {
      return this.visitAndExpr(ctx);
    } else if (ctx instanceof MP.OrExprContext) {
      return this.visitOrExpr(ctx);
    } else if (ctx instanceof MP.LetExprContext) {
      return this.visitLetExpr(ctx);
    } else if (ctx instanceof MP.QuantifierExprContext) {
      return this.visitQuantifierExpr(ctx);
    } else if (ctx instanceof MP.CoerceExprContext) {
      return this.visitCoerceExpr(ctx);
    } else if (ctx instanceof MP.AttributeExprContext) {
      return this.visitAttributeExpr(ctx);
    } else if (ctx instanceof MP.IfElseExprContext) {
      return this.visitIfElseExpr(ctx);
    } else if (ctx instanceof MP.InstanceofExprContext) {
      return this.visitIsTypeExpr(ctx);
    } else if (ctx instanceof MP.AggregateExprContext) {
      return this.visitAggregateExpr(ctx);
    }

    this.errorListener.processError("Not implemented Expression");
  }

  public visitPrimary(ctx: MP.PrimaryContext) {
    let name;
    if (ctx instanceof MP.ParenExprContext) {
      return this.visitExpr(ctx.expr());
    } else if (ctx instanceof MP.ThisExprContext) {
      name = this._toText(ctx.SELF());
      const node: AST.Variable = this.buildVariable(name, undefined);
      return this._addMeta(node, ctx);
    } else if (ctx instanceof MP.IdentifierExprContext) {
      name = this._toText(ctx.identifier());
      const node: AST.Variable = this.buildVariable(name, undefined);
      return this._addMeta(node, ctx);
    } else if (ctx instanceof MP.LiteralExprContext) {
      return this.visitLiteralExpr(ctx);
    }

    this.errorListener.processError("Not implemented PrimaryExpr");
  }

  public visitPrimaryExpr(ctx: MP.PrimaryExprContext): any {
    return this.visitPrimary(ctx.primary());
  }

  public visitLiteral(ctx: MP.LiteralContext) {
    if (ctx instanceof MP.IntLiteralContext) {
      const value = parseInt(this._toText(ctx.INT()));
      const node: AST.IntLiteral = {
        category: "IntLiteral",
        value,
        typeInfo: undefined,
      };
      return this._addMeta(node, ctx);
    } else if (ctx instanceof MP.FloatLiteralContext) {
      const value = parseFloat(this._toText(ctx.FLOAT()));
      const node: AST.FloatLiteral = {
        category: "FloatLiteral",
        value,
        typeInfo: undefined,
      };
      return this._addMeta(node, ctx);
    } else if (ctx instanceof MP.StrLiteralContext) {
      const strValue = this._toText(ctx.STRING());
      const node: AST.StringLiteral = {
        category: "StringLiteral",
        value: strValue,
        typeInfo: undefined,
      };
      return this._addMeta(node, ctx);
    } else if (ctx instanceof MP.UnitLiteralContext) {
      const node: AST.UnitLiteral = {
        category: "UnitLiteral",
        typeInfo: undefined,
      };
      return this._addMeta(node, ctx);
    } else if (ctx instanceof MP.YesLiteralContext) {
      const yonNode: AST.YonLiteral = {
        category: "YonLiteral",
        bit: true,
        typeInfo: undefined,
      };
      return this._addMeta(yonNode, ctx);
    } else if (ctx instanceof MP.NoLiteralContext) {
      const yonNode: AST.YonLiteral = {
        category: "YonLiteral",
        bit: false,
        typeInfo: undefined,
      };
      return this._addMeta(yonNode, ctx);
    } else {
      this.errorListener.processError("Not implemented LiteralExpr");
    }
  }

  public visitLiteralExpr(ctx: MP.LiteralExprContext): any {
    return this.visitLiteral(ctx.literal());
  }

  public visitStaticInvokeExpr(ctx: MP.StaticInvokeExprContext) {
    const func = this.visitModuleLevelAccess(ctx._func);
    const args = this.visitExprList(ctx.args_list().expr_list());
    let typeArgs: AST.TypeArgument[];
    if (ctx.type_arg_list() != undefined) {
      typeArgs = this.visitTypeArgumentList(ctx.type_arg_list());
    } else {
      typeArgs = [];
    }

    const node: AST.FunctionCallExpr = {
      category: "FunctionCallExpr",
      func,
      typeArgs,
      args,
      typeInfo: undefined,
    };

    return this._addMeta(node, ctx);
  }

  public visitMethodInvokeExpr(ctx: MP.MethodInvokeExprContext) {
    const methodName = this._toText(ctx.identifier());
    const args = ctx.args_list() === null ? [] : this.visitExprList(ctx.args_list().expr_list());
    const typeArgs = this.visitTypeArgumentList(ctx.type_arg_list());
    const base = this.visitExpr(ctx.expr());
    const hint: AST.SimpleCall = {
      category: "SimpleCall",
    };

    const node: AST.MethodCallExpr = {
      category: "MethodCallExpr",
      base,
      hint,
      methodName,
      typeArgs,
      args,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitUnaryExpr(ctx: MP.UnaryExprContext) {
    let operator = undefined;
    if (ctx.MINUS != undefined) {
      operator = AST.UnaryOp.Negative;
    } else if (ctx.NOT != undefined) {
      operator = AST.UnaryOp.Not;
    } else {
      this.errorListener.processError("Unsupported Unary Operator");
    }

    const expr = this.visitExpr(ctx._base);
    const node: AST.UnaryExpr = {
      category: "UnaryExpr",
      op: operator as AST.UnaryOp,
      expr,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitExprList(ctx: MP.Expr_listContext) {
    if (ctx === undefined || ctx === null) {
      return [];
    }
    const result = ctx.expr_list() === null ? [] : ctx.expr_list().map((it) => this.visitExpr(it));
    return result;
  }

  public visitArithmeticExpr(ctx: MP.ArithmeticExprContext) {
    let operator = undefined;

    if (ctx.ADD() != undefined) {
      operator = AST.BinOp.Add;
    } else if (ctx.MINUS() != undefined) {
      operator = AST.BinOp.Minus;
    } else {
      this.errorListener.processError("Unsupported Arithmetic Operator");
    }

    const left = this.visitExpr(ctx._lhs);
    const right = this.visitExpr(ctx._rhs);

    const node: AST.BinOpExpr = {
      category: "BinOpExpr",
      op: operator,
      lhs: left,
      rhs: right,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitCompareExpr(ctx: MP.CompareExprContext) {
    let operator = undefined;
    switch (ctx._op.text) {
      case ">":
        operator = AST.BinOp.GreaterThan;
        break;
      case "<":
        operator = AST.BinOp.LessThan;
        break;
      case ">=":
        operator = AST.BinOp.GreaterThanEqual;
        break;
      case "<=":
        operator = AST.BinOp.LessThanEqual;
        break;
      default:
        this.errorListener.processError("Unsupported Compare Operator : " + ctx._op.text);
    }

    const left = this.visitExpr(ctx._lhs);
    const right = this.visitExpr(ctx._rhs);

    const node: AST.BinOpExpr = {
      category: "BinOpExpr",
      op: operator,
      lhs: left,
      rhs: right,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitEqualExpr(ctx: MP.EqualExprContext) {
    let operator = undefined;
    switch (ctx._op.text) {
      case "==":
        operator = AST.BinOp.Equal;
        break;
      case "!=":
        operator = AST.BinOp.NotEqual;
        break;
      default:
        this.errorListener.processError("Unsupported Equal Operator : " + ctx._op.text);
    }

    const left = this.visitExpr(ctx._lhs);
    const right = this.visitExpr(ctx._rhs);

    const node: AST.BinOpExpr = {
      category: "BinOpExpr",
      op: operator,
      lhs: left,
      rhs: right,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitAndExpr(ctx: MP.AndExprContext) {
    const left = this.visitExpr(ctx._lhs);
    const right = this.visitExpr(ctx._rhs);

    const node: AST.BinOpExpr = {
      category: "BinOpExpr",
      op: AST.BinOp.And,
      lhs: left,
      rhs: right,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitOrExpr(ctx: MP.OrExprContext) {
    const left = this.visitExpr(ctx._lhs);
    const right = this.visitExpr(ctx._rhs);

    const node: AST.BinOpExpr = {
      category: "BinOpExpr",
      op: AST.BinOp.Or,
      lhs: left,
      rhs: right,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitLetExpr(ctx: MP.LetExprContext) {
    const name = this._toText(ctx.identifier());
    const typeExpr = ctx.type_expr() == undefined ? undefined : this.visitTypeExpr(ctx.type_expr());
    const expr = ctx._e1 === undefined ? undefined : this.visitExpr(ctx._e1);
    const body = this.visitExpr(ctx._e2);
    const node: AST.LetExpr = {
      category: "LetExpr",
      name,
      annotation: typeExpr,
      exp: expr,
      body,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitModuleLevelAccess(ctx: MP.Module_level_accessContext) {
    const moduleExprs = ctx.module_expr_list() ?? [];
    const access = moduleExprs.map((it) => this.visitModuleExpr(it));
    const name = this._toText(ctx._name);
    const node: AST.ModuleLevelAccess = {
      category: "ModuleLevelAccess",
      access: new AST.ModuleAccess(access),
      name,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  private getQuantifier(token: Token): AST.QuantifierKind {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    return token.type == AST.QuantifierKind.FORALL ? AST.QuantifierKind.FORALL : AST.QuantifierKind.EXIST;
  }

  public visitQuantifierExpr(ctx: MP.QuantifierExprContext) {
    const quantifierExpr = ctx.quantifier_expr();
    if (quantifierExpr instanceof MP.ValueQuantifierContext) {
      return this.visitExprQuantifier(quantifierExpr);
    } else if (quantifierExpr instanceof MP.TypeQuantifierContext) {
      return this.visitTypeQuantifier(quantifierExpr);
    } else {
      this.errorListener.processError("Unsupported Quantifier Expression");
      return;
    }
  }

  public visitExprQuantifier(ctx: MP.ValueQuantifierContext) {
    const kind = this.getQuantifier(ctx._kind);
    const name = this._toText(ctx._name);
    const expr = this.visitExpr(ctx._bind);
    const body = this.visitExpr(ctx._body);
    const node: AST.ExprQuantifier = {
      category: "ExprQuantifier",
      kind,
      name,
      expr,
      body,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitTypeQuantifier(ctx: MP.TypeQuantifierContext) {
    const kind = this.getQuantifier(ctx._kind);
    const name = this._toText(ctx._name);
    const typeExpr = this.visitTypeExpr(ctx.type_expr());
    const body = this.visitExpr(ctx.expr());

    const node: AST.TypeQuantifier = {
      category: "TypeQuantifier",
      kind,
      name,
      typeExpr,
      body,
      typeInfo: undefined,
    };

    return this._addMeta(node, ctx);
  }

  public visitMetaInfo(ctx: MP.Meta_attrsContext, defaultSouffleName: string) {
    const attrs = new Map<string, string>();
    const attrDecls = new Array<string>();

    if (ctx == null) {
      return undefined;
    }
    if (ctx.meta_attr_list() != null) {
      ctx.meta_attr_list().forEach((it) => {
        if (it instanceof MP.NameAttributeContext) {
          const nameAttrCtx = it;
          const name = this._toText(nameAttrCtx._name);
          const value = this._toText(nameAttrCtx._value);
          attrs.set(name, value);
        } else if (it instanceof MP.StringAttributeContext) {
          const stringAttrCtx = it;
          const rawString = this._toText(stringAttrCtx.STRING());
          attrs.set(this._toText(stringAttrCtx._name), rawString.slice(1, rawString.length - 1));
        } else if (it instanceof MP.AttributeDeclContext) {
          const name = this._toText(it);
          if (!attrDecls.includes(name)) {
            attrDecls.push(name);
          }
        } else {
          this.errorListener.processError("Unsupported Meta Attribute");
        }
      });
    }

    attrs.set(AST.MetaInfo.IDKey, defaultSouffleName);
    if (attrDecls.includes(AST.MetaInfo.InputKey)) {
      attrs.set(AST.MetaInfo.IOKey, DefaultInputType);
    } else if (attrDecls.includes(AST.MetaInfo.OutputKey)) {
      attrs.set(AST.MetaInfo.IOKey, DefaultOutputType);
    }

    // if (attrs.has(AST.MetaInfo.DBKey)) {
    //     if (attrDecls.contains(AST.MetaInfo.InputKey)) {
    //         getInputDb().ifPresent(it -> attrs.put(MetaInfo.DBKey, it));
    //     }
    //     if (attrDecls.contains(AST.MetaInfo.OutputKey)) {
    //         getOutputDb().ifPresent(it -> attrs.put(MetaInfo.DBKey, it));
    //     }
    // }

    return new AST.MetaInfo(attrDecls, attrs);
  }

  public visitTypeExpr(ctx: MP.Type_exprContext): AST.Expressible | undefined {
    if (ctx instanceof MP.TypeNameContext) {
      const typeNameCtx = ctx;
      const moduleExprList = typeNameCtx.module_expr_list() ?? [];
      const access = moduleExprList.map((moduleExp) => this.visitModuleExpr(moduleExp)).filter(Boolean) as AST.ModuleExpr[];
      const node: AST.TypeRef = {
        category: "TypeRef",
        access: new AST.ModuleAccess(access),
        name: this._toText(typeNameCtx._name),
        typeArgs: [],
      };

      return this._addMeta(node, ctx);
    } else if (ctx instanceof MP.TypeApplyContext) {
      const typeApplyCtx = ctx;
      const moduleExprList = typeApplyCtx.module_expr_list() ?? [];
      const access = moduleExprList.map((moduleExp) => this.visitModuleExpr(moduleExp)).filter(Boolean);
      const name = this._toText(typeApplyCtx._name);
      const node: AST.TypeRef = {
        category: "TypeRef",
        access: new AST.ModuleAccess(access),
        name,
        typeArgs: this.visitTypeArgumentList(typeApplyCtx._type_args),
      };
      return this._addMeta(node, ctx);
    } else if (ctx instanceof MP.TypeFunctionContext) {
      const typeFunctionCtx = ctx;
      const parameterTypes = typeFunctionCtx
        .parameter_type_list()
        .type_expr_list()
        .map((it) => <AST.ParameterType>{ name: "", category: this.visitTypeExpr(it) });
      const returnTy = this.visitTypeExpr(typeFunctionCtx._ret_type);
      const funcNode: AST.FunctionType = {
        category: "FunctionType",
        parameterType: parameterTypes,
        returnType: returnTy,
      };
      return this._addMeta(funcNode, ctx);
    } else {
      this.errorListener.processError("Unsupported Type Expression");
      return;
    }
  }

  public visitModuleExpr(ctx: MP.Module_exprContext): AST.ModuleExpr | undefined {
    if (ctx instanceof MP.ModuleNameContext) {
      const moduleName = this._toText(ctx._name);
      const node: AST.ModuleExpr = AST.makeModuleExpr(moduleName, []);
      return this._addMeta(node, ctx);
    } else if (ctx instanceof MP.ModuleTypeApplyContext) {
      const moduleTypeApplyCtx = ctx;
      const base = this._toText(moduleTypeApplyCtx._name);
      const typeArgs = this.visitTypeArgumentList(moduleTypeApplyCtx._type_args);
      const node: AST.ModuleExpr = AST.makeModuleExpr(base, typeArgs);
      return this._addMeta(node, ctx);
    } else {
      this.errorListener.processError("Unsupported Module Expression");
      return;
    }
  }

  public visitTypeArgumentList(ctx: MP.Type_arg_listContext): AST.TypeArgument[] {
    if (ctx === null) {
      return [];
    }

    return ctx.type_expr_list().map((t) => this.visitTypeArgument(t));
  }

  public visitTypeArgument(ctx: MP.Type_exprContext) {
    const node: AST.BareTypeArgument = {
      category: "BareTypeArgument",
      content: this.visitTypeExpr(ctx),
    };

    return this._addMeta(node, ctx);
  }

  public visitCoerceExpr(ctx: MP.CoerceExprContext) {
    const base = this.visitExpr(ctx._base);
    const targetType = this.visitTypeExpr(ctx.type_expr());
    const node: AST.CoerceExpr = {
      category: "CoerceExpr",
      base,
      targetType,
      typeInfo: undefined,
    };
    return this._addMeta(node, ctx);
  }

  public visitAttributeExpr(ctx: MP.AttributeExprContext) {
    const base = this.visitExpr(ctx._base);

    const attr = this._toText(ctx.identifier());
    const node: AST.AttributeExpr = {
      category: "AttributeExpr",
      base,
      attr,
      typeInfo: undefined,
    };

    return this._addMeta(node, ctx);
  }

  public visitIfElseExpr(ctx: MP.IfElseExprContext) {
    const cond = this.visitExpr(ctx._cond);
    const whenTrue = this.visitExpr(ctx._b1.expr());
    const whenFalse = ctx._b2 !== undefined ? this.visitExpr(ctx._b2.expr()) : undefined;

    const node: AST.IfElseExpr = {
      category: "IfElseExpr",
      cond,
      whenTrue,
      whenFalse,
      typeInfo: undefined,
    };

    return this._addMeta(node, ctx);
  }

  public visitIsTypeExpr(ctx: MP.InstanceofExprContext) {
    const base = this.visitExpr(ctx.expr());
    const targetType = this.visitTypeExpr(ctx.type_expr());

    const node: AST.IsTypeExpr = {
      category: "IsTypeExpr",
      base,
      type: targetType,
      typeInfo: undefined,
    };

    return this._addMeta(node, ctx);
  }

  public getAggregate(token: Token): AST.AggregateKind {
    switch (token.type) {
      case MirrorQLParser.COUNT:
        return AST.AggregateKind.Count;
      case MirrorQLParser.MAX:
        return AST.AggregateKind.Max;
      case MirrorQLParser.MIN:
        return AST.AggregateKind.Min;
      default:
        this.errorListener.processError("Unsupported aggregate function: " + token.text);
    }
  }

  public visitParameterDeclare(ctx: MP.Parameter_declareContext) {
    const name = this._toText(ctx.identifier());
    const type = this.visitTypeExpr(ctx.type_expr());
    const node: AST.VariableDecl = this.buildVariableDecl(name, type);
    return this._addMeta(node, ctx);
  }

  public visitAggregateExpr(ctx: MP.AggregateExprContext) {
    const aggregateCtx = ctx.aggregate_expr();
    const kind = this.getAggregate(aggregateCtx._kind);
    const variables: AST.VariableDecl[] = new Array<AST.VariableDecl>();
    aggregateCtx.parameter_declare_list().forEach((it) => {
      const variable = this.visitParameterDeclare(it);
      variables.push(variable);
    });
    const body = this.visitExpr(aggregateCtx._body);
    const node: AST.AggregateExpr = {
      category: "AggregateExpr",
      kind,
      variables,
      body,
    };
    return this._addMeta(node, ctx);
  }

  private _loc(ctx: ParserRuleContext): AST.Location {
    const endLine = ctx?.stop ? ctx.stop.line : ctx?.start.line;
    const endColumn = ctx?.stop ? ctx.stop.column : ctx?.start.column;

    return {
      start: {
        line: ctx?.start.line,
        column: ctx?.start.column,
      },
      end: {
        line: endLine,
        column: endColumn,
      },
    };
  }

  _range(ctx: ParserRuleContext): [number, number] {
    return [ctx?.start.start, ctx?.stop?.stop ?? ctx?.start.start];
  }

  private _addMeta<T extends AST.BaseASTNode>(node: T, ctx: ParserRuleContext): T & WithMeta {
    const nodeWithMeta: AST.BaseASTNode = {
      category: node.category,
    };

    if (this.options.loc === true) {
      node.loc = this._loc(ctx);
    }
    if (this.options.range === true) {
      node.range = this._range(ctx);
    }

    return {
      ...nodeWithMeta,
      ...node,
    } as T & WithMeta;
  }

  private _toText(ctx: ParserRuleContext | ParseTree): string {
    const text = ctx.getText();
    if (text === undefined || text === null) {
      this.errorListener.processError("Assertion error: text should never be undefined");
    }

    return text;
  }
}
