import { usersData } from "../_lib/users-data";

export async function GET() {
  return Response.json(usersData);
}

export async function POST(request: Request) {
  const res = await request.json();
  usersData.push(res);
  return Response.json(usersData);
}
