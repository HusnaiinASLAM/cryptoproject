import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import store from './App/store'
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';

 
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
     <Router>
          <Provider store={store}>
               <App/>
          </Provider>
     </Router>
)