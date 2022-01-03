import './App.css';
import { Outlet, ReactLocation, Router } from 'react-location';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Create from './pages/create/Create';
import Posts from './pages/posts/Posts';
import useFetch from './hooks/useFetch';
import Post from './pages/post/Post';



const location = new ReactLocation();

function App() {
  const [data, isPending, error] = useFetch('http://localhost:3001/patterns');

  const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/create",
      element: <Create />
    },
    {
      path: "posts",
      element: <Posts />,
    },
    {
      path: "/post/:id",
      element: <Post />
    },
  ]
  return (
    <div className="App">
      <Router location={location} routes={routes}>
        <div className="App-main">
          <Navbar />
          <Outlet />
        </div>
        <div className="App-sidebar">
          <Sidebar posts={data} />
        </div>
      </Router>
    </div>
  );
}

export default App;
