import {Request, Response} from "express";
import {ResponseCodeEnum, ResponseHandler, ResponseStatusEnum} from "./responseHandler";


export const AuthMiddleware = (req: Request, res: Response): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(true)
        } else {
            ResponseHandler(res, "didn\'t pass", ResponseStatusEnum.fail, ResponseCodeEnum.errorValidation);
            reject(false)
        }
    })
}
