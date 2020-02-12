import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./componets/Topic";
import List from "./componets/List";
import Recommend from "./componets/Recommend";
import Writer from "./componets/Writer";
import { actionCreators } from "./store";
import { HomeWrapper, HomeLeft, HomeRight, BackTop, Background } from "./style";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Background>
        <HomeWrapper>
          <HomeLeft>
            <img
              alt=""
              className="banner-img"
              src="https://miro.medium.com/max/1200/1*tW6ABljrTTsYSXNrzXpwQA.png"
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {this.props.showScroll ? (
            <BackTop onClick={this.handleScrollTop}>^</BackTop>
          ) : null}
        </HomeWrapper>
      </Background>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);
