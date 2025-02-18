type Post = {
	id: string;
	title: string;
	content: string | null;
	color: string;
	published: boolean;
	authorId: string | null;
}[];

export default async function Home() {
	const startTime = new Date().getTime();
	const res = await fetch("http://localhost:3001/api/post", {
		method: "GET",
	});
	if (!res.ok) {
		console.log("失敗しました");
	}
	const nowTime = new Date().getTime();
	const runTime = nowTime - startTime;
	const posts: { data: Post } = await res.json();
	console.log("実行時間", runTime, "m秒");
	console.log("postsデータです", posts);
	return (
		<div className="">
			{posts.data.map((post) => (
				<div key={post.id} className="mt-5">
					{post.title}
				</div>
			))}
		</div>
	);
}
