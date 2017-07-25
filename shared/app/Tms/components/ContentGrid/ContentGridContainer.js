import React, { Component } from 'react';
import ContentGridTemplate from './ContentGridTemplate';
import config from './../../config';
import { setContentId } from '../../helpers/contents';

class ContentGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }
  componentDidMount() {
    // Fetch content
    fetch(config('rest.contentGrid')).then(response => response.json()).then((json) => {
      setContentId(json.contents);
      this.setState({
        contents: json.contents,
      });
    });
  }

  render() {
    return <ContentGridTemplate ratio={169} contents={this.state.contents} />;
  }
}

export default ContentGridContainer;
