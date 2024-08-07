interface newUser {
  Id: number;
  userName: string;
}

declare namespace Express {
  interface Request {
    user?: newUser;
  }
}
