import pino, { Logger as PinoLogger } from "pino";

export class CoreLoggingCapability {
  private logger: PinoLogger;

  constructor() {
    this.logger = pino({
      level: "info",
      base: null, // Remove PID and hostname from logs
      timestamp: pino.stdTimeFunctions.isoTime, // ISO timestamp
    });
  }

  /**
   * Logs an informational message.
   * @param message - The message to log.
   * @param meta - Optional metadata to log with the message.
   */
  public info(message: string, meta?: object): void {
    this.logger.info({ ...meta }, message);
  }

  /**
   * Logs an error message.
   * @param message - The message to log.
   * @param meta - Optional metadata to log with the message.
   */
  public error(message: string, meta?: object): void {
    this.logger.error({ ...meta }, message);
  }

  /**
   * Logs a warning message.
   * @param message - The message to log.
   * @param meta - Optional metadata to log with the message.
   */
  public warn(message: string, meta?: object): void {
    this.logger.warn({ ...meta }, message);
  }
}
