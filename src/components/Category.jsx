import React from "react";
import { Header } from "./Header";
import { Song } from "./Song";
import "../styles/Category.css";
import { FooterMenu } from "./FooterMenu";
//EN ESTE COMPONENTE TENGO QUE TRABAJAR
const songs = [
  {
    title: "Un Finde",
    artist: "Big One ~ Ke Personaje ~ FMK",
    img: "https://i1.sndcdn.com/artworks-jTy3zaoSBktD4e0K-qvgDwg-t500x500.jpg",
  },
  {
    title: "Persiana Americana",
    artist: "Soda Stereo",
    img: "https://lastfm.freetls.fastly.net/i/u/300x300/248a618cf08723dfccf2a39d3bf143a4.jpg",
  },
  {
    title: "Que Te Vaya Bien",
    artist: "Callejero Fino",
    img: "https://i.ytimg.com/vi/FpKERvWaWQs/maxresdefault.jpg",
  },
  {
    title: "You´re Beautiful",
    artist: "James Blunt",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/You%27rebeautifulsingle.jpg/220px-You%27rebeautifulsingle.jpg",
  },
  {
    title: "Enamórate De Alguien Más",
    artist: "Morat",
    img: "https://www.lahiguera.net/musicalia/artistas/morat/disco/11369/tema/22159/morat_enamorate_de_alguien_mas-portada.jpg",
  },
  {
    title: "Ya no vuelvas",
    artist: "La Konga",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNy9xE84UdZ8QQuVP7MuA_sab2ThsnCAtJQ&usqp=CAU",
  },
  {
    title: "Carmesi",
    artist: "Vicente Garcia",
    img: "https://cdns-images.dzcdn.net/images/cover/6ef7b3c18eaebe26e2ad40a7872e8d2f/500x500.jpg",
  },
  {
    title: "Muchachos, Ahora nos volvimos ilusionar",
    artist: "La Mosca",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizxz7gRepBlM4aVH-JNcnKBrogOzKl020Ng&usqp=CAU",
  },
];
export function Category() {
  return (
    <div>
      <Header />
      <div>
        <Song />
        <div className="Song-container">
          <h2>Canciones</h2>
          {songs.map(({ title, artist, img }) => {
            return <Song key={title} img={img} title={title} artist={artist} />;
          })}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
