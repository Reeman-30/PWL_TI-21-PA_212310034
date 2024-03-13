import React, { useState } from "react";
import { Button, Modal, ModalHeader } from "react-bootstrap";

export default function Form() {
  const [npm, setNpm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);

  const [show, setShow] = useState(false);

  function handleSubmit(element) {
    element.preventDefault();

    if (!/^\d{9}$/.test(npm)) {
      alert("Batas isian NPM hanya 10 digit!");
      return;
    }

    const date = new Date(birthdate);
    const sumAge =
      new Date().getUTCFullYear(Date.now()) - date.getUTCFullYear();
    setAge(sumAge);

    setShow(true);
  }

  return (
    <div className="container">
      <h1 className="text-center m-3">Form Data Diri</h1>

      {/* Start Form */}
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="npm" class="form-label">
            NPM
          </label>
          <input
            type="text"
            class="form-control"
            id="npm"
            onChange={(e) => setNpm(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="firstName" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            autoComplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="middleName" class="form-label">
            Middle Name
          </label>
          <input
            type="text"
            class="form-control"
            id="middleName"
            autoComplete="off"
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            autoComplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="birthdate" class="form-label">
            Birthdate
          </label>
          <input
            type="date"
            class="form-control"
            id="birthdate"
            onChange={(e) => {
              setBirthdate(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {/* End Form */}

      {/* Start Modal */}
      <Modal show={show} backdrop="static" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Data Diri</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NPM : {npm}</p>
          <p>
            Full Name : {firstName} {middleName} {lastName}
          </p>
          <p>Age : {age} tahun</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Modal */}
    </div>
  );
}
