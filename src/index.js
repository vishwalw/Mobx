import React from "react";
import ReactDOM from "react-dom";
import { observable, configure, action } from "mobx";
import { observer } from "mobx-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
configure({ enforceActions: true });

const appState = observable({
  count: 0,
  incCount: action("Increament counter", () => {
    appState.count += 1;
  }),
  decCount: action("decreament counter", () => {
    appState.count -= 1;
  }),
});

const Counter = observer((props) => (
  <section>
    {props.appState.count}
    <div>
      <button onClick={props.appState.incCount}>Add</button>
      <button onClick={props.appState.decCount}>Dec</button>
    </div>
  </section>
));

ReactDOM.render(
  <Counter appState={appState}></Counter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
