import { NextFunction, Request, Response } from "express";
import { ZodSchema, z } from "zod";

const zodValidation = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({ body: req.body });
      return next();
    } catch (err) {
      next(err);
    }
  };
};

export default zodValidation;
