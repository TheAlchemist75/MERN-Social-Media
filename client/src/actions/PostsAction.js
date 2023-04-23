// import * as PostsApi from '../api/PostsRequests';
import * as api from '../api/PostsRequests';

// export const getTimelinePosts = (id) => async (dispatch) => {
//   dispatch({ type: "RETREIVING_START" });
//   try {
//     const { data } = await PostsApi.getTimelinePosts(id);
//     dispatch({ type: "RETREIVING_SUCCESS", data: data });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "RETREIVING_FAIL" });
//   }
// };

// import { getTimelinePosts as apiGetTimelinePosts } from '../api/PostsRequests';

export const getTimelinePosts = (userId) => async (dispatch) => {
	dispatch({ type: 'RETRIEVING_START' });
	try {
		const data = await getTimelinePosts(userId);
		// Fetch posts of all followed users
		const followedUsersPosts = await Promise.all(
			data.following.map(async (followingUser) => {
				// const response = await api.get(`/posts/profile/${followingUser}`);
				const response = await api.getTimelinePosts(userId);
				return response.data;
			})
		);
		// Merge all fetched posts into one array
		const timelinePosts = [...data.posts, ...followedUsersPosts.flat()];
		dispatch({ type: 'RETRIEVING_SUCCESS', data: timelinePosts });
	} catch (error) {
		console.log(error);
		dispatch({ type: 'RETRIEVING_FAIL' });
	}
};
