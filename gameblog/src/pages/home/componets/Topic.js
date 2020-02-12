import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWarpper, TopicItem } from '../style';

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWarpper>
        {
          list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img
                alt=''
                className='topic-pic'
                src={item.get('imgUrl')} />
              {item.get('title')}
            </TopicItem>
          ))
        }
      </TopicWarpper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','topicList'])
});


export default connect(mapState, null)(Topic);