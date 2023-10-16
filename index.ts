import { FS } from "./src/lib/fs";

const fs = new FS();
fs.log("hello World");
await fs.writeFile("./example.txt", "hello world");
fs.log(await fs.exists("./example.txt"));
fs.log(await fs.readFile("./example.txt"));
fs.log(await fs.removeFile("./example.txt"));
