import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-location'
import { Button } from '../../components/button/Button'
import styles from './Home.module.css';
import { projectFirestore } from '../../firebase/config';
const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {

        projectFirestore.collection("patterns").get().then((res) => console.log(res))
    }, [])
    return (
        <>
            <div className={styles.home}>
                <div>
                    <h1 className={styles.title}>In The Loops</h1>
                    <p className={styles.subtitle}>All your yarn in one place</p>
                    <Button label="View Patterns" variant="primary" onClick={() => navigate({ to: "/posts" })} />
                </div>
            </div>
            <div className={styles.sidebanner}>
                <Link to="/create" className={styles.link}>
                    Create your own exportable pattern!
                </Link>
            </div>
        </>
    )
}

export default Home
