import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPostForJSONServer } from "../models/IPostForJSONServer";


export const postAPIForJSONServer = createApi({
  reducerPath: 'postAPIForJSONServer',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPostForJSONServer[], number>({
      query: (limit: number = 5) => {
        return {
          url: '/posts',
          params: {
            _limit: limit
          }, 
        }
      },
      providesTags: result => ['Post']
    }),
    createPost: build.mutation<IPostForJSONServer, IPostForJSONServer>({
      query: (post: IPostForJSONServer) => ({
        url: '/posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    updatePost: build.mutation<IPostForJSONServer, IPostForJSONServer>({
      query: (post: IPostForJSONServer) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post 
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: build.mutation<IPostForJSONServer, IPostForJSONServer>({
      query: (post: IPostForJSONServer) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Post']
    })  
  })
})