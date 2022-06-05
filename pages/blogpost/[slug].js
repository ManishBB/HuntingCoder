import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/BlogPost.module.css'


const slug = () => {

    const router = useRouter()
    const {slug} = router.query

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page {slug}</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio expedita nostrum dolorem aspernatur! Ducimus magnam veniam neque sunt necessitatibus quos cum sint minima repellendus ad maiores impedit obcaecati, quam deserunt in dolorum doloremque ex! A blanditiis hic voluptatum assumenda possimus aliquid eius ab et commodi, recusandae itaque temporibus velit eveniet!</p>
            </main>
        </div>
    )
}

export default slug