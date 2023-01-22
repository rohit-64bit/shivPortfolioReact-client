import React, { useState } from 'react'
import { SERVER_URL } from '../services/helper';
import mainContext from './mainContext'

function MainState(props) {

  const [notification, setNotification] = useState({})

  const [videos, setVideos] = useState([])

  const fetchVideo = async () => {

    const response = await fetch(`${SERVER_URL}/api/video/fetch`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    setVideos(json)

  }

  const [blogs, setBlogs] = useState([])

  const fetchBlog = async () => {

    const response = await fetch(`${SERVER_URL}/api/blog/fetch`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    setBlogs(json)

  }

  return (
    <mainContext.Provider value={{ fetchVideo, videos, fetchBlog, blogs, notification, setNotification }}>
      {props.children}
    </mainContext.Provider>
  )
}

export default MainState