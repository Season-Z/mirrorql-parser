import { Token as AntlrToken } from "antlr4";
import { Comment, Location } from "../typings/ast-types";
import { tokens } from "../antlr/MirrorQLTokens";
import { Token, TokenizeOptions } from "../typings/types";

function getTokenType(value: string) {
  if (value === "ID") {
    return "Identifier";
  } else if (value === "INT" || value === "FLOAT") {
    return "Numeric";
  } else if (value === "STRING") {
    return "String";
  } else if (/^\W+$/.test(value)) {
    return "Punctuator";
  } else {
    return "Keyword";
  }
}

function range(token: AntlrToken): [number, number] {
  return [token.start, token.stop + 1];
}

function loc(token: AntlrToken): Location {
  const tokenText = token.text ?? "";
  const textInLines = tokenText.split(/\r?\n/);
  const numberOfNewLines = textInLines.length - 1;
  return {
    start: { line: token.line, column: token.column },
    end: {
      line: token.line + numberOfNewLines,
      column: textInLines[numberOfNewLines].length + (numberOfNewLines === 0 ? token.column : 0),
    },
  };
}

export function buildTokenList(tokensArg: AntlrToken[], options: TokenizeOptions): Token[] {
  return tokensArg.map((token) => {
    const type = getTokenType(tokens[token.type.toString()]);
    const node: Token = { type, value: token.text };

    if (options.loc === true) {
      node.loc = loc(token);
      // console.log(node)
    }

    if (options.range === true) {
      node.range = range(token);
    }
    return node;
  });
}

export function buildCommentList(tokensArg: AntlrToken[], commentsChannelId: number, options: TokenizeOptions): Comment[] {
  return tokensArg
    .filter((token) => token.channel === commentsChannelId)
    .map((token) => {
      const comment: Comment = token.text.startsWith("//")
        ? { category: "LineComment", value: token.text.slice(2) }
        : { category: "BlockComment", value: token.text.slice(2, -2) };

      if (options.loc === true) {
        comment.loc = loc(token);
      }
      if (options.range === true) {
        comment.range = range(token);
      }
      return comment;
    });
}
