import React, { Children, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer';
import { createBrowserRouter,RouterProvider,Outlet  } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
// import RestaurantCardMenu from './components/RestaurantCardMenu';
import ContactClass from './components/ContactClass';
import useOnlineStatus from './utils/useOnlinestatus';
import OfflineContent from './components/OfflineContent';
import Loading from './components/Loading';
// import Grocery from './components/Grocery';

const root=ReactDOM.createRoot(document.getElementById("root"));
const Grocery = lazy(()=>import("./components/Grocery"))
const ResCard=lazy(()=>import("./components/RestaurantCardMenu"))


const AppLayout = () => {
  
if ('service-worker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register(new URL('../public/service-worker.js', import.meta.url)).then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
      }).catch(error => {
      console.error('Service Worker registration failed:', error);
      });
  });
  }
  const onlinemode=useOnlineStatus();
  if(!onlinemode){
    return <OfflineContent/>
  }
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
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<Suspense fallback={<Loading/>}> <ResCard/></Suspense>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Loading/>}><Grocery/></Suspense>
      }
    ],
}
])



root.render(<RouterProvider router={appRouter}/>);


