import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const users = await prisma.user.findMany();
	console.log("api route上のデータ", users);
	return NextResponse.json({ users: users });
}
