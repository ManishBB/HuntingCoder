import React, { useEffect , useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json()
    }).then((parsed)=>{
      console.log(parsed)
      setBlogs(parsed)
    })
  }, [])

  return (
    <div className={styles.container}>
        <main className={styles.main}>

          {blogs.map((blogItem)=>{
            return <div className="blogItem" key={blogItem.title}>
            <Link href={`/blogpost/${blogItem.slug}`}>
            <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
            <p>{blogItem.content.substr(0,140)}</p>
          </div>
          })}


        </main>
    </div>
  )
}

export default Blog