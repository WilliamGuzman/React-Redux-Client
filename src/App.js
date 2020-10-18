import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import states from "./routes";
import GuardRoute from "./components/guardRoutes";
import "./App.css";
import "normalize.css";
import "antd/dist/antd.css";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//Importamos el token
import tokenAuth from "./config/token";

//Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          {states.map(function(state) {
              if (state.type === 'public') {
                return <Route  key={state.url} exact path={state.url} component={state.component} />
              }else{
                return <GuardRoute  key={state.url} exact path={state.url} component={state.component} />
              }
          })}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
