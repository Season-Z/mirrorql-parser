// Generated from antlr/MirrorQL.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { Variable_declareContext } from "./MirrorQLParser";
import { Variable_declare_listContext } from "./MirrorQLParser";
import { IdentifierContext } from "./MirrorQLParser";
import { Module_identifierContext } from "./MirrorQLParser";
import { ModuleNameContext } from "./MirrorQLParser";
import { ModuleTypeApplyContext } from "./MirrorQLParser";
import { Type_nameContext } from "./MirrorQLParser";
import { Type_arg_listContext } from "./MirrorQLParser";
import { Type_paraContext } from "./MirrorQLParser";
import { Type_para_listContext } from "./MirrorQLParser";
import { TypeNameContext } from "./MirrorQLParser";
import { TypeApplyContext } from "./MirrorQLParser";
import { TypeFunctionContext } from "./MirrorQLParser";
import { Parameter_type_listContext } from "./MirrorQLParser";
import { ModuleAliasContext } from "./MirrorQLParser";
import { EntityAliasContext } from "./MirrorQLParser";
import { WildcardUseContext } from "./MirrorQLParser";
import { Parameter_declareContext } from "./MirrorQLParser";
import { Parameter_declare_listContext } from "./MirrorQLParser";
import { Func_bodyContext } from "./MirrorQLParser";
import { AttributeDeclContext } from "./MirrorQLParser";
import { NameAttributeContext } from "./MirrorQLParser";
import { StringAttributeContext } from "./MirrorQLParser";
import { Meta_attrsContext } from "./MirrorQLParser";
import { Func_declartionContext } from "./MirrorQLParser";
import { Func_sig_declContext } from "./MirrorQLParser";
import { Field_declarationContext } from "./MirrorQLParser";
import { Base_type_declarationContext } from "./MirrorQLParser";
import { Class_declarationContext } from "./MirrorQLParser";
import { Trait_declarationContext } from "./MirrorQLParser";
import { Impl_trait_declarationContext } from "./MirrorQLParser";
import { Impl_declarationContext } from "./MirrorQLParser";
import { Impl_copyContext } from "./MirrorQLParser";
import { IntLiteralContext } from "./MirrorQLParser";
import { FloatLiteralContext } from "./MirrorQLParser";
import { StrLiteralContext } from "./MirrorQLParser";
import { UnitLiteralContext } from "./MirrorQLParser";
import { YesLiteralContext } from "./MirrorQLParser";
import { NoLiteralContext } from "./MirrorQLParser";
import { ValueQuantifierContext } from "./MirrorQLParser";
import { TypeQuantifierContext } from "./MirrorQLParser";
import { Aggregate_exprContext } from "./MirrorQLParser";
import { BlockContext } from "./MirrorQLParser";
import { CoerceExprContext } from "./MirrorQLParser";
import { InstanceofExprContext } from "./MirrorQLParser";
import { IfElseExprContext } from "./MirrorQLParser";
import { OrExprContext } from "./MirrorQLParser";
import { AttributeExprContext } from "./MirrorQLParser";
import { LetExprContext } from "./MirrorQLParser";
import { MethodInvokeExprContext } from "./MirrorQLParser";
import { UnaryExprContext } from "./MirrorQLParser";
import { PrimaryExprContext } from "./MirrorQLParser";
import { SelectExprContext } from "./MirrorQLParser";
import { QuantifierExprContext } from "./MirrorQLParser";
import { AggregateExprContext } from "./MirrorQLParser";
import { ArithmeticExprContext } from "./MirrorQLParser";
import { StaticInvokeExprContext } from "./MirrorQLParser";
import { CompareExprContext } from "./MirrorQLParser";
import { EqualExprContext } from "./MirrorQLParser";
import { AndExprContext } from "./MirrorQLParser";
import { Module_level_accessContext } from "./MirrorQLParser";
import { ParenExprContext } from "./MirrorQLParser";
import { ThisExprContext } from "./MirrorQLParser";
import { LiteralExprContext } from "./MirrorQLParser";
import { IdentifierExprContext } from "./MirrorQLParser";
import { Expr_listContext } from "./MirrorQLParser";
import { Args_listContext } from "./MirrorQLParser";
import { Select_exprContext } from "./MirrorQLParser";
import { Expr_rootContext } from "./MirrorQLParser";
import { Outside_func_meta_infoContext } from "./MirrorQLParser";
import { Input_func_declContext } from "./MirrorQLParser";
import { Top_level_declContext } from "./MirrorQLParser";
import { Module_contentContext } from "./MirrorQLParser";
import { Local_moduleContext } from "./MirrorQLParser";
import { Mql_fileContext } from "./MirrorQLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MirrorQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MirrorQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MirrorQLParser.variable_declare`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_declare?: (ctx: Variable_declareContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.variable_declare_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_declare_list?: (ctx: Variable_declare_listContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.module_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_identifier?: (ctx: Module_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `moduleName`
	 * labeled alternative in `MirrorQLParser.module_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleName?: (ctx: ModuleNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `moduleTypeApply`
	 * labeled alternative in `MirrorQLParser.module_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleTypeApply?: (ctx: ModuleTypeApplyContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.type_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_name?: (ctx: Type_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.type_arg_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_arg_list?: (ctx: Type_arg_listContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.type_para`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_para?: (ctx: Type_paraContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.type_para_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_para_list?: (ctx: Type_para_listContext) => Result;
	/**
	 * Visit a parse tree produced by the `typeName`
	 * labeled alternative in `MirrorQLParser.type_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `typeApply`
	 * labeled alternative in `MirrorQLParser.type_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeApply?: (ctx: TypeApplyContext) => Result;
	/**
	 * Visit a parse tree produced by the `typeFunction`
	 * labeled alternative in `MirrorQLParser.type_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFunction?: (ctx: TypeFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.parameter_type_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_type_list?: (ctx: Parameter_type_listContext) => Result;
	/**
	 * Visit a parse tree produced by the `moduleAlias`
	 * labeled alternative in `MirrorQLParser.use_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleAlias?: (ctx: ModuleAliasContext) => Result;
	/**
	 * Visit a parse tree produced by the `entityAlias`
	 * labeled alternative in `MirrorQLParser.use_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityAlias?: (ctx: EntityAliasContext) => Result;
	/**
	 * Visit a parse tree produced by the `wildcardUse`
	 * labeled alternative in `MirrorQLParser.use_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcardUse?: (ctx: WildcardUseContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.parameter_declare`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_declare?: (ctx: Parameter_declareContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.parameter_declare_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_declare_list?: (ctx: Parameter_declare_listContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.func_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_body?: (ctx: Func_bodyContext) => Result;
	/**
	 * Visit a parse tree produced by the `attributeDecl`
	 * labeled alternative in `MirrorQLParser.meta_attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeDecl?: (ctx: AttributeDeclContext) => Result;
	/**
	 * Visit a parse tree produced by the `nameAttribute`
	 * labeled alternative in `MirrorQLParser.meta_attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameAttribute?: (ctx: NameAttributeContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringAttribute`
	 * labeled alternative in `MirrorQLParser.meta_attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringAttribute?: (ctx: StringAttributeContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.meta_attrs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeta_attrs?: (ctx: Meta_attrsContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.func_declartion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_declartion?: (ctx: Func_declartionContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.func_sig_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_sig_decl?: (ctx: Func_sig_declContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.field_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_declaration?: (ctx: Field_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.base_type_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBase_type_declaration?: (ctx: Base_type_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.class_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_declaration?: (ctx: Class_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.trait_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrait_declaration?: (ctx: Trait_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.impl_trait_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImpl_trait_declaration?: (ctx: Impl_trait_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.impl_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImpl_declaration?: (ctx: Impl_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.impl_copy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImpl_copy?: (ctx: Impl_copyContext) => Result;
	/**
	 * Visit a parse tree produced by the `intLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntLiteral?: (ctx: IntLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `floatLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `strLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrLiteral?: (ctx: StrLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `unitLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitLiteral?: (ctx: UnitLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `yesLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYesLiteral?: (ctx: YesLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `noLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoLiteral?: (ctx: NoLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `valueQuantifier`
	 * labeled alternative in `MirrorQLParser.quantifier_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueQuantifier?: (ctx: ValueQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `typeQuantifier`
	 * labeled alternative in `MirrorQLParser.quantifier_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeQuantifier?: (ctx: TypeQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.aggregate_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_expr?: (ctx: Aggregate_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by the `coerceExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoerceExpr?: (ctx: CoerceExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `instanceofExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceofExpr?: (ctx: InstanceofExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `ifElseExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseExpr?: (ctx: IfElseExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `orExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `attributeExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeExpr?: (ctx: AttributeExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `letExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetExpr?: (ctx: LetExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `methodInvokeExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvokeExpr?: (ctx: MethodInvokeExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `primaryExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpr?: (ctx: SelectExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `quantifierExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifierExpr?: (ctx: QuantifierExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `aggregateExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateExpr?: (ctx: AggregateExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpr?: (ctx: ArithmeticExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `staticInvokeExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticInvokeExpr?: (ctx: StaticInvokeExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `compareExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareExpr?: (ctx: CompareExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `equalExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualExpr?: (ctx: EqualExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `andExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.module_level_access`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_level_access?: (ctx: Module_level_accessContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `thisExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpr?: (ctx: ThisExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `literalExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `identifierExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpr?: (ctx: IdentifierExprContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.expr_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_list?: (ctx: Expr_listContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.args_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs_list?: (ctx: Args_listContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.select_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_expr?: (ctx: Select_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.expr_root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_root?: (ctx: Expr_rootContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.outside_func_meta_info`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutside_func_meta_info?: (ctx: Outside_func_meta_infoContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.input_func_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_func_decl?: (ctx: Input_func_declContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.top_level_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_level_decl?: (ctx: Top_level_declContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.module_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_content?: (ctx: Module_contentContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.local_module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_module?: (ctx: Local_moduleContext) => Result;
	/**
	 * Visit a parse tree produced by `MirrorQLParser.mql_file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMql_file?: (ctx: Mql_fileContext) => Result;
}

