import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-wrapper">
                    <div className="header-number-phone">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <a href="coco">0988888290</a>
                    </div>
                    <div className="header-banner">
                        <span>COCO Shop - Hệ thống thương hiệu mỹ phẩm chính hãng, với 600 thương hiệu mỹ phẩm - uy tín - chất lượng Top 1 Việt Nam</span>
                    </div>
                    <div className="header-leangue">
                        <a href="coco" className="header-vi">VI</a>
                        <a href="coco" className="header-en">EN</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;