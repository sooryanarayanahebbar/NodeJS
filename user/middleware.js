module.exports.logRequest = (req, res, next) => {
    console.log(`LOGGER: ${req.method} ${req.url}`);

    return next();
    //return next(new Error('Something went wrong!'))
}