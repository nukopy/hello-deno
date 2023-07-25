// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

export const DEFAULT_BUFFER_SIZE = 32 * 1024;
import type { Reader } from "https://deno.land/std@0.195.0/types.d.ts";

/** Turns a Reader, `r`, into an async iterator.
 *
 * ```ts
 * import { iterateReader } from "https://deno.land/std@$STD_VERSION/streams/iterate_reader.ts";
 *
 * let f = await Deno.open("/etc/passwd");
 * for await (const chunk of iterateReader(f)) {
 *   console.log(chunk);
 * }
 * f.close();
 * ```
 *
 * Second argument can be used to tune size of a buffer.
 * Default size of the buffer is 32kB.
 *
 * ```ts
 * import { iterateReader } from "https://deno.land/std@$STD_VERSION/streams/iterate_reader.ts";
 *
 * let f = await Deno.open("/etc/passwd");
 * const it = iterateReader(f, {
 *   bufSize: 1024 * 1024
 * });
 * for await (const chunk of it) {
 *   console.log(chunk);
 * }
 * f.close();
 * ```
 */
export async function* iterateReader(
  r: Reader,
  options?: {
    bufSize?: number;
  }
): AsyncIterableIterator<Uint8Array> {
  const bufSize = options?.bufSize ?? DEFAULT_BUFFER_SIZE;
  const b = new Uint8Array(bufSize);
  while (true) {
    const nread = await r.read(b);
    if (nread === null) {
      break;
    }
    console.log(`b: ${b.slice(0, nread)}`);

    yield b.slice(0, nread);
  }
}
