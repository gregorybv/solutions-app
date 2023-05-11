import React, { useEffect, useState } from "react"
import "./hero.css"
import axios from "axios"
import PostList from "../PostList/PostList"

const Hero = ({ searchQuery }) => {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    try {
      // CORS интересная штука....2 часа из жизни в пустую))
      // если выдает ошибку установите расширения для браузера по обходу CORS
      // иначе эта проблема решается на стороне сервера, но это уже другая история...
      const response = await axios.get(
        "https://cloud.codesupply.co/endpoint/react/data.json"
      )
      setPosts(response.data)
      // console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  const filteredPosts = posts.filter((post) =>
    // startsWith - соответственно фильтрация происходит по начальным символам title !!!
    post.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  )

  return (
    <section className='hero container'>
      <PostList posts={filteredPosts} key={posts.date} />
    </section>
  )
}

export default Hero
