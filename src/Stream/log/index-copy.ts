import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const main = async () => {
  const inputFile = path.join(__dirname, "files", "input.log");
  const outputFile = path.join(__dirname, "files", "warning2.log");

  // const inputFile = "./src/Stream/log/files/input.log";
  // const outputFile = "./src/Stream/log/files/warning2.log";

  const readStream = createReadStream(inputFile, "utf-8");

  let remaining = "";
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      remaining += chunk.toString();

      const lines = remaining.split(/\r?\n/);

      remaining = lines.pop() || "";

      lines.forEach((line) => {
        if (line.includes("- WARNING -")) {
          this.push(`${line}\n`);
        }
      });

      callback();
    },
    flush(callback) {
      if (remaining.includes("- WARNING -")) {
        this.push(`${remaining}\n`);
      }
      callback();
    },
  });

  const writeStream = createWriteStream(outputFile);

  try {
    await pipeline(readStream, transform, writeStream);
  } catch (error) {
    console.log("Error on generating warnings log", error);
  }

  // readStream.on("data", (chunk) => {
  //   const write = transform.write(chunk);

  //   if (!write) {
  //     readStream.pause();
  //   }
  // });

  // transform.on("drain", () => {
  //   readStream.resume();
  // });

  // transform.on("data", (chunk) => {
  //   const write = writeStream.write(chunk);

  //   if (!write) {
  //     transform.pause();
  //   }
  // });

  // writeStream.on("drain", () => {
  //   transform.resume();
  // });
};

main();
