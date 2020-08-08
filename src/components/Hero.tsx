import React, { Component } from "react";
import { MDBView, MDBMask } from "mdbreact";
interface Props {}
interface State {}

export default class Hero extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
          <MDBMask
            overlay="purple-light"
            className="flex-center flex-column text-white text-center"
          >
            <h2>This Navbar is fixed</h2>
            <h5>
              It will always stay visible on the top, even when you scroll down
            </h5>
            <p>
              Navbar's background will switch from transparent to solid color
              while scrolling down
            </p>
            <br />
            <p>
              Full page intro with background image will be always displayed in
              full screen mode, regardless of device{" "}
            </p>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
