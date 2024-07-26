import { Extends, Expect } from "@total-typescript/helpers";

type Common = {
  id: string;
  createdAt: Date;
};
type User = Common & {
  name: string;
  email: string;
};

type Product = Common & {
  name: string;
  price: number;
};

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >
];
