import React from 'react';
import ItemImage2 from './.././../item-image-2';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 550, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 }
  ];

class ProductSeen extends React.Component {
    render() {
        return (
            <div className="product-seen-container">
                <div className="product-seen-title">
                    <h4>SẢN PHẨM ĐÃ XEM</h4>
                    <a href="coco">XEM TẤT CẢ</a>
                </div>
                <div className="product-seen-item">
                    <Carousel breakPoints={breakPoints}>
                        <ItemImage2 image="https://cocoshop.vn/assets/shops/2020_02/son-black-rouge-cream-matte-rouge.jpg" title="Son Kem Lì Black Rouge Creamy Matt Rouge" sale="211.500 đ" old="235.000 đ" />
                        <ItemImage2 image="https://cocoshop.vn/assets/shops/2020-03/son-kem-merzy-v6-firenze-negroni6.jpg" title="Son kem Merzy V6 Firenze Negroni" sale="211.500 đ" old="235.000 đ" />
                        <ItemImage2 image="https://cocoshop.vn/assets/shops/11-09-2019/son-shu-uemura.jpg" title="Son Shu Uemura" sale="211.500 đ" old="235.000 đ" />
                        <ItemImage2 image="https://cocoshop.vn/assets/shops/2020_01/son-black-set.jpg" title="Set Son Black Rouge Wild Cat" sale="211.500 đ" old="235.000 đ" />
                        <ItemImage2 image="https://cocoshop.vn/assets/shops/2020_05/son-duong-dau-dua-ben-tre-cocoon.jpg" title="Son dưỡng dầu dừa Bến Tre Cocoon" sale="211.500 đ" old="235.000 đ" />
                        <ItemImage2 image="https://cocoshop.vn/assets/shops/2020_02/son-but-chi-maybeline-superstay.jpg" title="Son Bút Chì Maybeline Superstay" sale="211.500 đ" old="235.000 đ" />
                    </Carousel>
                </div>
            </div>
        );
    }
}
export default ProductSeen;