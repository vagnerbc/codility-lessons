import { Request, Response } from "express";
import { AppError } from "../exceptions";

type APIResponse<T> = {
  status: number;
  data: T[];
};

type Users = {
  name: string;
  email: string;
};

const users: Users[] = [
  {
    name: "Vagner",
    email: "vagner.bcastro@gmail.com",
  },
  {
    name: "Larissa",
    email: "larissa.bcastro@gmail.com",
  },
];

// const functionA = (data: string, n: number) => {};

// const a: Omit<Users, "name">;
// const b: Pick<Users, "name" | "email">;
// const c: Partial<Users>;
// const d: Required<Users>;
// const e: Parameters<typeof functionA> = ["data", 10];
// const f: Record<string, string>;
// const g: keyof Users = "email";
// const h: readonly Users[];
// const i: APIResponse<Users>;

export const userController = {
  getUsers: async (req: Request, res: Response) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    res.status(200).json(users);
  },
  getById: (req: Request, res: Response) => {
    const { name } = req.params;

    const user = users.find((user) => user.name === name);

    if (!user) {
      throw new AppError("No user", 400);
    }

    res.status(200).json(user);
  },
};
