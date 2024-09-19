import { useState } from "react";
import { useEffect } from "react";

export default function useFetchPost() {
	const [post, setPost] = useState(null);
	const [id, setId] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${id}/?_delay=1000`
			);
			const data = await res.json();
			setPost(data);
			setLoading(false);
		};
		if (id !== "") {
			fetchData();
		}
	}, [id]);

	return {
		post,
		id,
		setId,
		loading,
	};
}
