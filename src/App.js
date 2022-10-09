import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Home from './Components/Main-Section/Home-Page/Home';
import ErrorPage from './Components/Main-Section/ErrorPage';
import Order from './Components/Main-Section/Order-page/Order';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: async() => fetch('Tshirt.json'),
          element: <Home></Home>
        },
        {
          path:'/orders',
          element: <Order></Order>
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
