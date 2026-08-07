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

// ReturnType<T>
// Parameters<T>

// Keyof<T>

// DECORATOS - Add metadata and modify classes - EX: @Entity

/**
 * any, unknow, void, never
 */
