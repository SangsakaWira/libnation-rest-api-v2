exports.upload = (req, res) => {
    res.send({
        ...req.file,
        path:`http://localhost:5000/${req.file.path}`
    })
}