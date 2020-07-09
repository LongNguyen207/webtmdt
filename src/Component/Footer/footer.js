import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-about">
                    <div className="footer-about-mxh">
                        <div className="logo-coco">
                            <img src="https://cocoshop.vn/uploads/logofooter-min-1.png" alt="coco" />
                        </div>
                        <div className="logo-bct">
                            <img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3A0c2c6245-60c0-48c9-8c8f-7ec17895562c&params=version%3A0&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="bct" />
                        </div>
                        <div className="logo-mxh">
                            <img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3A9ddd85bd-55e4-48fc-8075-17e4c99bfaa5&params=version%3A1&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="logomxh" />
                            <img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3A2ebeeca8-099d-4436-a3ff-c9893a570867&params=version%3A1&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="logomxh" />
                            <img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3Ad539fa14-e1b6-4016-b4d0-e37431a14300&params=version%3A0&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="logomxh" />
                            <img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3Aa6f9832d-b120-4747-a853-ee30e5a66ba1&params=version%3A0&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="logomxh" />
                        </div>
                    </div>
                    <div className="footer-more">
                        <span>COCO SHOP là hệ thống mỹ phẩm chính hãng và uy tín có quy mô lớn số 1 Việt Nam,đa dạng các loại mỹ phẩm đến từ các hãng nổi tiếng trên toàn thế giới,,,Đến  với COCOSHOP các bạn có quyền được yên tâm khi mua sắm cũng như được đáp ứng mọi nhu cầu về làm đẹp. Với phương châm luôn nỗ lực vì khách hàng thân yêu, COCOSHOP không ngừng cố gắng để xứng đáng là địa điểm mua săm tin cậy trong lòng các bạn trẻ</span>
                        <img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3A00f4a43d-cfa0-4dc5-8dda-f4d9d4fe35e9&params=version%3A0&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="facebook" />
                    </div>
                    <div className="footer-contact">
                        <div className="support">
                            <span>HỖ TRỢ KHÁCH HÀNG</span>
                            <ul>
                                <li>Hướng dẫn mua hàng</li>
                                <li>Giải đáp thắc mắc</li>
                                <li>Chính sách đổi trả</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <span>LIÊN HỆ VỚI CHÚNG TÔI</span>
                            <p><i className="fa fa-phone" aria-hidden="true"></i>
                            Điện thoại: +84 988888290</p>
                            <p>
                                <i className="fa fa-envelope" aria-hidden="true"></i>Email: cskh@cocoshop.vn
                                </p>
                            <p>
                                <i className="fa fa-globe" aria-hidden="true"></i>Website: http://cocoshop.vn</p>
                        </div>
                        <div className="download">
                            <span>TẢI ỨNG DỤNG COCO SHOP</span>
                            <div className="qr-app">
                                <img src="https://public-v2links.adobecc.com/4b01aede-a602-4788-702e-2e0b6bdccaa1/component?params=component_id%3Ab732b70e-0a6f-47ce-bb84-d5a6c62f40cb&params=version%3A0&token=1594344957_da39a3ee_d11a04cda2ef0c3703c01f1788d726a231035b72&api_key=CometServer1" alt="QR" />
                                <a className="app-download" href="coco">
                                    <span><i className="fa fa-apple" aria-hidden="true"></i>App Store</span>
                                    <span><i className="fa fa-play" aria-hidden="true"></i> Google Play</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-copyright">
                    © Bản quyền thuộc về Coco Shop - Chuỗi cửa hàng mỹ phẩm chính hãng làm đẹp.
                </div>
            </div>
        );
    }
}

export default Footer;