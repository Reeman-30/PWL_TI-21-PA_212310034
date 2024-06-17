import React from "react";

export default function index() {
  return (
    <div className="container mt-5 d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-bold text-center">Please sign in</h1>

          <div className="form-floating my-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 my-5" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
