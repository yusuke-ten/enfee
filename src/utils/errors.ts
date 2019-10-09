abstract class ApplicationError extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ServerError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'ServerError';
  }
}

export class LoginError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'LoginError';
  }
}

export class TimeoutError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'TimeoutError';
  }
}

export class ValidationError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'ValidationError';
  }
}

export class NotImplementError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'NotImplementError';
  }
}
