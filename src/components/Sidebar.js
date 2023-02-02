import React, { useState } from 'react'
import { FaAtlassian, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='con'>
            <div style={{ width: isOpen ? "100px" : "200px" }} className='sidebar'>
                <div className='top_section'>
                    <h1 style={{ display: isOpen ? "none" : "block" }} className='logo' >Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "10px" }} className='bars'>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                <NavLink to='/' className="link" aciiveclassName='active'>
                    <div className='icon'><FaAtlassian /></div>
                    <div className='link_text'>Dashboard</div>
                </NavLink>
                <NavLink to='/about' className="link" >
                    <div className='icon'><FaAtlassian /></div>
                    <div className='link_text'>about</div>
                </NavLink>
            </div>
            <main> {children}</main>
        </div>
       
    )
}

export default Sidebar
