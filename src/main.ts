import * as peggy from "https://esm.sh/peggy";
import { grammar } from "./grammar.ts";

export const parser = peggy.generate(grammar);
