export interface Position {
	line: number;
	column: number;
}

export interface Location {
	start: Position;
	end: Position;
}

export const NilLocation: Location = {
	start: { line: -1, column: -1 },
	end: { line: -1, column: -1 },
}

export const ASTNodeCategory = [
	"SourceUnit",
	"LocalModule",
	"ModuleContent",
	"UseModuleAlias",
	"UseWildcard",
	"UseEntityAlias",
	"ClassDecl",
	"InputFunction",
	"FunctionSignature",
	"FunctionDecl",
	"EmptyBody",
	"Expressible",
	"TypeRef",
	"FunctionType",
	"NormalBody",
	"ImplTraitDecl",
	"TraitDecl",
	"AttributeExpr",
	"BinOpExpr",
	"CoerceExpr",
	"FunctionCallExpr",
	"ModuleLevelAccess",
	"BareTypeArgument",
	"ImplAnnotationArgument",
	"ImplTraitRef",
	"ModuleExpr",
	"IfElseExpr",
	"IsTypeExpr",
	"LetExpr",
	"IntLiteral",
	"FloatLiteral",
	"StringLiteral",
	"UnitLiteral",
	"YonLiteral",
	"MethodCallExpr",
	"SimpleCall",
	"TypeParaTraitImplRef",
	"TypePara",
	"ExprQuantifier",
	"TypeQuantifier",
	"AggregateExpr",
	"UnaryExpr",
	"Variable",
	"VariableDecl",
	"ExtendTarget",
] as const;

export type ASTNodeCategoryStr = (typeof ASTNodeCategory)[number];

export interface Comment {
	category: "BlockComment" | "LineComment";
	value: string;
	range?: [number, number];
	loc?: Location;
}

export interface BaseASTNode {
	category: ASTNodeCategoryStr;
	comments?: Comment[];
	range?: [number, number];
	loc?: Location;
}

export interface SourceUnit extends BaseASTNode {
	category: "SourceUnit";
	content: ModuleContent;
}

export interface LocalModule extends BaseASTNode {
	category: "LocalModule";
	name: string;
	typeParas: TypePara[];
	content: ModuleContent;
	//typeInfo:ModuleTypeCandidate
}

export interface ModuleContent extends BaseASTNode {
	category: "ModuleContent";
	decls: ASTNode[];
}

export type TopLevel = Decl | UseStmt;

export type UseStmt = UseModuleAlias | UseWildcard | UseEntityAlias;

export type Decl =
	| ClassDecl
	| FunctionDecl
	| ImplTraitDecl
	| LocalModule
	| TraitDecl
	| InputFunction;

export type FunctionBody = EmptyBody | NormalBody;

export type Expression =
	| AttributeExpr
	| BinOpExpr
	| CoerceExpr
	| FunctionCallExpr
	| IfElseExpr
	| IsTypeExpr
	| LetExpr
	| Literal
	| MethodCallExpr
	| Quantifier
	| AggregateExpr
	| UnaryExpr
	| Variable;

export type TypeArgument = BareTypeArgument | ImplAnnotationArgument;
export type Literal =
	| IntLiteral
	| FloatLiteral
	| StringLiteral
	| UnitLiteral
	| YonLiteral;
export type MethodResolveHint =
	| SimpleCall
	| ImplTraitRef
	| TypeParaTraitImplRef;

export type Quantifier = ExprQuantifier | TypeQuantifier;

export type ASTNode = SourceUnit | ModuleContent | TopLevel | EmptyBody | Expression | Literal | VariableDecl | LocalModule;

export interface UseModuleAlias extends BaseASTNode {
	category: "UseModuleAlias";
	access: ModuleAccess,
	alias: string;
}

export interface UseWildcard extends BaseASTNode {
	category: "UseWildcard";
	access: ModuleAccess,
}

export interface UseEntityAlias extends BaseASTNode {
	category: "UseEntityAlias";
	access: ModuleAccess,
	name: string;
	alias: string;
}

export interface ClassDecl extends BaseASTNode {
	category: "ClassDecl";
	typeParas: TypePara[];
	name: string;
	members: FunctionDecl[];
	fields: VariableDecl[];
	bases: ExtendTarget[];
}
export interface FunctionDecl extends BaseASTNode {
	category: "FunctionDecl";
	name: string;
	typeParas: [];
	paras: ASTNode[];
	returnTy?: Expressible;
	body: FunctionBody;
	query?: MetaInfo;
}

export interface EmptyBody extends BaseASTNode {
	category: "EmptyBody";
}

export interface NormalBody extends BaseASTNode {
	category: "NormalBody";
	expr: Expression;
}

export interface VariableDecl extends BaseASTNode {
	category: "VariableDecl";
	name: string;
	type: Expressible;
}

