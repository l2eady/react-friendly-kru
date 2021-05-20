import React from 'react'
import UserBar from "../components/UserBar/userbar"

const UserLayout = ({children}) => {
    return (
        <div>
            <UserBar/>
            <div className="container mx-auto my-4">
                {children}
            </div>
        </div>
    )
}

export default UserLayout