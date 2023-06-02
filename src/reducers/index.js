//reducers functions will be pure functions

import { combineReducers } from "redux";

//default value of movie reducer will be an empty array when no argument or state is passed 
import {ADD_POSTS, DELETE_POST, SEARCH_POSTS ,UPDATE_POST,FETCH_POSTS_FAILURE,FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE, DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,} from "../actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};


export   function posts( state = initialState, action){

    switch (action.type) {
        case ADD_POSTS:

              return{
                ...state,
                data: action.posts
              }
            
    
    // case UPDATE_POST:
    //   return {
    //     ...state,
    //     data: state.data.map((currPost) =>
    //       { 
    //          console.log(action.payload);
    //       if(currPost.id === action.payload.id ){
    //         return action.payload;
    //       }
    //       return currPost;
    //       }
    //     )
    //   };
    case SEARCH_POSTS:
      return {
        ...state,
        data: state.data.filter((post) =>
          post.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

        //    case DELETE_POST:

        //    const fileredArray = state.data.filter(
        //     post => post.id !== action.payload
        //    );

        //    return {
        //       ...state,   
        //     data: fileredArray
            
        //    }

           case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


       case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    

      case UPDATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
         data: state.data.map((currPost) =>
          { 
             
          if(currPost.id === action.payload.id ){
            return action.payload;
          }
          return currPost;
          }
        ),
        isLoading: false,
        error: null,
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };


       case DELETE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case DELETE_POST_SUCCESS:

      const fileredArray = state.data.filter(
            post => post.id !== action.payload
           );
      return {
        ...state,
        data: fileredArray,
        isLoading: false,
        error: null,
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
   

        default:
           return state;
    }
            
}


 

export default combineReducers({
   posts
})