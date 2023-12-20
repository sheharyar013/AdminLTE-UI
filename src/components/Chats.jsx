import React from "react";
import Chart from "../dist/img/chart.png";

export default function Chats() {
  return (
    <div class="card">
      <div
        class="card-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3 class="card-title">
          <i class="fas fa-chart-pie mr-1"></i>
          Sales
        </h3>
        <div class="card-tools">
          <ul class="nav nav-pills ml-auto">
            <li class="nav-item">
              <a
                class="nav-link active"
                href="#revenue-chart"
                data-toggle="tab"
              >
                Area
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#sales-chart" data-toggle="tab">
                Donut
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-body pb-0">
        <div class="tab-content p-0">
          <div
            class="chart tab-pane active"
            id="revenue-chart"
            style={{
              position: "relative",
              height: "300px",
            }}
          >
            <img
              id="revenue-chart-img"
              src={Chart}
              alt="chart"
              height="280"
              style={{
                height: "280px",
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
