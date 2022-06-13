import React, { useEffect , useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = (props) => {

  const [blogs, setBlogs] = useState(props.allBlogs)
  console.log(blogs)

  // useEffect(()=>{
  //   fetch('http://localhost:3000/api/blogs').then((a)=>{
  //     return a.json()
  //   }).then((parsed)=>{
  //     console.log(parsed)
  //     setBlogs(parsed)
  //   })
  // }, [])

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

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json();
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog