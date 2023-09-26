import "./App.css";
import { FriendsList } from "./components/friends/friendsList/FriendsList";
import { TransactionList } from "./components/transactions/transactionList/TransactionList";
import { Profile } from "./components/profile/profile/Profile";



const name = 'Sofia';
const img = "https://uaplay.com.ua/wp-content/uploads/2023/03/ihry-skhozhi-na-minecraft.jpeg";
const welcome = "Ласкаво просимо до нашого сайту!";

const object = {
  sait: "Youtube",
  a: "https://www.youtube.com/"
};
const a = 5;
const b = 7;

const colors = ["Червоний", "Синій", "Зелений"].map((color, index) => {
  <ul>
    <li key={index}>
      <p>{color}</p>
    </li>
    <li key={index}>
      <p>{color}</p>
    </li>
    <li key={index}>
      <p>{color}</p>
    </li>
  </ul>
});

function App() {
  return (
    <>
      <h1>{name}</h1>
      <p>{welcome}</p>
      <img src={img} alt="dog"></img>
      <a href={object.a}>{object.sait}</a>
      <p>{a+b}</p>
      {colors}
    </>
    );

}
// function App() {
 
//     //React.Fragment
//     // <>
//     //   <FriendsList /> 
//     //   <Profile />
//     //   <TransactionList />
//     // </> 
    

// };

export default App;