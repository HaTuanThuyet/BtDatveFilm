import logo from './logo.svg';
import './App.css';

import { store } from "./Redux/rootRedecer";
import { Provider } from "react-redux";
import BaiTapBooKingTicket from './BaiTapBookingTicket/BaiTapBooKingTicket';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <BaiTapBooKingTicket/>

      </Provider>
    </div>
  );
}

export default App;
