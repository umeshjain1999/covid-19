import "./styles.css";
import React, { useState } from "react";
import Loader from "./components/Loader";
import Main from "./components/Main";
import Info from "./components/Info";
import Error from "./components/Error";
// specific to continent
//curl --location --request GET 'https://corona.lmao.ninja/v2/continents/Europe?yesterday&strict'
const initialState = {
  continent: "",
  next: false,
  loading: false,
  error: false,
  info: {}
};
export default function App() {
  const [currentStatus, setCurrentStatus] = useState(initialState);

  const apiHandler = (continent) => {
    setCurrentStatus({
      continent: continent,
      next: false,
      loading: true,
      error: false,
      info: {}
    });
    const url = `https://corona.lmao.ninja/v2/continents/${continent}?yesterday&strict`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrentStatus((prev) => {
          return {
            ...prev,
            next: true,
            loading: false,
            info: data
          };
        });
      })
      .catch((err) => {
        setCurrentStatus({
          continent: continent,
          next: false,
          loading: false,
          error: true,
          info: {}
        });
      });
  };

  const resetState = () => {
    setCurrentStatus(initialState);
  };

  return (
    <div className="App">
      {!currentStatus.loading &&
        !currentStatus.next &&
        !currentStatus?.error && <Main apiHandler={apiHandler} />}
      {currentStatus.next && (
        <Info currentStatus={currentStatus} back={resetState} />
      )}
      {currentStatus.loading && <Loader />}
      {currentStatus?.error && <Error resetState={resetState} />}
    </div>
  );
}
