import axios from 'axios';
import React, { useState } from 'react';
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

	// axios
	// 	.get(`http://localhost:5000/user/${data.userId}`)
	// 	.then(function (response) {
	// 		// handle success
	// 		console.log(response);
	// 	})
	// 	.catch(function (error) {
	// 		// handle error
	// 		console.log(error);
	// 	})
	// 	.then(function () {
	// 		// always executed
	// 		// const userName = response.data.username;
	// 	});
//----------------------------------------------------------
// Declare the variable outside the axios function
let userName;

axios
  .get(`http://localhost:5000/user/${data.userId}`)
  .then(function (response) {
    // Set the value of the userName variable inside the response function
    userName = response.data.username;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // Display the userName variable in the username div element
    const usernameDiv = document.querySelector('.username');
    usernameDiv.innerHTML = `<b>${userName}</b>`;
  });

	const handleLike = () => {
		likePost(data._id, user._id);
		setLiked((prev) => !prev);
		liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
	};
	return (
		<div className='Post'>
			<div className='username'>
				<b>{`<b>${userName}</b>`}</b>
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
		</div>
	);
};

export default Post;
