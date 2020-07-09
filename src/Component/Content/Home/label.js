import React from 'react';

class Label extends React.Component {
    render() {
        return (
            <div className="label-container">
                <div className="label-title">
                    <h4>
                        <span>
                            THƯƠNG HIỆU NỔI BẬT
                        </span>
                        <div className="line-2"></div>
                    </h4>
                    <a href="coco">XEM THÊM</a>
                </div>
                <div className="line"></div>
                <div className="label-images">
                    <div className="label-image">
                        <div className="lb-img">
                            <img src="https://cocoshop.vn/uploads/shops/2020_02/download-16.jpg" alt="label" />
                        </div>
                        <div className="lb-img-title">
                            <a href="coco">CARYOPHY</a>
                        </div>
                    </div>
                    <div className="label-image">
                        <div className="lb-img">
                            <img src="https://cocoshop.vn/uploads/shops/2019_08/18_large.png" alt="label" />
                        </div>
                        <div className="lb-img-title">
                            <a href="coco">ETUDE HOUSE</a>
                        </div>
                    </div>
                    <div className="label-image">
                        <div className="lb-img">
                            <img src="https://cocoshop.vn/uploads/shops/2020_02/download-81.png" alt="label" />
                        </div>
                        <div className="lb-img-title">
                            <a href="coco">MAC</a>
                        </div>
                    </div>
                    <div className="label-image">
                        <div className="lb-img">
                            <img src="https://cocoshop.vn/uploads/shops/2020_02/download-30.jpg" alt="label" />
                        </div>
                        <div className="lb-img-title">
                            <a href="coco">Lacoste</a>
                        </div>
                    </div>
                    <div className="label-image">
                        <div className="lb-img">
                            <img src="https://cocoshop.vn/uploads/shops/2020_02/download-40.png" alt="label" />
                        </div>
                        <div className="lb-img-title">
                            <a href="coco">GUCCI MADE IN ITALY</a>
                        </div>
                    </div>
                    <div className="label-image">
                        <div className="lb-img">
                            <img src="https://cocoshop.vn/uploads/shops/2020_02/download-32.png" alt="label" />
                        </div>
                        <div className="lb-img-title">
                            <a href="coco">ELIZABETH ARDENT</a>
                        </div>
                    </div>
                </div>
                <div className="label-images">
                    <div className="lb-img-2">
                        <img src="https://cocoshop.vn/uploads/slider/images/banner-giua-trang-2.jpg" alt="banner-pr" />
                    </div>
                    <div className="lb-img-2">
                        <img src="https://cocoshop.vn/uploads/slider/images/banner-giua-trang_1.jpg" alt="banner-pr" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Label;