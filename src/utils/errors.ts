abstract class ApplicationError extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, new.target.prototype);
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
