import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connect_db = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.mongodb_uri}/${db_name}`)
        console.log(`/n Mongodb connected to db host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongodb Connection FAILED", error)
        process.exit(1)
    }
}

export default connect_db