import { Route, Routes, Link, Outlet } from 'react-router-dom';
import UserPage from './Screens/UserPage';
import GamePage from './Screens/GamePage';
import TopGames from './Screens/TopGames';
import MyList from './Screens/MyList';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="UserPage" element={<UserPage />} />
          <Route path="GamePage" element={<GamePage />} />
          <Route path="TopGames" element={<TopGames />} />
          <Route path="MyList" element={<MyList />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/UserPage">UserPage</Link>
          </li>
          <li>
            <Link to="/GamePage">GamePage</Link>
          </li>
          <li>
            <Link to="/TopGames">TopGames</Link>
          </li>
          <li>
            <Link to="/MyList">MyList</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

