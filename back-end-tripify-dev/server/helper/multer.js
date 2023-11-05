const multer = require('multer')

const fileDestination = (req, file, cb) => {
    cb(null, 'image/')
}

const standartName = (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
}

const storage = multer.diskStorage({
    destination: fileDestination,
    filename: standartName
})

module.exports.upload = multer({ storage: storage })