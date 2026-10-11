import type { Access, FieldAccess } from "payload";

type UserWithRole = {
  role?: "admin" | "editor" | null;
};

export const isAdminUser = (user: unknown): user is UserWithRole & { role: "admin" } =>
  Boolean(user && typeof user === "object" && "role" in user && user.role === "admin");

export const authenticated: Access = ({ req: { user } }) => Boolean(user);

export const admins: Access = ({ req: { user } }) => isAdminUser(user);

export const adminFieldAccess: FieldAccess = ({ req: { user } }) => isAdminUser(user);
