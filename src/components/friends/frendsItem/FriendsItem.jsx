import { FriendsStatus } from "./friendsItem.styled";

export const FriendsItem = (props) => {
  console.log(props);
  return (
    <li>
      <FriendsStatus isOnline={props.isOnline}>
        <img src={props.avatar} alt={props.name} width={48} />
        <p>{props.name}</p>
      </FriendsStatus>
    </li>
  );
};