export interface ExtendTarget extends BaseASTNode {
	category: "ExtendTarget";
	name?: string;
	type: Expressible;
}

export interface ImplTraitDecl extends BaseASTNode {
	category: "ImplTraitDecl";
	traitType: Expressible;

	traitTypeLoc: Location;
	classType: Expressible;
	classTypeLoc: Location;
	members: FunctionDecl[];
	// typeInfo: TypeInfo
}

export interface TraitDecl extends BaseASTNode {
	category: "TraitDecl";
	name: string;
	typeParas: TypePara[];
	members: FunctionSignature[];
	//typeInfo : TraitTypeCandidate
}

export interface InputFunction extends BaseASTNode {
	category: "InputFunction";
	signature: FunctionSignature;
	metaInfo: MetaInfo;
}

export interface FunctionSignature extends BaseASTNode {
	category: "FunctionSignature";
	name: string;
	typeParas?: TypePara[];
	paras: VariableDecl[];
	returnTy: Expressible;
}

export interface AttributeExpr extends BaseASTNode {
	category: "AttributeExpr";
	base: Expression;
	attr: string;
	typeInfo?: Expressible;
}

export interface BinOpExpr extends BaseASTNode {
	category: "BinOpExpr";
	lhs: Expression;
	op: BinOp;
	rhs: Expression;
	typeInfo?: Expressible;
}

export interface CoerceExpr extends BaseASTNode {
	category: "CoerceExpr";
	base: Expression;
	targetType: Expressible;
	typeInfo?: Expressible;
}

export interface FunctionCallExpr extends BaseASTNode {
	category: "FunctionCallExpr";
	func: ModuleLevelAccess;
	typeArgs: TypeArgument[];
	args: Expression[];
	typeInfo?: Expressible;
}

export interface ModuleLevelAccess extends BaseASTNode {
	category: "ModuleLevelAccess";
	access: ModuleAccess;
	name: string;
	typeInfo?: Expressible;
}

export interface BareTypeArgument extends BaseASTNode {
	category: "BareTypeArgument";
	content: Expressible;
}

export interface ImplAnnotationArgument extends BaseASTNode {
	category: "ImplAnnotationArgument";
	content: Expressible;
	implemented: ImplTraitRef[];
}

export interface ImplTraitRef extends BaseASTNode {
	category: "ImplTraitRef";
	access: ModuleAccess;
	aTrait: Expressible;
	aClass: Expressible;
}

export interface IfElseExpr extends BaseASTNode {
	category: "IfElseExpr";
	cond: Expression;
	whenTrue: Expression;
	whenFalse?: Expression;
	typeInfo?: Expressible;
}

export interface IsTypeExpr extends BaseASTNode {
	category: "IsTypeExpr";
	base: Expression;
	type: Expressible;
	typeInfo?: Expressible;
}

export interface LetExpr extends BaseASTNode {
	category: "LetExpr";
	name: string;
	annotation?: Expressible;
	exp?: Expression;
	body: Expression;
	typeInfo?: Expressible;
}

export interface IntLiteral extends BaseASTNode {
	category: "IntLiteral";
	value: number;
	typeInfo?: Expressible;
}

export interface FloatLiteral extends BaseASTNode {
	category: "FloatLiteral";
	value: number;
	typeInfo?: Expressible;
}

export interface StringLiteral extends BaseASTNode {
	category: "StringLiteral";
	value: string;
	typeInfo?: Expressible;
}

export interface UnitLiteral extends BaseASTNode {
	category: "UnitLiteral";
	typeInfo?: Expressible;
}

export interface YonLiteral extends BaseASTNode {
	category: "YonLiteral";
	bit: boolean;
	typeInfo?: Expressible;
}

export interface MethodCallExpr extends BaseASTNode {
	category: "MethodCallExpr";
	base: Expression;
	hint: MethodResolveHint;
	methodName: string;
	typeArgs: TypeArgument[];
	args: Expression[];
	typeInfo?: Expressible;
}

export interface SimpleCall extends BaseASTNode {
	category: "SimpleCall";
}

export interface TypeParaTraitImplRef extends BaseASTNode {
	category: "TypeParaTraitImplRef";
	para: TypePara;
	aTrait: Expressible;
}

export interface TypePara extends BaseASTNode {
	category: "TypePara";
	name: string;
	traitList: Expressible[];
}

export interface ExprQuantifier extends BaseASTNode {
	category: "ExprQuantifier";
	kind: QuantifierKind;
	name: string;
	expr: Expression;
	body: Expression;
	typeInfo?: Expressible;
}

