import React from 'react';
import { Header } from '../components/Header';
import { DataFile } from '../components/DataFile';
import { FooterMenu } from '../components/FooterMenu';
import { podcast } from '../exports/podcast'
import "../styles/Category.css";

export function CategoryPodcast() {
  return (
    <div>
      <Header />
      <div className="Category">
        <div className="Category-container">
          <h2>Podcasts</h2>
          {podcast.map((pod) => {
            return <DataFile
              key={pod.id}
              img={pod.imageUrl}
              title={pod.nameFile}
              artist={pod.nameAuthor}
            />
          })}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
