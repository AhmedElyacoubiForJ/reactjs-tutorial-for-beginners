import React from 'react'
import styles from './profile.module.css'

function Profile() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }
    
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className={styles.avatar}
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{  // is a regular {} object inside the style={ } JSX curly braces
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}

export default Profile
