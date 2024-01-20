import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import {store} from './store/store.js'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);
