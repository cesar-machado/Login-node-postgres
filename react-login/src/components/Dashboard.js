import React from 'react'
import './Dashboard.css'

function Dashboard({setAuth}) {
    return (
        <div>
            <h1>You got it</h1>
            <button onClick={() => {
                setAuth(false)
            }}>Log out</button>
        </div>
    )
}

export default Dashboard
