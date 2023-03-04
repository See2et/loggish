import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { parser } from '../src/main.ts'

Deno.test('declarative', () => {
  const actual = parser.parse('su molo li molo');
  const expected = { head: "su", tail: { head: "molo", tail: { head: "li", tail: "molo" } } }
  assertEquals(actual, expected);
});
