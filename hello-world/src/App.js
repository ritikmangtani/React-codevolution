import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome';
import Jsxlab from './components/learningjsx'
import Message from './components/message';
import Count from './components/count'
import FunctionClick from './components/functionClick';
import ClassClick from './components/classClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/userGreeting';
import NameList from './components/nameList';
import StyleSheet from './components/styleSheet';
import InLine from './components/inLine';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  
  return (
    <div className="App">
      <h1 className ='error'>error</h1>
      <h1 className ={styles.success}>Sucess</h1>
      {/* <InLine /> */}
      
      {/* <StyleSheet primary={true} /> */}

      {/* <NameList/> */}

      {/* <UserGreeting/> */}
      
      {/* <ParentComponent/> */}
      
      {/* <EventBind/> */}
      
      
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Count/> */}
      {/* <Message/> */}
     
      {/* <Greet Name="Ramesh" superHero="Shaktiman">
        <p>This is children</p>
      </Greet>
      <Greet Name="Suresh" superHero="Perman">
        <button>Action</button>  
      </Greet>
      <Greet Name="Rajesh" superHero="Doremon"/>

      <Welcome Name="Ramesh" superHero="Shaktiman"/>
      <Welcome Name="Ramesh" superHero="Shaktiman"/>
      <Welcome Name="Rajesh" superHero="Doremon"/>
      <Jsxlab/>  */}
      
    </div>
    );
  
}

export default App;
