import React from 'react';

class ItemImage extends React.Component {
    render() {
        return (
            <div className="item-image-container">
                <div className="item-image-img">
                    <img src={this.props.image} alt="itemimg" />
                </div>
                <div className="item-image-title">
        <a href="coco">{this.props.title}</a>
                </div>
                <div className="item-image-price">
                    <span className="item-image-price-sale">
                        {this.props.sale}
                    </span>
                    <span className="item-image-price-old">
                       {this.props.old}
                    </span>
                </div>
            </div>
        );
    }
}

export default ItemImage;