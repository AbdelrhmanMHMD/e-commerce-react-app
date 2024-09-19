import React from "react";
import useFetchPost from "./../Hooks/useFetchPost";

const Post = () => {
	const { post, id, setId, loading } = useFetchPost();

	return (
		<React.Fragment>
			<h1>Post</h1>
			<div>
				<label htmlFor="id">Post ID</label>
				<input
					value={id}
					onChange={(e) => {
						setId(e.target.value);
					}}
					type="text"
					name="id"
					id="id"
				/>
			</div>
			<div>{id && loading && "Loading..."}</div>
			<div>{!loading && id && post && JSON.stringify(post)}</div>
		</React.Fragment>
	);
};

export default Post;
