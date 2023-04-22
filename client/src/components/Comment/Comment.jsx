import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Comment.css';

const Comment = ({ postId }) => {
	const [comments, setComments] = useState([]);
	const [commentText, setCommentText] = useState('');

	useEffect(() => {
		axios
			.get(`http://localhost:5000/comment/post/${postId}`)
			.then((response) => {
				setComments(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [postId]);

	const handleCommentSubmit = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:5000/comment', {
				postId,
				text: commentText,
			})
			.then((response) => {
				setComments([...comments, response.data]);
				setCommentText('');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<h3>Comments</h3>

			{/* Render comments */}
			{comments.map((comment) => (
				<div key={comment._id}>
					<p>{comment.text}</p>
					<p>By {comment.username}</p>
				</div>
			))}

			{/* Comment form */}
			<form onSubmit={handleCommentSubmit}>
				<input type='text' value={commentText} onChange={(e) => setCommentText(e.target.value)} />
				<button type='submit'>Add Comment</button>
			</form>
		</div>
	);
};

export default Comment;
