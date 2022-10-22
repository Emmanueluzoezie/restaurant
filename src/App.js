import './App.css';
import Header from './components/Header';
import FoodsComponent from './components/FoodComponent';
import { useStateContext } from './context/ContextProvider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Home from './page/Home';
import Profile from './page/Profile';
import Settings from './page/Settings';
import Favorite from './page/Favorite';

function App() {
  const { sidebar } = useStateContext()

  return (
    <div className="app">
      <BrowserRouter>
      {/* <div className='app-header'> */}
        {sidebar? (
          <div className='sidebar'>
            <Sidebar />
          </div>
        ): (
          ""
        )}
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
          <Route path='/favorite' element={<Favorite />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
