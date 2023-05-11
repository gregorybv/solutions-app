import React, { useState, useEffect, useRef } from "react"
import "./postitem.css"
import { CgClose } from "react-icons/cg"

const PostItem = ({ post }) => {
  const [showPopup, setShowPopup] = useState(false)

  const popupRef = useRef()

  const handleClick = () => {
    setShowPopup(true)
  }

  const handleClose = () => {
    setShowPopup(false)
  }

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false)
      }
    }

    document.addEventListener("click", handleDocumentClick)

    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [])

  return (
    <div className='postitem' ref={popupRef}>
      <div className='postitem__content'>
        <img
          className='postitem__image'
          src={post.img}
          alt='img'
          srcSet={`${post.img} 1x`}
        />
        <p className='postitem__tags'>{post.tags}</p>
        <h1>{post.title}</h1>
        <div className='postitem__block'>
          <p className='postitem__block_autor'>{post.autor}</p>
          <div className='postitem__dot'></div>
          <p className='postitem__block_date'>{post.date}</p>
          <div className='postitem__dot'></div>
          <p className='postitem__block_views'>{post.views} Views</p>
          <button className='postitem__button' onClick={handleClick}>
            <p className='postitem__button_text'>Show More</p>
          </button>
          <div className='window'>
            {showPopup && (
              <div className='popup'>
                <div className='popup__content'>
                  <CgClose
                    className='popup__close'
                    onClick={handleClose}
                    size={50}
                  />
                  <img
                    className='popup__image'
                    src={post.img_2x}
                    alt='img_2x'
                    loading='lazy'
                    srcSet={`${post.img_2x} 2x`}
                  />
                  <div className='popup__item'>
                    <p className='popup__tags'>{post.tags}</p>
                    <h2>{post.title}</h2>

                    <div className='popup__block'>
                      <p className='popup__block_autor'>{post.autor}</p>
                      <div className='popup__dot'></div>
                      <p className='popup__block_date'>{post.date}</p>
                      <div className='popup__dot'></div>
                      <p className='popup__block_views'>{post.views} Views</p>
                    </div>
                    <p className='popup__text'>{post.text}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className='postitem__text'>{post.text}</p>
      </div>
    </div>
  )
}

export default PostItem
