import {Response} from "express";

export enum ResponseStatusEnum {
    success = "success",
    fail = "fail"
}

export enum ResponseCodeEnum {
    success = 200,
    errorValidation = 400,
    errorAuthentication = 401,
}

export const ResponseHandler = (res: Response, data: any, status: ResponseStatusEnum, code: ResponseCodeEnum) => {
    const responseObject = {
        data,
        status,
        code
    }
    res.status(code).send(responseObject)
}
