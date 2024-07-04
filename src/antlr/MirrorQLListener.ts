// Generated from antlr/MirrorQL.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `MirrorQLParser`.
 */
export default class MirrorQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MirrorQLParser.variable_declare`.
	 * @param ctx the parse tree
	 */
	enterVariable_declare?: (ctx: Variable_declareContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.variable_declare`.
	 * @param ctx the parse tree
	 */
	exitVariable_declare?: (ctx: Variable_declareContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.variable_declare_list`.
	 * @param ctx the parse tree
	 */
	enterVariable_declare_list?: (ctx: Variable_declare_listContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.variable_declare_list`.
	 * @param ctx the parse tree
	 */
	exitVariable_declare_list?: (ctx: Variable_declare_listContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.module_identifier`.
	 * @param ctx the parse tree
	 */
	enterModule_identifier?: (ctx: Module_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.module_identifier`.
	 * @param ctx the parse tree
	 */
	exitModule_identifier?: (ctx: Module_identifierContext) => void;
	/**
	 * Enter a parse tree produced by the `moduleName`
	 * labeled alternative in `MirrorQLParser.module_expr`.
	 * @param ctx the parse tree
	 */
	enterModuleName?: (ctx: ModuleNameContext) => void;
	/**
	 * Exit a parse tree produced by the `moduleName`
	 * labeled alternative in `MirrorQLParser.module_expr`.
	 * @param ctx the parse tree
	 */
	exitModuleName?: (ctx: ModuleNameContext) => void;
	/**
	 * Enter a parse tree produced by the `moduleTypeApply`
	 * labeled alternative in `MirrorQLParser.module_expr`.
	 * @param ctx the parse tree
	 */
	enterModuleTypeApply?: (ctx: ModuleTypeApplyContext) => void;
	/**
	 * Exit a parse tree produced by the `moduleTypeApply`
	 * labeled alternative in `MirrorQLParser.module_expr`.
	 * @param ctx the parse tree
	 */
	exitModuleTypeApply?: (ctx: ModuleTypeApplyContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.type_name`.
	 * @param ctx the parse tree
	 */
	enterType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.type_name`.
	 * @param ctx the parse tree
	 */
	exitType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.type_arg_list`.
	 * @param ctx the parse tree
	 */
	enterType_arg_list?: (ctx: Type_arg_listContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.type_arg_list`.
	 * @param ctx the parse tree
	 */
	exitType_arg_list?: (ctx: Type_arg_listContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.type_para`.
	 * @param ctx the parse tree
	 */
	enterType_para?: (ctx: Type_paraContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.type_para`.
	 * @param ctx the parse tree
	 */
	exitType_para?: (ctx: Type_paraContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.type_para_list`.
	 * @param ctx the parse tree
	 */
	enterType_para_list?: (ctx: Type_para_listContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.type_para_list`.
	 * @param ctx the parse tree
	 */
	exitType_para_list?: (ctx: Type_para_listContext) => void;
	/**
	 * Enter a parse tree produced by the `typeName`
	 * labeled alternative in `MirrorQLParser.type_expr`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by the `typeName`
	 * labeled alternative in `MirrorQLParser.type_expr`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Enter a parse tree produced by the `typeApply`
	 * labeled alternative in `MirrorQLParser.type_expr`.
	 * @param ctx the parse tree
	 */
	enterTypeApply?: (ctx: TypeApplyContext) => void;
	/**
	 * Exit a parse tree produced by the `typeApply`
	 * labeled alternative in `MirrorQLParser.type_expr`.
	 * @param ctx the parse tree
	 */
	exitTypeApply?: (ctx: TypeApplyContext) => void;
	/**
	 * Enter a parse tree produced by the `typeFunction`
	 * labeled alternative in `MirrorQLParser.type_expr`.
	 * @param ctx the parse tree
	 */
	enterTypeFunction?: (ctx: TypeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `typeFunction`
	 * labeled alternative in `MirrorQLParser.type_expr`.
	 * @param ctx the parse tree
	 */
	exitTypeFunction?: (ctx: TypeFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.parameter_type_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_type_list?: (ctx: Parameter_type_listContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.parameter_type_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_type_list?: (ctx: Parameter_type_listContext) => void;
	/**
	 * Enter a parse tree produced by the `moduleAlias`
	 * labeled alternative in `MirrorQLParser.use_stmt`.
	 * @param ctx the parse tree
	 */
	enterModuleAlias?: (ctx: ModuleAliasContext) => void;
	/**
	 * Exit a parse tree produced by the `moduleAlias`
	 * labeled alternative in `MirrorQLParser.use_stmt`.
	 * @param ctx the parse tree
	 */
	exitModuleAlias?: (ctx: ModuleAliasContext) => void;
	/**
	 * Enter a parse tree produced by the `entityAlias`
	 * labeled alternative in `MirrorQLParser.use_stmt`.
	 * @param ctx the parse tree
	 */
	enterEntityAlias?: (ctx: EntityAliasContext) => void;
	/**
	 * Exit a parse tree produced by the `entityAlias`
	 * labeled alternative in `MirrorQLParser.use_stmt`.
	 * @param ctx the parse tree
	 */
	exitEntityAlias?: (ctx: EntityAliasContext) => void;
	/**
	 * Enter a parse tree produced by the `wildcardUse`
	 * labeled alternative in `MirrorQLParser.use_stmt`.
	 * @param ctx the parse tree
	 */
	enterWildcardUse?: (ctx: WildcardUseContext) => void;
	/**
	 * Exit a parse tree produced by the `wildcardUse`
	 * labeled alternative in `MirrorQLParser.use_stmt`.
	 * @param ctx the parse tree
	 */
	exitWildcardUse?: (ctx: WildcardUseContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.parameter_declare`.
	 * @param ctx the parse tree
	 */
	enterParameter_declare?: (ctx: Parameter_declareContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.parameter_declare`.
	 * @param ctx the parse tree
	 */
	exitParameter_declare?: (ctx: Parameter_declareContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.parameter_declare_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_declare_list?: (ctx: Parameter_declare_listContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.parameter_declare_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_declare_list?: (ctx: Parameter_declare_listContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.func_body`.
	 * @param ctx the parse tree
	 */
	enterFunc_body?: (ctx: Func_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.func_body`.
	 * @param ctx the parse tree
	 */
	exitFunc_body?: (ctx: Func_bodyContext) => void;
	/**
	 * Enter a parse tree produced by the `attributeDecl`
	 * labeled alternative in `MirrorQLParser.meta_attr`.
	 * @param ctx the parse tree
	 */
	enterAttributeDecl?: (ctx: AttributeDeclContext) => void;
	/**
	 * Exit a parse tree produced by the `attributeDecl`
	 * labeled alternative in `MirrorQLParser.meta_attr`.
	 * @param ctx the parse tree
	 */
	exitAttributeDecl?: (ctx: AttributeDeclContext) => void;
	/**
	 * Enter a parse tree produced by the `nameAttribute`
	 * labeled alternative in `MirrorQLParser.meta_attr`.
	 * @param ctx the parse tree
	 */
	enterNameAttribute?: (ctx: NameAttributeContext) => void;
	/**
	 * Exit a parse tree produced by the `nameAttribute`
	 * labeled alternative in `MirrorQLParser.meta_attr`.
	 * @param ctx the parse tree
	 */
	exitNameAttribute?: (ctx: NameAttributeContext) => void;
	/**
	 * Enter a parse tree produced by the `stringAttribute`
	 * labeled alternative in `MirrorQLParser.meta_attr`.
	 * @param ctx the parse tree
	 */
	enterStringAttribute?: (ctx: StringAttributeContext) => void;
	/**
	 * Exit a parse tree produced by the `stringAttribute`
	 * labeled alternative in `MirrorQLParser.meta_attr`.
	 * @param ctx the parse tree
	 */
	exitStringAttribute?: (ctx: StringAttributeContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.meta_attrs`.
	 * @param ctx the parse tree
	 */
	enterMeta_attrs?: (ctx: Meta_attrsContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.meta_attrs`.
	 * @param ctx the parse tree
	 */
	exitMeta_attrs?: (ctx: Meta_attrsContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.func_declartion`.
	 * @param ctx the parse tree
	 */
	enterFunc_declartion?: (ctx: Func_declartionContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.func_declartion`.
	 * @param ctx the parse tree
	 */
	exitFunc_declartion?: (ctx: Func_declartionContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.func_sig_decl`.
	 * @param ctx the parse tree
	 */
	enterFunc_sig_decl?: (ctx: Func_sig_declContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.func_sig_decl`.
	 * @param ctx the parse tree
	 */
	exitFunc_sig_decl?: (ctx: Func_sig_declContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.field_declaration`.
	 * @param ctx the parse tree
	 */
	enterField_declaration?: (ctx: Field_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.field_declaration`.
	 * @param ctx the parse tree
	 */
	exitField_declaration?: (ctx: Field_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.base_type_declaration`.
	 * @param ctx the parse tree
	 */
	enterBase_type_declaration?: (ctx: Base_type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.base_type_declaration`.
	 * @param ctx the parse tree
	 */
	exitBase_type_declaration?: (ctx: Base_type_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.class_declaration`.
	 * @param ctx the parse tree
	 */
	enterClass_declaration?: (ctx: Class_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.class_declaration`.
	 * @param ctx the parse tree
	 */
	exitClass_declaration?: (ctx: Class_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.trait_declaration`.
	 * @param ctx the parse tree
	 */
	enterTrait_declaration?: (ctx: Trait_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.trait_declaration`.
	 * @param ctx the parse tree
	 */
	exitTrait_declaration?: (ctx: Trait_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.impl_trait_declaration`.
	 * @param ctx the parse tree
	 */
	enterImpl_trait_declaration?: (ctx: Impl_trait_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.impl_trait_declaration`.
	 * @param ctx the parse tree
	 */
	exitImpl_trait_declaration?: (ctx: Impl_trait_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.impl_declaration`.
	 * @param ctx the parse tree
	 */
	enterImpl_declaration?: (ctx: Impl_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.impl_declaration`.
	 * @param ctx the parse tree
	 */
	exitImpl_declaration?: (ctx: Impl_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.impl_copy`.
	 * @param ctx the parse tree
	 */
	enterImpl_copy?: (ctx: Impl_copyContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.impl_copy`.
	 * @param ctx the parse tree
	 */
	exitImpl_copy?: (ctx: Impl_copyContext) => void;
	/**
	 * Enter a parse tree produced by the `intLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterIntLiteral?: (ctx: IntLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `intLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitIntLiteral?: (ctx: IntLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `floatLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `floatLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `strLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStrLiteral?: (ctx: StrLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `strLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStrLiteral?: (ctx: StrLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `unitLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterUnitLiteral?: (ctx: UnitLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `unitLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitUnitLiteral?: (ctx: UnitLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `yesLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterYesLiteral?: (ctx: YesLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `yesLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitYesLiteral?: (ctx: YesLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `noLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNoLiteral?: (ctx: NoLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `noLiteral`
	 * labeled alternative in `MirrorQLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNoLiteral?: (ctx: NoLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `valueQuantifier`
	 * labeled alternative in `MirrorQLParser.quantifier_expr`.
	 * @param ctx the parse tree
	 */
	enterValueQuantifier?: (ctx: ValueQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `valueQuantifier`
	 * labeled alternative in `MirrorQLParser.quantifier_expr`.
	 * @param ctx the parse tree
	 */
	exitValueQuantifier?: (ctx: ValueQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by the `typeQuantifier`
	 * labeled alternative in `MirrorQLParser.quantifier_expr`.
	 * @param ctx the parse tree
	 */
	enterTypeQuantifier?: (ctx: TypeQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `typeQuantifier`
	 * labeled alternative in `MirrorQLParser.quantifier_expr`.
	 * @param ctx the parse tree
	 */
	exitTypeQuantifier?: (ctx: TypeQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.aggregate_expr`.
	 * @param ctx the parse tree
	 */
	enterAggregate_expr?: (ctx: Aggregate_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.aggregate_expr`.
	 * @param ctx the parse tree
	 */
	exitAggregate_expr?: (ctx: Aggregate_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by the `coerceExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCoerceExpr?: (ctx: CoerceExprContext) => void;
	/**
	 * Exit a parse tree produced by the `coerceExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCoerceExpr?: (ctx: CoerceExprContext) => void;
	/**
	 * Enter a parse tree produced by the `instanceofExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInstanceofExpr?: (ctx: InstanceofExprContext) => void;
	/**
	 * Exit a parse tree produced by the `instanceofExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInstanceofExpr?: (ctx: InstanceofExprContext) => void;
	/**
	 * Enter a parse tree produced by the `ifElseExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIfElseExpr?: (ctx: IfElseExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ifElseExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIfElseExpr?: (ctx: IfElseExprContext) => void;
	/**
	 * Enter a parse tree produced by the `orExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `orExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Enter a parse tree produced by the `attributeExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAttributeExpr?: (ctx: AttributeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `attributeExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAttributeExpr?: (ctx: AttributeExprContext) => void;
	/**
	 * Enter a parse tree produced by the `letExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLetExpr?: (ctx: LetExprContext) => void;
	/**
	 * Exit a parse tree produced by the `letExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLetExpr?: (ctx: LetExprContext) => void;
	/**
	 * Enter a parse tree produced by the `methodInvokeExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMethodInvokeExpr?: (ctx: MethodInvokeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `methodInvokeExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMethodInvokeExpr?: (ctx: MethodInvokeExprContext) => void;
	/**
	 * Enter a parse tree produced by the `unaryExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Enter a parse tree produced by the `primaryExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Enter a parse tree produced by the `selectExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSelectExpr?: (ctx: SelectExprContext) => void;
	/**
	 * Exit a parse tree produced by the `selectExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSelectExpr?: (ctx: SelectExprContext) => void;
	/**
	 * Enter a parse tree produced by the `quantifierExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterQuantifierExpr?: (ctx: QuantifierExprContext) => void;
	/**
	 * Exit a parse tree produced by the `quantifierExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitQuantifierExpr?: (ctx: QuantifierExprContext) => void;
	/**
	 * Enter a parse tree produced by the `aggregateExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAggregateExpr?: (ctx: AggregateExprContext) => void;
	/**
	 * Exit a parse tree produced by the `aggregateExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAggregateExpr?: (ctx: AggregateExprContext) => void;
	/**
	 * Enter a parse tree produced by the `arithmeticExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterArithmeticExpr?: (ctx: ArithmeticExprContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitArithmeticExpr?: (ctx: ArithmeticExprContext) => void;
	/**
	 * Enter a parse tree produced by the `staticInvokeExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterStaticInvokeExpr?: (ctx: StaticInvokeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `staticInvokeExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitStaticInvokeExpr?: (ctx: StaticInvokeExprContext) => void;
	/**
	 * Enter a parse tree produced by the `compareExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCompareExpr?: (ctx: CompareExprContext) => void;
	/**
	 * Exit a parse tree produced by the `compareExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCompareExpr?: (ctx: CompareExprContext) => void;
	/**
	 * Enter a parse tree produced by the `equalExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterEqualExpr?: (ctx: EqualExprContext) => void;
	/**
	 * Exit a parse tree produced by the `equalExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitEqualExpr?: (ctx: EqualExprContext) => void;
	/**
	 * Enter a parse tree produced by the `andExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `andExpr`
	 * labeled alternative in `MirrorQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.module_level_access`.
	 * @param ctx the parse tree
	 */
	enterModule_level_access?: (ctx: Module_level_accessContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.module_level_access`.
	 * @param ctx the parse tree
	 */
	exitModule_level_access?: (ctx: Module_level_accessContext) => void;
	/**
	 * Enter a parse tree produced by the `parenExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 */
	enterParenExpr?: (ctx: ParenExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parenExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 */
	exitParenExpr?: (ctx: ParenExprContext) => void;
	/**
	 * Enter a parse tree produced by the `thisExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 */
	enterThisExpr?: (ctx: ThisExprContext) => void;
	/**
	 * Exit a parse tree produced by the `thisExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 */
	exitThisExpr?: (ctx: ThisExprContext) => void;
	/**
	 * Enter a parse tree produced by the `literalExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Enter a parse tree produced by the `identifierExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpr?: (ctx: IdentifierExprContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpr`
	 * labeled alternative in `MirrorQLParser.primary`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpr?: (ctx: IdentifierExprContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.expr_list`.
	 * @param ctx the parse tree
	 */
	enterExpr_list?: (ctx: Expr_listContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.expr_list`.
	 * @param ctx the parse tree
	 */
	exitExpr_list?: (ctx: Expr_listContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.args_list`.
	 * @param ctx the parse tree
	 */
	enterArgs_list?: (ctx: Args_listContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.args_list`.
	 * @param ctx the parse tree
	 */
	exitArgs_list?: (ctx: Args_listContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.select_expr`.
	 * @param ctx the parse tree
	 */
	enterSelect_expr?: (ctx: Select_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.select_expr`.
	 * @param ctx the parse tree
	 */
	exitSelect_expr?: (ctx: Select_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.expr_root`.
	 * @param ctx the parse tree
	 */
	enterExpr_root?: (ctx: Expr_rootContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.expr_root`.
	 * @param ctx the parse tree
	 */
	exitExpr_root?: (ctx: Expr_rootContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.outside_func_meta_info`.
	 * @param ctx the parse tree
	 */
	enterOutside_func_meta_info?: (ctx: Outside_func_meta_infoContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.outside_func_meta_info`.
	 * @param ctx the parse tree
	 */
	exitOutside_func_meta_info?: (ctx: Outside_func_meta_infoContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.input_func_decl`.
	 * @param ctx the parse tree
	 */
	enterInput_func_decl?: (ctx: Input_func_declContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.input_func_decl`.
	 * @param ctx the parse tree
	 */
	exitInput_func_decl?: (ctx: Input_func_declContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.top_level_decl`.
	 * @param ctx the parse tree
	 */
	enterTop_level_decl?: (ctx: Top_level_declContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.top_level_decl`.
	 * @param ctx the parse tree
	 */
	exitTop_level_decl?: (ctx: Top_level_declContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.module_content`.
	 * @param ctx the parse tree
	 */
	enterModule_content?: (ctx: Module_contentContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.module_content`.
	 * @param ctx the parse tree
	 */
	exitModule_content?: (ctx: Module_contentContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.local_module`.
	 * @param ctx the parse tree
	 */
	enterLocal_module?: (ctx: Local_moduleContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.local_module`.
	 * @param ctx the parse tree
	 */
	exitLocal_module?: (ctx: Local_moduleContext) => void;
	/**
	 * Enter a parse tree produced by `MirrorQLParser.mql_file`.
	 * @param ctx the parse tree
	 */
	enterMql_file?: (ctx: Mql_fileContext) => void;
	/**
	 * Exit a parse tree produced by `MirrorQLParser.mql_file`.
	 * @param ctx the parse tree
	 */
	exitMql_file?: (ctx: Mql_fileContext) => void;
}

