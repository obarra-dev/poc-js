// with const it does not generate extra code
const enum ERROR_TYPE_INDEX {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDEN,
}
// it is a number from 0 to n
// 💥 Error, but If I add a new value at the begeing the index will change, so it cannot be used to be saved in databases
console.log(ERROR_TYPE_INDEX.FORBIDEN);

const enum ERROR_TYPE {
  NOT_FOUND = "notFound",
  UNAUTHORIZED = "unauthorized",
  FORBIDEN = "unauthorized",
}
console.log(ERROR_TYPE.FORBIDEN);

// if you do not use const, is  for libraries, to be used since it generate extra code
enum ERROR_TYPE_2 {
  NOT_FOUND = "notFound",
  UNAUTHORIZED = "unauthorized",
  FORBIDEN = "forbidenyy",
}
console.log(ERROR_TYPE_2.FORBIDEN);

const enum ERROR_TYPE_INDEX_2 {
  NOT_FOUND = 2,
  UNAUTHORIZED = 0,
  FORBIDEN = 2,
}

// 💥 Error, it  can generate errors since NOT_FOUND adn FORBIDEN have the same number
console.log(ERROR_TYPE_INDEX_2.FORBIDEN);
console.log(ERROR_TYPE_INDEX_2.NOT_FOUND);

enum Roles {
  Admin,
  Writer,
  Reader,
}

function hasAccess(role: Roles): void {
  console.log(role);
}

hasAccess(Roles.Admin);

// does not compile
// hasAccess(10);

enum RolesString {
  Admin = "admin",
  Writer = "writer",
  Reader = "reader",
}

function hasAccessString(role: RolesString): void {
  console.log(role);
}

hasAccess(Roles.Reader);
// doesn not compile
// hasAccess('admin')

// alternative enum way using object

const RolesCustom = {
  Admin: "admin",
  Writer: "writer",
  Reader: "reader",
} as const;

// Convert object key in a type
type RoleKeys = (typeof RolesCustom)[keyof typeof RolesCustom];

function hasAccessCustom(role: RoleKeys): void {
  console.log(role);
}

// hasAccessCustom("guest");

hasAccessCustom("admin");

hasAccessCustom(RolesCustom.Admin);

// other alternative

const RolesCustom2 = {
  Admin: "admin",
  writer: "writer",
  reader: "reader",
} as const;

type RoleKeys2 = keyof typeof RolesCustom2;

function hasAccessCustom2(role: RoleKeys2): void {
  console.log(role);
}

// hasAccessCustom("guest");

hasAccessCustom2("Admin");

// it is case sensitive
// hasAccessCustom2("admin");
// hasAccessCustom2(RolesCustom2.Admin);

hasAccessCustom2(RolesCustom2.writer);

// other alternative

type RoleType = "admin" | "writer" | "reader";

function hasAccessCustom3(role: RoleType): void {
  console.log(role);
}

hasAccessCustom3("admin");
