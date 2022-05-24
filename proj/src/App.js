import { Route, Routes, Link, Outlet } from 'react-router-dom';
import UserPage from './Screens/UserPage';
import GamePage from './Screens/GamePage';
import TopGames from './Screens/TopGames';
import MyList from './Screens/MyList';
import FriendPage from './Screens/FriendPage';

export default function App() {
  return (
    <div>
      <Routes>

          <Route index element={<Home />} />
          <Route path="UserPage" element={<UserPage />} />
          <Route path="FriendPage" element={<FriendPage />} />
          <Route path="GamePage" element={<GamePage />} />
          <Route path="TopGames" element={<TopGames />} />
          <Route path="MyList" element={<MyList />} />

      </Routes>
    </div>
  );
}



function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Paginas feitas</h2>
      <h3>UserPage</h3>
      <h3>FriendPage</h3>
      <h3>GamePage</h3>
      <h3>TopGames</h3>
      <h3>MyList</h3>
      <h4>Para ver as paginas basta mudar o link ex. http://localhost:3000/UserPage e a partir dai ja se pode usar a navbar</h4>

    </div>
  );
}

