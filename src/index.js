import dotenv from "dotenv"
import connect_db from "./db/connectdb.js"

dotenv.config({
    path: './env'
})

connect_db()
// import express  from "express";

// const app = express()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.mongodb_uri}/${db_name}`)
//         app.on("error", (error) => {
//             console.log("Express can't listen to the app. Error: ", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`The app is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error: ", error)
//         throw err
//     }
// })()