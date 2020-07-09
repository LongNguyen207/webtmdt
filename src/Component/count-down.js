import React from "react";
import CountdownTimer from "react-component-countdown-timer";

class SimpleCountdownTimer extends React.Component {
    render() {
        return (
            <CountdownTimer count={5432} border showTitle size={12} hideDay />
        );
    }
}

export default SimpleCountdownTimer;