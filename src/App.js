//import logo from './logo.svg';
import './App.css';
//import DataFetchingOne from './components/usereducer/datafetch/DataFetchingOne';
import DataFetchingTwo from './components/usereducer/datafetch/DataFetchingTwo';
//import Datafetchbutton from './components/datafetch_button';
// import DataFetching from './components/data_fetch';
//import ComponentC from './components/useContext/componentC';
//import ComponentE from './components/useContext/componentE';
//import ComponentF from './components/useContext/componentF';
//import React from 'react'
// import ConditionalComponent from './components/useContext/conditionaComponent';





function App() {
  return (
    <div className="App">
     {/* <UserContext.Provider value="authenticated">
        <ConditionalComponent />
      </UserContext.Provider>
       */}
       <DataFetchingTwo />
    </div>
  );
}

export default App;


// // function App() {
// //   return (
// //     <div className="App">
// //      <UserContext.Provider value={'pavan'}>
// //       <ChannelContext.Provider value ={'developer'}>
// //       <ComponentE />
// //       </ChannelContext.Provider>
// //      </UserContext.Provider>
      
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import './App.css';
// import { ThemeProvider } from './components/useContext/theme/themecoloured'; 
// import ThemeToggler from './components/useContext/theme/toggler';
// import ThemedComponent from './components/useContext/theme/component';

// function App() {
//   return (
//     <div className="App">
//       <ThemeProvider>
//         <ThemeToggler />
//         <ThemedComponent />
//       </ThemeProvider>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// //import Counter from './components/usereducer/counter';
// //import Counter1 from './components/usereducer/counter_action';
// //import Countertwo from './components/usereducer/twodifcounte';
// import Counterthree from './components/usereducer/multipler_reducer';



// function App() {
//   return (
//     <div className="App">
//       <Counterthree />
//     </div>
//   );
// }

// import React, { useReducer } from "react";
// import ComponentA from "./components/usereducer/useRed+useContext/componentA";
// import ComponentB from "./components/usereducer/useRed+useContext/componentB";
// import ComponentC from "./components/usereducer/useRed+useContext/componentC";

// export const CountContext = React.createContext();

// const initialstate = 0;
// const reducer = (state, action) =>{
//   switch(action.type) {
//       case 'increment':
//           return state + 1;
//       case 'decrement':
//           return state - 1;
//       case 'reset':
//           return initialstate
//       default:
//           return state;
//   }
// }

// function App (){
//   const [count, dispatch] = useReducer(reducer, initialstate)
// return(
//   <CountContext.Provider 
//   value={{ countState: count, countDispatch: dispatch}}>
//   <div className="App">
//     Count - {count}
//     <ComponentA />
//     <ComponentB />
//     <ComponentC />
//   </div>
//   </CountContext.Provider>
// )}
// export default App;
