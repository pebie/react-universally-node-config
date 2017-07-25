import React, { Component } from 'react';
import MosaicTemplate from './MosaicTemplate';
import config from './../../config';
import { setContentId } from '../../helpers/contents';

class MosaicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }
  componentDidMount() {
    // Fetch content
    fetch(config('rest.mosaic')).then(response => response.json()).then((json) => {
      setContentId(json.contents);
      this.setState({
        contents: json.contents,
      });
    });
  }

  render() {
    return <MosaicTemplate contents={this.state.contents} />;
  }
}

export default MosaicContainer;
