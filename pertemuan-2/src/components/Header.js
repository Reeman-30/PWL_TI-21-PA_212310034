import React from "react";

export default function Header() {
  return (
    <div>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="fs-4 d-flex align-items-center text-decoration-none text-black fw-bold  mb-3 mb-md-0 me-md-auto mx-3"
        >
          <span className="">IBI Kesatuan</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="/home" class="nav-link" aria-current="page">
              Home
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              Chat
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
