import PropTypes from 'prop-types';

export const ProfileStats = ({followers, views, likes}) => {
  return (
    <ul>
        <li>
            <span>FOLLOWERS: </span>
            <span>{followers ? followers : 0}</span>
            </li>
        <li><span>VIEWS: </span>
            <span>{views}</span>
            </li>
        <li><span>LIKES: </span>
            <span>{likes}</span>
            </li>
    </ul>
  );
};

ProfileStats.propTypes = {
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,

};
