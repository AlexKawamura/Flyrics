import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles/List.css';

function List() {
  const id = 1;
  return (
    <div className="container">
      <div className="subtitle">
        <p>Aprenda Kanjis enquanto escuta suas músicas favoritas!</p>
      </div>

      <div className="search">
        <input className="input-search" type="text"/>

        <FiSearch size="24" />
      </div>

      <div className="cards-container">
        <Link to={`/lyric/${id}`} className="card">
          <p className="music-title">Sparkleas dfas dasdf</p>
          <p className="band-name">Radwim psasdfa dfasdas</p>
        </Link>
        
      </div>

      <Link to="/newMusic" className="create-button">
        <FiPlus size={32} color="#FEFBE6" />
      </Link>
    </div>
  );
}

export default List;
