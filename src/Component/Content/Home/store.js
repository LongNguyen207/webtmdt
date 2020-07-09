import React from 'react';

class Store extends React.Component {
    render() {
        return (
            <div className="store-container">
                <div className="store-title">
                    <h2>DANH SÁCH CỬA HÀNG</h2>
                    <div className="line-3"> </div>
                </div>
                <div className="store-adress">
                    <div className="store-adress-box">
                        <div className="store-adress-img">
                            <img src="https://cocoshop.vn/assets/bus-directory/258batrieu.png" alt="adress" />
                        </div>
                        <div className="store-adress-title">
                            <span>258 BÀ TRIỆU, HÀ NỘI</span>
                            <p>098888948</p>
                        </div>
                    </div>
                    <div className="store-adress-box">
                        <div className="store-adress-img">
                            <img src="https://cocoshop.vn/assets/bus-directory/80chuaboc.png" alt="adress" />
                        </div>
                        <div className="store-adress-title">
                            <span>80 CHÙA BỘC, HÀ NỘI</span>
                            <p>098888948</p>
                        </div>
                    </div>
                    <div className="store-adress-box">
                        <div className="store-adress-img">
                            <img src="https://cocoshop.vn/assets/bus-directory/208ngtrai.png" alt="adress" />
                        </div>
                        <div className="store-adress-title">
                            <span>208 NGUYỄN TRÃI, HÀ NỘI</span>
                            <p>098888948</p>
                        </div>
                    </div>
                    <div className="store-adress-box">
                        <div className="store-adress-img">
                            <img src="https://cocoshop.vn/assets/bus-directory/37ngo189giangrvo.png" alt="adress" />
                        </div>
                        <div className="store-adress-title">
                            <span>37 GIẢNG VÕ, HÀ NỘI</span>
                            <p>098888948</p>
                        </div>
                    </div>
                    <div className="store-adress-box">
                        <div className="store-adress-img">
                            <img src="https://cocoshop.vn/assets/bus-directory/136caugiay.png" alt="adress" />
                        </div>
                        <div className="store-adress-title">
                            <span>136 CẦU GIẤY, HÀ NỘI</span>
                            <p>098888948</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Store;