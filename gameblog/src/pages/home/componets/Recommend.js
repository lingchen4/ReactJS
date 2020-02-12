import React, { PureComponent } from "react";
import { RecommendWrapper, RecommendTitle, RecommendBody } from "../style";
import { connect } from "react-redux";

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        <RecommendTitle>PC GAMER NEWSLETTER</RecommendTitle>
        <RecommendBody>
          <div>
            Sign up to get the best content of the week, and great gaming deals,
            as picked by the editors.
          </div>
          <input placeholder="Your Email Address"></input>
          <button>SIGN IN</button>
          <p>
            No spam, we promise. You can unsubscribe at any time and we'll never
            share your details without your permission.
          </p>
        </RecommendBody>
      </RecommendWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "recommendUrl"])
});

export default connect(
  mapState,
  null
)(Recommend);
