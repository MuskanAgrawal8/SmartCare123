import jwt from "jsonwebtoken"
import { HTTP_STATUS_CODE } from "../constants/httpStatusCode.js";

// admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers
        if (!atoken) {
            res
                .status(HTTP_STATUS_CODE.UNAUTHORIZED)
                .json({ success: false, message: 'Not Authorized Login Again' })
            return;
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res
                .status(HTTP_STATUS_CODE.UNAUTHORIZED)
                .json({ success: false, message: 'Not Authorized Login Again' })
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin;