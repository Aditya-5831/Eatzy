import type { NextFunction, Request, Response } from "express"
import { AppError } from "./error-handler.middleware.js"

export const paramsValidator = (paramName: string) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const param = req.params[paramName]

        if (!param) {
            return next(new AppError(`${paramName} is required`, 400))
        }

        next()
    }
}