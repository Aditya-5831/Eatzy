import type { NextFunction, Request, Response } from "express";

export class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode = 500) {
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor)
    }

}

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    const statusCode = err instanceof AppError ? err.statusCode : 500
    const message = err instanceof AppError ? err.message : "Something went wrong"

    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    })

}