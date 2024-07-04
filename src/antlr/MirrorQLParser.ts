// Generated from antlr/MirrorQL.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MirrorQLListener from "./MirrorQLListener.js";
import MirrorQLVisitor from "./MirrorQLVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MirrorQLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly AND = 20;
	public static readonly OR = 21;
	public static readonly NOT = 22;
	public static readonly ADD = 23;
	public static readonly MINUS = 24;
	public static readonly MUL = 25;
	public static readonly CLASS = 26;
	public static readonly DOT = 27;
	public static readonly EXISTS = 28;
	public static readonly FORALL = 29;
	public static readonly INSTANCEOF = 30;
	public static readonly FUNCTION = 31;
	public static readonly FOR = 32;
	public static readonly IF = 33;
	public static readonly ELSE = 34;
	public static readonly IMPL = 35;
	public static readonly SELF = 36;
	public static readonly SUPER = 37;
	public static readonly PACKAGE = 38;
	public static readonly TRAIT = 39;
	public static readonly LET = 40;
	public static readonly MOD = 41;
	public static readonly EXTENDS = 42;
	public static readonly SEMICOLON = 43;
	public static readonly IMPL_OP = 44;
	public static readonly YES = 45;
	public static readonly NO = 46;
	public static readonly OBRACE = 47;
	public static readonly CBRACE = 48;
	public static readonly COUNT = 49;
	public static readonly MIN = 50;
	public static readonly MAX = 51;
	public static readonly ENUM = 52;
	public static readonly FROM = 53;
	public static readonly WHERE = 54;
	public static readonly SELECT = 55;
	public static readonly RECORD = 56;
	public static readonly IN = 57;
	public static readonly ID = 58;
	public static readonly INT = 59;
	public static readonly FLOAT = 60;
	public static readonly STRING = 61;
	public static readonly WS = 62;
	public static readonly COMMENT = 63;
	public static readonly LINE_COMMENT = 64;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_variable_declare = 0;
	public static readonly RULE_variable_declare_list = 1;
	public static readonly RULE_identifier = 2;
	public static readonly RULE_module_identifier = 3;
	public static readonly RULE_module_expr = 4;
	public static readonly RULE_type_name = 5;
	public static readonly RULE_type_arg_list = 6;
	public static readonly RULE_type_para = 7;
	public static readonly RULE_type_para_list = 8;
	public static readonly RULE_type_expr = 9;
	public static readonly RULE_parameter_type_list = 10;
	public static readonly RULE_use_stmt = 11;
	public static readonly RULE_parameter_declare = 12;
	public static readonly RULE_parameter_declare_list = 13;
	public static readonly RULE_func_body = 14;
	public static readonly RULE_meta_attr = 15;
	public static readonly RULE_meta_attrs = 16;
	public static readonly RULE_func_declartion = 17;
	public static readonly RULE_func_sig_decl = 18;
	public static readonly RULE_field_declaration = 19;
	public static readonly RULE_base_type_declaration = 20;
	public static readonly RULE_class_declaration = 21;
	public static readonly RULE_trait_declaration = 22;
	public static readonly RULE_impl_trait_declaration = 23;
	public static readonly RULE_impl_declaration = 24;
	public static readonly RULE_impl_copy = 25;
	public static readonly RULE_literal = 26;
	public static readonly RULE_quantifier_expr = 27;
	public static readonly RULE_aggregate_expr = 28;
	public static readonly RULE_block = 29;
	public static readonly RULE_expr = 30;
	public static readonly RULE_module_level_access = 31;
	public static readonly RULE_primary = 32;
	public static readonly RULE_expr_list = 33;
	public static readonly RULE_args_list = 34;
	public static readonly RULE_select_expr = 35;
	public static readonly RULE_expr_root = 36;
	public static readonly RULE_outside_func_meta_info = 37;
	public static readonly RULE_input_func_decl = 38;
	public static readonly RULE_top_level_decl = 39;
	public static readonly RULE_module_content = 40;
	public static readonly RULE_local_module = 41;
	public static readonly RULE_mql_file = 42;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "'['", "']'", 
                                                            "'::'", "'->'", 
                                                            "'('", "')'", 
                                                            "'()'", "'use'", 
                                                            "'as'", "':'", 
                                                            "'='", "'|'", 
                                                            "'<='", "'>='", 
                                                            "'>'", "'<'", 
                                                            "'=='", "'!='", 
                                                            "'and'", "'or'", 
                                                            "'not'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'class'", "'.'", 
                                                            "'exists'", 
                                                            "'forall'", 
                                                            "'instanceof'", 
                                                            "'fn'", "'for'", 
                                                            "'if'", "'else'", 
                                                            "'impl'", "'self'", 
                                                            "'super'", "'package'", 
                                                            "'trait'", "'let'", 
                                                            "'mod'", "'extends'", 
                                                            "';'", "'<:'", 
                                                            "'yes'", "'no'", 
                                                            "'{'", "'}'", 
                                                            "'count'", "'min'", 
                                                            "'max'", "'enum'", 
                                                            "'from'", "'where'", 
                                                            "'select'", 
                                                            "'record'", 
                                                            "'in'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "AND", "OR", 
                                                             "NOT", "ADD", 
                                                             "MINUS", "MUL", 
                                                             "CLASS", "DOT", 
                                                             "EXISTS", "FORALL", 
                                                             "INSTANCEOF", 
                                                             "FUNCTION", 
                                                             "FOR", "IF", 
                                                             "ELSE", "IMPL", 
                                                             "SELF", "SUPER", 
                                                             "PACKAGE", 
                                                             "TRAIT", "LET", 
                                                             "MOD", "EXTENDS", 
                                                             "SEMICOLON", 
                                                             "IMPL_OP", 
                                                             "YES", "NO", 
                                                             "OBRACE", "CBRACE", 
                                                             "COUNT", "MIN", 
                                                             "MAX", "ENUM", 
                                                             "FROM", "WHERE", 
                                                             "SELECT", "RECORD", 
                                                             "IN", "ID", 
                                                             "INT", "FLOAT", 
                                                             "STRING", "WS", 
                                                             "COMMENT", 
                                                             "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"variable_declare", "variable_declare_list", "identifier", "module_identifier", 
		"module_expr", "type_name", "type_arg_list", "type_para", "type_para_list", 
		"type_expr", "parameter_type_list", "use_stmt", "parameter_declare", "parameter_declare_list", 
		"func_body", "meta_attr", "meta_attrs", "func_declartion", "func_sig_decl", 
		"field_declaration", "base_type_declaration", "class_declaration", "trait_declaration", 
		"impl_trait_declaration", "impl_declaration", "impl_copy", "literal", 
		"quantifier_expr", "aggregate_expr", "block", "expr", "module_level_access", 
		"primary", "expr_list", "args_list", "select_expr", "expr_root", "outside_func_meta_info", 
		"input_func_decl", "top_level_decl", "module_content", "local_module", 
		"mql_file",
	];
	public get grammarFileName(): string { return "MirrorQL.g4"; }
	public get literalNames(): (string | null)[] { return MirrorQLParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MirrorQLParser.symbolicNames; }
	public get ruleNames(): string[] { return MirrorQLParser.ruleNames; }
	public get serializedATN(): number[] { return MirrorQLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MirrorQLParser._ATN, MirrorQLParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public variable_declare(): Variable_declareContext {
		let localctx: Variable_declareContext = new Variable_declareContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MirrorQLParser.RULE_variable_declare);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.type_expr();
			this.state = 87;
			this.match(MirrorQLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable_declare_list(): Variable_declare_listContext {
		let localctx: Variable_declare_listContext = new Variable_declare_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MirrorQLParser.RULE_variable_declare_list);
		let _la: number;
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 89;
				this.variable_declare();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 90;
				this.variable_declare();
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 91;
					this.match(MirrorQLParser.T__0);
					this.state = 92;
					this.variable_declare();
					}
					}
					this.state = 95;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MirrorQLParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 99;
			this.match(MirrorQLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_identifier(): Module_identifierContext {
		let localctx: Module_identifierContext = new Module_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MirrorQLParser.RULE_module_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this.match(MirrorQLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_expr(): Module_exprContext {
		let localctx: Module_exprContext = new Module_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MirrorQLParser.RULE_module_expr);
		try {
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new ModuleNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 103;
				(localctx as ModuleNameContext)._name = this.module_identifier();
				}
				break;
			case 2:
				localctx = new ModuleTypeApplyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 104;
				(localctx as ModuleTypeApplyContext)._name = this.module_identifier();
				{
				this.state = 105;
				(localctx as ModuleTypeApplyContext)._type_args = this.type_arg_list();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_name(): Type_nameContext {
		let localctx: Type_nameContext = new Type_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MirrorQLParser.RULE_type_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_arg_list(): Type_arg_listContext {
		let localctx: Type_arg_listContext = new Type_arg_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MirrorQLParser.RULE_type_arg_list);
		let _la: number;
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 111;
				this.match(MirrorQLParser.T__1);
				this.state = 112;
				this.match(MirrorQLParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 113;
				this.match(MirrorQLParser.T__1);
				this.state = 114;
				this.type_expr();
				this.state = 115;
				this.match(MirrorQLParser.T__2);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 117;
				this.match(MirrorQLParser.T__1);
				this.state = 118;
				this.type_expr();
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 119;
					this.match(MirrorQLParser.T__0);
					this.state = 120;
					this.type_expr();
					}
					}
					this.state = 123;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===1);
				this.state = 125;
				this.match(MirrorQLParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_para(): Type_paraContext {
		let localctx: Type_paraContext = new Type_paraContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MirrorQLParser.RULE_type_para);
		let _la: number;
		try {
			this.state = 140;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 129;
				this.type_name();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 130;
				this.type_name();
				this.state = 131;
				this.match(MirrorQLParser.IMPL_OP);
				{
				this.state = 132;
				this.type_expr();
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===23) {
					{
					{
					this.state = 133;
					this.match(MirrorQLParser.ADD);
					this.state = 134;
					this.type_expr();
					}
					}
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_para_list(): Type_para_listContext {
		let localctx: Type_para_listContext = new Type_para_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MirrorQLParser.RULE_type_para_list);
		let _la: number;
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 142;
				this.match(MirrorQLParser.T__1);
				this.state = 143;
				this.match(MirrorQLParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 144;
				this.match(MirrorQLParser.T__1);
				this.state = 145;
				this.type_para();
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 146;
					this.match(MirrorQLParser.T__0);
					this.state = 147;
					this.type_para();
					}
					}
					this.state = 152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 153;
				this.match(MirrorQLParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_expr(): Type_exprContext {
		let localctx: Type_exprContext = new Type_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MirrorQLParser.RULE_type_expr);
		try {
			let _alt: number;
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				localctx = new TypeNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 162;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 157;
						this.module_expr();
						this.state = 158;
						this.match(MirrorQLParser.T__3);
						}
						}
					}
					this.state = 164;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
				}
				this.state = 165;
				(localctx as TypeNameContext)._name = this.identifier();
				}
				break;
			case 2:
				localctx = new TypeApplyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 171;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 166;
						this.module_expr();
						this.state = 167;
						this.match(MirrorQLParser.T__3);
						}
						}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 174;
				(localctx as TypeApplyContext)._name = this.identifier();
				this.state = 176;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 175;
					(localctx as TypeApplyContext)._type_args = this.type_arg_list();
					}
					break;
				}
				}
				break;
			case 3:
				localctx = new TypeFunctionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 178;
				this.match(MirrorQLParser.FUNCTION);
				{
				this.state = 179;
				this.parameter_type_list();
				}
				this.state = 180;
				this.match(MirrorQLParser.T__4);
				{
				this.state = 181;
				(localctx as TypeFunctionContext)._ret_type = this.type_expr();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter_type_list(): Parameter_type_listContext {
		let localctx: Parameter_type_listContext = new Parameter_type_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MirrorQLParser.RULE_parameter_type_list);
		let _la: number;
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 185;
				this.match(MirrorQLParser.T__5);
				this.state = 186;
				this.match(MirrorQLParser.T__6);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 187;
				this.match(MirrorQLParser.T__7);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 188;
				this.match(MirrorQLParser.T__5);
				this.state = 189;
				this.type_expr();
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 190;
					this.match(MirrorQLParser.T__0);
					this.state = 191;
					this.type_expr();
					}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 197;
				this.match(MirrorQLParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public use_stmt(): Use_stmtContext {
		let localctx: Use_stmtContext = new Use_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MirrorQLParser.RULE_use_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.state = 269;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				localctx = new ModuleAliasContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 201;
				this.match(MirrorQLParser.T__8);
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 7) !== 0)) {
					{
					this.state = 202;
					(localctx as ModuleAliasContext)._prefix = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 7) !== 0))) {
					    (localctx as ModuleAliasContext)._prefix = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 205;
					this.match(MirrorQLParser.T__3);
					}
				}

				this.state = 208;
				this.module_expr();
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 209;
					this.match(MirrorQLParser.T__3);
					this.state = 210;
					this.module_expr();
					}
					}
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 216;
					this.match(MirrorQLParser.T__9);
					this.state = 217;
					(localctx as ModuleAliasContext)._alias = this.identifier();
					}
				}

				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===43) {
					{
					this.state = 220;
					this.match(MirrorQLParser.SEMICOLON);
					}
				}

				}
				break;
			case 2:
				localctx = new EntityAliasContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 223;
				this.match(MirrorQLParser.T__8);
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 7) !== 0)) {
					{
					this.state = 224;
					(localctx as EntityAliasContext)._prefix = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 7) !== 0))) {
					    (localctx as EntityAliasContext)._prefix = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 227;
					this.match(MirrorQLParser.T__3);
					}
				}

				this.state = 230;
				this.module_expr();
				this.state = 235;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 231;
						this.match(MirrorQLParser.T__3);
						this.state = 232;
						this.module_expr();
						}
						}
					}
					this.state = 237;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
				}
				this.state = 238;
				this.match(MirrorQLParser.T__3);
				this.state = 239;
				this.match(MirrorQLParser.OBRACE);
				this.state = 240;
				(localctx as EntityAliasContext)._entity = this.identifier();
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 241;
					this.match(MirrorQLParser.T__9);
					this.state = 242;
					(localctx as EntityAliasContext)._alias = this.identifier();
					}
				}

				this.state = 245;
				this.match(MirrorQLParser.CBRACE);
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===43) {
					{
					this.state = 246;
					this.match(MirrorQLParser.SEMICOLON);
					}
				}

				}
				break;
			case 3:
				localctx = new WildcardUseContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 249;
				this.match(MirrorQLParser.T__8);
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 7) !== 0)) {
					{
					this.state = 250;
					(localctx as WildcardUseContext)._prefix = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 7) !== 0))) {
					    (localctx as WildcardUseContext)._prefix = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 253;
					this.match(MirrorQLParser.T__3);
					}
				}

				this.state = 256;
				this.module_expr();
				this.state = 261;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 257;
						this.match(MirrorQLParser.T__3);
						this.state = 258;
						this.module_expr();
						}
						}
					}
					this.state = 263;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 264;
				this.match(MirrorQLParser.T__3);
				this.state = 265;
				this.match(MirrorQLParser.MUL);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===43) {
					{
					this.state = 266;
					this.match(MirrorQLParser.SEMICOLON);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter_declare(): Parameter_declareContext {
		let localctx: Parameter_declareContext = new Parameter_declareContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MirrorQLParser.RULE_parameter_declare);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 271;
			localctx._para_name = this.identifier();
			this.state = 272;
			this.match(MirrorQLParser.T__10);
			this.state = 273;
			this.type_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter_declare_list(): Parameter_declare_listContext {
		let localctx: Parameter_declare_listContext = new Parameter_declare_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MirrorQLParser.RULE_parameter_declare_list);
		let _la: number;
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 275;
				this.match(MirrorQLParser.T__5);
				this.state = 276;
				this.match(MirrorQLParser.T__6);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 277;
				this.match(MirrorQLParser.T__7);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 278;
				this.match(MirrorQLParser.T__5);
				this.state = 279;
				this.parameter_declare();
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 280;
					this.match(MirrorQLParser.T__0);
					this.state = 281;
					this.parameter_declare();
					}
					}
					this.state = 286;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 287;
				this.match(MirrorQLParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public func_body(): Func_bodyContext {
		let localctx: Func_bodyContext = new Func_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MirrorQLParser.RULE_func_body);
		try {
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 291;
				this.match(MirrorQLParser.OBRACE);
				this.state = 292;
				this.expr_root();
				this.state = 293;
				this.match(MirrorQLParser.CBRACE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 295;
				this.match(MirrorQLParser.OBRACE);
				this.state = 296;
				this.match(MirrorQLParser.CBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta_attr(): Meta_attrContext {
		let localctx: Meta_attrContext = new Meta_attrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, MirrorQLParser.RULE_meta_attr);
		try {
			this.state = 308;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				localctx = new AttributeDeclContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 299;
				this.identifier();
				}
				break;
			case 2:
				localctx = new NameAttributeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 300;
				(localctx as NameAttributeContext)._name = this.identifier();
				this.state = 301;
				this.match(MirrorQLParser.T__11);
				this.state = 302;
				(localctx as NameAttributeContext)._value = this.identifier();
				}
				break;
			case 3:
				localctx = new StringAttributeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 304;
				(localctx as StringAttributeContext)._name = this.identifier();
				this.state = 305;
				this.match(MirrorQLParser.T__11);
				this.state = 306;
				(localctx as StringAttributeContext)._value = this.match(MirrorQLParser.STRING);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta_attrs(): Meta_attrsContext {
		let localctx: Meta_attrsContext = new Meta_attrsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, MirrorQLParser.RULE_meta_attrs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 310;
			this.meta_attr();
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 311;
				this.match(MirrorQLParser.T__0);
				this.state = 312;
				this.meta_attr();
				}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public func_declartion(): Func_declartionContext {
		let localctx: Func_declartionContext = new Func_declartionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, MirrorQLParser.RULE_func_declartion);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 318;
				this.match(MirrorQLParser.T__1);
				this.state = 319;
				this.meta_attrs();
				this.state = 320;
				this.match(MirrorQLParser.T__2);
				}
			}

			this.state = 324;
			this.match(MirrorQLParser.FUNCTION);
			this.state = 325;
			this.identifier();
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 326;
				this.type_para_list();
				}
			}

			this.state = 329;
			this.parameter_declare_list();
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 330;
				this.match(MirrorQLParser.T__4);
				this.state = 331;
				localctx._ret_type = this.type_expr();
				}
			}

			this.state = 334;
			this.func_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public func_sig_decl(): Func_sig_declContext {
		let localctx: Func_sig_declContext = new Func_sig_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, MirrorQLParser.RULE_func_sig_decl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 336;
			this.match(MirrorQLParser.FUNCTION);
			this.state = 337;
			this.identifier();
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 338;
				this.type_para_list();
				}
			}

			this.state = 341;
			this.parameter_declare_list();
			this.state = 344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 342;
				this.match(MirrorQLParser.T__4);
				this.state = 343;
				localctx._ret_type = this.type_expr();
				}
			}

			this.state = 346;
			this.match(MirrorQLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public field_declaration(): Field_declarationContext {
		let localctx: Field_declarationContext = new Field_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, MirrorQLParser.RULE_field_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this.match(MirrorQLParser.LET);
			this.state = 349;
			this.identifier();
			this.state = 350;
			this.match(MirrorQLParser.T__10);
			this.state = 351;
			localctx._field_type = this.type_expr();
			this.state = 352;
			this.match(MirrorQLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public base_type_declaration(): Base_type_declarationContext {
		let localctx: Base_type_declarationContext = new Base_type_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, MirrorQLParser.RULE_base_type_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 354;
			this.type_expr();
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 355;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public class_declaration(): Class_declarationContext {
		let localctx: Class_declarationContext = new Class_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, MirrorQLParser.RULE_class_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.match(MirrorQLParser.CLASS);
			{
			this.state = 359;
			localctx._name = this.identifier();
			}
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 360;
				this.type_para_list();
				}
			}

			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 363;
				this.match(MirrorQLParser.EXTENDS);
				this.state = 364;
				this.base_type_declaration();
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 365;
					this.match(MirrorQLParser.T__0);
					this.state = 366;
					this.base_type_declaration();
					}
					}
					this.state = 371;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 374;
			this.match(MirrorQLParser.OBRACE);
			{
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===40) {
				{
				{
				this.state = 375;
				localctx._fields = this.field_declaration();
				}
				}
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			{
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2 || _la===31) {
				{
				{
				this.state = 381;
				localctx._members = this.func_declartion();
				}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 387;
			this.match(MirrorQLParser.CBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public trait_declaration(): Trait_declarationContext {
		let localctx: Trait_declarationContext = new Trait_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, MirrorQLParser.RULE_trait_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 389;
			this.match(MirrorQLParser.TRAIT);
			{
			this.state = 390;
			localctx._name = this.identifier();
			}
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 391;
				this.type_para_list();
				}
			}

			this.state = 394;
			this.match(MirrorQLParser.OBRACE);
			{
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 395;
				localctx._members = this.func_sig_decl();
				}
				}
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 401;
			this.match(MirrorQLParser.CBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public impl_trait_declaration(): Impl_trait_declarationContext {
		let localctx: Impl_trait_declarationContext = new Impl_trait_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, MirrorQLParser.RULE_impl_trait_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 403;
			this.match(MirrorQLParser.IMPL);
			{
			this.state = 404;
			localctx._trait_type_expr = this.type_expr();
			}
			this.state = 405;
			this.match(MirrorQLParser.FOR);
			{
			this.state = 406;
			localctx._class_type_expr = this.type_expr();
			}
			this.state = 407;
			this.match(MirrorQLParser.OBRACE);
			{
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2 || _la===31) {
				{
				{
				this.state = 408;
				localctx._members = this.func_declartion();
				}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 414;
			this.match(MirrorQLParser.CBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public impl_declaration(): Impl_declarationContext {
		let localctx: Impl_declarationContext = new Impl_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, MirrorQLParser.RULE_impl_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 416;
			this.match(MirrorQLParser.IMPL);
			{
			this.state = 417;
			localctx._class_type_expr = this.type_expr();
			}
			this.state = 418;
			this.match(MirrorQLParser.OBRACE);
			{
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2 || _la===31) {
				{
				{
				this.state = 419;
				localctx._members = this.func_declartion();
				}
				}
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 425;
			this.match(MirrorQLParser.CBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public impl_copy(): Impl_copyContext {
		let localctx: Impl_copyContext = new Impl_copyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, MirrorQLParser.RULE_impl_copy);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 427;
			this.match(MirrorQLParser.IMPL);
			{
			this.state = 428;
			localctx._trait_type_expr = this.type_expr();
			}
			this.state = 429;
			this.match(MirrorQLParser.FOR);
			{
			this.state = 430;
			localctx._class_type_expr = this.type_expr();
			}
			this.state = 431;
			this.match(MirrorQLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, MirrorQLParser.RULE_literal);
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				localctx = new IntLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 433;
				this.match(MirrorQLParser.INT);
				}
				break;
			case 60:
				localctx = new FloatLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 434;
				this.match(MirrorQLParser.FLOAT);
				}
				break;
			case 61:
				localctx = new StrLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 435;
				this.match(MirrorQLParser.STRING);
				}
				break;
			case 8:
				localctx = new UnitLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 436;
				this.match(MirrorQLParser.T__7);
				}
				break;
			case 45:
				localctx = new YesLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 437;
				this.match(MirrorQLParser.YES);
				}
				break;
			case 46:
				localctx = new NoLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 438;
				this.match(MirrorQLParser.NO);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantifier_expr(): Quantifier_exprContext {
		let localctx: Quantifier_exprContext = new Quantifier_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, MirrorQLParser.RULE_quantifier_expr);
		let _la: number;
		try {
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				localctx = new ValueQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 441;
				(localctx as ValueQuantifierContext)._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===28 || _la===29)) {
				    (localctx as ValueQuantifierContext)._kind = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				this.state = 442;
				this.match(MirrorQLParser.T__5);
				this.state = 443;
				this.match(MirrorQLParser.T__12);
				this.state = 444;
				(localctx as ValueQuantifierContext)._name = this.identifier();
				this.state = 445;
				this.match(MirrorQLParser.T__11);
				this.state = 446;
				(localctx as ValueQuantifierContext)._bind = this.expr(0);
				this.state = 447;
				this.match(MirrorQLParser.T__12);
				this.state = 448;
				(localctx as ValueQuantifierContext)._body = this.expr(0);
				this.state = 449;
				this.match(MirrorQLParser.T__6);
				}
				break;
			case 2:
				localctx = new TypeQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 451;
				(localctx as TypeQuantifierContext)._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===28 || _la===29)) {
				    (localctx as TypeQuantifierContext)._kind = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				this.state = 452;
				this.match(MirrorQLParser.T__5);
				this.state = 453;
				this.match(MirrorQLParser.T__12);
				this.state = 454;
				(localctx as TypeQuantifierContext)._name = this.identifier();
				this.state = 455;
				this.match(MirrorQLParser.T__10);
				this.state = 456;
				this.type_expr();
				this.state = 457;
				this.match(MirrorQLParser.T__12);
				this.state = 458;
				(localctx as TypeQuantifierContext)._body = this.expr(0);
				this.state = 459;
				this.match(MirrorQLParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregate_expr(): Aggregate_exprContext {
		let localctx: Aggregate_exprContext = new Aggregate_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, MirrorQLParser.RULE_aggregate_expr);
		let _la: number;
		try {
			this.state = 485;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 463;
				localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 7) !== 0))) {
				    localctx._kind = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				this.state = 464;
				this.match(MirrorQLParser.T__5);
				this.state = 465;
				this.match(MirrorQLParser.T__12);
				this.state = 466;
				this.parameter_declare();
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 467;
					this.match(MirrorQLParser.T__0);
					this.state = 468;
					this.parameter_declare();
					}
					}
					this.state = 473;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 474;
				this.match(MirrorQLParser.T__12);
				this.state = 475;
				localctx._body = this.expr(0);
				this.state = 476;
				this.match(MirrorQLParser.T__6);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 478;
				localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 7) !== 0))) {
				    localctx._kind = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				this.state = 479;
				this.match(MirrorQLParser.T__5);
				this.state = 480;
				this.match(MirrorQLParser.T__12);
				this.state = 481;
				this.match(MirrorQLParser.T__12);
				this.state = 482;
				localctx._body = this.expr(0);
				this.state = 483;
				this.match(MirrorQLParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, MirrorQLParser.RULE_block);
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 487;
				this.match(MirrorQLParser.OBRACE);
				this.state = 488;
				this.expr(0);
				this.state = 489;
				this.match(MirrorQLParser.CBRACE);
				}
				break;
			case 6:
			case 8:
			case 22:
			case 24:
			case 28:
			case 29:
			case 33:
			case 36:
			case 40:
			case 45:
			case 46:
			case 49:
			case 50:
			case 51:
			case 53:
			case 58:
			case 59:
			case 60:
			case 61:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 491;
				this.expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 60;
		this.enterRecursionRule(localctx, 60, MirrorQLParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 529;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				localctx = new UnaryExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 495;
				(localctx as UnaryExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===22 || _la===24)) {
				    (localctx as UnaryExprContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 496;
				(localctx as UnaryExprContext)._base = this.expr(17);
				}
				break;
			case 2:
				{
				localctx = new PrimaryExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 497;
				this.primary();
				}
				break;
			case 3:
				{
				localctx = new StaticInvokeExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 498;
				(localctx as StaticInvokeExprContext)._func = this.module_level_access();
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 499;
					this.type_arg_list();
					}
				}

				this.state = 502;
				this.args_list();
				}
				break;
			case 4:
				{
				localctx = new IfElseExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 504;
				this.match(MirrorQLParser.IF);
				this.state = 505;
				this.match(MirrorQLParser.T__5);
				this.state = 506;
				(localctx as IfElseExprContext)._cond = this.expr(0);
				this.state = 507;
				this.match(MirrorQLParser.T__6);
				this.state = 508;
				(localctx as IfElseExprContext)._b1 = this.block();
				this.state = 511;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 509;
					this.match(MirrorQLParser.ELSE);
					this.state = 510;
					(localctx as IfElseExprContext)._b2 = this.block();
					}
					break;
				}
				}
				break;
			case 5:
				{
				localctx = new LetExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 513;
				this.match(MirrorQLParser.LET);
				this.state = 514;
				this.identifier();
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===11) {
					{
					this.state = 515;
					this.match(MirrorQLParser.T__10);
					this.state = 516;
					this.type_expr();
					}
				}

				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 519;
					this.match(MirrorQLParser.T__11);
					this.state = 520;
					(localctx as LetExprContext)._e1 = this.expr(0);
					}
				}

				this.state = 523;
				this.match(MirrorQLParser.SEMICOLON);
				this.state = 524;
				(localctx as LetExprContext)._e2 = this.expr(4);
				}
				break;
			case 6:
				{
				localctx = new QuantifierExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 526;
				this.quantifier_expr();
				}
				break;
			case 7:
				{
				localctx = new AggregateExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 527;
				this.aggregate_expr();
				}
				break;
			case 8:
				{
				localctx = new SelectExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 528;
				this.select_expr();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 568;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 566;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as ArithmeticExprContext)._lhs = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MirrorQLParser.RULE_expr);
						this.state = 531;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 532;
						(localctx as ArithmeticExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 58720256) !== 0))) {
						    (localctx as ArithmeticExprContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 533;
						(localctx as ArithmeticExprContext)._rhs = this.expr(11);
						}
						break;
					case 2:
						{
						localctx = new CompareExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as CompareExprContext)._lhs = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MirrorQLParser.RULE_expr);
						this.state = 534;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 535;
						(localctx as CompareExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0))) {
						    (localctx as CompareExprContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 536;
						(localctx as CompareExprContext)._rhs = this.expr(10);
						}
						break;
					case 3:
						{
						localctx = new EqualExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as EqualExprContext)._lhs = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MirrorQLParser.RULE_expr);
						this.state = 537;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 538;
						(localctx as EqualExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===18 || _la===19)) {
						    (localctx as EqualExprContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 539;
						(localctx as EqualExprContext)._rhs = this.expr(9);
						}
						break;
					case 4:
						{
						localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as AndExprContext)._lhs = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MirrorQLParser.RULE_expr);
						this.state = 540;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 541;
						this.match(MirrorQLParser.AND);
						this.state = 542;
						(localctx as AndExprContext)._rhs = this.expr(8);
						}
						break;
					case 5:
						{
						localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as OrExprContext)._lhs = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MirrorQLParser.RULE_expr);
						this.state = 543;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 544;
						this.match(MirrorQLParser.OR);
						this.state = 545;
						(localctx as OrExprContext)._rhs = this.expr(7);
						}
						break;
					case 6:
						{
						localctx = new CoerceExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as CoerceExprContext)._base = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MirrorQLParser.RULE_expr);
						this.state = 546;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 547;
						this.match(MirrorQLParser.DOT);
						this.state = 548;
						this.match(MirrorQLParser.T__5);
						this.state = 549;
						this.type_expr();
						this.state = 550;
						this.match(MirrorQLParser.T__6);
						}
						break;
					case 7:
						{
						localctx = new MethodInvokeExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as MethodInvokeExprContext)._base = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MirrorQLParser.RULE_expr);
						this.state = 552;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						{
						this.state = 553;
						this.match(MirrorQLParser.DOT);
						}
						this.state = 554;
						this.identifier();
						this.state = 556;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===2) {
							{
							this.state = 555;
							(localctx as MethodInvokeExprContext)._type_args = this.type_arg_list();
							}
						}

						this.state = 558;
						this.args_list();
						}
						break;
					case 8:
						{
						localctx = new AttributeExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as AttributeExprContext)._base = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MirrorQLParser.RULE_expr);
						this.state = 560;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 561;
						this.match(MirrorQLParser.DOT);
						this.state = 562;
						this.identifier();
						}
						break;
					case 9:
						{
						localctx = new InstanceofExprContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, MirrorQLParser.RULE_expr);
						this.state = 563;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 564;
						this.match(MirrorQLParser.INSTANCEOF);
						this.state = 565;
						this.type_expr();
						}
						break;
					}
					}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_level_access(): Module_level_accessContext {
		let localctx: Module_level_accessContext = new Module_level_accessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, MirrorQLParser.RULE_module_level_access);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 576;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 571;
					this.module_expr();
					this.state = 572;
					this.match(MirrorQLParser.T__3);
					}
					}
				}
				this.state = 578;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
			}
			this.state = 579;
			localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, MirrorQLParser.RULE_primary);
		try {
			this.state = 588;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				localctx = new ParenExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 581;
				this.match(MirrorQLParser.T__5);
				this.state = 582;
				this.expr(0);
				this.state = 583;
				this.match(MirrorQLParser.T__6);
				}
				break;
			case 36:
				localctx = new ThisExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 585;
				this.match(MirrorQLParser.SELF);
				}
				break;
			case 8:
			case 45:
			case 46:
			case 59:
			case 60:
			case 61:
				localctx = new LiteralExprContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 586;
				this.literal();
				}
				break;
			case 58:
				localctx = new IdentifierExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 587;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_list(): Expr_listContext {
		let localctx: Expr_listContext = new Expr_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, MirrorQLParser.RULE_expr_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 590;
			this.expr(0);
			this.state = 595;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 591;
					this.match(MirrorQLParser.T__0);
					this.state = 592;
					this.expr(0);
					}
					}
				}
				this.state = 597;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public args_list(): Args_listContext {
		let localctx: Args_listContext = new Args_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, MirrorQLParser.RULE_args_list);
		try {
			this.state = 605;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 598;
				this.match(MirrorQLParser.T__5);
				this.state = 599;
				this.match(MirrorQLParser.T__6);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 600;
				this.match(MirrorQLParser.T__7);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 601;
				this.match(MirrorQLParser.T__5);
				this.state = 602;
				this.expr_list();
				this.state = 603;
				this.match(MirrorQLParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_expr(): Select_exprContext {
		let localctx: Select_exprContext = new Select_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, MirrorQLParser.RULE_select_expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 607;
			this.match(MirrorQLParser.FROM);
			this.state = 608;
			this.variable_declare_list();
			this.state = 609;
			this.match(MirrorQLParser.WHERE);
			this.state = 610;
			this.expr(0);
			this.state = 611;
			this.match(MirrorQLParser.SELECT);
			this.state = 612;
			this.expr_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_root(): Expr_rootContext {
		let localctx: Expr_rootContext = new Expr_rootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, MirrorQLParser.RULE_expr_root);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 614;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outside_func_meta_info(): Outside_func_meta_infoContext {
		let localctx: Outside_func_meta_infoContext = new Outside_func_meta_infoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, MirrorQLParser.RULE_outside_func_meta_info);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 616;
			this.match(MirrorQLParser.T__1);
			this.state = 617;
			this.meta_attrs();
			this.state = 618;
			this.match(MirrorQLParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public input_func_decl(): Input_func_declContext {
		let localctx: Input_func_declContext = new Input_func_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, MirrorQLParser.RULE_input_func_decl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 620;
			this.outside_func_meta_info();
			this.state = 621;
			this.func_sig_decl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public top_level_decl(): Top_level_declContext {
		let localctx: Top_level_declContext = new Top_level_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, MirrorQLParser.RULE_top_level_decl);
		try {
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 623;
				this.use_stmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 624;
				this.class_declaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 625;
				this.func_declartion();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 626;
				this.impl_trait_declaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 627;
				this.impl_declaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 628;
				this.impl_copy();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 629;
				this.trait_declaration();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 630;
				this.local_module();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 631;
				this.input_func_decl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_content(): Module_contentContext {
		let localctx: Module_contentContext = new Module_contentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, MirrorQLParser.RULE_module_content);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2214593028) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 81) !== 0)) {
				{
				{
				this.state = 634;
				this.top_level_decl();
				}
				}
				this.state = 639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public local_module(): Local_moduleContext {
		let localctx: Local_moduleContext = new Local_moduleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, MirrorQLParser.RULE_local_module);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 640;
			this.match(MirrorQLParser.MOD);
			{
			this.state = 641;
			localctx._name = this.identifier();
			}
			{
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 642;
				localctx._type_paras = this.type_para_list();
				}
			}

			}
			this.state = 645;
			this.match(MirrorQLParser.OBRACE);
			this.state = 646;
			this.module_content();
			this.state = 647;
			this.match(MirrorQLParser.CBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mql_file(): Mql_fileContext {
		let localctx: Mql_fileContext = new Mql_fileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, MirrorQLParser.RULE_mql_file);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 649;
			this.module_content();
			this.state = 650;
			this.match(MirrorQLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 30:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 14);
		case 6:
			return this.precpred(this._ctx, 13);
		case 7:
			return this.precpred(this._ctx, 12);
		case 8:
			return this.precpred(this._ctx, 11);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,64,653,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,1,0,1,0,1,0,1,1,1,1,1,1,1,1,4,1,94,
	8,1,11,1,12,1,95,3,1,98,8,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,3,4,108,8,4,
	1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,4,6,122,8,6,11,6,12,6,123,
	1,6,1,6,3,6,128,8,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,136,8,7,10,7,12,7,139,9,
	7,3,7,141,8,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,149,8,8,10,8,12,8,152,9,8,1,8,
	1,8,3,8,156,8,8,1,9,1,9,1,9,5,9,161,8,9,10,9,12,9,164,9,9,1,9,1,9,1,9,1,
	9,5,9,170,8,9,10,9,12,9,173,9,9,1,9,1,9,3,9,177,8,9,1,9,1,9,1,9,1,9,1,9,
	3,9,184,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,193,8,10,10,10,12,10,
	196,9,10,1,10,1,10,3,10,200,8,10,1,11,1,11,3,11,204,8,11,1,11,3,11,207,
	8,11,1,11,1,11,1,11,5,11,212,8,11,10,11,12,11,215,9,11,1,11,1,11,3,11,219,
	8,11,1,11,3,11,222,8,11,1,11,1,11,3,11,226,8,11,1,11,3,11,229,8,11,1,11,
	1,11,1,11,5,11,234,8,11,10,11,12,11,237,9,11,1,11,1,11,1,11,1,11,1,11,3,
	11,244,8,11,1,11,1,11,3,11,248,8,11,1,11,1,11,3,11,252,8,11,1,11,3,11,255,
	8,11,1,11,1,11,1,11,5,11,260,8,11,10,11,12,11,263,9,11,1,11,1,11,1,11,3,
	11,268,8,11,3,11,270,8,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,5,13,283,8,13,10,13,12,13,286,9,13,1,13,1,13,3,13,290,8,13,1,
	14,1,14,1,14,1,14,1,14,1,14,3,14,298,8,14,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,3,15,309,8,15,1,16,1,16,1,16,5,16,314,8,16,10,16,12,16,317,
	9,16,1,17,1,17,1,17,1,17,3,17,323,8,17,1,17,1,17,1,17,3,17,328,8,17,1,17,
	1,17,1,17,3,17,333,8,17,1,17,1,17,1,18,1,18,1,18,3,18,340,8,18,1,18,1,18,
	1,18,3,18,345,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,3,
	20,357,8,20,1,21,1,21,1,21,3,21,362,8,21,1,21,1,21,1,21,1,21,5,21,368,8,
	21,10,21,12,21,371,9,21,3,21,373,8,21,1,21,1,21,5,21,377,8,21,10,21,12,
	21,380,9,21,1,21,5,21,383,8,21,10,21,12,21,386,9,21,1,21,1,21,1,22,1,22,
	1,22,3,22,393,8,22,1,22,1,22,5,22,397,8,22,10,22,12,22,400,9,22,1,22,1,
	22,1,23,1,23,1,23,1,23,1,23,1,23,5,23,410,8,23,10,23,12,23,413,9,23,1,23,
	1,23,1,24,1,24,1,24,1,24,5,24,421,8,24,10,24,12,24,424,9,24,1,24,1,24,1,
	25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,3,26,440,8,26,
	1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,3,27,462,8,27,1,28,1,28,1,28,1,28,1,28,1,28,
	5,28,470,8,28,10,28,12,28,473,9,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
	28,1,28,1,28,1,28,3,28,486,8,28,1,29,1,29,1,29,1,29,1,29,3,29,493,8,29,
	1,30,1,30,1,30,1,30,1,30,1,30,3,30,501,8,30,1,30,1,30,1,30,1,30,1,30,1,
	30,1,30,1,30,1,30,3,30,512,8,30,1,30,1,30,1,30,1,30,3,30,518,8,30,1,30,
	1,30,3,30,522,8,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,530,8,30,1,30,1,30,
	1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
	30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,557,8,30,1,30,1,30,1,30,
	1,30,1,30,1,30,1,30,1,30,5,30,567,8,30,10,30,12,30,570,9,30,1,31,1,31,1,
	31,5,31,575,8,31,10,31,12,31,578,9,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,3,32,589,8,32,1,33,1,33,1,33,5,33,594,8,33,10,33,12,33,597,9,
	33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,606,8,34,1,35,1,35,1,35,1,35,
	1,35,1,35,1,35,1,36,1,36,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,
	39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,633,8,39,1,40,5,40,636,8,40,10,40,
	12,40,639,9,40,1,41,1,41,1,41,3,41,644,8,41,1,41,1,41,1,41,1,41,1,42,1,
	42,1,42,1,42,0,1,60,43,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
	36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,
	84,0,7,1,0,36,38,1,0,28,29,1,0,49,51,2,0,22,22,24,24,1,0,23,25,1,0,14,17,
	1,0,18,19,712,0,86,1,0,0,0,2,97,1,0,0,0,4,99,1,0,0,0,6,101,1,0,0,0,8,107,
	1,0,0,0,10,109,1,0,0,0,12,127,1,0,0,0,14,140,1,0,0,0,16,155,1,0,0,0,18,
	183,1,0,0,0,20,199,1,0,0,0,22,269,1,0,0,0,24,271,1,0,0,0,26,289,1,0,0,0,
	28,297,1,0,0,0,30,308,1,0,0,0,32,310,1,0,0,0,34,322,1,0,0,0,36,336,1,0,
	0,0,38,348,1,0,0,0,40,354,1,0,0,0,42,358,1,0,0,0,44,389,1,0,0,0,46,403,
	1,0,0,0,48,416,1,0,0,0,50,427,1,0,0,0,52,439,1,0,0,0,54,461,1,0,0,0,56,
	485,1,0,0,0,58,492,1,0,0,0,60,529,1,0,0,0,62,576,1,0,0,0,64,588,1,0,0,0,
	66,590,1,0,0,0,68,605,1,0,0,0,70,607,1,0,0,0,72,614,1,0,0,0,74,616,1,0,
	0,0,76,620,1,0,0,0,78,632,1,0,0,0,80,637,1,0,0,0,82,640,1,0,0,0,84,649,
	1,0,0,0,86,87,3,18,9,0,87,88,5,58,0,0,88,1,1,0,0,0,89,98,3,0,0,0,90,93,
	3,0,0,0,91,92,5,1,0,0,92,94,3,0,0,0,93,91,1,0,0,0,94,95,1,0,0,0,95,93,1,
	0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,97,89,1,0,0,0,97,90,1,0,0,0,98,3,1,0,
	0,0,99,100,5,58,0,0,100,5,1,0,0,0,101,102,5,58,0,0,102,7,1,0,0,0,103,108,
	3,6,3,0,104,105,3,6,3,0,105,106,3,12,6,0,106,108,1,0,0,0,107,103,1,0,0,
	0,107,104,1,0,0,0,108,9,1,0,0,0,109,110,3,4,2,0,110,11,1,0,0,0,111,112,
	5,2,0,0,112,128,5,3,0,0,113,114,5,2,0,0,114,115,3,18,9,0,115,116,5,3,0,
	0,116,128,1,0,0,0,117,118,5,2,0,0,118,121,3,18,9,0,119,120,5,1,0,0,120,
	122,3,18,9,0,121,119,1,0,0,0,122,123,1,0,0,0,123,121,1,0,0,0,123,124,1,
	0,0,0,124,125,1,0,0,0,125,126,5,3,0,0,126,128,1,0,0,0,127,111,1,0,0,0,127,
	113,1,0,0,0,127,117,1,0,0,0,128,13,1,0,0,0,129,141,3,10,5,0,130,131,3,10,
	5,0,131,132,5,44,0,0,132,137,3,18,9,0,133,134,5,23,0,0,134,136,3,18,9,0,
	135,133,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,141,
	1,0,0,0,139,137,1,0,0,0,140,129,1,0,0,0,140,130,1,0,0,0,141,15,1,0,0,0,
	142,143,5,2,0,0,143,156,5,3,0,0,144,145,5,2,0,0,145,150,3,14,7,0,146,147,
	5,1,0,0,147,149,3,14,7,0,148,146,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,
	0,150,151,1,0,0,0,151,153,1,0,0,0,152,150,1,0,0,0,153,154,5,3,0,0,154,156,
	1,0,0,0,155,142,1,0,0,0,155,144,1,0,0,0,156,17,1,0,0,0,157,158,3,8,4,0,
	158,159,5,4,0,0,159,161,1,0,0,0,160,157,1,0,0,0,161,164,1,0,0,0,162,160,
	1,0,0,0,162,163,1,0,0,0,163,165,1,0,0,0,164,162,1,0,0,0,165,184,3,4,2,0,
	166,167,3,8,4,0,167,168,5,4,0,0,168,170,1,0,0,0,169,166,1,0,0,0,170,173,
	1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,174,1,0,0,0,173,171,1,0,0,0,
	174,176,3,4,2,0,175,177,3,12,6,0,176,175,1,0,0,0,176,177,1,0,0,0,177,184,
	1,0,0,0,178,179,5,31,0,0,179,180,3,20,10,0,180,181,5,5,0,0,181,182,3,18,
	9,0,182,184,1,0,0,0,183,162,1,0,0,0,183,171,1,0,0,0,183,178,1,0,0,0,184,
	19,1,0,0,0,185,186,5,6,0,0,186,200,5,7,0,0,187,200,5,8,0,0,188,189,5,6,
	0,0,189,194,3,18,9,0,190,191,5,1,0,0,191,193,3,18,9,0,192,190,1,0,0,0,193,
	196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,194,1,0,
	0,0,197,198,5,7,0,0,198,200,1,0,0,0,199,185,1,0,0,0,199,187,1,0,0,0,199,
	188,1,0,0,0,200,21,1,0,0,0,201,203,5,9,0,0,202,204,7,0,0,0,203,202,1,0,
	0,0,203,204,1,0,0,0,204,206,1,0,0,0,205,207,5,4,0,0,206,205,1,0,0,0,206,
	207,1,0,0,0,207,208,1,0,0,0,208,213,3,8,4,0,209,210,5,4,0,0,210,212,3,8,
	4,0,211,209,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,1,0,0,0,214,
	218,1,0,0,0,215,213,1,0,0,0,216,217,5,10,0,0,217,219,3,4,2,0,218,216,1,
	0,0,0,218,219,1,0,0,0,219,221,1,0,0,0,220,222,5,43,0,0,221,220,1,0,0,0,
	221,222,1,0,0,0,222,270,1,0,0,0,223,225,5,9,0,0,224,226,7,0,0,0,225,224,
	1,0,0,0,225,226,1,0,0,0,226,228,1,0,0,0,227,229,5,4,0,0,228,227,1,0,0,0,
	228,229,1,0,0,0,229,230,1,0,0,0,230,235,3,8,4,0,231,232,5,4,0,0,232,234,
	3,8,4,0,233,231,1,0,0,0,234,237,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,
	236,238,1,0,0,0,237,235,1,0,0,0,238,239,5,4,0,0,239,240,5,47,0,0,240,243,
	3,4,2,0,241,242,5,10,0,0,242,244,3,4,2,0,243,241,1,0,0,0,243,244,1,0,0,
	0,244,245,1,0,0,0,245,247,5,48,0,0,246,248,5,43,0,0,247,246,1,0,0,0,247,
	248,1,0,0,0,248,270,1,0,0,0,249,251,5,9,0,0,250,252,7,0,0,0,251,250,1,0,
	0,0,251,252,1,0,0,0,252,254,1,0,0,0,253,255,5,4,0,0,254,253,1,0,0,0,254,
	255,1,0,0,0,255,256,1,0,0,0,256,261,3,8,4,0,257,258,5,4,0,0,258,260,3,8,
	4,0,259,257,1,0,0,0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,
	264,1,0,0,0,263,261,1,0,0,0,264,265,5,4,0,0,265,267,5,25,0,0,266,268,5,
	43,0,0,267,266,1,0,0,0,267,268,1,0,0,0,268,270,1,0,0,0,269,201,1,0,0,0,
	269,223,1,0,0,0,269,249,1,0,0,0,270,23,1,0,0,0,271,272,3,4,2,0,272,273,
	5,11,0,0,273,274,3,18,9,0,274,25,1,0,0,0,275,276,5,6,0,0,276,290,5,7,0,
	0,277,290,5,8,0,0,278,279,5,6,0,0,279,284,3,24,12,0,280,281,5,1,0,0,281,
	283,3,24,12,0,282,280,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,
	0,0,0,285,287,1,0,0,0,286,284,1,0,0,0,287,288,5,7,0,0,288,290,1,0,0,0,289,
	275,1,0,0,0,289,277,1,0,0,0,289,278,1,0,0,0,290,27,1,0,0,0,291,292,5,47,
	0,0,292,293,3,72,36,0,293,294,5,48,0,0,294,298,1,0,0,0,295,296,5,47,0,0,
	296,298,5,48,0,0,297,291,1,0,0,0,297,295,1,0,0,0,298,29,1,0,0,0,299,309,
	3,4,2,0,300,301,3,4,2,0,301,302,5,12,0,0,302,303,3,4,2,0,303,309,1,0,0,
	0,304,305,3,4,2,0,305,306,5,12,0,0,306,307,5,61,0,0,307,309,1,0,0,0,308,
	299,1,0,0,0,308,300,1,0,0,0,308,304,1,0,0,0,309,31,1,0,0,0,310,315,3,30,
	15,0,311,312,5,1,0,0,312,314,3,30,15,0,313,311,1,0,0,0,314,317,1,0,0,0,
	315,313,1,0,0,0,315,316,1,0,0,0,316,33,1,0,0,0,317,315,1,0,0,0,318,319,
	5,2,0,0,319,320,3,32,16,0,320,321,5,3,0,0,321,323,1,0,0,0,322,318,1,0,0,
	0,322,323,1,0,0,0,323,324,1,0,0,0,324,325,5,31,0,0,325,327,3,4,2,0,326,
	328,3,16,8,0,327,326,1,0,0,0,327,328,1,0,0,0,328,329,1,0,0,0,329,332,3,
	26,13,0,330,331,5,5,0,0,331,333,3,18,9,0,332,330,1,0,0,0,332,333,1,0,0,
	0,333,334,1,0,0,0,334,335,3,28,14,0,335,35,1,0,0,0,336,337,5,31,0,0,337,
	339,3,4,2,0,338,340,3,16,8,0,339,338,1,0,0,0,339,340,1,0,0,0,340,341,1,
	0,0,0,341,344,3,26,13,0,342,343,5,5,0,0,343,345,3,18,9,0,344,342,1,0,0,
	0,344,345,1,0,0,0,345,346,1,0,0,0,346,347,5,43,0,0,347,37,1,0,0,0,348,349,
	5,40,0,0,349,350,3,4,2,0,350,351,5,11,0,0,351,352,3,18,9,0,352,353,5,43,
	0,0,353,39,1,0,0,0,354,356,3,18,9,0,355,357,3,4,2,0,356,355,1,0,0,0,356,
	357,1,0,0,0,357,41,1,0,0,0,358,359,5,26,0,0,359,361,3,4,2,0,360,362,3,16,
	8,0,361,360,1,0,0,0,361,362,1,0,0,0,362,372,1,0,0,0,363,364,5,42,0,0,364,
	369,3,40,20,0,365,366,5,1,0,0,366,368,3,40,20,0,367,365,1,0,0,0,368,371,
	1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,373,1,0,0,0,371,369,1,0,0,0,
	372,363,1,0,0,0,372,373,1,0,0,0,373,374,1,0,0,0,374,378,5,47,0,0,375,377,
	3,38,19,0,376,375,1,0,0,0,377,380,1,0,0,0,378,376,1,0,0,0,378,379,1,0,0,
	0,379,384,1,0,0,0,380,378,1,0,0,0,381,383,3,34,17,0,382,381,1,0,0,0,383,
	386,1,0,0,0,384,382,1,0,0,0,384,385,1,0,0,0,385,387,1,0,0,0,386,384,1,0,
	0,0,387,388,5,48,0,0,388,43,1,0,0,0,389,390,5,39,0,0,390,392,3,4,2,0,391,
	393,3,16,8,0,392,391,1,0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,398,5,
	47,0,0,395,397,3,36,18,0,396,395,1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,
	0,398,399,1,0,0,0,399,401,1,0,0,0,400,398,1,0,0,0,401,402,5,48,0,0,402,
	45,1,0,0,0,403,404,5,35,0,0,404,405,3,18,9,0,405,406,5,32,0,0,406,407,3,
	18,9,0,407,411,5,47,0,0,408,410,3,34,17,0,409,408,1,0,0,0,410,413,1,0,0,
	0,411,409,1,0,0,0,411,412,1,0,0,0,412,414,1,0,0,0,413,411,1,0,0,0,414,415,
	5,48,0,0,415,47,1,0,0,0,416,417,5,35,0,0,417,418,3,18,9,0,418,422,5,47,
	0,0,419,421,3,34,17,0,420,419,1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,
	423,1,0,0,0,423,425,1,0,0,0,424,422,1,0,0,0,425,426,5,48,0,0,426,49,1,0,
	0,0,427,428,5,35,0,0,428,429,3,18,9,0,429,430,5,32,0,0,430,431,3,18,9,0,
	431,432,5,43,0,0,432,51,1,0,0,0,433,440,5,59,0,0,434,440,5,60,0,0,435,440,
	5,61,0,0,436,440,5,8,0,0,437,440,5,45,0,0,438,440,5,46,0,0,439,433,1,0,
	0,0,439,434,1,0,0,0,439,435,1,0,0,0,439,436,1,0,0,0,439,437,1,0,0,0,439,
	438,1,0,0,0,440,53,1,0,0,0,441,442,7,1,0,0,442,443,5,6,0,0,443,444,5,13,
	0,0,444,445,3,4,2,0,445,446,5,12,0,0,446,447,3,60,30,0,447,448,5,13,0,0,
	448,449,3,60,30,0,449,450,5,7,0,0,450,462,1,0,0,0,451,452,7,1,0,0,452,453,
	5,6,0,0,453,454,5,13,0,0,454,455,3,4,2,0,455,456,5,11,0,0,456,457,3,18,
	9,0,457,458,5,13,0,0,458,459,3,60,30,0,459,460,5,7,0,0,460,462,1,0,0,0,
	461,441,1,0,0,0,461,451,1,0,0,0,462,55,1,0,0,0,463,464,7,2,0,0,464,465,
	5,6,0,0,465,466,5,13,0,0,466,471,3,24,12,0,467,468,5,1,0,0,468,470,3,24,
	12,0,469,467,1,0,0,0,470,473,1,0,0,0,471,469,1,0,0,0,471,472,1,0,0,0,472,
	474,1,0,0,0,473,471,1,0,0,0,474,475,5,13,0,0,475,476,3,60,30,0,476,477,
	5,7,0,0,477,486,1,0,0,0,478,479,7,2,0,0,479,480,5,6,0,0,480,481,5,13,0,
	0,481,482,5,13,0,0,482,483,3,60,30,0,483,484,5,7,0,0,484,486,1,0,0,0,485,
	463,1,0,0,0,485,478,1,0,0,0,486,57,1,0,0,0,487,488,5,47,0,0,488,489,3,60,
	30,0,489,490,5,48,0,0,490,493,1,0,0,0,491,493,3,60,30,0,492,487,1,0,0,0,
	492,491,1,0,0,0,493,59,1,0,0,0,494,495,6,30,-1,0,495,496,7,3,0,0,496,530,
	3,60,30,17,497,530,3,64,32,0,498,500,3,62,31,0,499,501,3,12,6,0,500,499,
	1,0,0,0,500,501,1,0,0,0,501,502,1,0,0,0,502,503,3,68,34,0,503,530,1,0,0,
	0,504,505,5,33,0,0,505,506,5,6,0,0,506,507,3,60,30,0,507,508,5,7,0,0,508,
	511,3,58,29,0,509,510,5,34,0,0,510,512,3,58,29,0,511,509,1,0,0,0,511,512,
	1,0,0,0,512,530,1,0,0,0,513,514,5,40,0,0,514,517,3,4,2,0,515,516,5,11,0,
	0,516,518,3,18,9,0,517,515,1,0,0,0,517,518,1,0,0,0,518,521,1,0,0,0,519,
	520,5,12,0,0,520,522,3,60,30,0,521,519,1,0,0,0,521,522,1,0,0,0,522,523,
	1,0,0,0,523,524,5,43,0,0,524,525,3,60,30,4,525,530,1,0,0,0,526,530,3,54,
	27,0,527,530,3,56,28,0,528,530,3,70,35,0,529,494,1,0,0,0,529,497,1,0,0,
	0,529,498,1,0,0,0,529,504,1,0,0,0,529,513,1,0,0,0,529,526,1,0,0,0,529,527,
	1,0,0,0,529,528,1,0,0,0,530,568,1,0,0,0,531,532,10,10,0,0,532,533,7,4,0,
	0,533,567,3,60,30,11,534,535,10,9,0,0,535,536,7,5,0,0,536,567,3,60,30,10,
	537,538,10,8,0,0,538,539,7,6,0,0,539,567,3,60,30,9,540,541,10,7,0,0,541,
	542,5,20,0,0,542,567,3,60,30,8,543,544,10,6,0,0,544,545,5,21,0,0,545,567,
	3,60,30,7,546,547,10,14,0,0,547,548,5,27,0,0,548,549,5,6,0,0,549,550,3,
	18,9,0,550,551,5,7,0,0,551,567,1,0,0,0,552,553,10,13,0,0,553,554,5,27,0,
	0,554,556,3,4,2,0,555,557,3,12,6,0,556,555,1,0,0,0,556,557,1,0,0,0,557,
	558,1,0,0,0,558,559,3,68,34,0,559,567,1,0,0,0,560,561,10,12,0,0,561,562,
	5,27,0,0,562,567,3,4,2,0,563,564,10,11,0,0,564,565,5,30,0,0,565,567,3,18,
	9,0,566,531,1,0,0,0,566,534,1,0,0,0,566,537,1,0,0,0,566,540,1,0,0,0,566,
	543,1,0,0,0,566,546,1,0,0,0,566,552,1,0,0,0,566,560,1,0,0,0,566,563,1,0,
	0,0,567,570,1,0,0,0,568,566,1,0,0,0,568,569,1,0,0,0,569,61,1,0,0,0,570,
	568,1,0,0,0,571,572,3,8,4,0,572,573,5,4,0,0,573,575,1,0,0,0,574,571,1,0,
	0,0,575,578,1,0,0,0,576,574,1,0,0,0,576,577,1,0,0,0,577,579,1,0,0,0,578,
	576,1,0,0,0,579,580,3,4,2,0,580,63,1,0,0,0,581,582,5,6,0,0,582,583,3,60,
	30,0,583,584,5,7,0,0,584,589,1,0,0,0,585,589,5,36,0,0,586,589,3,52,26,0,
	587,589,3,4,2,0,588,581,1,0,0,0,588,585,1,0,0,0,588,586,1,0,0,0,588,587,
	1,0,0,0,589,65,1,0,0,0,590,595,3,60,30,0,591,592,5,1,0,0,592,594,3,60,30,
	0,593,591,1,0,0,0,594,597,1,0,0,0,595,593,1,0,0,0,595,596,1,0,0,0,596,67,
	1,0,0,0,597,595,1,0,0,0,598,599,5,6,0,0,599,606,5,7,0,0,600,606,5,8,0,0,
	601,602,5,6,0,0,602,603,3,66,33,0,603,604,5,7,0,0,604,606,1,0,0,0,605,598,
	1,0,0,0,605,600,1,0,0,0,605,601,1,0,0,0,606,69,1,0,0,0,607,608,5,53,0,0,
	608,609,3,2,1,0,609,610,5,54,0,0,610,611,3,60,30,0,611,612,5,55,0,0,612,
	613,3,66,33,0,613,71,1,0,0,0,614,615,3,60,30,0,615,73,1,0,0,0,616,617,5,
	2,0,0,617,618,3,32,16,0,618,619,5,3,0,0,619,75,1,0,0,0,620,621,3,74,37,
	0,621,622,3,36,18,0,622,77,1,0,0,0,623,633,3,22,11,0,624,633,3,42,21,0,
	625,633,3,34,17,0,626,633,3,46,23,0,627,633,3,48,24,0,628,633,3,50,25,0,
	629,633,3,44,22,0,630,633,3,82,41,0,631,633,3,76,38,0,632,623,1,0,0,0,632,
	624,1,0,0,0,632,625,1,0,0,0,632,626,1,0,0,0,632,627,1,0,0,0,632,628,1,0,
	0,0,632,629,1,0,0,0,632,630,1,0,0,0,632,631,1,0,0,0,633,79,1,0,0,0,634,
	636,3,78,39,0,635,634,1,0,0,0,636,639,1,0,0,0,637,635,1,0,0,0,637,638,1,
	0,0,0,638,81,1,0,0,0,639,637,1,0,0,0,640,641,5,41,0,0,641,643,3,4,2,0,642,
	644,3,16,8,0,643,642,1,0,0,0,643,644,1,0,0,0,644,645,1,0,0,0,645,646,5,
	47,0,0,646,647,3,80,40,0,647,648,5,48,0,0,648,83,1,0,0,0,649,650,3,80,40,
	0,650,651,5,0,0,1,651,85,1,0,0,0,70,95,97,107,123,127,137,140,150,155,162,
	171,176,183,194,199,203,206,213,218,221,225,228,235,243,247,251,254,261,
	267,269,284,289,297,308,315,322,327,332,339,344,356,361,369,372,378,384,
	392,398,411,422,439,461,471,485,492,500,511,517,521,529,556,566,568,576,
	588,595,605,632,637,643];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MirrorQLParser.__ATN) {
			MirrorQLParser.__ATN = new ATNDeserializer().deserialize(MirrorQLParser._serializedATN);
		}

		return MirrorQLParser.__ATN;
	}


	static DecisionsToDFA = MirrorQLParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Variable_declareContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
	public ID(): TerminalNode {
		return this.getToken(MirrorQLParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_variable_declare;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterVariable_declare) {
	 		listener.enterVariable_declare(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitVariable_declare) {
	 		listener.exitVariable_declare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitVariable_declare) {
			return visitor.visitVariable_declare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_declare_listContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_declare_list(): Variable_declareContext[] {
		return this.getTypedRuleContexts(Variable_declareContext) as Variable_declareContext[];
	}
	public variable_declare(i: number): Variable_declareContext {
		return this.getTypedRuleContext(Variable_declareContext, i) as Variable_declareContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_variable_declare_list;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterVariable_declare_list) {
	 		listener.enterVariable_declare_list(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitVariable_declare_list) {
	 		listener.exitVariable_declare_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitVariable_declare_list) {
			return visitor.visitVariable_declare_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MirrorQLParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_identifier;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Module_identifierContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MirrorQLParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_module_identifier;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterModule_identifier) {
	 		listener.enterModule_identifier(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitModule_identifier) {
	 		listener.exitModule_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitModule_identifier) {
			return visitor.visitModule_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Module_exprContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_module_expr;
	}
	public copyFrom(ctx: Module_exprContext): void {
		super.copyFrom(ctx);
	}
}
export class ModuleTypeApplyContext extends Module_exprContext {
	public _name!: Module_identifierContext;
	public _type_args!: Type_arg_listContext;
	constructor(parser: MirrorQLParser, ctx: Module_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public module_identifier(): Module_identifierContext {
		return this.getTypedRuleContext(Module_identifierContext, 0) as Module_identifierContext;
	}
	public type_arg_list(): Type_arg_listContext {
		return this.getTypedRuleContext(Type_arg_listContext, 0) as Type_arg_listContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterModuleTypeApply) {
	 		listener.enterModuleTypeApply(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitModuleTypeApply) {
	 		listener.exitModuleTypeApply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitModuleTypeApply) {
			return visitor.visitModuleTypeApply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModuleNameContext extends Module_exprContext {
	public _name!: Module_identifierContext;
	constructor(parser: MirrorQLParser, ctx: Module_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public module_identifier(): Module_identifierContext {
		return this.getTypedRuleContext(Module_identifierContext, 0) as Module_identifierContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterModuleName) {
	 		listener.enterModuleName(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitModuleName) {
	 		listener.exitModuleName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitModuleName) {
			return visitor.visitModuleName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_nameContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_type_name;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterType_name) {
	 		listener.enterType_name(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitType_name) {
	 		listener.exitType_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitType_name) {
			return visitor.visitType_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_arg_listContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_expr_list(): Type_exprContext[] {
		return this.getTypedRuleContexts(Type_exprContext) as Type_exprContext[];
	}
	public type_expr(i: number): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, i) as Type_exprContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_type_arg_list;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterType_arg_list) {
	 		listener.enterType_arg_list(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitType_arg_list) {
	 		listener.exitType_arg_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitType_arg_list) {
			return visitor.visitType_arg_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_paraContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_name(): Type_nameContext {
		return this.getTypedRuleContext(Type_nameContext, 0) as Type_nameContext;
	}
	public IMPL_OP(): TerminalNode {
		return this.getToken(MirrorQLParser.IMPL_OP, 0);
	}
	public type_expr_list(): Type_exprContext[] {
		return this.getTypedRuleContexts(Type_exprContext) as Type_exprContext[];
	}
	public type_expr(i: number): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, i) as Type_exprContext;
	}
	public ADD_list(): TerminalNode[] {
	    	return this.getTokens(MirrorQLParser.ADD);
	}
	public ADD(i: number): TerminalNode {
		return this.getToken(MirrorQLParser.ADD, i);
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_type_para;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterType_para) {
	 		listener.enterType_para(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitType_para) {
	 		listener.exitType_para(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitType_para) {
			return visitor.visitType_para(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_para_listContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_para_list(): Type_paraContext[] {
		return this.getTypedRuleContexts(Type_paraContext) as Type_paraContext[];
	}
	public type_para(i: number): Type_paraContext {
		return this.getTypedRuleContext(Type_paraContext, i) as Type_paraContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_type_para_list;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterType_para_list) {
	 		listener.enterType_para_list(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitType_para_list) {
	 		listener.exitType_para_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitType_para_list) {
			return visitor.visitType_para_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_exprContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_type_expr;
	}
	public copyFrom(ctx: Type_exprContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeFunctionContext extends Type_exprContext {
	public _ret_type!: Type_exprContext;
	constructor(parser: MirrorQLParser, ctx: Type_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(MirrorQLParser.FUNCTION, 0);
	}
	public parameter_type_list(): Parameter_type_listContext {
		return this.getTypedRuleContext(Parameter_type_listContext, 0) as Parameter_type_listContext;
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterTypeFunction) {
	 		listener.enterTypeFunction(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitTypeFunction) {
	 		listener.exitTypeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitTypeFunction) {
			return visitor.visitTypeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeNameContext extends Type_exprContext {
	public _name!: IdentifierContext;
	constructor(parser: MirrorQLParser, ctx: Type_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public module_expr_list(): Module_exprContext[] {
		return this.getTypedRuleContexts(Module_exprContext) as Module_exprContext[];
	}
	public module_expr(i: number): Module_exprContext {
		return this.getTypedRuleContext(Module_exprContext, i) as Module_exprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeApplyContext extends Type_exprContext {
	public _name!: IdentifierContext;
	public _type_args!: Type_arg_listContext;
	constructor(parser: MirrorQLParser, ctx: Type_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public module_expr_list(): Module_exprContext[] {
		return this.getTypedRuleContexts(Module_exprContext) as Module_exprContext[];
	}
	public module_expr(i: number): Module_exprContext {
		return this.getTypedRuleContext(Module_exprContext, i) as Module_exprContext;
	}
	public type_arg_list(): Type_arg_listContext {
		return this.getTypedRuleContext(Type_arg_listContext, 0) as Type_arg_listContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterTypeApply) {
	 		listener.enterTypeApply(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitTypeApply) {
	 		listener.exitTypeApply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitTypeApply) {
			return visitor.visitTypeApply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_type_listContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_expr_list(): Type_exprContext[] {
		return this.getTypedRuleContexts(Type_exprContext) as Type_exprContext[];
	}
	public type_expr(i: number): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, i) as Type_exprContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_parameter_type_list;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterParameter_type_list) {
	 		listener.enterParameter_type_list(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitParameter_type_list) {
	 		listener.exitParameter_type_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitParameter_type_list) {
			return visitor.visitParameter_type_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Use_stmtContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_use_stmt;
	}
	public copyFrom(ctx: Use_stmtContext): void {
		super.copyFrom(ctx);
	}
}
export class EntityAliasContext extends Use_stmtContext {
	public _prefix!: Token;
	public _entity!: IdentifierContext;
	public _alias!: IdentifierContext;
	constructor(parser: MirrorQLParser, ctx: Use_stmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public module_expr_list(): Module_exprContext[] {
		return this.getTypedRuleContexts(Module_exprContext) as Module_exprContext[];
	}
	public module_expr(i: number): Module_exprContext {
		return this.getTypedRuleContext(Module_exprContext, i) as Module_exprContext;
	}
	public OBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.OBRACE, 0);
	}
	public CBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.CBRACE, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MirrorQLParser.SEMICOLON, 0);
	}
	public SELF(): TerminalNode {
		return this.getToken(MirrorQLParser.SELF, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(MirrorQLParser.SUPER, 0);
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(MirrorQLParser.PACKAGE, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterEntityAlias) {
	 		listener.enterEntityAlias(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitEntityAlias) {
	 		listener.exitEntityAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitEntityAlias) {
			return visitor.visitEntityAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModuleAliasContext extends Use_stmtContext {
	public _prefix!: Token;
	public _alias!: IdentifierContext;
	constructor(parser: MirrorQLParser, ctx: Use_stmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public module_expr_list(): Module_exprContext[] {
		return this.getTypedRuleContexts(Module_exprContext) as Module_exprContext[];
	}
	public module_expr(i: number): Module_exprContext {
		return this.getTypedRuleContext(Module_exprContext, i) as Module_exprContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MirrorQLParser.SEMICOLON, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SELF(): TerminalNode {
		return this.getToken(MirrorQLParser.SELF, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(MirrorQLParser.SUPER, 0);
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(MirrorQLParser.PACKAGE, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterModuleAlias) {
	 		listener.enterModuleAlias(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitModuleAlias) {
	 		listener.exitModuleAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitModuleAlias) {
			return visitor.visitModuleAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WildcardUseContext extends Use_stmtContext {
	public _prefix!: Token;
	constructor(parser: MirrorQLParser, ctx: Use_stmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public module_expr_list(): Module_exprContext[] {
		return this.getTypedRuleContexts(Module_exprContext) as Module_exprContext[];
	}
	public module_expr(i: number): Module_exprContext {
		return this.getTypedRuleContext(Module_exprContext, i) as Module_exprContext;
	}
	public MUL(): TerminalNode {
		return this.getToken(MirrorQLParser.MUL, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MirrorQLParser.SEMICOLON, 0);
	}
	public SELF(): TerminalNode {
		return this.getToken(MirrorQLParser.SELF, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(MirrorQLParser.SUPER, 0);
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(MirrorQLParser.PACKAGE, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterWildcardUse) {
	 		listener.enterWildcardUse(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitWildcardUse) {
	 		listener.exitWildcardUse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitWildcardUse) {
			return visitor.visitWildcardUse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_declareContext extends ParserRuleContext {
	public _para_name!: IdentifierContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_parameter_declare;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterParameter_declare) {
	 		listener.enterParameter_declare(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitParameter_declare) {
	 		listener.exitParameter_declare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitParameter_declare) {
			return visitor.visitParameter_declare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_declare_listContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_declare_list(): Parameter_declareContext[] {
		return this.getTypedRuleContexts(Parameter_declareContext) as Parameter_declareContext[];
	}
	public parameter_declare(i: number): Parameter_declareContext {
		return this.getTypedRuleContext(Parameter_declareContext, i) as Parameter_declareContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_parameter_declare_list;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterParameter_declare_list) {
	 		listener.enterParameter_declare_list(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitParameter_declare_list) {
	 		listener.exitParameter_declare_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitParameter_declare_list) {
			return visitor.visitParameter_declare_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_bodyContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.OBRACE, 0);
	}
	public expr_root(): Expr_rootContext {
		return this.getTypedRuleContext(Expr_rootContext, 0) as Expr_rootContext;
	}
	public CBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.CBRACE, 0);
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_func_body;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterFunc_body) {
	 		listener.enterFunc_body(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitFunc_body) {
	 		listener.exitFunc_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitFunc_body) {
			return visitor.visitFunc_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_attrContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_meta_attr;
	}
	public copyFrom(ctx: Meta_attrContext): void {
		super.copyFrom(ctx);
	}
}
export class StringAttributeContext extends Meta_attrContext {
	public _name!: IdentifierContext;
	public _value!: Token;
	constructor(parser: MirrorQLParser, ctx: Meta_attrContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(MirrorQLParser.STRING, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterStringAttribute) {
	 		listener.enterStringAttribute(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitStringAttribute) {
	 		listener.exitStringAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitStringAttribute) {
			return visitor.visitStringAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameAttributeContext extends Meta_attrContext {
	public _name!: IdentifierContext;
	public _value!: IdentifierContext;
	constructor(parser: MirrorQLParser, ctx: Meta_attrContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterNameAttribute) {
	 		listener.enterNameAttribute(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitNameAttribute) {
	 		listener.exitNameAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitNameAttribute) {
			return visitor.visitNameAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttributeDeclContext extends Meta_attrContext {
	constructor(parser: MirrorQLParser, ctx: Meta_attrContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterAttributeDecl) {
	 		listener.enterAttributeDecl(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitAttributeDecl) {
	 		listener.exitAttributeDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitAttributeDecl) {
			return visitor.visitAttributeDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_attrsContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public meta_attr_list(): Meta_attrContext[] {
		return this.getTypedRuleContexts(Meta_attrContext) as Meta_attrContext[];
	}
	public meta_attr(i: number): Meta_attrContext {
		return this.getTypedRuleContext(Meta_attrContext, i) as Meta_attrContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_meta_attrs;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterMeta_attrs) {
	 		listener.enterMeta_attrs(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitMeta_attrs) {
	 		listener.exitMeta_attrs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitMeta_attrs) {
			return visitor.visitMeta_attrs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_declartionContext extends ParserRuleContext {
	public _ret_type!: Type_exprContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(MirrorQLParser.FUNCTION, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public parameter_declare_list(): Parameter_declare_listContext {
		return this.getTypedRuleContext(Parameter_declare_listContext, 0) as Parameter_declare_listContext;
	}
	public func_body(): Func_bodyContext {
		return this.getTypedRuleContext(Func_bodyContext, 0) as Func_bodyContext;
	}
	public meta_attrs(): Meta_attrsContext {
		return this.getTypedRuleContext(Meta_attrsContext, 0) as Meta_attrsContext;
	}
	public type_para_list(): Type_para_listContext {
		return this.getTypedRuleContext(Type_para_listContext, 0) as Type_para_listContext;
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_func_declartion;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterFunc_declartion) {
	 		listener.enterFunc_declartion(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitFunc_declartion) {
	 		listener.exitFunc_declartion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitFunc_declartion) {
			return visitor.visitFunc_declartion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_sig_declContext extends ParserRuleContext {
	public _ret_type!: Type_exprContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(MirrorQLParser.FUNCTION, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public parameter_declare_list(): Parameter_declare_listContext {
		return this.getTypedRuleContext(Parameter_declare_listContext, 0) as Parameter_declare_listContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MirrorQLParser.SEMICOLON, 0);
	}
	public type_para_list(): Type_para_listContext {
		return this.getTypedRuleContext(Type_para_listContext, 0) as Type_para_listContext;
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_func_sig_decl;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterFunc_sig_decl) {
	 		listener.enterFunc_sig_decl(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitFunc_sig_decl) {
	 		listener.exitFunc_sig_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitFunc_sig_decl) {
			return visitor.visitFunc_sig_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Field_declarationContext extends ParserRuleContext {
	public _field_type!: Type_exprContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LET(): TerminalNode {
		return this.getToken(MirrorQLParser.LET, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MirrorQLParser.SEMICOLON, 0);
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_field_declaration;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterField_declaration) {
	 		listener.enterField_declaration(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitField_declaration) {
	 		listener.exitField_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitField_declaration) {
			return visitor.visitField_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Base_type_declarationContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_base_type_declaration;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterBase_type_declaration) {
	 		listener.enterBase_type_declaration(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitBase_type_declaration) {
	 		listener.exitBase_type_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitBase_type_declaration) {
			return visitor.visitBase_type_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_declarationContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _fields!: Field_declarationContext;
	public _members!: Func_declartionContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(MirrorQLParser.CLASS, 0);
	}
	public OBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.OBRACE, 0);
	}
	public CBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.CBRACE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type_para_list(): Type_para_listContext {
		return this.getTypedRuleContext(Type_para_listContext, 0) as Type_para_listContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(MirrorQLParser.EXTENDS, 0);
	}
	public base_type_declaration_list(): Base_type_declarationContext[] {
		return this.getTypedRuleContexts(Base_type_declarationContext) as Base_type_declarationContext[];
	}
	public base_type_declaration(i: number): Base_type_declarationContext {
		return this.getTypedRuleContext(Base_type_declarationContext, i) as Base_type_declarationContext;
	}
	public field_declaration_list(): Field_declarationContext[] {
		return this.getTypedRuleContexts(Field_declarationContext) as Field_declarationContext[];
	}
	public field_declaration(i: number): Field_declarationContext {
		return this.getTypedRuleContext(Field_declarationContext, i) as Field_declarationContext;
	}
	public func_declartion_list(): Func_declartionContext[] {
		return this.getTypedRuleContexts(Func_declartionContext) as Func_declartionContext[];
	}
	public func_declartion(i: number): Func_declartionContext {
		return this.getTypedRuleContext(Func_declartionContext, i) as Func_declartionContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_class_declaration;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterClass_declaration) {
	 		listener.enterClass_declaration(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitClass_declaration) {
	 		listener.exitClass_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitClass_declaration) {
			return visitor.visitClass_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Trait_declarationContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _members!: Func_sig_declContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRAIT(): TerminalNode {
		return this.getToken(MirrorQLParser.TRAIT, 0);
	}
	public OBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.OBRACE, 0);
	}
	public CBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.CBRACE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type_para_list(): Type_para_listContext {
		return this.getTypedRuleContext(Type_para_listContext, 0) as Type_para_listContext;
	}
	public func_sig_decl_list(): Func_sig_declContext[] {
		return this.getTypedRuleContexts(Func_sig_declContext) as Func_sig_declContext[];
	}
	public func_sig_decl(i: number): Func_sig_declContext {
		return this.getTypedRuleContext(Func_sig_declContext, i) as Func_sig_declContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_trait_declaration;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterTrait_declaration) {
	 		listener.enterTrait_declaration(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitTrait_declaration) {
	 		listener.exitTrait_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitTrait_declaration) {
			return visitor.visitTrait_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Impl_trait_declarationContext extends ParserRuleContext {
	public _trait_type_expr!: Type_exprContext;
	public _class_type_expr!: Type_exprContext;
	public _members!: Func_declartionContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPL(): TerminalNode {
		return this.getToken(MirrorQLParser.IMPL, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(MirrorQLParser.FOR, 0);
	}
	public OBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.OBRACE, 0);
	}
	public CBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.CBRACE, 0);
	}
	public type_expr_list(): Type_exprContext[] {
		return this.getTypedRuleContexts(Type_exprContext) as Type_exprContext[];
	}
	public type_expr(i: number): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, i) as Type_exprContext;
	}
	public func_declartion_list(): Func_declartionContext[] {
		return this.getTypedRuleContexts(Func_declartionContext) as Func_declartionContext[];
	}
	public func_declartion(i: number): Func_declartionContext {
		return this.getTypedRuleContext(Func_declartionContext, i) as Func_declartionContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_impl_trait_declaration;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterImpl_trait_declaration) {
	 		listener.enterImpl_trait_declaration(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitImpl_trait_declaration) {
	 		listener.exitImpl_trait_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitImpl_trait_declaration) {
			return visitor.visitImpl_trait_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Impl_declarationContext extends ParserRuleContext {
	public _class_type_expr!: Type_exprContext;
	public _members!: Func_declartionContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPL(): TerminalNode {
		return this.getToken(MirrorQLParser.IMPL, 0);
	}
	public OBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.OBRACE, 0);
	}
	public CBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.CBRACE, 0);
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
	public func_declartion_list(): Func_declartionContext[] {
		return this.getTypedRuleContexts(Func_declartionContext) as Func_declartionContext[];
	}
	public func_declartion(i: number): Func_declartionContext {
		return this.getTypedRuleContext(Func_declartionContext, i) as Func_declartionContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_impl_declaration;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterImpl_declaration) {
	 		listener.enterImpl_declaration(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitImpl_declaration) {
	 		listener.exitImpl_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitImpl_declaration) {
			return visitor.visitImpl_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Impl_copyContext extends ParserRuleContext {
	public _trait_type_expr!: Type_exprContext;
	public _class_type_expr!: Type_exprContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPL(): TerminalNode {
		return this.getToken(MirrorQLParser.IMPL, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(MirrorQLParser.FOR, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MirrorQLParser.SEMICOLON, 0);
	}
	public type_expr_list(): Type_exprContext[] {
		return this.getTypedRuleContexts(Type_exprContext) as Type_exprContext[];
	}
	public type_expr(i: number): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, i) as Type_exprContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_impl_copy;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterImpl_copy) {
	 		listener.enterImpl_copy(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitImpl_copy) {
	 		listener.exitImpl_copy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitImpl_copy) {
			return visitor.visitImpl_copy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_literal;
	}
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class StrLiteralContext extends LiteralContext {
	constructor(parser: MirrorQLParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(MirrorQLParser.STRING, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterStrLiteral) {
	 		listener.enterStrLiteral(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitStrLiteral) {
	 		listener.exitStrLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitStrLiteral) {
			return visitor.visitStrLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntLiteralContext extends LiteralContext {
	constructor(parser: MirrorQLParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INT(): TerminalNode {
		return this.getToken(MirrorQLParser.INT, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterIntLiteral) {
	 		listener.enterIntLiteral(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitIntLiteral) {
	 		listener.exitIntLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitIntLiteral) {
			return visitor.visitIntLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatLiteralContext extends LiteralContext {
	constructor(parser: MirrorQLParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(MirrorQLParser.FLOAT, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterFloatLiteral) {
	 		listener.enterFloatLiteral(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitFloatLiteral) {
	 		listener.exitFloatLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitFloatLiteral) {
			return visitor.visitFloatLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoLiteralContext extends LiteralContext {
	constructor(parser: MirrorQLParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NO(): TerminalNode {
		return this.getToken(MirrorQLParser.NO, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterNoLiteral) {
	 		listener.enterNoLiteral(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitNoLiteral) {
	 		listener.exitNoLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitNoLiteral) {
			return visitor.visitNoLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnitLiteralContext extends LiteralContext {
	constructor(parser: MirrorQLParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterUnitLiteral) {
	 		listener.enterUnitLiteral(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitUnitLiteral) {
	 		listener.exitUnitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitUnitLiteral) {
			return visitor.visitUnitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class YesLiteralContext extends LiteralContext {
	constructor(parser: MirrorQLParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public YES(): TerminalNode {
		return this.getToken(MirrorQLParser.YES, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterYesLiteral) {
	 		listener.enterYesLiteral(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitYesLiteral) {
	 		listener.exitYesLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitYesLiteral) {
			return visitor.visitYesLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Quantifier_exprContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_quantifier_expr;
	}
	public copyFrom(ctx: Quantifier_exprContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueQuantifierContext extends Quantifier_exprContext {
	public _kind!: Token;
	public _name!: IdentifierContext;
	public _bind!: ExprContext;
	public _body!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: Quantifier_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public EXISTS(): TerminalNode {
		return this.getToken(MirrorQLParser.EXISTS, 0);
	}
	public FORALL(): TerminalNode {
		return this.getToken(MirrorQLParser.FORALL, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterValueQuantifier) {
	 		listener.enterValueQuantifier(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitValueQuantifier) {
	 		listener.exitValueQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitValueQuantifier) {
			return visitor.visitValueQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeQuantifierContext extends Quantifier_exprContext {
	public _kind!: Token;
	public _name!: IdentifierContext;
	public _body!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: Quantifier_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public EXISTS(): TerminalNode {
		return this.getToken(MirrorQLParser.EXISTS, 0);
	}
	public FORALL(): TerminalNode {
		return this.getToken(MirrorQLParser.FORALL, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterTypeQuantifier) {
	 		listener.enterTypeQuantifier(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitTypeQuantifier) {
	 		listener.exitTypeQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitTypeQuantifier) {
			return visitor.visitTypeQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aggregate_exprContext extends ParserRuleContext {
	public _kind!: Token;
	public _body!: ExprContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_declare_list(): Parameter_declareContext[] {
		return this.getTypedRuleContexts(Parameter_declareContext) as Parameter_declareContext[];
	}
	public parameter_declare(i: number): Parameter_declareContext {
		return this.getTypedRuleContext(Parameter_declareContext, i) as Parameter_declareContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public MAX(): TerminalNode {
		return this.getToken(MirrorQLParser.MAX, 0);
	}
	public MIN(): TerminalNode {
		return this.getToken(MirrorQLParser.MIN, 0);
	}
	public COUNT(): TerminalNode {
		return this.getToken(MirrorQLParser.COUNT, 0);
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_aggregate_expr;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterAggregate_expr) {
	 		listener.enterAggregate_expr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitAggregate_expr) {
	 		listener.exitAggregate_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitAggregate_expr) {
			return visitor.visitAggregate_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.OBRACE, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public CBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.CBRACE, 0);
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_block;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class CoerceExprContext extends ExprContext {
	public _base!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MirrorQLParser.DOT, 0);
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterCoerceExpr) {
	 		listener.enterCoerceExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitCoerceExpr) {
	 		listener.exitCoerceExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitCoerceExpr) {
			return visitor.visitCoerceExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceofExprContext extends ExprContext {
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public INSTANCEOF(): TerminalNode {
		return this.getToken(MirrorQLParser.INSTANCEOF, 0);
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterInstanceofExpr) {
	 		listener.enterInstanceofExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitInstanceofExpr) {
	 		listener.exitInstanceofExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitInstanceofExpr) {
			return visitor.visitInstanceofExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfElseExprContext extends ExprContext {
	public _cond!: ExprContext;
	public _b1!: BlockContext;
	public _b2!: BlockContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(MirrorQLParser.IF, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(MirrorQLParser.ELSE, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterIfElseExpr) {
	 		listener.enterIfElseExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitIfElseExpr) {
	 		listener.exitIfElseExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitIfElseExpr) {
			return visitor.visitIfElseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExprContext {
	public _lhs!: ExprContext;
	public _rhs!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OR(): TerminalNode {
		return this.getToken(MirrorQLParser.OR, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterOrExpr) {
	 		listener.enterOrExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitOrExpr) {
	 		listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttributeExprContext extends ExprContext {
	public _base!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MirrorQLParser.DOT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterAttributeExpr) {
	 		listener.enterAttributeExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitAttributeExpr) {
	 		listener.exitAttributeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitAttributeExpr) {
			return visitor.visitAttributeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetExprContext extends ExprContext {
	public _e1!: ExprContext;
	public _e2!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LET(): TerminalNode {
		return this.getToken(MirrorQLParser.LET, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MirrorQLParser.SEMICOLON, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public type_expr(): Type_exprContext {
		return this.getTypedRuleContext(Type_exprContext, 0) as Type_exprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterLetExpr) {
	 		listener.enterLetExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitLetExpr) {
	 		listener.exitLetExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitLetExpr) {
			return visitor.visitLetExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MethodInvokeExprContext extends ExprContext {
	public _base!: ExprContext;
	public _type_args!: Type_arg_listContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public args_list(): Args_listContext {
		return this.getTypedRuleContext(Args_listContext, 0) as Args_listContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MirrorQLParser.DOT, 0);
	}
	public type_arg_list(): Type_arg_listContext {
		return this.getTypedRuleContext(Type_arg_listContext, 0) as Type_arg_listContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterMethodInvokeExpr) {
	 		listener.enterMethodInvokeExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitMethodInvokeExpr) {
	 		listener.exitMethodInvokeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitMethodInvokeExpr) {
			return visitor.visitMethodInvokeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExprContext extends ExprContext {
	public _op!: Token;
	public _base!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(MirrorQLParser.MINUS, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MirrorQLParser.NOT, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterUnaryExpr) {
	 		listener.enterUnaryExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitUnaryExpr) {
	 		listener.exitUnaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimaryExprContext extends ExprContext {
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterPrimaryExpr) {
	 		listener.enterPrimaryExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitPrimaryExpr) {
	 		listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectExprContext extends ExprContext {
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public select_expr(): Select_exprContext {
		return this.getTypedRuleContext(Select_exprContext, 0) as Select_exprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterSelectExpr) {
	 		listener.enterSelectExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitSelectExpr) {
	 		listener.exitSelectExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitSelectExpr) {
			return visitor.visitSelectExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuantifierExprContext extends ExprContext {
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public quantifier_expr(): Quantifier_exprContext {
		return this.getTypedRuleContext(Quantifier_exprContext, 0) as Quantifier_exprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterQuantifierExpr) {
	 		listener.enterQuantifierExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitQuantifierExpr) {
	 		listener.exitQuantifierExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitQuantifierExpr) {
			return visitor.visitQuantifierExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AggregateExprContext extends ExprContext {
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public aggregate_expr(): Aggregate_exprContext {
		return this.getTypedRuleContext(Aggregate_exprContext, 0) as Aggregate_exprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterAggregateExpr) {
	 		listener.enterAggregateExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitAggregateExpr) {
	 		listener.exitAggregateExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitAggregateExpr) {
			return visitor.visitAggregateExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticExprContext extends ExprContext {
	public _lhs!: ExprContext;
	public _op!: Token;
	public _rhs!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(MirrorQLParser.ADD, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MirrorQLParser.MINUS, 0);
	}
	public MUL(): TerminalNode {
		return this.getToken(MirrorQLParser.MUL, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterArithmeticExpr) {
	 		listener.enterArithmeticExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitArithmeticExpr) {
	 		listener.exitArithmeticExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitArithmeticExpr) {
			return visitor.visitArithmeticExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StaticInvokeExprContext extends ExprContext {
	public _func!: Module_level_accessContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public args_list(): Args_listContext {
		return this.getTypedRuleContext(Args_listContext, 0) as Args_listContext;
	}
	public module_level_access(): Module_level_accessContext {
		return this.getTypedRuleContext(Module_level_accessContext, 0) as Module_level_accessContext;
	}
	public type_arg_list(): Type_arg_listContext {
		return this.getTypedRuleContext(Type_arg_listContext, 0) as Type_arg_listContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterStaticInvokeExpr) {
	 		listener.enterStaticInvokeExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitStaticInvokeExpr) {
	 		listener.exitStaticInvokeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitStaticInvokeExpr) {
			return visitor.visitStaticInvokeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompareExprContext extends ExprContext {
	public _lhs!: ExprContext;
	public _op!: Token;
	public _rhs!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterCompareExpr) {
	 		listener.enterCompareExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitCompareExpr) {
	 		listener.exitCompareExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitCompareExpr) {
			return visitor.visitCompareExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualExprContext extends ExprContext {
	public _lhs!: ExprContext;
	public _op!: Token;
	public _rhs!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterEqualExpr) {
	 		listener.enterEqualExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitEqualExpr) {
	 		listener.exitEqualExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitEqualExpr) {
			return visitor.visitEqualExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprContext extends ExprContext {
	public _lhs!: ExprContext;
	public _rhs!: ExprContext;
	constructor(parser: MirrorQLParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AND(): TerminalNode {
		return this.getToken(MirrorQLParser.AND, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterAndExpr) {
	 		listener.enterAndExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitAndExpr) {
	 		listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Module_level_accessContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public module_expr_list(): Module_exprContext[] {
		return this.getTypedRuleContexts(Module_exprContext) as Module_exprContext[];
	}
	public module_expr(i: number): Module_exprContext {
		return this.getTypedRuleContext(Module_exprContext, i) as Module_exprContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_module_level_access;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterModule_level_access) {
	 		listener.enterModule_level_access(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitModule_level_access) {
	 		listener.exitModule_level_access(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitModule_level_access) {
			return visitor.visitModule_level_access(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_primary;
	}
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class ThisExprContext extends PrimaryContext {
	constructor(parser: MirrorQLParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SELF(): TerminalNode {
		return this.getToken(MirrorQLParser.SELF, 0);
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterThisExpr) {
	 		listener.enterThisExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitThisExpr) {
	 		listener.exitThisExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitThisExpr) {
			return visitor.visitThisExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExprContext extends PrimaryContext {
	constructor(parser: MirrorQLParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterLiteralExpr) {
	 		listener.enterLiteralExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitLiteralExpr) {
	 		listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExprContext extends PrimaryContext {
	constructor(parser: MirrorQLParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterParenExpr) {
	 		listener.enterParenExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitParenExpr) {
	 		listener.exitParenExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitParenExpr) {
			return visitor.visitParenExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExprContext extends PrimaryContext {
	constructor(parser: MirrorQLParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterIdentifierExpr) {
	 		listener.enterIdentifierExpr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitIdentifierExpr) {
	 		listener.exitIdentifierExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitIdentifierExpr) {
			return visitor.visitIdentifierExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_listContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_expr_list;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterExpr_list) {
	 		listener.enterExpr_list(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitExpr_list) {
	 		listener.exitExpr_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitExpr_list) {
			return visitor.visitExpr_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Args_listContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): Expr_listContext {
		return this.getTypedRuleContext(Expr_listContext, 0) as Expr_listContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_args_list;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterArgs_list) {
	 		listener.enterArgs_list(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitArgs_list) {
	 		listener.exitArgs_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitArgs_list) {
			return visitor.visitArgs_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_exprContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(MirrorQLParser.FROM, 0);
	}
	public variable_declare_list(): Variable_declare_listContext {
		return this.getTypedRuleContext(Variable_declare_listContext, 0) as Variable_declare_listContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(MirrorQLParser.WHERE, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public SELECT(): TerminalNode {
		return this.getToken(MirrorQLParser.SELECT, 0);
	}
	public expr_list(): Expr_listContext {
		return this.getTypedRuleContext(Expr_listContext, 0) as Expr_listContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_select_expr;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterSelect_expr) {
	 		listener.enterSelect_expr(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitSelect_expr) {
	 		listener.exitSelect_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitSelect_expr) {
			return visitor.visitSelect_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_rootContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_expr_root;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterExpr_root) {
	 		listener.enterExpr_root(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitExpr_root) {
	 		listener.exitExpr_root(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitExpr_root) {
			return visitor.visitExpr_root(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Outside_func_meta_infoContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public meta_attrs(): Meta_attrsContext {
		return this.getTypedRuleContext(Meta_attrsContext, 0) as Meta_attrsContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_outside_func_meta_info;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterOutside_func_meta_info) {
	 		listener.enterOutside_func_meta_info(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitOutside_func_meta_info) {
	 		listener.exitOutside_func_meta_info(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitOutside_func_meta_info) {
			return visitor.visitOutside_func_meta_info(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Input_func_declContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outside_func_meta_info(): Outside_func_meta_infoContext {
		return this.getTypedRuleContext(Outside_func_meta_infoContext, 0) as Outside_func_meta_infoContext;
	}
	public func_sig_decl(): Func_sig_declContext {
		return this.getTypedRuleContext(Func_sig_declContext, 0) as Func_sig_declContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_input_func_decl;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterInput_func_decl) {
	 		listener.enterInput_func_decl(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitInput_func_decl) {
	 		listener.exitInput_func_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitInput_func_decl) {
			return visitor.visitInput_func_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Top_level_declContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public use_stmt(): Use_stmtContext {
		return this.getTypedRuleContext(Use_stmtContext, 0) as Use_stmtContext;
	}
	public class_declaration(): Class_declarationContext {
		return this.getTypedRuleContext(Class_declarationContext, 0) as Class_declarationContext;
	}
	public func_declartion(): Func_declartionContext {
		return this.getTypedRuleContext(Func_declartionContext, 0) as Func_declartionContext;
	}
	public impl_trait_declaration(): Impl_trait_declarationContext {
		return this.getTypedRuleContext(Impl_trait_declarationContext, 0) as Impl_trait_declarationContext;
	}
	public impl_declaration(): Impl_declarationContext {
		return this.getTypedRuleContext(Impl_declarationContext, 0) as Impl_declarationContext;
	}
	public impl_copy(): Impl_copyContext {
		return this.getTypedRuleContext(Impl_copyContext, 0) as Impl_copyContext;
	}
	public trait_declaration(): Trait_declarationContext {
		return this.getTypedRuleContext(Trait_declarationContext, 0) as Trait_declarationContext;
	}
	public local_module(): Local_moduleContext {
		return this.getTypedRuleContext(Local_moduleContext, 0) as Local_moduleContext;
	}
	public input_func_decl(): Input_func_declContext {
		return this.getTypedRuleContext(Input_func_declContext, 0) as Input_func_declContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_top_level_decl;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterTop_level_decl) {
	 		listener.enterTop_level_decl(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitTop_level_decl) {
	 		listener.exitTop_level_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitTop_level_decl) {
			return visitor.visitTop_level_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Module_contentContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public top_level_decl_list(): Top_level_declContext[] {
		return this.getTypedRuleContexts(Top_level_declContext) as Top_level_declContext[];
	}
	public top_level_decl(i: number): Top_level_declContext {
		return this.getTypedRuleContext(Top_level_declContext, i) as Top_level_declContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_module_content;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterModule_content) {
	 		listener.enterModule_content(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitModule_content) {
	 		listener.exitModule_content(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitModule_content) {
			return visitor.visitModule_content(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_moduleContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _type_paras!: Type_para_listContext;
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MOD(): TerminalNode {
		return this.getToken(MirrorQLParser.MOD, 0);
	}
	public OBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.OBRACE, 0);
	}
	public module_content(): Module_contentContext {
		return this.getTypedRuleContext(Module_contentContext, 0) as Module_contentContext;
	}
	public CBRACE(): TerminalNode {
		return this.getToken(MirrorQLParser.CBRACE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type_para_list(): Type_para_listContext {
		return this.getTypedRuleContext(Type_para_listContext, 0) as Type_para_listContext;
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_local_module;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterLocal_module) {
	 		listener.enterLocal_module(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitLocal_module) {
	 		listener.exitLocal_module(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitLocal_module) {
			return visitor.visitLocal_module(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mql_fileContext extends ParserRuleContext {
	constructor(parser?: MirrorQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public module_content(): Module_contentContext {
		return this.getTypedRuleContext(Module_contentContext, 0) as Module_contentContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(MirrorQLParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return MirrorQLParser.RULE_mql_file;
	}
	public enterRule(listener: MirrorQLListener): void {
	    if(listener.enterMql_file) {
	 		listener.enterMql_file(this);
		}
	}
	public exitRule(listener: MirrorQLListener): void {
	    if(listener.exitMql_file) {
	 		listener.exitMql_file(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MirrorQLVisitor<Result>): Result {
		if (visitor.visitMql_file) {
			return visitor.visitMql_file(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
