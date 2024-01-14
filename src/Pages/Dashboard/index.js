import React from "react";
import Card from '../../Components/Card';
import LineGraph from '../../Components/Graphs/LineGraph';
import PieGraph from '../../Components/Graphs/PieGraph';
import Table from '../../Components/Table';

export default function Dashboard() {
  return (
    <div>
      <Card cardsNumber={4} />
      <div className="row d-flex justify-content-around my-5">
        <div className="col-7 b-rounded-lg p-2 bg-white">
          <LineGraph />
        </div>
        <div className="col-4 b-rounded-lg p-2 bg-white">
          <PieGraph />
        </div>
      </div>

      <div className="row px-4">
        <div className="col-">
          <Table />
        </div>
      </div>
    </div>
  );
}
