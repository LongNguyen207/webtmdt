import React from 'react';

class BannerProduct extends React.Component {
    render() {
        return(
            <div className="banner-product-container">
                <div className="banner-product-image">
                    <img src="https://cocoshop.vn/uploads/news/2020_05/xit-khoang.jpg" alt="banner" />
                </div>
                <div className="banner-product-image">
                    <img src="https://cocoshop.vn/uploads/news/2020_05/my-pham-han-quoc.jpg" alt="banner" />
                </div>
                <div className="banner-product-image">
                    <img src="https://cocoshop.vn/uploads/news/2020_04/cocoshop1_1.jpg" alt="banner" />
                </div>
            </div>
        );
    }
}

export default BannerProduct;