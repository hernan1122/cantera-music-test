import React from 'react';
import { Header } from '../components/Header';
import { DataFile } from '../components/DataFile';
import { FooterMenu } from '../components/FooterMenu';
import { audiobook } from '../exports/audiobook'
import "../styles/Category.css";

export function CategoryAudioBooks() {
  return (
    <div>
      <Header />
      <div className="Category">
        <div className="Category-container">
          <h2>Audio Libros</h2>
          {audiobook.map((book) => {
            return <DataFile
              key={book.id}
              img={book.imageUrl}
              title={book.nameFile}
              artist={book.nameAuthor}
            />
          })}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
