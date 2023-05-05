import React from 'react';
import { Header } from '../components/Header';
import { DataFile } from '../components/DataFile';
import { FooterMenu } from '../components/FooterMenu';
import { api } from "../exports/api";
import "../styles/Category.css";

export function CategorySong() {
  return (
    <div>
      <Header />
      <div className="Category">
        <div className="Category-container">
          <h2>Canciones</h2>
          {api.map((song) => {
              return <DataFile
                key={song.id}
                img={song.imageUrl}
                title={song.nameFile}
                artist={song.nameAuthor}
              />
            })}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
