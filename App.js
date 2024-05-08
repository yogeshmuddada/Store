import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
// import Product from './Components/Products';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import RootLayout from './Components/RootLayout';


function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <div class="p-3 mb-2 bg-info-subtle text-emphasis-info">
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
