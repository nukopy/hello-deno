import { StringReader } from "./lib/string_reader.ts";
import { iterateReader } from "./lib/iterate_reader.ts";
// import { iterateReader } from "https://deno.land/std@0.195.0/streams/iterate_reader.ts";

const decoder = new TextDecoder();

//load data to Reader
const r = new StringReader("Hello, Deno!");

// Read data from Reader to Uint8Array to string
const it = iterateReader(r, { bufSize: 1 });
const results = [];
for await (const byteArr of it) {
  const str = decoder.decode(byteArr);
  results.push(str);
}
console.log(results);
/* => ["H", "e", "l", "l", "o", ",", " ", "D", "e", "n", "o", "!"] */

// 1 度目の iterateReader で消費されているので、2 度目の iterateReader では Reader からデータを読み込めない
const it2 = iterateReader(r, { bufSize: 2 });
const results2 = [];
for await (const x of it2) {
  results2.push(decoder.decode(x));
}
console.log(results2);
