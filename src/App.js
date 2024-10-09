import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body'

const root=ReactDOM.createRoot(document.getElementById("root"));
import React from 'react'

const AppLayout = () => {
  return (
    <div className='app-container'>
        <Header></Header>
        <Body></Body>
    </div>
  )
}

root.render(<AppLayout/>);