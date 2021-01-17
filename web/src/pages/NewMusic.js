import { useState } from 'react';

import './styles/NewMusic.css';

function NewMusic() {
  const [lyric, setLyric] = useState('');

  return (
    <div className="container">
      <div className="subtitle">
        <p>Nova Música</p>
      </div>
      <form className="form">
        <div className="input-container">
          <label className="label-title" htmlFor="title-input">Título:</label>
          <input className="input-title" id="title-input" type="text"/>
        </div>
        <div className="input-container">
          <label className="label-author" htmlFor="author-input">Cantor(a) / Banda:</label>
          <input className="input-author" id="author-input" type="text"/>
        </div>
        <div className="input-container">
          <label className="label-album" htmlFor="album-input">Álbum:</label>
          <input className="input-album" id="album-input" type="text"/>
        </div>
        <div className="input-container">
          <label className="label-lyric" htmlFor="lyric-textarea">Letra:</label>
          <textarea
            className="textarea-lyric"
            id="lyric-textarea"
            type="text"
            onChange={ev => setLyric(ev.target.value)}
          />
          <span>{lyric}</span>
        </div>
        <button className="save-button" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default NewMusic;
