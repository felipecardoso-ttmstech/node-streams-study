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
