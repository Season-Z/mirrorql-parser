import { ParserError } from './core/parse-error';
import { tokenize, parse } from './core/parser';

export type { ParseOptions } from './typings/types';

export default { ParserError, tokenize, parse };
