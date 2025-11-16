import { Request, Response, NextFunction } from 'express';
import colors from 'colors';

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  // When response finishes
  res.on('finish', () => {
    const duration = Date.now() - start;

    const method = req.method;
    const url = req.originalUrl;
    const status = res.statusCode;

    let statusColor =
      status >= 500
        ? colors.red
        : status >= 400
        ? colors.yellow
        : status >= 300
        ? colors.cyan
        : colors.green;

    console.log(
      //   `${colors.magenta(`[${new Date().toISOString()}]`)} ` +
      `${colors.blue(method)} ` +
        `${colors.white(url)} → ` +
        statusColor(status.toString()) +
        ` ${colors.gray(`(${duration}ms)`)}`
    );
  });

  next();
};
