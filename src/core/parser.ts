import { CharStream, CommonTokenStream } from "antlr4";
import MirrorQLLexer from "../antlr/MirrorQLLexer";
import MirrorQLParser from "../antlr/MirrorQLParser";
import { ParseOptions, Token, TokenizeOptions } from "../typings/types";
import { ASTBuilder } from "./ast-builder";
import ErrorListener from "./error-listener";
import * as PT from "./parse-toml";
import { buildCommentList, buildTokenList } from "./tokens";

import { ASTNode, ASTNodeCategory, ASTNodeCategoryStr, ASTVisitor, LocalModule, Location, ModuleAccess, ModuleContent } from "../typings/ast-types";

// import * as FS from "fs";
import { Optional } from "typescript-optional";
import { OSinfo, ParserErrorItem, ParserProcessErrorItem, showErrors } from "./parse-error";

type ParseCodeResult = {
  moduleContent: ModuleContent;
  errors?: ParserErrorItem[];
  tokens?: Token[];
  processError?: ParserProcessErrorItem[];
};

type ParseResult = LocalModule & {
  errors?: ParserErrorItem[];
  tokens?: Token[];
  processError?: ParserProcessErrorItem[];
};

export class ParsingManager {
  public Libraries: Array<Array<string>> = new Array<Array<string>>();
  public PackageInfos: Map<string, Optional<PT.PackageInfo>> = new Map<string, Optional<PT.PackageInfo>>();
  public LibraryDirs: string[] = new Array<string>();
  public LibraryCounts: Map<string, number> = new Map<string, number>();
  public UseAccessMp: Map<string, ModuleAccess> = new Map<string, ModuleAccess>();
  public LibDir2UseAccess: Map<string, string[]> = new Map<string, string[]>();

  constructor(
    public currentParsingFile: string,
    public currentParsingContent: string,
    public currentParsingOptions: ParseOptions = {},
    private listener: ErrorListener
  ) {}

  parseSingleFile(): ParseResult {
    const fileName = this.currentParsingFile.substring(0, this.currentParsingFile.lastIndexOf("."));

    if (!this.currentParsingFile) {
      throw new Error(`File '${this.currentParsingFile}' does not exist`);
    }

    const ast = this.parseCode(this.currentParsingContent, this.currentParsingOptions);
    const moduleContent = ast.moduleContent;

    const loc: Location = {
      start: {
        line: moduleContent.loc!.start.line,
        column: moduleContent.loc!.start.column + 4,
      },
      end: {
        line: moduleContent.loc!.end.line,
        column: moduleContent.loc!.end.column,
      },
    };

    const node: LocalModule = {
      category: "LocalModule",
      name: fileName,
      content: moduleContent,
      typeParas: [],
      loc,
    };

    const parseResult: ParseResult = node;
    parseResult.errors = ast.errors;
    parseResult.tokens = ast.tokens;

    return parseResult;
  }

  parseCode(input: string, options: ParseOptions = {}): ParseCodeResult {
    const inputStream = new CharStream(input);
    const lexer = new MirrorQLLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MirrorQLParser(tokenStream);

    const listener = this.listener;

    lexer.removeErrorListeners();
    lexer.addErrorListener(listener);

    parser.removeErrorListeners();
    parser.addErrorListener(listener);

    parser.buildParseTrees = true;
    const sourceUnit = parser.mql_file().module_content();
    const astBuilder = new ASTBuilder(options, this, listener);
    astBuilder.visitModuleContent(sourceUnit);

    const moduleContent = astBuilder.result;
    if (moduleContent === null) {
      throw new Error("moduleContent should never be null");
    }

    const ast: ParseCodeResult = {
      moduleContent,
      errors: listener.getErrors(),
    };

    if (options.comments == true) {
      moduleContent.comments = buildCommentList(tokenStream.tokens, lexer.channelNames.indexOf("HIDDEN"), options);
    }

    if (options.tokens === true) {
      ast.tokens = buildTokenList(tokenStream.tokens, options);
    }

    if (listener.hasErrors()) {
      if (options.tolerant !== true && !OSinfo.isBrowser()) {
        // node 环境直接输出错误，终止
        showErrors(listener.getErrors());
        process.exit(1);
      }
      ast.errors = listener.getErrors();
    }

    return ast;
  }

  // handleLibraries(decls: Array<ASTNode>): Array<ASTNode> {
  //   while (this.Libraries.length != 0) {
  //     const curLib = this.Libraries.pop()!;
  //     let curLibDir = "";
  //     const useAccess = curLib[0];
  //     // const items = useAccess.split(PATH.sep);
  //     const items = useAccess.split("/"); // 浏览器执行

  //     if (items.length === 1) {
  //       curLibDir = PATH.join(curLib[1], UTIL.getFileName(items[0]));
  //     } else {
  //       curLibDir = PATH.join(curLib[1], items[0]);
  //     }
  //     console.log("curLibDir", curLibDir);

  //     const libFileName = PATH.join(curLib[1], useAccess);
  //     curLibDir = FS.realpathSync(curLibDir);

  //     if (this.PackageInfos.has(curLibDir)) {
  //       const curPackageInfo = PT.parse(curLibDir, libFileName);
  //       if (curPackageInfo[0].length > 0 && curPackageInfo[1].isPresent()) {
  //         this.PackageInfos.set(curPackageInfo[0], curPackageInfo[1]);
  //       }
  //     }

