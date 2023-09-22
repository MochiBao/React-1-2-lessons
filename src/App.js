import "./App.css";
import { FriendsList } from "./components/friends/friendsList/FriendsList";
import { TransactionList } from "./components/transactions/transactionList/TransactionList";
import { Profile } from "./components/profile/profile/Profile";

function App() {
  return (
    //React.Fragment
    <>
      <FriendsList /> 
      <Profile />
      <TransactionList />
    </> 
    );

}

export default App;