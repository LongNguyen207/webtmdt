import React from 'react';
import SearchFilter from './search-filter';
import CategoryFilter from './category-filter';
import ProductSeen from './product-seen';

class MakeUpFaceContent extends React.Component {
    render() {
        return (
            <div className="makeupface-content-wrapper">
                <div className="makeupface-content-container">
                    <div className="container-1">
                        <SearchFilter />
                    </div>
                    <div className="container-2">
                        <CategoryFilter />
                    </div>
                    <div className="container-3">
                        <ProductSeen />
                    </div>
                </div>
            </div>
        );
    }
}

export default MakeUpFaceContent;