import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <div className="nav-wrapper">
                    <a className="nav-items" href="coco">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    DANH MỤC SẢN PHẨM
                    </a>
                    <a className="nav" href="coco">
                        <span>GIỚI THIỆU</span>
                    </a>
                    <a className="nav" href="coco">
                        <span>THƯƠNG HIỆU </span>
                    </a>
                    <a className="nav nav-menu" href="coco">
                        <span>KHUYẾN MÃI</span>
                        <ul className="nav-menu-2">
                            <li>
                                <span>Hot Deals</span>
                            </li>
                            <li>
                                <span>Flash Deals</span>
                            </li>
                            <li>
                                <span>Đang diễn ra</span>
                            </li>
                        </ul>
                    </a>
                    <a className="nav-items" href="coco">
                        <span>XU HƯỚNG LÀM ĐẸP</span>
                    </a>
                    <a className="nav-items nav-search-oder" href="coco">
                        <span>TRA CỨU ĐƠN HÀNG</span>
                        <div className="search-oder">
                            <input className="search-oder-input" type="text" placeholder="Nhập mã đơn hàng" />
                            <button type="button" className="btn-search-oder">Kiểm tra đơn hàng</button>
                        </div>
                    </a>
                    <a className="nav nav-qr-code" href="coco">
                        <span>TẢI ỨNG DỤNG</span>
                        <div className="qr-code-download">
                            <div className="qr-code">
                                <img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3Ab732b70e-0a6f-47ce-bb84-d5a6c62f40cb&params=version%3A0&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="qrcode" />
                            </div>
                            <div className="download-store">
                                <span>
                                    <i className="fa fa-apple" aria-hidden="true"></i>
                               Apple
                               </span>
                                <span>
                                    <i className="fa fa-play" aria-hidden="true"></i>
                               Google Play
                               </span>
                            </div>
                        </div>
                    </a>
                    <a className="nav" href="coco">
                        <span>HỎI ĐÁP</span>
                    </a>
                    <a className="nav-2" href="coco">
                        <span>LIÊN HỆ</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Nav;