import { Route, Routes} from 'react-router-dom';
import UserPage from './Screens/UserPage';
import GamePage from './Screens/GamePage';
import TopGames from './Screens/TopGames';
import MyList from './Screens/MyList';
import FriendPage from './Screens/FriendPage';
import Search from './Screens/Search';

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
          <Route path="Search" element={<Search />} />

      </Routes>
    </div>
  );
}



function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Paginas feitas</h2>
      <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/UserPage">UserPage</a>
          </li>
          <li>
            <a href="/FriendPage">FriendPage</a>
          </li>
          <li>
            <a href="/GamePage">GamePage</a>
          </li>
          <li>
            <a href="/TopGames">TopGames</a>
          </li>
          <li>
            <a href="/MyList">MyList</a>
          </li>
          <li>
            <a href="/Search">Search</a>
          </li>
        </ul>
      <h4>Para ver as paginas basta mudar o link ex. http://localhost:3000/UserPage e a partir dai ja se pode usar a navbar</h4>

    </div>
  );
}

