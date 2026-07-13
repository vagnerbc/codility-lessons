import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const main = async () => {
  const readStreamLog = createReadStream(
    path.join(__dirname, "files", "input.log"),
    "utf8",
  );

  let remaining = "";
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      remaining += chunk.toString();

      const lines = remaining.split(/\r?\n/);

      remaining = lines.pop() || "";

      lines.forEach((line) => {
        if (line.includes("- WARNING -")) {
          this.push(`${line} \n`);
        }
      });

      callback();
    },
    flush(callback) {
      //   console.log({ remaining });
      if (remaining) {
        if (remaining.includes("- WARNING -")) {
          this.push(`${remaining} \n`);
        }
      }

      callback();
    },
  });

  const writebleStreamWarningLog = createWriteStream(
    path.join(__dirname, "files", "warning.log"),
  );

  try {
    await pipeline(readStreamLog, transform, writebleStreamWarningLog);
  } catch (error) {
    console.log(error);
  }

  //   manual control
  //   readStreamLog.on("data", (chunk) => {
  //     const canWrite = transform.write(chunk);

  //     if (!canWrite) {
  //       readStreamLog.pause();
  //     }
  //   });

  //   transform.on("drain", () => {
  //     readStreamLog.resume();
  //   });

  //   readStreamLog.on("end", () => {
  //     transform.end();
  //   });

  //   transform.on("data", (chunk) => {
  //     const canWrite = writebleStreamWarningLog.write(chunk);

  //     if (!canWrite) {
  //       readStreamLog.pause();
  //     }
  //   });

  //   writebleStreamWarningLog.on("drain", () => {
  //     transform.resume();
  //   });
};

main();

/**
 * BACKPREASSURE
 *
 * It need to control and create a buffer and avoid full the memory when producer is faster ther consumer.
 * When the producer produce more data than consumer can consume, consumer send a false on write() - then consumer do consumer.pause()
 * Then producer stop send data until consumer send true again. - "drain" event - consumer.resume()
 *
 * Stream to this automaticaly with pipe() and pipeline()
 *
 */
