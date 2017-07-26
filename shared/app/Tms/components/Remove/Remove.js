import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Badge from '../Badge/Badge';
import Close from '../Icons/Close';
import styles from './Remove.scss';

/**
 * CardRemoveBtn
 *
 * Basic CardRemoveBtn component used to remove card of your personnal list
 *
 * @param {func}      [onClickCrossButton]        Action to dispatch to remove item
  */

export default class Remove extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    position: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    position: '',
  };

  constructor(props) {
    super(props);
    this.profileId = 0;
    this.passToken = '';
  }

  onClickCrossButton(event) {
    // Prevent other click if button overlay another view
    event.stopPropagation();
    this.props.onClick();
  }

  render() {
    return (
      <div className={classnames(styles.remove, styles[`remove--${this.props.position}`])}>
        <Badge size="small">
          <button
            className={styles['remove__remove-btn']}
            onClick={e => this.onClickCrossButton(e)}
          >
            <Close svgClass={styles['remove__remove-btn-svg']} />
          </button>
        </Badge>
      </div>
    );
  }
}
