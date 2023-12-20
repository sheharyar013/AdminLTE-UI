import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import React from "react";

export default function DirecMessage() {
  return (
    <MDBCard>
      <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
        <h5 className="mb-0">Chat messages</h5>
        <div className="d-flex flex-row align-items-center">
          <span className="badge bg-info">20</span>
          <svg
            style={{
              margin: "0rem 0.3rem",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="gray" d="M18 11H6a2 2 0 0 0 0 4h12a2 2 0 0 0 0-4" />
          </svg>
          <svg
            style={{
              margin: "0rem 0.3rem",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 12 12"
          >
            <path
              fill="gray"
              d="M4 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5M4.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM1 6a5 5 0 1 1 2.59 4.382l-1.944.592a.5.5 0 0 1-.624-.624l.592-1.947A4.98 4.98 0 0 1 1 6m5-4a4 4 0 0 0-3.417 6.08a.5.5 0 0 1 .051.406l-.383 1.259l1.257-.383a.5.5 0 0 1 .407.052A4 4 0 1 0 6 2"
            />
          </svg>

          <svg
            style={{
              margin: "0rem 0.3rem",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="gray"
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698"
            />
          </svg>
        </div>
      </MDBCardHeader>

      <MDBCardBody>
        <div className="d-flex justify-content-between">
          <p className="small mb-1">Timona Siera</p>
          <p className="small mb-1 text-muted">23 Jan 2:00 pm</p>
        </div>
        <div className="d-flex flex-row justify-content-start">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div>
            <p
              className="small p-2 ms-3 mb-3 rounded-3"
              style={{ backgroundColor: "#f5f6f7" }}
            >
              For what reason would it be advisable for me to think about
              business content?
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <p className="small mb-1 text-muted">23 Jan 2:05 pm</p>
          <p className="small mb-1">Johny Bullock</p>
        </div>
        <div className="d-flex flex-row justify-content-end mb-4 pt-1">
          <div>
            <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-info">
              Thank you for your believe in our supports
            </p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
        </div>

        <div className="d-flex justify-content-between">
          <p className="small mb-1">Timona Siera</p>
          <p className="small mb-1 text-muted">23 Jan 5:37 pm</p>
        </div>
        <div className="d-flex flex-row justify-content-start">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div>
            <p
              className="small p-2 ms-3 mb-3 rounded-3"
              style={{ backgroundColor: "#f5f6f7" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit similique
              quae consequatur
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <p className="small mb-1 text-muted">23 Jan 6:10 pm</p>
          <p className="small mb-1">Johny Bullock</p>
        </div>
        <div className="d-flex flex-row justify-content-end mb-4 pt-1">
          <div>
            <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-info">
              Dolorum quasi voluptates quas amet in repellendus perspiciatis
              fugiat
            </p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
        </div>
      </MDBCardBody>
      <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
        <MDBInputGroup className="mb-0">
          <input
            className="form-control"
            placeholder="Type message"
            type="text"
          />
          <MDBBtn color="info" style={{ paddingTop: ".55rem" }}>
            Button
          </MDBBtn>
        </MDBInputGroup>
      </MDBCardFooter>
    </MDBCard>
  );
}
