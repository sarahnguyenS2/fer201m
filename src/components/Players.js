import React from "react";

function Players() {
  return (
    <div className="container">
      <div className="column">
        <div className="card">
          <img src="assets/cr.jpg" alt="" />
          <h3>Cristiano Ronadol</h3>
          <p className="title">Manchester United</p>
          <p>
            <button>Detail</button>
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="assets/kante.jpg" alt="" />
          <h3>Kante</h3>
          <p className="title">Chelsea</p>
          <p>
            <button>Detail</button>
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="assets/messi.jpg" alt="" />
          <h3>Messi</h3>
          <p className="title">PSG</p>
          <p>
            <button>Detail</button>
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="assets/neymar.jpg" alt="" />
          <h3>Neymar</h3>
          <p className="title">PSG</p>
          <p>
            <button>Detail</button>
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="assets/kane.jpg" alt="" />
          <h3>Kane</h3>
          <p className="title">Tottemham</p>
          <p>
            <button>Detail</button>
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="assets/haaland.jpg" alt="" />
          <h3>Haaland</h3>
          <p className="title">Manchester City</p>
          <p>
            <button>Detail</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Players;
