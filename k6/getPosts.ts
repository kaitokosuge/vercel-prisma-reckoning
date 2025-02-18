import http from "k6/http";
export const getPosts = () => {
	const k6Res = http.get("http://localhost:3001/api/post");
	console.log(k6Res.body);
};
