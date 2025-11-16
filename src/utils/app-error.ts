export class AppError extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;

    // Ensure correct prototype is set (required for TS)
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
