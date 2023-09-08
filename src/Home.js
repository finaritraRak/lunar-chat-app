import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../src/assets/lune.jpg";
import Navbar from "./components/Navbar";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div>
      <Navbar />

      <section
        className="bg-dark text-white"
        style={{ backgroundImage: `url(${conf})`, backgroundSize: "cover", height: "100vh" }}
      >
        <div className="overlay"></div>

        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-lg-8">
              <div className="text-center py-5">
                <h1 className="display-3">LUNAR</h1>
                <p className="lead">Live Universal Network for Augmented Reality</p>
                <p>Élevez vos Conversations à un Nouveau Niveau Lunaire.</p>
              </div>
              <form onSubmit={submitCode} className="text-center">
                <div className="form-group">
                  <label htmlFor="roomCode" className="h2 font-weight-bold">
                    Entrer le code room
                  </label>
                  <input
                    type="text"
                    id="roomCode"
                    required
                    placeholder="Entrer le code"
                    value={RoomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                    className="form-control my-2"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block my-4"
                >
                  Commencer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
