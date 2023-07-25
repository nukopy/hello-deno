import Logger from "https://deno.land/x/logger@v1.1.1/logger.ts";

const logger = new Logger();

// console only
logger.info("i am from consoleLogger", { name: "zfx" });
logger.warn("i am from consoleLogger", 1, "any");
logger.error("i am from consoleLogger", new Error("test"));

await logger.initFileLogger("./logs");

// file and console
logger.info("i am from fileLogger", { name: "zfx" });
logger.warn("i am from fileLogger", 1, "any");
logger.error("i am from fileLogger", new Error("test"));
