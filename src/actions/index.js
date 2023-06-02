//action types
export const ADD_POSTS = 'ADD_POSTS';

export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const UPDATE_POST = 'UPDATE_POST';

export const DELETE_POST = 'DELETE_POST';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const SEARCH_POSTS = 'SEARCH_POSTS';

//action creators
export function addPosts(posts){

    return {
        type: ADD_POSTS,
        posts    }
}

export const searchPosts = (searchTerm) => ({
  type: SEARCH_POSTS,
  payload: searchTerm,
});

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

// postActions.js

// Action types
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// Action creators
export const addPostRequest = () => ({
  type: ADD_POST_REQUEST,
});

export const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: post,
});

export const addPostFailure = (error) => ({
  type: ADD_POST_FAILURE,
  payload: error,
});




// Async action creator to add a post
export const addPost = (postData) => {
  return async (dispatch) => {
    dispatch(addPostRequest());

    try {
      // Make an API call to add the post
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to add post');
      }

      const data = await response.json();

      // Dispatch success action with the new post
      dispatch(addPostSuccess(data));
    } catch (error) {
      // Dispatch failure action with the error
      dispatch(addPostFailure(error.message));
    }
  };
};



// Action Types
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

// Action Creators
export const updatePostRequest = () => {
  return {
    type: UPDATE_POST_REQUEST,
  };
};

export const updatePostSuccess = (post) => {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: post,
  };
};

export const updatePostFailure = (error) => {
  return {
    type: UPDATE_POST_FAILURE,
    payload: error,
  };
};

// Async Action
export const updatePost = (post) => {
  return (dispatch) => {
    dispatch(updatePostRequest());

    // Make the API call to update the post
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to update post');
        }
      })
      .then((data) => {
        dispatch(updatePostSuccess(post));
      })
      .catch((error) => {
        dispatch(updatePostFailure(error.message));
      });
  };
};



// Action Types
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

// Action Creators
export const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST,
  };
};

export const deletePostSuccess = (postId) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: postId,
  };
};

export const deletePostFailure = (error) => {
  return {
    type: DELETE_POST_FAILURE,
    payload: error,
  };
};

// Async Action
export const deletePost = (post) => {
  return (dispatch) => {
    dispatch(deletePostRequest());

    // Make the API call to delete the post
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to delete post');
        }
      })
      .then((data) => {
        dispatch(deletePostSuccess(post));
      })
      .catch((error) => {
        dispatch(deletePostFailure(error.message));
      });
  };
};



