import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaBars, FaThLarge, FaClock, FaCommentAlt, FaAngry } from "react-icons/fa";
import { IoIosArrowBack} from "react-icons/io";

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <>
                <nav className="header">
                    <span onClick={this.handleToggle}>{<FaBars size={40} className="hamburger"/>}</span>
                    <h1 className="header-title">SPMI Home Dashboard</h1>
                </nav>
                <div className={this.state.isOpen?"menu show-nav":"menu"}>
                        <ul>
                            <li>
                                <FaThLarge className="menu-icon"/>
                                <Link className="menu-titles" to="/">Dashboard</Link>
                            </li>
                            <li >
                                <FaClock className="menu-icon"/>
                                <Link className="menu-titles" to="/Syllabus">Syllabus</Link>
                            </li>
                            <li >
                                <FaCommentAlt className="menu-icon"/>
                                <Link className="menu-titles" to="/Content">Content</Link>
                            </li>
                            
                            <li >
                                <FaAngry className="menu-icon"/>
                                <Link className="menu-titles" to="/err">Error</Link>
                            </li >
                            <div className="back-btn-container" onClick={this.handleToggle}>
                                {<IoIosArrowBack size={50} className="back-btn"/>}
                            </div>
                        </ul>    
                </div>    
                
            </>
        )
    }
}
