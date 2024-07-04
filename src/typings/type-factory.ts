import { ModuleAccess, TypeRef } from "./ast-types";

const rootAccess = new ModuleAccess([]);

export const intTypeRef: TypeRef = {
  category: "TypeRef",
  access: rootAccess,
  name: "Int",
  typeArgs: [],
};

export const stringTypeRef: TypeRef = {
  category: "TypeRef",
  access: rootAccess,
  name: "String",
  typeArgs: [],
};

export const yonTypeRef: TypeRef = {
  category: "TypeRef",
  access: rootAccess,
  name: "yon",
  typeArgs: [],
};

export const floatTypeRef: TypeRef = {
  category: "TypeRef",
  access: rootAccess,
  name: "Float",
  typeArgs: [],
};

export const unitTypeRef: TypeRef = {
  category: "TypeRef",
  access: rootAccess,
  name: "Unit",
  typeArgs: [],
};

export const atomTypeRef: TypeRef = {
  category: "TypeRef",
  access: rootAccess,
  name: "__atom__",
  typeArgs: [],
};
