import type { CollectionConfig } from "payload";

import { adminFieldAccess, admins } from "../access";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Usuário",
    plural: "Usuários",
  },
  admin: {
    group: "Administração",
    useAsTitle: "email",
    defaultColumns: ["email", "name", "role"],
  },
  auth: {
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000,
    tokenExpiration: 8 * 60 * 60,
  },
  access: {
    admin: ({ req: { user } }) => Boolean(user),
    create: admins,
    read: admins,
    update: admins,
    delete: admins,
    unlock: admins,
  },
  graphQL: false,
  fields: [
    {
      name: "name",
      label: "Nome",
      type: "text",
      required: true,
    },
    {
      name: "role",
      label: "Papel",
      type: "select",
      required: true,
      defaultValue: "admin",
      saveToJWT: true,
      options: [
        { label: "Administrador", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
      access: {
        create: adminFieldAccess,
        update: adminFieldAccess,
      },
    },
  ],
};
