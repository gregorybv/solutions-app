import React from "react"
import "./postlist.css"
import PostItem from "../PostItem/PostItem"

const PostList = ({ posts }) => {
  return (
    <div className='postlist'>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostList
