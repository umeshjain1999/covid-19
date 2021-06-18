import "./main.css";
import React from "react";

export default function Info({ currentStatus, back }) {
  console.log("%c res", "font-size : 2rem;color:lightgreen");
  console.log(currentStatus.info);
  const res = currentStatus.info;
  const formatDate = (recv) => {
    if (recv) {
      const date = new Date(recv);
      const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear()
      ];

      const formatting = `${day}/${month}/${year}`;
      return formatting;
    } else {
      return "--/--/--";
    }
  };

  const data = {
    cases: res?.cases || 0,
    deaths: res?.deaths || 0,
    recovered: res?.recovered || 0,
    todayCases: res?.todayCases || 0,
    todayRecovered: res?.todayRecovered || 0,
    todayDeaths: res?.todayDeaths || 0
  };
  const date = formatDate(res?.updated);

  return (
    <div className="info">
      <div className="header" onClick={back}>
        back
      </div>
      <div className="card-container">
        <h1>{currentStatus.continent}</h1>
        <div className="card">
          <div className="card-text">
            <span>Today's cases :</span> <span>{data.todayCases}</span>
          </div>
          <div className="card-text">
            <span>Today's recovered :</span>
            <span className="success">{data.todayRecovered}</span>
          </div>
          <div className="card-text">
            <span>Today's deaths :</span>{" "}
            <span className="danger">{data.todayDeaths}</span>
          </div>
          <div className="card-text fade">
            <span>cases :</span> <span>{data.cases}</span>
          </div>
          <div className="card-text fade">
            <span>deaths :</span> <span>{data.deaths}</span>
          </div>
          <div className="card-text fade">
            <span>recovered :</span>
            <span>{data.recovered}</span>
          </div>
          <br />
          <div className="date">Last updated on : {date}</div>
        </div>
      </div>
    </div>
  );
}
