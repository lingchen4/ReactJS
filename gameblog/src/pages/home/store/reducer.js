
import { fromJS } from 'immutable';
import * as constants from './constants';

const defalutState = fromJS({
  topicList: [],
  articleList: [],
  recommendUrl: [],
  articlePage: 1,
  showScroll: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendUrl: fromJS(action.recommendUrl),
  })
}

const addArticleList = (state, action) => {
  return (state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.nextPage
  }))
}

export default (state = defalutState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)

    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);

    case constants.TOGGLETOPSHOW:
      return state.set('showScroll', action.show)

    default:
      return state;
  }
}