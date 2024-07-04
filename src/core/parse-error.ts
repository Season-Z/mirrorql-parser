import { Optional } from "typescript-optional";
import { Location, NilLocation } from "../typings/ast-types";

export interface ParserErrorItem {
  file: string;
  input: string;
  message: string;
  loc: Location;
}

export interface ParserProcessErrorItem extends Omit<ParserErrorItem, "loc"> {
  loc?: Location;
}

export class ParserError extends Error {
  public errors: ParserErrorItem[];

  constructor(args: { errors: ParserErrorItem[] }) {
    super();
    const { file, message, loc } = args.errors[0];
    this.message = `${file} ${message} (${loc.start.line}:${loc.start.column}-${loc.end.line}:${loc.end.column})`;
    this.errors = args.errors;

    if (Error.captureStackTrace !== undefined) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
  }
}

export function showErrors(errors: ParserErrorItem[]) {
  for (const error of errors) {
    const { file, input, message, loc } = error;
    if (!OSinfo.isBrowser()) {
      underlineError(loc, Optional.of(file), Optional.of(input));
    }
    console.error(wrapInRed("Error: ") + message + "\n");
  }
}

function getFirstNonEmptyCharIndex(input: string): number {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) !== " ") {
      break;
    } else {
      count++;
    }
  }
  return count;
}

export function underlineError(location: Location, filePathOpt: Optional<string>, fileContentOpt: Optional<string>): void {
  if (location === NilLocation) {
    return;
  }

  const startLine = location.start.line;
  const stopLine = location.end.line;
  const maxLineLen = String(stopLine).length;

  let input = "";
  if (filePathOpt.isPresent()) {
    for (let i = 0; i < maxLineLen; i++) {
      process.stderr.write(" ");
    }
    let fileName = filePathOpt.get().toString();
    if (OSinfo.isWindows() && fileName.indexOf("\\") !== -1) {
      fileName = fileName.replace("\\", "/");
    }

    input = fileContentOpt.get();
    process.stderr.write(wrapInPurple("---> ") + fileName + ":");
  }

  console.error(`${location.start.line}:${location.start.column}-${location.end.line}:${location.end.column}`);

  if (input === "") {
    return;
  }
  const lines = input.split("\n");

  let errorLine = lines[startLine - 1].trimEnd();
  for (let i = 0; i < maxLineLen; i++) process.stderr.write(" ");
  console.error(wrapInPurple(" | "));

  const linePrefixLen = maxLineLen + 3;
  printLinePrefix(startLine, maxLineLen, errorLine);

  const startIndex = location.start.column + linePrefixLen;

  printEmptyLinePrefix(maxLineLen, startIndex);

  let stopIndex = errorLine.length + linePrefixLen;
  if (startLine === stopLine) {
    stopIndex = location.end.column + linePrefixLen;
  }

  process.stderr.write(wrapInGreen("^"));
  for (let i = startIndex + 1; i < stopIndex; i++) process.stderr.write(wrapInGreen("~"));

  console.error();

  for (let i = startLine + 1; i <= stopLine; i++) {
    errorLine = lines[i - 1].trimEnd();

    printLinePrefix(i, maxLineLen, errorLine);

    const firstNonEmptyCharIndex = getFirstNonEmptyCharIndex(errorLine) + linePrefixLen;

    printEmptyLinePrefix(maxLineLen, firstNonEmptyCharIndex);

    stopIndex = errorLine.length + linePrefixLen;
    if (i === stopLine) {
      stopIndex = location.end.column + linePrefixLen + 1;
    }

    for (let j = firstNonEmptyCharIndex; j < stopIndex; j++) process.stderr.write(wrapInGreen("~"));
    console.error();
  }
}

function printLinePrefix(lineNum: number, maxLineLen: number, errorLine: string): void {
  for (let i = 0; i < maxLineLen - String(lineNum).length; i++) {
    process.stderr.write(" ");
  }

  process.stderr.write(String(lineNum));
  process.stderr.write(wrapInPurple(" | "));
  console.error(errorLine);
}

function printEmptyLinePrefix(maxLineLen: number, firstNonEmptyCharIndex: number): void {
  for (let j = 0; j < maxLineLen; j++) process.stderr.write(" ");
  process.stderr.write(wrapInPurple(" | "));
  for (let j = maxLineLen + 3; j < firstNonEmptyCharIndex; j++) process.stderr.write(" ");
}

function wrapInPurple(text: string): string {
  return `\x1b[35m${text}\x1b[0m`;
}

function wrapInRed(text: string): string {
  return `\x1b[31m${text}\x1b[0m`;
}

function wrapInGreen(text: string): string {
  return `\x1b[32m${text}\x1b[0m`;
}

export class OSinfo {
  static isWindows(): boolean {
    return process.platform === "win32";
  }
  static isBrowser(): boolean {
    // @ts-ignore
    return typeof window !== "undefined";
  }
}

// class Location {
//     static NilLocation: Location = new Location();

//     start(): { lineNumber(): number; columnNumber(): number } {
//         return { lineNumber: () => 0, columnNumber: () => 0 };
//     }

//     end(): { lineNumber(): number; columnNumber(): number } {
//         return { lineNumber: () => 0, columnNumber: () => 0 };
//     }

//     filePath(): { isPresent(): boolean; get(): string } {
//         return {
//             isPresent: () => false,
//             get: () => '',
//         };
//     }
// }
