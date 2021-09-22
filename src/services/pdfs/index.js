import express from "express"
import request from "request"
//import { getpdfreadablestream } from "../../lib/pdf"
import {pipeline} from "stream"
import fs from "fs"
import path, {dirname, join} from 'path'
import { fileURLToPath } from "url"


//const url = "https://skimdb.npmjs.com/registry/_changes?include_docs=true"

// const source = request.get(url)
// const destination = process.stdout
// pipeline(source, destination, err=> {
//     if(err) console.log(err)
//     console.log(data.body)
// })
const currentdirectory = join(dirname(fileURLToPath(import.meta.url)), "data.json")
const datajsonpath = path(process.cwd(), "data.json")
const source = fs.createReadStream(datajsonpath)
const destination = process.stdout
pipeline(source, destination, err=> {
    if(err) console.log(err)
    console.log("success")
})


// const pdfRouter = express.Router()

// pdfRouter.get("/", (req,res,next) => {
//     Source = getpdfreadablestream()
// })

// export default pdfRouter