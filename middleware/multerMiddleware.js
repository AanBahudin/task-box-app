import multer from "multer";
import DataParser from 'datauri/parser.js'
import path from 'path'

const storage = multer.memoryStorage()
const upload = multer({ storage })

const parser = new DataParser()

export const formatImage = (photoFile) => {
    const fileExtension = path.extname(photoFile.originalname).toString()
    return parser.format(fileExtension, photoFile.buffer).content
}

export default upload