  //     const target = curLibDir;
  //     const curLocalModule = this.parseSingleFile();
  //     const curModule = buildUseLocalModule(libFileName, target, curLocalModule);

  //     const useAccessName = UTIL.getFileName(useAccess);
  //     let moduleName = curModule.name;
  //     if (this.UseAccessMp.has(useAccessName)) {
  //       const newUseAccess = this.UseAccessMp.get(useAccessName);
  //       moduleName = newUseAccess!.first().base;
  //     }

  //     const newCurModule: LocalModule = {
  //       category: "LocalModule",
  //       name: moduleName,
  //       content: curModule.content,
  //       typeParas: [],
  //     };

  //     // const libsParsed: ModuleContent = {
  //     //     category: "ModuleContent",
  //     //     decls: [newCurModule],
  //     // };

  //     decls.push(newCurModule);
  //   }

  //   return decls;
  // }
}

// function buildUseLocalModule(libFileName: string, targetDir: string, curModule: LocalModule): ParseResult {
//   if (targetDir.length == 0) {
//     return curModule;
//   }

//   while (libFileName != targetDir && UTIL.getFileName(libFileName) != targetDir) {
//     libFileName = PATH.dirname(libFileName);
//     const newTarget = libFileName;
//     const moduleName = UTIL.getFileName(newTarget);

//     const libParsed: ModuleContent = {
//       category: "ModuleContent",
//       decls: [curModule],
//     };

//     curModule = {
//       category: "LocalModule",
//       name: moduleName,
//       content: {
//         category: "ModuleContent",
//         decls: libParsed.decls,
//       },
//       typeParas: [],
//     };
//   }

//   return curModule;
// }

// function parseMainLocalModule(file: string, localModule: LocalModule): ParseCodeResult {
//   const curFile = FS.realpathSync(file);
//   const packageInfo = PT.parseWithFile(curFile);
//   console.log("packageInfo", curFile, packageInfo);

//   const mainLocalModule = buildUseLocalModule(curFile, packageInfo[0], localModule);

//   const node: ModuleContent = {
//     category: "ModuleContent",
//     decls: [mainLocalModule.content],
//   };

//   return {
//     moduleContent: node,
//     errors: mainLocalModule.errors,
//     tokens: mainLocalModule.tokens,
//   };
// }

export function parse(file: string, input: string, options: ParseOptions = {}): ParseCodeResult {
  const listener = new ErrorListener(file, input);

  const manager = new ParsingManager(file, input, options, listener);
  const namedModule = manager.parseSingleFile();

  // if (listener.hasErrors() && options.tolerant !== true) {
  //   console.log('getErrors', listener.getErrors());
  //   // return {
  //   //   moduleContent: null,
  //   //   errors: [],
  //   //   tokens: [],
  //   // };
  // }

  // const mainParsed = parseMainLocalModule(file, namedModule);

  // let constructedDecls = new Array<ASTNode>();
  // constructedDecls = constructedDecls.concat(mainParsed.moduleContent.decls);
  // constructedDecls = manager.handleLibraries(constructedDecls);
  // const moduleContent: ModuleContent = {
  //   category: "ModuleContent",
  //   decls: constructedDecls,
  //   loc: {
  //     start: { line: 0, column: 0 },
  //     end: { line: 0, column: 0 },
  //   },
  // };
  const moduleContent: ModuleContent = {
    category: "ModuleContent",
    decls: [],
    loc: {
      start: { line: 0, column: 0 },
      end: { line: 0, column: 0 },
    },
  };

  return {
    moduleContent,
    errors: namedModule.errors,
    tokens: namedModule.tokens,
    processError: listener.getProcessError(),
  };
}

export function tokenize(input: string, options: TokenizeOptions = {}): any {
  const inputStream = new CharStream(input);
  const lexer = new MirrorQLLexer(inputStream);
  return buildTokenList(lexer.getAllTokens(), options);
}

function _isASTNode(node: unknown): node is ASTNode {
  if (typeof node !== "object" || node === null) {
    return false;
  }

  const nodeAsAstNode = node as ASTNode;

  if (Object.prototype.hasOwnProperty.call(nodeAsAstNode, "category") && typeof nodeAsAstNode.category === "string") {
    return ASTNodeCategory.includes(nodeAsAstNode.category);
  }

  return false;
}

export function visit(node: unknown, visitor: ASTVisitor, nodeParent?: ASTNode): void {
  if (Array.isArray(node)) {
    node.forEach((child) => visit(child, visitor, nodeParent));
  }

  if (!_isASTNode(node)) return;

  let cont = true;
  if (visitor[node.category] !== undefined) {
    cont = visitor[node.category]!(node as never, nodeParent);
  }

  if (!cont) return;

  for (const prop in node) {
    if (Object.prototype.hasOwnProperty.call(node, prop)) {
      visit((node as any)[prop], visitor, node);
    }
  }

  const selector = (node.category + " :exit") as `${ASTNodeCategoryStr}:exit`;

  if (visitor[selector] !== undefined) {
    visitor[selector]!(node as never, nodeParent);
  }
}
