import React from 'react';
import Header from './header';
import Banner from './banner';
import Nav from './nav';   

class Headers extends React.Component {
    render() {
        return(
            <div className="headers-container">
                <Header />
                <Banner />
                <Nav />
            </div>
        );
    }
}

export default Headers;