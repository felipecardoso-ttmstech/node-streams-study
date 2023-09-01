import { config } from "dotenv-safe";
config()

const CONFIG = {
    port: process.env.PORT,
    file: process.env.FILE_NAME,
}

export default CONFIG
