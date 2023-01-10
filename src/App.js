import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Users from './functionalComponents/Users';
import UsersClassComponent from './classComponents/UsersClassComponent';
import UseStateExample from './functionalComponents/UseStateExample'
import StateExample from './classComponents/StateExample';
// import PropsExample from './functionalComponents/PropsExample'
import PropsExample from './classComponents/PropsExample'
import InputExample from './functionalComponents/InputExample';
import HideShow from './functionalComponents/HideShow'
import Form from './functionalComponents/Form';
// import Login from './functionalComponents/Login';
import PassFunctionAsProp from './functionalComponents/PassFunctionAsProps';
import Render from './lifecycles/Render'
import ComponentDidMountExample from './lifecycles/ComponentDidMount'
import ComponentDidUpdateExample from './lifecycles/ComponentDidUpdate'
import ComponentWillUnmountExample from './lifecycles/ComponentWillUnMount'
import UseStateExampleHooks from './hooks/UseStateExample'
import UseEffectExample from './hooks/UseEffectExample'
import BootstrapExample from './functionalComponents/BootstrapExample'
import MapExample from './functionalComponents/Map'
import ReuseComponent1 from './functionalComponents/ReuseComponent1'
import Parent from './functionalComponents/Parent';
import PureComponentExample from './classComponents/PureComponentExample'
import UseMemoExample from './hooks/UseMemoExample'
import StateWithObject from './functionalComponents/StateWithObject'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import ParamsExample from './components/ParamsExample';
import SearchParamsExample from './components/SearchParamsExample';
import USeNavigateExample from './components/USeNavigateExample';
import NestedRoutedComponent from './components/NestedRoutedComponent';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Login from './components/Login';
import Protected from './components/Protected';
import { CommonContext } from './ContextApi/CommonContext'
import Main from './ContextApi/Main'
import UpdateColorButton from './ContextApi/UpdateColorButton';

function App() {
  // const [name,setName]=React.useState("atul")
  // function getData() {
  //   alert("Hello from app component")
  // }
  // const [toggle,setToggle] = useState(false)
  function updateColorFunction (updatedColor) {
    setColor({
      ...color,
      bgcolor : updatedColor,
    })
  }
  const [color,setColor] = useState({bgcolor : "red",updateColor : updateColorFunction});
  // const [updateColor,setUpdateColor] = useState(updateColor)
  return (
    <div className="App">
      {/* <Users />
      <UsersClassComponent />
      <UseStateExample /> */}
      {/* <StateExample /> */}
      {/* <PropsExample name = "atul"/> */}
      {/* <InputExample /> */}
      {/* <HideShow /> */}
      {/* <Form /> */}
      {/* <Login /> */}
      {/* <PassFunctionAsProp data={getData}/> */}
      {/* <Render /> */}
      {/* <ComponentDidMountExample /> */}
      {/* <ComponentDidUpdateExample /> */}
      {/* <button onClick={()=>setName("gupta")}>Update Name</button> */}
      {/* {!toggle ? <ComponentWillUnmountExample /> : <h2>Component is hide</h2>}
     <button onClick={()=>setToggle(!toggle)}>Toogle</button> */}
      {/* <UseStateExampleHooks /> */}
      {/* <UseEffectExample /> */}
      {/* <BootstrapExample /> */}
      {/* <MapExample /> */}
      {/* <ReuseComponent1 /> */}
      {/* <Parent /> */}
      {/* <PureComponentExample /> */}
      {/* <UseMemoExample /> */}
      {/* <StateWithObject /> */}
      {/* <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path ="/" element ={<Protected Component={Home} />} />
          <Route path ="/about" element ={<Protected Component={About} />} />
          <Route path ="/params-example/:name" element ={<ParamsExample />} />
          <Route path ="/search-params-example" element ={<SearchParamsExample />} />
          <Route path ="/use-navigate-example" element ={<USeNavigateExample />} />
          <Route path ="/nested-component/" element ={<NestedRoutedComponent />} />
            <Route path ="example1" element ={<Example1 />} />
            <Route path ="example2" element ={<Example2 />} />
            <Route path ="example3" element ={<Example3 />} />
          <Route path ="/login" element ={<Login />} />

          {/* if other than specified route is hitted redirect to page not found*/}
      {/* <Route path ='/*' element ={<PageNotFound />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <CommonContext.Provider value={color}>
        <h1>Hello i am from ContextApi</h1>

        <Main />
        <UpdateColorButton />
      </CommonContext.Provider>
    </div>
  );
}

export default App;
