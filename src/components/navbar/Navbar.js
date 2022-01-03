import React from 'react'
import { Link } from 'react-location'
import styles from './Navbar.module.css'
const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link to="/">
                    <img className={styles.img} src={`https://res.cloudinary.com/dum4u7sro/image/upload/v1639772475/D_L_yj4pxy.png`} alt="logo" />
                </Link>
            </div>
            <div className={styles.items}>
                <Link className={styles.item} to="/">Home</Link>
                <Link className={styles.item} to="/create">Create</Link>
                <Link className={styles.item} to="/posts">Posts</Link>
            </div>
        </nav>
    )
}

export default NavBar
