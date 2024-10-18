import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer';
import { createBrowserRouter,RouterProvider,Outlet  } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantCardMenu from './components/RestaurantCardMenu';
import ContactClass from './components/ContactClass';

const root=ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = () => {
  return (
    <div className='app-container'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[ 
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactClass/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantCardMenu/>
      },
    ],
}
])



root.render(<RouterProvider router={appRouter}/>);