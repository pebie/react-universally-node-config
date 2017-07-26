import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import CardTitle from './CardTitle/CardTitle';
import CardSubtitle from './CardSubtitle/CardSubtitle';
import CardSubtitlePlaceholder from './CardSubtitle/CardSubtitlePlaceholder';
import TimerStatus from './TimerStatus/TimerStatus';
import Remove from '../Remove/Remove';
import Poster from '../Poster/Poster';
import PosterPlaceholder from './../Poster/PosterPlaceholder';
import RatioHandler from './../RatioHandler/RatioHandler';
import LogoChannel from '../LogoChannel/LogoChannel';
import Channel from './../Channel/Channel';
import LastDay from './../LastDay/LastDay';
import ProgressTimer from '../ProgressTimer/ProgressTimer';
import { isOnGoing } from '../../helpers/contents';
import styles from './Card.scss';

/**
 * Card
 *
 * Basic Card component used to render a Poster, Title, Subtitle and LogoChannel
 *
 * @param {string} [title] title of content to display
 * @param {string} [subtitle] subtitle of content to display
 * @param {string} [image] url of used image
 * @param {string} [logoChannel] url of logoChannel image
 * @param {number} [ratio=169] ratio used for image sizes
 * @param {func} [onClick] function to trigger when clicking on card
 * @param {shape} [onGoing] infos about the progress of the media (startime, endtime)
 * @param {node} [actionBar] right action bar
 * @param {bool} [dark=false] wether we are in a dark context (change font color)
 * @param {bool} [displaySubtitlePlaceholder] display the placeholder of the subtitle
 * @param {func} [getPosterRef] allow to get ref of Poster component outside component
 * @param {shape} [profileProgress] progression of the user in programs (isInHistory, userProgress)
 * @param {object} [imageSpecificities] infos about the specifity of content
 *  (ex: isLogo for channel see mosaic render)
 * @param {number} [label] display label
 */
const Card = ({
  image,
  logoChannel,
  ratio,
  title,
  subtitle,
  actionBar,
  onGoing,
  onClick,
  dark,
  displaySubtitlePlaceholder,
  getPosterRef,
  profileProgress,
  imageSpecificities,
  label,
  isRemovableItem,
  onClickCrossButton,
}) =>
  (<div
    className={classnames(styles.card, {
      [styles['card--dark']]: dark,
    })}
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    {isRemovableItem && <Remove position="top-right" onClick={onClickCrossButton} />}
    <div ref={getPosterRef}>
      <RatioHandler ratio={ratio}>
        {image
          ? <div className={styles.card__content}>
            {/* Use full space to display image */}
            {imageSpecificities !== 'isLogo'
                ? <div>
                  <Poster image={image} dark={dark} />
                  {label && <LastDay text={label.text} position={label.position} />}
                  {logoChannel &&
                  <div>
                    <div className={styles.card__channel__background} />
                    <div
                      className={classnames(styles.card__channel, {
                        [styles['card__channel--ongoing']]: isOnGoing(onGoing),
                      })}
                    >
                      <LogoChannel logo={logoChannel} />
                    </div>
                  </div>}
                  {isOnGoing(onGoing) &&
                  <div className={styles.card__timerStatus}>
                    <TimerStatus startTime={onGoing.startTime} endTime={onGoing.endTime} />
                  </div>}
                  {profileProgress &&
                  <div className={styles.card__progressTimer}>
                    <ProgressTimer
                      isInHistory={profileProgress.isInHistory}
                      userProgress={profileProgress.userProgress}
                    />
                  </div>}
                </div>
                : <div className={styles.card__isLogo}>
                  {/* Use border to display immage */}
                  <Channel logoUrl={image} name="channel" />
                </div>}
          </div>
          : <PosterPlaceholder dark={dark} />}
      </RatioHandler>
    </div>
    <div
      className={classnames(styles.card__metainfos, {
        [styles['card__metainfos--action']]: !!actionBar,
      })}
    >
      <div className={classnames({ [styles.card__metainfosWrapper]: !!actionBar })}>
        {title && <CardTitle title={title} dark={dark} />}
        {subtitle
          ? <CardSubtitle subtitle={subtitle} dark={dark} />
          : displaySubtitlePlaceholder && <CardSubtitlePlaceholder />}
      </div>
      {actionBar
        ? <div className={styles.card__action}>
          {/* Render actionBar node if it's a function else it's render other jsx type*/}
          {typeof actionBar === 'function' ? actionBar() : actionBar}
        </div>
        : null}
    </div>
  </div>);

Card.propTypes = {
  image: PropTypes.string,
  logoChannel: PropTypes.string,
  ratio: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onGoing: PropTypes.shape({
    startTime: PropTypes.number,
    endTime: PropTypes.number,
  }),
  onClick: PropTypes.func,
  dark: PropTypes.bool,
  displaySubtitlePlaceholder: PropTypes.bool,
  actionBar: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  getPosterRef: PropTypes.func,
  profileProgress: PropTypes.shape({
    isInHistory: PropTypes.bool,
    userProgress: PropTypes.number,
  }),
  imageSpecificities: PropTypes.string,
  label: PropTypes.shape({
    position: PropTypes.string,
    text: PropTypes.string,
  }),
  isRemovableItem: PropTypes.bool,
  onClickCrossButton: PropTypes.func,
};

Card.defaultProps = {
  image: '',
  logoChannel: '',
  title: '',
  subtitle: '',
  onClick: () => {},
  actionBar: null,
  getPosterRef: () => {},
  profileProgress: null,
  ratio: 169,
  dark: false,
  displaySubtitlePlaceholder: false,
  onGoing: undefined,
  imageSpecificities: undefined,
  label: null,
  isRemovableItem: false,
  onClickCrossButton: () => {},
  contentID: '',
  listType: '',
  token: '',
  strateNumber: 0,
};

export default Card;
