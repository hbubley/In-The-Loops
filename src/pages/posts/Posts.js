import React from 'react'
import Card from '../../components/card/Card'
import Title from '../../components/title/Title'
import useFetch from '../../hooks/useFetch'
import styles from './Posts.module.css'
const Posts = () => {
    const [data, isPending, error] = useFetch('http://localhost:3001/patterns');
    return (
        <div className={styles.posts}>
            <Title label="Posts" />
            <div className={styles.gallery}>
                {data ? data.map((post) => (

                    <Card title={post.title} difficulty={post.difficulty} materials={post.materials} id={post.id} />

                )) : <p>Skeleton loader</p>}
            </div>
        </div>
    )
}

export default Posts
