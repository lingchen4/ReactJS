import React, { PureComponent } from "react";
import { WriterWrapper, WriterTitle, WriterBody } from "../style";

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterTitle>RECOMMENDED</WriterTitle>
        <WriterBody>
          <img src="https://cdn.mos.cms.futurecdn.net/WNnbdBgWj7x23n5QqpvUo7-320-80.jpg"></img>
          <h3>Tips for getting started in Red Dead Redemption 2</h3>
        </WriterBody>
      </WriterWrapper>
    );
  }
}

export default Writer;
