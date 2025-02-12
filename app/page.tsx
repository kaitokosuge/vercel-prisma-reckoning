import prisma from "@/lib/prisma";

export default async function Home() {
	const users = await prisma.user.findMany();
	console.log("user", users);
	const posts = await prisma.post.findMany();
	console.log("posts", posts);
	const tags = await prisma.tag.findMany();
	console.log("tags", tags);
	const tagByWhere = await prisma.tag.findMany({
		where: {
			title: "",
		},
	});
	console.log("絞り込みtags", tagByWhere);
	const postByWhere = await prisma.post.findMany({
		where: {
			title: "",
		},
	});
	console.log("絞り込みposts", postByWhere);

	const userByWhere = await prisma.user.findMany({
		where: {
			name: "hello",
		},
	});
	console.log("userByWhere", userByWhere);

	const userByWhereId = await prisma.user.findUnique({
		where: {
			id: "hello",
		},
	});
	console.log("userByWhere", userByWhereId);

	const res = await fetch("http://localhost:3001/api/user", {
		method: "GET",
	});
	if (!res.ok) {
		console.log("取得い失敗しました");
	}
	const data = await res.json();
	console.log("api routeの返却データです", data.users);
	return <div className="">hello</div>;
}
