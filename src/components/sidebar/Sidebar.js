import React from 'react'
import Card from '../card/Card'
import Title from '../title/Title'
import styles from './Sidebar.module.css'
const Sidebar = ({ posts }) => {
    return (
        <div className={styles.sidebar}>
            <Title label="Recent Posts..." />
            {posts ? posts.map((post) => (
                <Card key={post.id} title={post.title} difficulty={post.difficulty} materials={post.materials} id={post.id} />
            )) : <p>Skeleton loader</p>}
        </div>
    )
}

export default Sidebar
