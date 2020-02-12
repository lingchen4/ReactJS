import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Title, Content } from "./style";
import { Link } from "react-router-dom";

class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;

    if (loginStatus) {
      return (
        <div>
          <Title>
            <h3>Title: </h3>
            <input></input>
          </Title>
          <Content>
            <textarea placeholder="Add your Content"></textarea>
          </Content>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              style={{
                margin: "20px auto",
                display: "block",
                maxWidth: "300px",
                background: "#4CAF50",
                border: "none",
                color: "white",
                padding: " 15px 32px",
                textDecoration: "none!important",
                fontSize: "16px"
              }}
            >
              Submit
            </button>
          </Link>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

export default connect(
  mapState,
  null
)(Write);
