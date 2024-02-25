import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserFetch } from "./actions";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myfirstReducer.users);
  console.log(users);
  return (
    <div className="App">
      <button onClick={() => dispatch(getUserFetch())}>Get Users</button>
      {users && users.map((user) => <h1>{users.name}</h1>)}
    </div>
  );
}

export default App;
