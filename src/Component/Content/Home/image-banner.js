import React from 'react';
import { Link } from "react-router-dom";

class ImageBanner extends React.Component {
    render() {
        return (
            <div className="image-banner-container">
                <div className="image-banner-wrapper">
                    <div className="nav-menu">
                        <div className="nav-menu-item nav-menu-item-makeup">
                            <a href="coco">TRANG ĐIỂM</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-makeup">
                                <div className="menu-makeup-category">
                                    <div className="makeup-category-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="makeup-category-items">
                                        <div className="makeup-face">
                                            <span>
                                                <Link to="/makeupface">Trang Điểm Mặt</Link>
                                            </span>
                                            <a href="coco">Kem Nền</a>
                                            <a href="coco">Kem Lót</a>
                                            <a href="coco">Che Khuyết Điểm</a>
                                            <a href="coco">Phấn Má Hồng</a>
                                            <a href="coco">Phấn Nước Cushions</a>
                                            <a href="coco">Phấn Phủ</a>
                                            <a href="coco">Tạo Khối - Highlighter</a>
                                        </div>
                                        <div className="makeup-eyes">
                                            <span>Trang Điểm Vùng Mắt</span>
                                            <a href="coco">Kẻ Chân Mày</a>
                                            <a href="coco">Kẻ Mắt</a>
                                            <a href="coco">Mascara</a>
                                            <a href="coco">Phấn Mắt</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-makeup-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/trang-diem-make-up_1.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                        <div className="nav-menu-item nav-menu-item-sm">
                            <a href="coco">SON MÔI</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-sm">
                                <div className="menu-sm-category">
                                    <div className="sm-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="sm-items">
                                        <div className="sm-face">
                                            <span>Son Môi</span>
                                            <a href="coco">Son Dưỡng</a>
                                            <a href="coco">Son Kem</a>
                                            <a href="coco">Son Thỏi</a>
                                            <a href="coco">Son Lỳ</a>
                                            <a href="coco">Son Bỏng</a>
                                        </div>
                                        <div className="sm-eyes">
                                            <span>
                                                <a href="coco"> Trang Điểm Vùng Mắt</a>
                                            </span>
                                            <span>
                                                <a href="coco"> Tẩy Tế Bào Chết Môi</a>
                                            </span>
                                            <span>
                                                <a href="coco"> Mặt Nạ Môi</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-sm-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/moi.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                        <div href="coco" className="nav-menu-item nav-menu-item-csd">
                            <a href="coco">CHĂM SÓC DA</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-csd">
                                <div className="menu-csd-category">
                                    <div className="csd-category-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="csd-category-items">
                                        <div className="csd-face">
                                            <h3>Quy Trình Chăm Sóc Da</h3>
                                            <span>Làm Sạch</span>
                                            <a href="coco">Tẩy Trang</a>
                                            <a href="coco">Sữa Rửa Mặt</a>
                                            <a href="coco">Toner</a>
                                            <a href="coco">Tẩy Tế Bào Chết</a>
                                            <a href="coco">Mặt Nạ Rửa</a>
                                            <span>Dưỡng Da</span>
                                            <a href="coco">Serum Tinh Chất</a>
                                            <a href="coco">Kem Dưỡng - Dầu Dưỡng</a>
                                            <a href="coco">Xịt Khoáng</a>
                                            <span>Đặc Trị</span>
                                            <span>Chống Nắng Da Mặt</span>
                                        </div>
                                        <div className="csd-eyes">
                                            <h3>VẤN ĐỀ VỀ DA</h3>
                                            <a href="coco">Mụn</a>
                                            <a href="coco">Dấu hiệu: Lỗ chân lông to</a>
                                            <a href="coco">Thiếu ẩm: thiếu nước</a>
                                            <a href="coco">Đốm Sắc Tố</a>
                                            <a href="coco">Nhạy cảm: Kích ứng</a>
                                            <a href="coco">Xỉn màu & thâm sạm</a>
                                            <a href="coco">Viêm da thể tạng</a>
                                            <h3>VẤN ĐỀ VỀ DA</h3>
                                            <a href="coco">Da Nâu</a>
                                            <a href="coco">Da Khô</a>
                                            <a href="coco">Da Mụn</a>
                                            <a href="coco">Da Nhạy Cảm</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-csd-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/cham-soc-da-mat.png" alt="csd" />
                                </div>
                            </div>
                        </div>
                        <div className="nav-menu-item nav-menu-item-csct">
                            <a href="coco">CHĂM SÓC CƠ THỂ</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-csct">
                                <div className="menu-csct-category">
                                    <div className="csct-category-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="csct-category-items">
                                        <div className="csct-face">
                                            <span>Làm Sạch Cơ Thể</span>
                                            <a href="coco">Sữa Tắm - xà bông tắm</a>
                                            <a href="coco">Muối tắm</a>
                                            <a href="coco">Tẩy tế bào toàn thân</a>
                                            <a href="coco">Gel rửa tay</a>
                                            <span>Dưỡng Thể</span>
                                            <a href="coco">Dưỡng ẩm toàn thân</a>
                                            <a href="coco">Dưỡng trắng toàn thân</a>
                                            <a href="coco">Chống nắng toàn thân</a>
                                            <a href="coco">Dưỡng tay chân</a>
                                            <span>Khử Mùi</span>
                                            <a href="coco">Khử mùi cho nam</a>
                                            <a href="coco">Khử mùi cho nữ</a>
                                        </div>
                                        <div className="csct-eyes">
                                            <span>Vệ Sinh Vùng Kín</span>
                                            <a href="coco">Dung Dịch Vệ Sinh</a>
                                            <span>Kem Massage</span>
                                            <a href="coco">Giảm môi tan mỡ</a>
                                            <a href="coco">Giảm dạn da</a>
                                            <span>Tẩy Lông</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-csct-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/cham-soc-body_1.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                        <div className="nav-menu-item nav-menu-item-cst">
                            <a href="coco">CHĂM SÓC TÓC</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-cst">
                                <div className="menu-cst-category">
                                    <div className="cst-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="cst-items">
                                        <div className="cst-face">
                                            <span>Dầu Gội</span>
                                            <a href="coco">Trị Gầu</a>
                                            <a href="coco">Ngăn Rụng Tóc</a>
                                            <a href="coco">Giảm Dầu Nhờn</a>
                                            <a href="coco">Dưỡng Tóc Khó Xơ</a>
                                            <a href="coco">Chăm Sóc Tóc Nhuộm</a>
                                        </div>
                                        <div className="cst-eyes">
                                            <span>
                                                <a href="coco">Mặt Nạ - Kem Ủ Tóc</a>
                                            </span>
                                            <span>
                                                <a href="coco">Dầu Dưỡng Tóc</a>
                                            </span>
                                            <span>
                                                <a href="coco">Thuốc Nhuộm</a>
                                            </span>
                                            <span>
                                                <a href="coco">Dầu Xả</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-cst-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/cham-soc-toc_1.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                        <div className="nav-menu-item nav-menu-item-dc">
                            <a href="coco">DỤNG CỤ</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-dc">
                                <div className="menu-dc-category">
                                    <div className="dc-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="dc-items">
                                        <div className="dc-face">
                                            <span>Dụng Cụ</span>
                                            <a href="coco">Bông trang điểm</a>
                                            <a href="coco">Dụng cụ chăm sóc da</a>
                                            <a href="coco">Kẹp mi - Dao Cạo</a>
                                            <a href="coco">Cọ Trang Điểm</a>
                                            <a href="coco">Bông Tẩy Trang</a>
                                            <a href="coco">Túi/khau - Bộ chiết mỹ...</a>
                                            <a href="coco">Giấy thấm dầu</a>
                                            <a href="coco">Mi Giả - Kích Mi</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-dc-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/dung-cu.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                        <div className="nav-menu-item nav-menu-item-nh">
                            <a href="coco">NƯỚC HOA</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-nh">
                                <div className="menu-nh-category">
                                    <div className="nh-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="nh-items">
                                        <div className="nh-face">
                                            <span>Nước Hoa Nữ</span>
                                            <a href="coco">Nước Hoa Eau De Parfum</a>
                                            <a href="coco">Nước hoa Eau De Toilette</a>
                                            <span>Nước Hoa Nam</span>
                                            <a href="coco">Nước Hoa Eau De Parfum</a>
                                            <a href="coco">Nước hoa Eau De Toilette</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-nh-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/dung-cu_1.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                        <div className="nav-menu-item nav-menu-item-mp">
                            <a href="coco">MỸ PHẨM HIGH END</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-mp">
                                <div className="menu-mp-category">
                                    <div className="mp-category-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="mp-category-items">
                                        <div className="mp-face">
                                            <span>Chăm Sóc Da Mặt</span>
                                            <a href="coco">Sữa Rửa Mặt</a>
                                            <a href="coco">Tẩy Trang</a>
                                            <a href="coco">Nước Hoa Hồng</a>
                                            <a href="coco">Kem Chống Nắng</a>
                                            <a href="coco">Mặt Nạ</a>
                                            <a href="coco">Serum - Tinh Chất Dưỡng Da</a>
                                            <a href="coco">Kem Dưỡng</a>
                                            <span>Trang Điểm</span>
                                            <a href="coco">Trang Điểm Mặt</a>
                                            <a href="coco">Trang Điểm Môi</a>
                                            <a href="coco">Trang Điểm Mắt</a>
                                            <a href="coco">Tẩy Trang Mắt Môi</a>
                                        </div>
                                        <div className="mp-eyes">
                                            <span>Chăm Sóc Tóc</span>
                                            <a href="coco">Dầu Gội</a>
                                            <a href="coco">Dầu Xả</a>
                                            <a href="coco">Dưỡng Tóc</a>
                                            <span>Chăm Sóc Cơ Thể</span>
                                            <a href="coco">Sữa Tắm</a>
                                            <a href="coco">Dưỡng Thể</a>
                                            <a href="coco">Dưỡng Tay</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-mp-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/san-pham-khac.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                        <div className="nav-menu-item nav-menu-item-cb">
                            <a href="coco">COMBO</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-cb">
                                <div className="menu-cb-category">
                                    <div className="cb-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="cb-items">
                                        <div className="cb-face">
                                            <span>Combo</span>
                                            <a href="coco">Combo Chăm Sóc Da</a>
                                            <a href="coco">Combo Chăm Sóc Cơ Thể</a>
                                            <a href="coco">Combo Trang Điểm</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-cb-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/trang-diem-make-up_1.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                        <div className="nav-menu-item nav-menu-item-tpcn">
                            <a href="coco">THỰC PHẨM CHỨC NĂNG</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-tpcn">
                                <div className="menu-tpcn-category">
                                    <div className="tpcn-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="tpcn-items">
                                        <div className="tpcn-face">
                                            <span>Thực Phẩm Chức Năng</span>
                                            <a href="coco">Vitamin</a>
                                            <a href="coco">Viên cấp nước</a>
                                            <a href="coco">Viên trắng da</a>
                                            <a href="coco">Viên uống DHC</a>
                                            <a href="coco">Trà giảm cân</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-tpcn-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/san-pham-khac.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                        <div className="nav-menu-item nav-menu-item-spk">
                            <a href="coco">SẢN PHẨM KHÁC</a>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="menu-spk">
                                <div className="menu-spk-category">
                                    <div className="spk-label">
                                        <a className="label-special" href="coco">
                                            Nổi bật
                                            </a>
                                        <a href="coco">Bán chạy</a>
                                        <a href="coco">Hàng mới</a>
                                        <a href="coco">Khuyến mại</a>
                                    </div>
                                    <div className="spk-items">
                                        <div className="spk-face">
                                            <span>Sản Phẩm Khác</span>
                                            <a href="coco">Kem Đánh Răng</a>
                                            <a href="coco">Xịt thơm quần áo</a>
                                            <a href="coco">Các sản phẩm khác</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-spk-image">
                                    <img src="https://cocoshop.vn/uploads/shops/2019_12/dung-cu_1.png" alt="makeup" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layer-banner">
                        <div className="main-banner">
                            <img src="https://anh4.com/images/2020/07/02/CPT293.png" alt="main-banner" />
                        </div>
                        <div className="sub-banner">
                            <img className="sub-banner-edit" src="https://anh4.com/images/2020/07/02/CPTHR1.jpg" alt="sub-banner" />
                            <img className="sub-banner-edit-2" src="https://anh4.com/images/2020/07/02/CPTPqe.jpg" alt="sub-banner" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageBanner;