import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import CardTitle from './CardTitle/CardTitle';
import CardSubtitle from './CardSubtitle/CardSubtitle';
import CardSubtitlePlaceholder from './CardSubtitle/CardSubtitlePlaceholder';
import TimerStatus from './TimerStatus/TimerStatus';
import CardRemoveBtn from './CardRemoveBtn/CardRemoveBtn';
import Poster from '../Poster/Poster';
import PosterPlaceholder from './../Poster/PosterPlaceholder';
import RatioHandler from './../RatioHandler/RatioHandler';
import Label from '../Label/Label';
import LogoChannel from '../LogoChannel/LogoChannel';
import Channel from './../Channel/Channel';
import ProgressTimer from '../ProgressTimer/ProgressTimer';
import { isOnGoing } from '../../helpers/contents';
import { daysBetweenDates } from '../../helpers/date';
import { AVAILABILITY_LIMIT } from '../../constants/limits';
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
 * @param {object} [onGoing] infos about the progress of the media
 * @param {func|node} [action] CTA or action to pass to card
 * @param {bool} [dark=false] wether we are in a dark context (used for styling)
 * @param {bool} [displaySubtitlePlaceholder] display the placeholder of the subtitle
 * @param {func} [getPosterRef] allow to get ref of Poster component outside component
 * @param {object} [profileProgress] progression of the user viewing programs
 * @param {object} [imageSpecificities] infos about the specifity of content
 *  (ex: isLogo for channel)
 * @param {number} [availabilityEndDate] date after which the episode won't be available (timestamp)
 * @param {string} [contentID] (For CardRemoveBtn) ContentID of the item to delete
 * @param {string} [listType] (For CardRemoveBtn) listType of the Card
 * @param {string} [token] (For CardRemoveBtn) Token
 * @param {func} [removePersoInLanding] (For CardRemoveBtn) Action to dispatch to remove item
 * @param {number} [strateNumber] (For CardRemoveBtn) Index of the strate in the list
 */
const Card = ({
  image,
  logoChannel,
  ratio,
  title,
  subtitle,
  action,
  onGoing,
  onClick,
  dark,
  displaySubtitlePlaceholder,
  getPosterRef,
  profileProgress,
  imageSpecificities,
  availabilityEndDate,
  isRemovableItem,
  onClickCrossButton,
  contentID,
  listType,
  token,
  strateNumber,
}) =>
  (<div
    className={classnames(styles.card, {
      [styles['card--dark']]: dark,
    })}
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    {isRemovableItem &&
      <CardRemoveBtn
        removePersoInLanding={onClickCrossButton}
        contentID={contentID}
        listType={listType}
        token={token}
        strateNumber={strateNumber}
      />}
    <div ref={getPosterRef}>
      <RatioHandler ratio={ratio}>
        {image
          ? <div className={styles.card__content}>
            {imageSpecificities !== 'isLogo'
                ? <div>
                  <Poster image={image} dark={dark} />
                  {availabilityEndDate &&
                      daysBetweenDates(availabilityEndDate, new Date()) <= AVAILABILITY_LIMIT &&
                      <div
                        className={classnames(
                          styles.card__labelWrapper,
                          styles['card__labelWrapper--top-right'],
                        )}
                      >
                        <Label content="Derniers jours" />
                      </div>}
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
                  <Channel logoUrl={image} name="channel" />
                </div>}
          </div>
          : <PosterPlaceholder dark={dark} />}
      </RatioHandler>
    </div>
    <div
      className={classnames(styles.card__metainfos, {
        [styles['card__metainfos--action']]: !!action,
      })}
    >
      <div className={classnames({ [styles.card__metainfosWrapper]: !!action })}>
        {title && <CardTitle title={title} dark={dark} />}
        {subtitle
          ? <CardSubtitle subtitle={subtitle} dark={dark} />
          : displaySubtitlePlaceholder && <CardSubtitlePlaceholder />}
      </div>
      {action
        ? <div className={styles.card__action}>
          {typeof action === 'function' ? action() : action}
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
  action: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  getPosterRef: PropTypes.func,
  profileProgress: PropTypes.shape({
    isInHistory: PropTypes.bool,
    userProgress: PropTypes.number,
  }),
  imageSpecificities: PropTypes.string,
  availabilityEndDate: PropTypes.number,
  isRemovableItem: PropTypes.bool,
  onClickCrossButton: PropTypes.func,
  contentID: PropTypes.string,
  listType: PropTypes.string,
  token: PropTypes.string,
  strateNumber: PropTypes.number,
};

Card.defaultProps = {
  image: '',
  logoChannel: '',
  title: '',
  subtitle: '',
  onClick: () => {},
  action: null,
  getPosterRef: () => {},
  profileProgress: null,
  ratio: 169,
  dark: false,
  displaySubtitlePlaceholder: false,
  onGoing: undefined,
  imageSpecificities: undefined,
  availabilityEndDate: 0,
  isRemovableItem: false,
  onClickCrossButton: () => {},
  contentID: '',
  listType: '',
  token: '',
  strateNumber: 0,
};

export default Card;
