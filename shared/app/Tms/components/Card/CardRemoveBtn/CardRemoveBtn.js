import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Badge from '../../Badge/Badge';
import Close from '../../Icons/Close';
import styles from './CardRemoveBtn.scss';

/**
 * CardRemoveBtn
 *
 * Basic CardRemoveBtn component used to remove card of your personnal list
 *
 * @param {func}      [onClickCrossButton]        Action to dispatch to remove item
  */

export default class CardRemoveBtn extends Component {
  static propTypes = {
    onClickCrossButton: PropTypes.func,
  };

  static defaultProps = {
    onClickCrossButton: () => {},
  };

  constructor(props) {
    super(props);
    this.profileId = 0;
    this.passToken = '';
  }

  removeFavorite(event) {
    event.preventDefault();
    this.props.onClickCrossButton();
  }

  render() {
    return (
      <div className={styles['cardRemoveBtn__remove-btn-block']}>
        <Badge size="small">
          <button
            className={styles['cardRemoveBtn__remove-btn']}
            onClick={e => this.removeFavorite(e)}
          >
            <Close svgClass={styles['cardRemoveBtn__remove-btn-svg']} />
          </button>
        </Badge>
      </div>
    );
  }
}
