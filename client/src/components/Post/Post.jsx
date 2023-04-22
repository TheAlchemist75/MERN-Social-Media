import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { likePost } from '../../api/PostsRequests';
import Comment from '../../img/comment.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import Share from '../../img/share.png';
import './Post.css';

const Post = ({ data }) => {
	const { user } = useSelector((state) => state.authReducer.authData);
	const [liked, setLiked] = useState(data.likes.includes(user._id));
	const [likes, setLikes] = useState(data.likes.length);
	const [userName, setUserName] = useState('');

	useEffect(() => {
		axios
			.get(`http://localhost:5000/user/${data.userId}`)
			.then(function (response) {
				setUserName(response.data.username);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [data.userId]);

	const handleLike = () => {
		likePost(data._id, user._id);
		setLiked((prev) => !prev);
		liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
	};
	return (
		<div className='Post'>
			<div className='username'>
				<b>{userName}</b>
			</div>
			<div className='detail'>
				<span>
					<b>{data.name} </b>
				</span>
				<span>{data.desc}</span>
			</div>

			<img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ''} alt='' />

			<div className='postReact'>
				<img src={liked ? Heart : NotLike} alt='' style={{ cursor: 'pointer' }} onClick={handleLike} />
				<img src={Comment} alt='' />
				<img src={Share} alt='' />
			</div>

			<span style={{ color: 'var(--gray)', fontSize: '12px' }}>{likes} likes</span>

			{/* <Comment postId={data._id} /> */}
		</div>
	);
};

export default Post;
