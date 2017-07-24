import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import CardTitle from './CardTitle/CardTitle';
import CardSubtitle from './CardSubtitle/CardSubtitle';
import TimerStatus from './TimerStatus/TimerStatus';
import Poster from '../Poster/Poster';
import PosterPlaceholder from '../Poster/PosterPlaceholder';
import RatioHandler from '../RatioHandler/RatioHandler';
import LogoChannel from '../LogoChannel/LogoChannel';
import { isOnGoing } from '../../helpers/contents';
import styles from './Card.scss';
import stylesLive from './LiveCard.scss';

/**
 * LiveCard
 *
 * TODO Should create a fully separated component like list card
 *
 * Basic Card component for Live content used to render
 * a Poster, Title, Subtitle, LogoChannel and TimerStatus
 *
 * @param {string}    [title]       title of content to display
 * @param {string}    [subtitle]    subtitle of content to display
 * @param {string}    [image]       url of used image
 * @param {number}    [ratio=169]   ratio used for image sizes
 * @param {func}      [onCardClick] function to trigger when clicking on card
 * @param {object}    [onGoing]     infos about the progress of the media
 * @param {string}    [logoChannel] url of logoChannel image
 * @param {func|node} [action]      CTA or action to pass to card
 */
const LiveCard = ({ image, ratio, title, subtitle, onCardClick, onGoing, logoChannel, action }) =>
  (<div className={styles.card} tabIndex={0} role="button" onClick={onCardClick}>
    <div className={stylesLive.liveCard__cover}>
      <RatioHandler ratio={ratio}>
        {image
          ? <Poster image={image}>
            <div>
              {logoChannel &&
              <div className={stylesLive.liveCard__channel}>
                <div className={stylesLive.liveCard__channel__item}>
                  <LogoChannel logo={logoChannel} />
                </div>
              </div>}
              {isOnGoing(onGoing) &&
              <div className={styles.card__timerStatus}>
                <TimerStatus startTime={onGoing.startTime} endTime={onGoing.endTime} />
              </div>}
            </div>
          </Poster>
          : <PosterPlaceholder />}
      </RatioHandler>
    </div>
    <div
      className={classnames(styles.card__metainfos, {
        [styles['card__metainfos--action']]: !!action,
      })}
    >
      <div className={classnames({ [styles.card__metainfosWrapper]: !!action })}>
        {title && <CardTitle title={title} />}
        {subtitle && <CardSubtitle subtitle={subtitle} />}
      </div>
      <div className={styles.card__actionWrapper}>
        {action
          ? <div className={styles.card__action}>
            {typeof action === 'function' ? action() : action}
          </div>
          : null}
      </div>
    </div>
  </div>);

LiveCard.propTypes = {
  image: PropTypes.string,
  ratio: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onGoing: PropTypes.shape({
    startTime: PropTypes.number,
    endTime: PropTypes.number,
  }),
  onCardClick: PropTypes.func,
  logoChannel: PropTypes.string,
  action: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

LiveCard.defaultProps = {
  ratio: 169,
  onGoing: undefined,
  image: '',
  title: '',
  subtitle: '',
  onCardClick: () => {},
  logoChannel: '',
  action: () => {},
};

export default LiveCard;
