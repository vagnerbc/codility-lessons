// More flexible of Interfaces. Better for unions, primitive data and complex types (generics etc)
type User = {
  name: String;
  email: String;
  age?: Number;
};

// Usualy more used to represent object and contracts,
interface IUser {
  name: String;
}

type UserUnion = User & { lastName: String };

// PICK
type Name = Pick<User, "name">;

const name: Name = {
  name: "Vagner",
};

type CustomOmitUser = Omit<User, "age" | "email">;

const customOmitUser: CustomOmitUser = {
  name: "Vagner",
};

// change all properties to be optional
const partialUser: Partial<User> = {
  name: "Vagner",
};

const requiredUser: Required<User> = {
  name: "Vagner",
  email: "email",
  //   age: 36,
};

const nameAge: Record<string, number> = {
  Vagner: 36,
  Gabi: 30,
};

enum Types {
  basic,
  complex,
}

Types.basic.toString();

enum TypesStr {
  basic = "basic",
  complex = "complex",
}

TypesStr.basic.includes("basic");

const userKey: keyof User = "name";

function test(param1: string, param2: string): { result: number } {
  return {
    result: 10,
  };
}

// Parameters<T>
type Params = Parameters<typeof test>;
const params: Params = ["str1", "str2"];

// ReturnType<T>
type Returns = ReturnType<typeof test>;
const returns: Returns = {
  result: 45,
};

// DECORATOS - Add metadata and modify classes - EX: @Entity

/**
 * any, unknow, void, never
 */

const testFunction = (): void => {};
const testFunctionNever = (): never => {
  throw new Error("Should never return value");
};

const value: any = "str";
const valueUnknow: unknown = "str";

const upper = value.toUpperCase();

// `typeof` is the correct check for a primitive string.
const upper2 = typeof valueUnknow === "string" ? valueUnknow.toUpperCase() : "";

// `instanceof` checks objects created with a constructor. The order is
// `value instanceof Constructor`, and it does not match primitive strings.
const boxedString: unknown = new String("str");
const upper3 =
  boxedString instanceof String ? boxedString.toString().toUpperCase() : "";
