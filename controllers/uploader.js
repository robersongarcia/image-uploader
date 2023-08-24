const {response, request} =  require('express')
const crypto = require('crypto')
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const home = (req, res = response) => {
    res.send("Hello World")
}

const postFile = (req = request, res = response) => {
    
    //Validations
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).json({
          msg: 'No files uploaded'
        });
    }
    
    const {file} = req.files

    if(file.size > 50 * 1024 * 1024){
        return res.status(400).json({
            msg: 'File size exceeds limit'
        });
    }

    if(file.mimetype !== "image/png" && file.mimetype !== "image/jpg" && file.mimetype !== "image/jpeg"){
        return res.status(400).json({
            msg: 'File type not allowed'
        });
    }

    const fileName = file.name.split(".")

    // create a uid for the file
    const uuid = crypto.randomUUID()

    // Use the mv() method to place the file in the public folder

    const pathName = `${appDir}/public/${uuid}.${fileName[fileName.length - 1]}`

    file.mv(pathName, (err) => {
        if (err){
            return res.status(500).json({
                msg: 'Error uploading file'
            });
        }

        res.json({
            msg: 'File uploaded successfully',
            uuid: uuid,
            path: pathName
        });
    });

}

module.exports = {
    home,
    postFile
}