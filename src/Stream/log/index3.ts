import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { createInterface } from "node:readline/promises";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const generateWarningLogs = async () => {
  const input = path.join(__dirname, ".", "/files", "input.log");
  const output = path.join(__dirname, ".", "/files", "output.log");

  // read stream
  const readStream = createReadStream(input);

  const rl = createInterface({
    input: readStream,
  });

  // transform
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const line: string = chunk.toString();

      if (line.includes("- WARNING -")) {
        this.push(`${line}\n`);
      }

      callback();
    },
  });

  // write stream
  const writeStream = createWriteStream(output, {
    flags: "w",
  });

  pipeline;
  try {
    await pipeline(rl, transform, writeStream);
  } catch (error) {
    console.log("Error creating warning log", error);
  }

  //   rl.on("line", (chunk) => {
  //     const write = transform.write(chunk);

  //     if (!write) {
  //       rl.pause();
  //     }
  //   });

  //   transform.on("drain", () => {
  //     rl.resume();
  //   });

  //   transform.on("data", (chunk) => {
  //     const write = writeStream.write(chunk);

  //     if (!write) {
  //       transform.pause();
  //     }
  //   });

  //   writeStream.on("drain", () => {
  //     transform.resume();
  //   });

  //   rl.on("end", () => {
  //     transform.end();
  //   });
};

generateWarningLogs();
