import { Provider } from "react-redux";
import "./App.sass";
import Routes from "./routes/routes";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
