import React from 'react';
import ItemImage from './../../item-image';

class CategoryFilter extends React.Component {
    render() {
        return (
            <div className="category-filter-container">
                <div className="category-filter-title">
                    <span className="title">TRANG ĐIỂM MẶT</span>
                    <span className="title-filter">(500 sản phẩm)</span>
                </div>
                <div className="category-filter-nav">
                    <div className="category-filter-menu">
                        <span>Sắp xếp theo</span>
                        <ul className="category-filter-items">
                            <li className="category-filter-item">
                                <a href="coco">Nổi bật</a>
                            </li>
                            <li className="category-filter-item">
                                <a href="coco">Bán chạy</a>
                            </li>
                            <li className="category-filter-item">
                                <a href="coco">Hàng mới</a>
                            </li>
                            <li className="category-filter-item">
                                <a href="coco">Khuyến mại</a>
                            </li>
                            <li className="category-filter-item">
                                <a href="coco">Tên sản phẩm</a>
                            </li>
                            <li className="category-filter-item">
                                <a href="coco">Giá sản phẩm</a>
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="category-filter-page">
                        <span>1/10</span>
                        <a href="coco">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </a>
                        <a href="coco">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="category-filter-products">
                    <div className="category-filter-product">
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_05/bang-mat-3ce-multi-eye-color-palette-all-nighter.jpg" title="Bảng Mắt 3CE Multi Eye Color Palette - All Nighoor" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-phu-eglips-blur-powder-pact_1.jpg" title="Phấn Phủ Eglips Blur Powder Pact" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/mascara-isehan-kiss-me-4.png" title="Mascara mày Kiss me" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/chi-ke-may-be-well.jpg" title="Chì kẻ mày Be well" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_05/bang-mat-3ce-multi-eye-color-palette-all-nighter.jpg" title="Bảng Mắt 3CE Multi Eye Color Palette - All Nighoor" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-phu-eglips-blur-powder-pact_1.jpg" title="Phấn Phủ Eglips Blur Powder Pact" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/mascara-isehan-kiss-me-4.png" title="Mascara mày Kiss me" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/chi-ke-may-be-well.jpg" title="Chì kẻ mày Be well" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_05/bang-mat-3ce-multi-eye-color-palette-all-nighter.jpg" title="Bảng Mắt 3CE Multi Eye Color Palette - All Nighoor" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-phu-eglips-blur-powder-pact_1.jpg" title="Phấn Phủ Eglips Blur Powder Pact" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/mascara-isehan-kiss-me-4.png" title="Mascara mày Kiss me" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/chi-ke-may-be-well.jpg" title="Chì kẻ mày Be well" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_05/bang-mat-3ce-multi-eye-color-palette-all-nighter.jpg" title="Bảng Mắt 3CE Multi Eye Color Palette - All Nighoor" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-phu-eglips-blur-powder-pact_1.jpg" title="Phấn Phủ Eglips Blur Powder Pact" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/mascara-isehan-kiss-me-4.png" title="Mascara mày Kiss me" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/chi-ke-may-be-well.jpg" title="Chì kẻ mày Be well" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_05/bang-mat-3ce-multi-eye-color-palette-all-nighter.jpg" title="Bảng Mắt 3CE Multi Eye Color Palette - All Nighoor" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-phu-eglips-blur-powder-pact_1.jpg" title="Phấn Phủ Eglips Blur Powder Pact" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/mascara-isehan-kiss-me-4.png" title="Mascara mày Kiss me" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/chi-ke-may-be-well.jpg" title="Chì kẻ mày Be well" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_05/bang-mat-3ce-multi-eye-color-palette-all-nighter.jpg" title="Bảng Mắt 3CE Multi Eye Color Palette - All Nighoor" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-phu-eglips-blur-powder-pact_1.jpg" title="Phấn Phủ Eglips Blur Powder Pact" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/mascara-isehan-kiss-me-4.png" title="Mascara mày Kiss me" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/chi-ke-may-be-well.jpg" title="Chì kẻ mày Be well" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/mascara-isehan-kiss-me-4.png" title="Mascara mày Kiss me" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_02/chi-ke-may-be-well.jpg" title="Chì kẻ mày Be well" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_04/phan-phu-eglips-glow-power-pact-hong.jpg" title="Phấn phủ EGLIPS Glow Power Pact ( hồng )" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020-03/phan-mac_1.jpg" title="Phấn Phủ MAC Studio Fix Powder Plus Foundation NC20" sale="211.500 đ" old="235.500 đ" />
                        <ItemImage image="https://cocoshop.vn/assets/shops/2020_03/phan-mat-odbo-lets-enjoy-eyeshadow.jpg" title="Phấn Mắt Odbo Lets Enjoy Eyeshadow OD0297" sale="211.500 đ" old="235.500 đ" />
                    </div>
                </div>
                <div className="category-filter-page">
                    <a className="icon-stt" href="coco">
                        <i class="fa fa-step-backward" aria-hidden="true"></i>
                    </a>
                    <a className="icon-stt" href="coco">
                        <i class="fa fa-caret-left" aria-hidden="true"></i>
                    </a>
                    <a className="stt" href="coco">1</a>
                    <a className="stt" href="coco">2</a>
                    <a className="stt" href="coco">3</a>
                    <a className="stt" href="coco">4</a>
                    <a className="stt" href="coco">5</a>
                    <a className="icon-stt" href="coco">
                        <i class="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                    <a className="icon-stt" href="coco">
                        <i class="fa fa-step-forward" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default CategoryFilter;