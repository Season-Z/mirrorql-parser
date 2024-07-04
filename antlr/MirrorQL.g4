grammar MirrorQL;

AND : 'and' ;

OR : 'or' ;

NOT : 'not' ;

ADD : '+' ;

MINUS : '-' ;

MUL : '*';

CLASS : 'class';

DOT : '.';

EXISTS : 'exists';

FORALL : 'forall';

INSTANCEOF : 'instanceof' ;

FUNCTION : 'fn';

FOR : 'for';

IF : 'if' ;

ELSE : 'else' ;

IMPL : 'impl';

SELF : 'self';

SUPER : 'super';

PACKAGE : 'package';

TRAIT : 'trait' ;

LET : 'let';

MOD : 'mod';

EXTENDS: 'extends';

SEMICOLON : ';';

IMPL_OP : '<:';

YES : 'yes';

NO : 'no';

OBRACE : '{';
CBRACE : '}';

// Aggregations
COUNT : 'count';
MIN : 'min';
MAX : 'max';

// Preserved keywords
ENUM : 'enum';
FROM : 'from';
WHERE : 'where';
SELECT : 'select';
RECORD : 'record';
IN : 'in';

ID: [a-zA-Z_][a-zA-Z_0-9]* ;

INT: '0' | [1-9][0-9]* ;

FLOAT : ('0' | [1-9][0-9]*) '.' [0-9]+ ;

