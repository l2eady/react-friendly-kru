import React from 'react'
import NavBar from '../components/Navbar/Navbar'


const MainLayout = ({ children }) => {

    return (
        <div >
            <NavBar />
            <div className="container mx-auto my-4">
                {children}
            </div>
        </div>
    )

}

export default MainLayout