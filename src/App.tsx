import React from "react";
import "./App.css";
import { store } from "./redux";
import Parent from "./props/parent";
import Guest from "./state/guest";
import FindUser from "./state/findUser";
import EventComponent from "./events/event";
import { Provider } from "react-redux";
import RepositoryList from "./components/repository.component";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>This is React App</h1>
        <Parent />
      </div>
    </Provider>
  );
}

export default App;

// {/* <Parent/> */}
//       {/* <Guest/> */}
//       {/* <p>
//         <EventComponent />
//         {/* <FindUser/> */}
//       </p> */}
