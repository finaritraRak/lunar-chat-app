import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../src/assets/lune.jpg";
import Navbar from "./components/Navbar";

const Apropos = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className=" ">
     
      <Navbar />
      Bienvenue sur LUNAR, l'application de chat vidéo qui vous emmène dans un voyage vers de nouvelles frontières de communication. Chez LUNAR, nous croyons en la magie des conversations, en l'exploration de l'inconnu et en la création de liens authentiques à travers l'écran.

Notre mission est de repousser les limites de la communication en ligne en offrant une plateforme interactive et immersive qui vous permet de vous connecter avec des personnes du monde entier comme jamais auparavant. Avec LUNAR, chaque conversation devient une aventure dans un univers virtuel, où les possibilités sont infinies.

Que vous souhaitiez discuter avec des amis, rencontrer de nouvelles personnes, partager des idées créatives ou simplement passer un bon moment, LUNAR est là pour vous. Notre équipe passionnée travaille sans relâche pour créer une expérience unique où la technologie rencontre la fantaisie.

Rejoignez-nous dans cette aventure et explorez les confins du chat vidéo avec LUNAR. Ensemble, nous allons repousser les frontières de la communication et créer des souvenirs mémorables à chaque conversation.

Prêt à embarquer pour cette aventure lunaire ? Rejoignez-nous dès aujourd'hui !
     
      </div>
  
  );
};

export default Apropos;
