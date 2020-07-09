import React from 'react';
import ImageBanner from './image-banner';
import FlashSale from './flash-sale';
import Label from './label';
import Product from './product';
import Label2 from './label-2';
import Store from './store';
import Index from './../../scroll-up-butoon';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <ImageBanner />
                <FlashSale />
                <Label />
                <Product />
                <Label2 />
                <Store />
                <Index />
            </div>
        );
    }
}

export default Home;