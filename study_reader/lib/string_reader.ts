// import { Buffer } from "https://deno.land/std@0.195.0/io/mod.ts";
import { Buffer } from "./buffer.ts";

// ref: https://github.com/denoland/deno_std/blob/2fc511fc422b4e1d147c65b736f2794f9d0df969/io/string_reader.ts
export class StringReader extends Buffer {
  constructor(s: string) {
    console.log(s);
    const encodedStr: Uint8Array = new TextEncoder().encode(s);
    console.log(encodedStr, encodedStr.length);
    const arrayBuffer: ArrayBufferLike = encodedStr.buffer;
    console.log(arrayBuffer, arrayBuffer.byteLength);
    super(arrayBuffer);
  }
}
