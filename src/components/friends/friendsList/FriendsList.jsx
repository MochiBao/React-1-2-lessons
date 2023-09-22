import friends from "../../../data/friends.json";
import { FriendsItem } from "../frendsItem/FriendsItem";


export const FriendsList = () => {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendsItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};