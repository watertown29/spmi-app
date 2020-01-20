import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaAlignJustify} from "react-icons/fa";
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
                    <span className="hamburger" onClick={this.handleToggle}>{<FaAlignJustify size={60}/>}</span>
                    <h1 className="header-title">Dashboard</h1>
                </nav>
                <div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/Content">Content</Link>
                        </li>
                        <li>
                            <Link to="/Syllabus">Syllabus</Link>
                        </li>
                        <li>
                            <Link to="/err">Error</Link>
                        </li>
                        <div className="back-btn-container" onClick={this.handleToggle}>
                            {<IoIosArrowBack size={75} className="back-btn"/>}
                        </div>
                    </ul>    
                </div>
            </>
        )
    }
}
