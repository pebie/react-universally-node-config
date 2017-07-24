import React, { Component } from 'react';
import ContentGridTemplate from './ContentGridTemplate';
import config from './../../config';

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
