import prisma from "@/lib/prisma";

export default async function Home() {
	const startTime = new Date().getTime();
	const posts = await prisma.post.findMany();
	const nowTime = new Date().getTime();
	const runTime = nowTime - startTime;
	console.log("実行時間", runTime, "m秒");
	console.log("postsデータです", posts);
	return (
		<div className="">
			{posts.map((post) => (
				<div key={post.id} className="mt-5">
					{post.title}
				</div>
			))}
		</div>
	);
}
