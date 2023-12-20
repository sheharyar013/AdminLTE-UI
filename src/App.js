import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DirectMessage from "./components/DirectMessage";
import Chats from "./components/Chats";
import Response from "./mockData/index";

function App() {
  return (
    <div className="content-wrapper mt-3">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-sm-12">
              <h3 className="m-0">Dashboard</h3>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {Response?.map((item, index) => (
              <div className="col-lg-3 col-6" key={index}>
                <div className={`small-box ${item.color}`}>
                  <div className="inner">
                    <h3
                      className={
                        item.color === "bg-warning" ? "text-dark" : "text-light"
                      }
                    >
                      {item.number}
                    </h3>

                    <p
                      className={
                        item.color === "bg-warning" ? "text-dark" : "text-light"
                      }
                    >
                      {item.para}
                    </p>
                  </div>
                  <div className="icon">{item.icon}</div>
                  <a href="/" className="small-box-footer">
                    {item.text} {item.textIcon}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-7 col-12">
              <Chats />
            </div>
            <div className="col-lg-5 col-12">
              <DirectMessage />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
