

const loggering = (req, res, next) =>{
    const method = req.method;
    const url= req.url;
    const date = Date.now()
    console.log(method, url, Date);
    next();
}

module.exports = loggering