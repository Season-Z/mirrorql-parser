import { ErrorListener as AntlrErrorListener, RecognitionException, Recognizer } from "antlr4";
import { Location } from "../typings/ast-types";

import { ParserErrorItem, ParserProcessErrorItem } from "./parse-error";

class ErrorListener extends AntlrErrorListener<any> {
  _errors: ParserErrorItem[] = [];
  _process_errors: ParserProcessErrorItem[] = [];

  constructor(
    public _curParsingFile: string,
    public _currentParsingContent: string
  ) {
    super();
  }

  syntaxError(
    _recognizer: Recognizer<any>,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _e: RecognitionException | undefined
  ): void {
    let endColumn = column + 1;
    if (offendingSymbol?._text) {
      endColumn = column + offendingSymbol._text.length;
    }
    const loc: Location = {
      start: { line, column },
      end: { line, column: endColumn },
    };

    this._errors.push({ file: this._curParsingFile, input: this._currentParsingContent, message: msg, loc });
  }

  processError(msg: string): void {
    this._process_errors.push({
      file: this._curParsingFile,
      input: this._currentParsingContent,
      message: msg,
      loc: undefined,
    });
  }

  getProcessError(): ParserProcessErrorItem[] {
    return this._process_errors;
  }

  getErrors(): ParserErrorItem[] {
    return this._errors;
  }

  hasErrors() {
    return this._errors.length > 0;
  }
}

export default ErrorListener;
