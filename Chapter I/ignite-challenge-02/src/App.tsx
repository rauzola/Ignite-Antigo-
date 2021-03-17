import { useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import "./styles/content.scss";
import "./styles/sidebar.scss";

export function App() {
  const [generId, setGenreId] = useState(1);
  
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar selectedGenreId={generId} setSelectedGenreId={setGenreId}/>
      <Content selectedGenreId={generId}/>
    </div>
  )
}