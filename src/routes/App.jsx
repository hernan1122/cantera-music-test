import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Player } from "../components/Player";
import { CategoryMusic } from "../components/CategoryMusic";
import { CategoryPodcast } from "../components/CategoryPodcast";
import { CategoryAudioBooks } from "../components/CategoryAudioBooks";
import { NotFound } from "../components/NotFound";
import PlayerSlider from "../components/PlayerSlider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/category/music" element={<CategoryMusic />} />
        <Route path="/category/podcast" element={<CategoryPodcast />} />
        <Route path="/category/audiobooks" element={<CategoryAudioBooks />} />
        <Route path="/PlayerSlider" element={<PlayerSlider />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
