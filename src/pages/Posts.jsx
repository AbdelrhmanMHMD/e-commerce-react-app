import axios from "axios";
import React,{useState,useEffect} from "react";

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);

			setPosts(data);
		};
		fetchPosts();
	},[]);
	return (
		<React.Fragment>
			<h1>Posts</h1>
			<ul>
				{posts.map((p) => (
					<li key={p.id}>{p.title}</li>
				))}
			</ul>
		</React.Fragment>
	);
};

export default Posts;
