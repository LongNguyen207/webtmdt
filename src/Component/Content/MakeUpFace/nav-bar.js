import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar-wrapper">
                <div className="nav-bar-container">
                    <Link to="/">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <span>Trang chủ</span>
                    </Link>
                    <a href="coco">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        <span>Trang điểm</span>
                    </a>
                    <a href="coco"> 
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        <span>Trang điểm mặt</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default NavBar;