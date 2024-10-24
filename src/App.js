import React, { Children, lazy, Suspense, useContext, useEffect,useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer';
import { createBrowserRouter,RouterProvider,Outlet  } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import ContactClass from './components/ContactClass';
import useOnlineStatus from './utils/useOnlinestatus';
import OfflineContent from './components/OfflineContent';
import Loading from './components/Loading';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';
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
  const {loggedInUser}=useContext(UserContext)
  console.log(loggedInUser)
  const [userName,setuserName]=useState("")
  if(!onlinemode){
    return <OfflineContent/>
  }

  useEffect(()=>{
    const data={
      name:"Rashika Veera"
    }
    setuserName(data.name)
  },[])
  return (
    <Provider store={AppStore}>
    <UserContext.Provider value={{loggedInUser:userName,setuserName}}>
    <div className='app-container'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
   </UserContext.Provider>
   </Provider>
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
      },
      {
        path:"/cart",
        element:<CartPage></CartPage>
      },
      {
        path:"/payment",
        element:<PaymentPage></PaymentPage>
      }
    ],
}
])



root.render(<RouterProvider router={appRouter}/>);


