import { usersData } from "@/app/_lib/users-data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log({ params });
  const item = usersData.find((user) => user.id.toString() === params.id);
  return Response.json(item || { message: "User not available" });
}
