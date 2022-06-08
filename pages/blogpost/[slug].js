import { useRouter } from 'next/router'
import React , { useEffect , useState } from 'react'
import styles from '../../styles/BlogPost.module.css'


const slug = () => {

    const router = useRouter()
    const [blog, setBlog] = useState()
    useEffect(()=>{
        if(!router.isReady) return;
        const {slug} = router.query
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
          return a.json()
        }).then((parsed)=>{
          console.log(parsed)
          setBlog(parsed)
        })
      }, [router.isReady])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr />
                <p>{blog && blog.content}</p>
            </main>
        </div>
    )
}

export default slug