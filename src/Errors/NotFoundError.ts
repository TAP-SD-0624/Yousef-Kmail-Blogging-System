export class NotFoundError extends Error {
  constructor(message: string = "resource not found ") {
    super(message);
  }
}
