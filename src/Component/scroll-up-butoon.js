import React from "react";
import ScrollUpButton from "react-scroll-up-button";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton style={{width:45}} ToggledStyle={{right: 10}}/>
      </div>
    );
  }
}