STRING : '"' (~["\\\r\n] | '\\' ('"' | '\\' | 'n' |'t'))* '"';

WS : [ \t\r\n]+ -> skip ;  // skip white space

COMMENT : '/*' .*? '*/' -> channel(HIDDEN) ;

LINE_COMMENT : '//' ~[\r\n]* -> channel(HIDDEN) ;

variable_declare : type_expr ID ;

variable_declare_list
    : variable_declare
    | variable_declare (',' variable_declare)+;

identifier : ID;

module_identifier : ID;

module_expr
    : name=module_identifier                                   # moduleName
    | name=module_identifier (type_args=type_arg_list)         # moduleTypeApply ;


type_name : identifier ;

type_arg_list
    : '[' ']'
    | '[' type_expr ']'
    | '[' type_expr  (',' type_expr)+ ']' ;

type_para
    : type_name
    | type_name '<:' (type_expr ('+' type_expr)*) ;

type_para_list
    : '[' ']'
    | '[' type_para (',' type_para)* ']' ;

type_expr
    : (module_expr '::')* name=identifier                                   # typeName
    | (module_expr '::')* name=identifier (type_args=type_arg_list)?        # typeApply
    | FUNCTION (parameter_type_list) '->' (ret_type=type_expr)              # typeFunction ;

parameter_type_list
    : '(' ')'
    | '()'
    | '(' type_expr (',' type_expr)*')' ;

use_stmt
    : 'use' prefix=(SELF|SUPER|PACKAGE)?('::')? module_expr ('::' module_expr)* ('as' alias=identifier)? (';')?   # moduleAlias
    | 'use' prefix=(SELF|SUPER|PACKAGE)?('::')? module_expr ('::' module_expr)*
                '::' '{' entity=identifier ('as' alias=identifier)? '}' (';')?                                    # entityAlias
    | 'use' prefix=(SELF|SUPER|PACKAGE)?('::')? module_expr ('::' module_expr)* '::' '*' (';')?                   # wildcardUse;

parameter_declare
    : para_name=identifier ':' type_expr;

parameter_declare_list
    : '(' ')'
    | '()'
    | '(' parameter_declare (',' parameter_declare)* ')';

func_body
    : '{' expr_root '}'
    | '{' '}';

meta_attr
    : identifier                                    # attributeDecl
    | name=identifier '=' value=identifier          # nameAttribute
    | name=identifier '=' value=STRING              # stringAttribute ;

meta_attrs
    : meta_attr (',' meta_attr)*  ;

func_declartion
    : ('[' meta_attrs ']')? FUNCTION identifier (type_para_list)? parameter_declare_list ('->' ret_type=type_expr)? func_body;

func_sig_decl
    : FUNCTION identifier (type_para_list)? parameter_declare_list ('->' ret_type=type_expr)? SEMICOLON;

field_declaration
    : LET identifier ':' field_type=type_expr SEMICOLON;

base_type_declaration
    : type_expr identifier? ;

class_declaration
    : CLASS (name=identifier) (type_para_list)?
            (EXTENDS base_type_declaration  (',' base_type_declaration)*)?
             '{' (fields=field_declaration*) (members=func_declartion*) '}';

trait_declaration
    : TRAIT (name=identifier) (type_para_list)? '{' (members=func_sig_decl*) '}';

impl_trait_declaration
    : IMPL (trait_type_expr=type_expr) FOR (class_type_expr=type_expr) '{' (members=func_declartion*) '}';

impl_declaration
    : IMPL (class_type_expr=type_expr) '{' (members=func_declartion*) '}' ;

impl_copy
    : IMPL (trait_type_expr=type_expr) FOR (class_type_expr=type_expr) ';' ;

literal
    : INT               # intLiteral
    | FLOAT             # floatLiteral
    | STRING            # strLiteral
    | '()'           # unitLiteral
    | YES               # yesLiteral
    | NO                # noLiteral
    ;

quantifier_expr
    : (kind=(EXISTS|FORALL)) '(' '|' name=identifier '=' bind=expr'|' body=expr ')' # valueQuantifier
    | (kind=(EXISTS|FORALL)) '(' '|' name=identifier ':' type_expr'|' body=expr ')' # typeQuantifier
    ;

aggregate_expr
    : (kind=(MAX|MIN|COUNT)) '(' '|' parameter_declare (',' parameter_declare)* '|' body=expr ')'
    | (kind=(MAX|MIN|COUNT)) '(' '|' '|' body=expr ')' ;


block
    : OBRACE expr CBRACE
    | expr ;

expr
    : op=(MINUS|NOT)  base=expr                                         # unaryExpr
    | primary                                                           # primaryExpr
    | func=module_level_access type_arg_list? args_list                 # staticInvokeExpr
    | base=expr DOT '(' type_expr ')'                                   # coerceExpr
    | base=expr ('.') identifier (type_args=type_arg_list)? args_list   # methodInvokeExpr
    | base=expr DOT identifier                                          # attributeExpr
    | expr INSTANCEOF type_expr                                         # instanceofExpr
    | lhs=expr op=(ADD|MINUS|MUL) rhs=expr                              # arithmeticExpr
    | lhs=expr op=('<=' | '>=' | '>' | '<') rhs=expr                    # compareExpr
    | lhs=expr op=('==' | '!=') rhs=expr                                # equalExpr
    | lhs=expr AND rhs=expr                                             # andExpr
    | lhs=expr OR  rhs=expr                                             # orExpr
    | IF '(' cond=expr ')' b1=block (ELSE b2=block)?                    # ifElseExpr
    | LET identifier (':' type_expr)? ('=' e1=expr)? SEMICOLON e2=expr  # letExpr
    | quantifier_expr                                                   # quantifierExpr
    | aggregate_expr                                                    # aggregateExpr
    | select_expr                                                       # selectExpr
    ;

module_level_access : (module_expr '::')* name=identifier ;


primary
    : '(' expr ')'                                      # parenExpr
    | SELF                                              # thisExpr
    | literal                                           # literalExpr
    | identifier                                        # identifierExpr
    ;


expr_list
    : expr (',' expr)*;

args_list
    : '(' ')'
    | '()'
    | '(' expr_list ')';

select_expr :
    FROM variable_declare_list WHERE expr SELECT expr_list;

expr_root : expr;

outside_func_meta_info
    : '[' meta_attrs ']' ;

input_func_decl
    : outside_func_meta_info func_sig_decl;

top_level_decl
    : use_stmt
    | class_declaration
    | func_declartion
    | impl_trait_declaration
    | impl_declaration
    | impl_copy
    | trait_declaration
    | local_module
    | input_func_decl ;

module_content : top_level_decl*;

local_module : MOD (name=identifier) (type_paras=type_para_list?) '{' module_content '}';

mql_file : module_content EOF;