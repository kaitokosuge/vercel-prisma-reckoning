/* eslint-disable import/no-anonymous-default-export */
import { sleep } from "k6";
import http from "k6/http";
// import { sleep, check } from "k6";

export const options = {
	vus: 10,
	duration: "120s",
};

export default function () {
	const k6Res = http.get("http://localhost:3001/api/post");
	console.log(k6Res.body);
	sleep(1);
}
