import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const posts = await prisma.post.findMany();
	console.log("api route上のデータ", posts);
	return NextResponse.json({ data: posts });
}
