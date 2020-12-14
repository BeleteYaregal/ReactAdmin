module.exports = (req, res, next) =>{
    res.header("Content-Range", "posts 01-20/20")
    next()
}