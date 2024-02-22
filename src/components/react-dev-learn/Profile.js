import React from 'react'

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
                className="avatar"
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
