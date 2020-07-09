import React from 'react';
import NavBar from './nav-bar';
import MakeUpFaceContent from './makeupface-content';
import Index from './../../scroll-up-butoon';

class MakeUpFace extends React.Component {
    render(){
        return(
            <div className="make-up-face-container">
                <NavBar />
                <MakeUpFaceContent />
                <Index />
            </div>
        );
    }
}

export default MakeUpFace;