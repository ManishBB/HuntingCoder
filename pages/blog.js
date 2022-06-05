import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <div className="blogItem">
            <Link href={'/blogpost/learn-javascript'}>
            <h3 className={styles.blogItemh3}>How to learn JS in 2022</h3></Link>
            <p>JS is used to design logic in web!</p>
          </div>

          <div className="blogItem">
            <h3>How to learn JS in 2022</h3>
            <p>JS is used to design logic in web!</p>
          </div>

          <div className="blogItem">
            <h3>How to learn JS in 2022</h3>
            <p>JS is used to design logic in web!</p>
          </div>

          <div className="blogItem">
            <h3>How to learn JS in 2022</h3>
            <p>JS is used to design logic in web!</p>
          </div>
        </main>
    </div>
  )
}

export default Blog