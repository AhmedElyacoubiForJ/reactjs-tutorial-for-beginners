import React from 'react'
import Profile from './Profile';
import ShoppingList from './ShoppingList';

// multiple components in one single file for test only
export default function QuickStart() {
    return (
        <div>
            <h1>QuickStart react official site</h1>
            <MyButtonTest />
            <AboutPage />
            <Profile />
            <ShoppingList />
        </div>
    )
}

function MyButtonTest() {
    return (
        <button>
            I'm button
        </button>
    );
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}