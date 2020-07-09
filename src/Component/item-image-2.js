import React from 'react';

class ItemImage2 extends React.Component {
    render(){
        return(
            <div className="item-image-2-container">
                <div className="item-image-2-img">
                    <img src={this.props.image} alt="itemimage2" />
                </div>
                <div className="item-image-2-title">
                    <a href="coco">{this.props.title}</a>
                </div>
                <div className="item-image-2-price">
                    <span className="item-image-2-price-sale">
                        {this.props.sale}
                    </span>
                    <span className="item-image-2-price-old">
                        {this.props.old}
                    </span>
                </div>
            </div>
        );
    }
}

export default ItemImage2;