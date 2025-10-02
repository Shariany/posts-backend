const jwt = require("jsonwebtoken")
Bearer
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorisation.split("")[1];

        let decodedData;

        if (token) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData.id;
        } 
        next()
        
    } catch (error) {
        res.status(401).json({message:})
    }
}
module.exports = router;