export interface TypeQuantifier extends BaseASTNode {
	category: "TypeQuantifier";
	kind: QuantifierKind;
	name: string;
	typeExpr: Expressible;
	body: Expression;
	typeInfo?: Expressible;
}

export interface AggregateExpr extends BaseASTNode {
	category: "AggregateExpr";
	kind: AggregateKind;
	variables: VariableDecl[];
	body: Expression;
	typeInfo?: Expressible;
}

export interface UnaryExpr extends BaseASTNode {
	category: "UnaryExpr";
	op: UnaryOp;
	expr: Expression;
	typeInfo?: Expressible;
}

export interface Variable extends BaseASTNode {
	category: "Variable";
	name: string;
	typeInfo?: Expressible;
}

export type Expressible = TypeRef | FunctionType;

export type ParameterType = { name: string; category: Expressible }

export interface TypeRef extends BaseASTNode {
	category: "TypeRef";
	access: ModuleAccess;
	name: string;
	typeArgs: TypeArgument[];
}

export interface FunctionType extends BaseASTNode {
	category: "FunctionType";
	parameterType: ParameterType[];
	returnType: Expressible;
}

export class MetaInfo {
	static readonly IDKey: string = "id";
	static readonly DBKey: string = "db";
	static readonly IOKey: string = "io";
	static readonly InputKey: string = "input";
	static readonly OutputKey: string = "output";
	static readonly ExternalKey: string = "external";

	decls: Array<string>;
	attrs: Map<string, string> = new Map();

	constructor(decls: Array<string>, attrs: Map<string, string>) {
		this.decls = decls;
		this.attrs = attrs;
	}

	// getID(): string | undefined {
	//     return this.attrs.get(MetaInfo.IDKey);
	// }
	//
	// getDbPath(): string | undefined {
	//     return this.attrs.get(MetaInfo.DBKey);
	// }
	//
	// getIOType(): string | undefined {
	//     return this.attrs.get(MetaInfo.IOKey);
	// }
	//
	// isFileIO(): boolean {
	//     return this.attrs.get(MetaInfo.IOKey) === "file";
	// }
	//
	// isExternal(): boolean {
	//     return this.decls.includes(MetaInfo.ExternalKey);
	// }
	//
	// isOutput(): boolean {
	//     return this.decls.includes(MetaInfo.OutputKey);
	// }
	//
	// isInput(): boolean {
	//     return this.decls.includes(MetaInfo.InputKey);
	// }
}

export interface ModuleExpr extends BaseASTNode {
	category: "ModuleExpr";
	base: string;
	typeArgs: TypeArgument[];
}

export function makeModuleExpr(name: string, typeArgs: TypeArgument[]): ModuleExpr {
	return {
		category: "ModuleExpr",
		base: name,
		typeArgs
	}
}

export class ModuleAccess {
	public static rootAccess: ModuleAccess = new ModuleAccess([]);

	constructor(public path: ModuleExpr[]) { }

	// public parent(): ModuleAccess {
	//     if (this.path.length === 0) {
	//         throw new Error("path is empty");
	//     }
	//     return new ModuleAccess(this.path.slice(0, this.path.length - 1));
	// }
	//
	// public last(): ModuleExpr {
	//     return this.path[this.path.length - 1];
	// }

	public first(): ModuleExpr {
		return this.path[0];
	}

	public indexOf(index: number): ModuleExpr {
		return this.path[index];
	}

	public join(subPath: ModuleAccess): ModuleAccess {
		return new ModuleAccess(this.path.concat(subPath.path));
	}

	public append(moduleExpr: ModuleExpr): ModuleAccess {
		return new ModuleAccess([...this.path, moduleExpr]);
	}
}

export enum QuantifierKind {
	EXIST,
	FORALL,
}

export enum AggregateKind {
	Count = "count",
	Max = "max",
	Min = "min",
}

export enum UnaryOp {
	Not,
	Negative,
}

export enum BinOp {
	Add = "+",
	Minus = "-",
	LessThan = "<",
	GreaterThan = ">",
	LessThanEqual = "<=",
	GreaterThanEqual = ">=",
	Equal = "==",
	NotEqual = "!=",
	And = "&&",
	Or = "||"
}

type ASTMap<U> = {
	[K in ASTNodeCategoryStr]: U extends { category: K } ? U : never;
};
type ASTTypeMap = ASTMap<ASTNode>;
type ASTVisitorEnter = {
	[K in keyof ASTTypeMap]?: (ast: ASTTypeMap[K], parent?: ASTNode) => any;
};
type ASTVisitorExit = {
	[K in keyof ASTTypeMap as `${K}:exit`]?: (
		ast: ASTTypeMap[K],
		parent?: ASTNode
	) => any;
};


export type ASTVisitor = ASTVisitorEnter & ASTVisitorExit;
