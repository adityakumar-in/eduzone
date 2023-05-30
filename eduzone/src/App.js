// Node Modules is not Included in this folder kindly run this - 'npm run' to install it, as it is required to run the website

import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Link, RouterProvider, Route, Outlet } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      )
    );
      return (
        <div>
          <RouterProvider router={router}/>
        </div>
  );
}
const Root = () => {
  return (
      <>
        <div>
          <Navbar/>
        </div>
        <div>
          <Outlet/>
        </div>
      </>
    )
}

export default App;
