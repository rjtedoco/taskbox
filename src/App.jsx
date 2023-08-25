import { Provider } from "react-redux";
import store from "./lib/store";
import "./index.css";
import InboxScreen from "./components/InboxScreen";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
