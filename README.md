# hello-deno

See Deno [Introduction](https://deno.land/manual@v1.35.0/introduction).

## Environment

```sh
$ deno --version
deno 1.35.0 (release, aarch64-apple-darwin)
v8 11.6.189.7
typescript 5.1.6
```

## Table of Contents of Deno Official Manual

- [x] [1. Introduction](https://deno.land/manual@v1.35.0/introduction)
- [x] 2. Getting started
- [ ] 3. Basics
- [ ] 4. Node and npm modules
- [ ] 5. The Runtime
- [ ] 6. Examples
- [ ] 7. Tools
- [ ] 8. Advanced
- [ ] 9. References
- [ ] 10. Help

## Examples

### Pokemon API

Run the following command and see [http://localhost:8080/?pokemonNumber=151](http://localhost:8080/?pokemonNumber=151) on your browser.

```sh
deno task pokemon
```

Build and run:

```sh
deno task compile:pokemon
./pokemon
```

## Deno CLI Commands

### Init Project

`deno init` creates 4 files below:

- `main.ts`
- `main_test.ts`
- `main_bench.ts`
- `deno.jsonc`

```bash
deno init
```

### Run the Program

#### Run Local Files

```sh
deno run main.ts
```

#### Run Local file with watch mode (hot reload)

See [docs about watch mode](https://deno.land/manual@v1.35.0/getting_started/command_line_interface#watch-mode) for more details.

```sh
deno run --watch main.ts
```

#### Run local file with permissions

Deno provides secure defaults. Unless specifically allowed, scripts can’t access files (read / write files), the environment, or the network.

- Allow "read"

```sh
deno run --allow-read main.ts
```

- Allow "write"

```sh
deno run --allow-write main.ts
```

- Allow "network access"

```sh
deno run --allow-net main.ts
```

> **Warning**
> 引数の渡し方に注意。渡し方によって Deno ランタイムのフラグとして consume されない場合がある。詳しくは [2.4 Command Line Interface - Script arguments](https://deno.land/manual@v1.35.0/getting_started/command_line_interface#script-arguments) を参照。

#### Run remote file

```sh
deno run [URL]
```

Some examples of running remote files:

```sh
deno run https://deno.land/std@0.193.0/examples/welcome.ts
# Welcome to Deno!
```

```sh
deno run --allow-read https://deno.land/std@0.193.0/examples/cat.ts main.ts
# export function add(a: number, b: number): number {
#   return a + b;
# }
#
# // Learn more at https://deno.land/manual/examples/module_metadata#concepts
# if (import.meta.main) {
#   console.log("Add 2 + 3 =", add(2, 3));
# }
```

See [Deno std/examples](https://deno.land/std@0.193.0/examples) for more examples.

### Run tasks

Tasks are defined in `deno.jsonc`. See [7.10 `deno task`](https://deno.land/manual@v1.35.0/tools/task_runner)

```sh
deno task dev
```

- Example of `deno.jsonc`

```jsonc
{
  "tasks": {
    "dev": "deno run --watch main.ts"
  }
}
```

### Run tests

See Deno official Manual [3.8 Testing](https://deno.land/manual@v1.35.0/basics/testing).

```sh
deno test
```

### Run benchmarks

```sh
deno bench
```

## Deno tips

### Debugging

See Deno official Manual [3.9 Debugging](https://deno.land/manual@v1.35.0/basics/debugging_your_code).
