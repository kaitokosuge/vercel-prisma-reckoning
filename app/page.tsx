import prisma from "@/lib/prisma";

export default async function Home() {
	const users = await prisma.user.findMany();
	console.log("user", users);
	const posts = await prisma.post.findMany();
	console.log("posts", posts);
	const res = await fetch("http://localhost:3000/api/user", {
		method: "GET",
	});
	if (!res.ok) {
		console.log("取得い失敗しました");
	}
	const data = await res.json();
	console.log("api routeの返却データです", data.users);
	return <div className="">hello</div>;
}
