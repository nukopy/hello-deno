import * as log from "https://deno.land/std@0.99.0/log/mod.ts";

// 出力ファイル名
const filename = "./logs/app.log";

// 出力フォーマット
const formatter = "{datetime} {levelName} {msg}";

await log.setup({
  handlers: {
    // console出力形式の定義
    console: new log.handlers.ConsoleHandler("DEBUG", {
      formatter,
    }),

    // file出力形式の定義
    file: new log.handlers.FileHandler("DEBUG", {
      filename,
      formatter,
    }),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },
  },
});

// getLogger()を無引数で実行すると"default"のloggerを取得する
const logger = log.getLogger();
console.log(`logfile: ${filename}`);
logger.debug("debug", { a: 1, b: 2 });

export { logger };
