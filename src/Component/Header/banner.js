import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="banner-container">
                <div className="banner-wrapper">
                    <div className="banner-logo">
                        <a href="coco" className="logo-container">
                            <span className="logo-coco">
                                COCO
                    </span>
                            <span className="logo-shop">
                                SHOP
                    </span>
                        </a>
                    </div>
                    <div className="banner-search">
                        <input className="input-search" type="text" placeholder=" Tìm sản phẩm,thương hiệu bạn mong muốn..." />
                        <button className="button-search"><img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3A339536e4-b9ba-404f-b3b9-d774c873faee&params=version%3A1&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="search" /></button>
                    </div>
                    <div className="banner-user">
                        <img className="img-user" src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3A0cb98d01-0848-4dc5-b2c2-244ef41cd648&params=version%3A0&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="user" />
                        <div className="banner-reg">
                            <a href="coco">Đăng nhập / Đăng ký</a>
                            <span className="account">
                                <a href="coco">Tài khoản</a>
                                <i className="fa fa-sort-desc" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div className="banner-cart">
                        <img className="heart" src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3Aaf006aba-f846-4d78-830c-61927c2dd6f3&params=version%3A1&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="heart" />
                        <a href="coco" className="cart">
                            <img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3Adf95715d-3e30-404d-b01c-9a1e69f3db09&params=version%3A0&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="cart" />
                            <span>Giỏ Hàng</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;