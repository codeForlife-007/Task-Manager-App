const asyncWrapper = (_) => {
    return async(req, res, next) => {
        try {
            await _(req, res, next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = asyncWrapper;