import type { User } from "../types/user.types";

export async function getUsers(): Promise<User[]> {
  const response = await fetch("/api/users");
  if (!response.ok) throw new Error("Failed to fetch users");
  return (await response.json()) as User[];
}
