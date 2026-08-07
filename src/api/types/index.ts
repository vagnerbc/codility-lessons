export type userToken = {
  name: string;
};

declare global {
  namespace Express {
    interface Request {
      user?: userToken;
    }
  }
}
