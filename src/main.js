import CONFIG from "../config/env.js";
import {
  readFile,
  createReadStream,
  readFileSync,
  createWriteStream,
} from "fs";
import { createServer } from "http";
import { Stream } from "stream";
import { exec } from "child_process";
import logger from "../config/logger.js";

/*
Exampĺe using Stream.Readable
*/

// try {
//   const file = readFileSync(`resources/${CONFIG.file}`);
//   const rs = new Stream.Readable.from(file.toString())
//   for await (const chunk of rs) {
//     console.log(chunk)
//   }
//   process.exit(0);
// } catch (err) {
//   console.log(err);
//   process.exit(1);
// }

/*
Example using fs.createReadStream
*/

// const rs = createReadStream(`resources/${CONFIG.file}`);
// rs.on('data', function(chunk){
//    console.log('Chunk read');
//    console.log(chunk.toString());
// });

/*
Example of an HTTP request using streams
after running the program use: curl localhost:8000 to get the response
if using the cat.jpeg use: curl localhost:8000 --output image.jpeg
*/

// const server = createServer();

// server.on('request', (req, res) => {
//   const src = createReadStream(`resources/${CONFIG.file}`);
//   src.pipe(res);
// });

// server.listen(8000);

/*
Example of a Writable Stream
1e7 will write 10.000.000 lines into a text file
*/

// const newFile = createWriteStream("./newFile.txt");

// for (let i = 0; i <= 1e7; i++) {
//   newFile.write("Hello World!\n");
// }

// newFile.end();

/*
Example of a Generator function
*/

// function* infinite() {
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// function* infinite() {
//   let index = 0;

//   while (true) {
//     if (index % 2 === 0) {
//       index++;
//       yield "Par";
//     } else {
//       index++;
//       yield "Ímpar";
//     }
//   }
// }

// const generator = infinite();

// console.log(generator.next().value); // 0 || Par
// console.log(generator.next().value); // 1 || Ímpar
// console.log(generator.next().value); // 2 || Par

// console.log(infinite().next().value); // 0 || Par
// console.log(infinite().next().value); // 0 || Par
// console.log(infinite().next().value); // 0 || Par

/*
Example of generator with a stream
*/

// function readStream(reader) {
//   return (function* genFn() {
//     while (true) {
//       const val = reader.read();
//       if (val === null) break;
//       else yield val;
//     }
//   })();
// }

// function* readStream(reader) {
//   while (true) {
//     const val = reader.read();
//     if (val === null) break;
//     else yield val;
//   }
// }

// try {
//   const file = readFileSync(`resources/${CONFIG.file}`);
//   console.time("Tempo: ");
//   const rs = new Stream.Readable.from(file.toString(), { objectMode: true });
//   const generator = readStream(rs);
//   for (const line of generator) {
//     console.log(line);
//   }
//   console.timeEnd("Tempo: ");
//   process.exit(0);
// } catch (err) {
//   console.log(err);
//   process.exit(1);
// }

/*
Example of a Async Stream Reader using Generators
*/

async function* streamToGenerator(path) {
  const reader = createReadStream(path);
  for await (const line of reader) {
    yield line.toString();
  }
}

async function main() {
  console.time("Time: ");

  for await (const line of streamToGenerator(`resources/${CONFIG.file}`)) {
    logger.info(line);
  }
  console.timeEnd("Time: ");
}

main();
