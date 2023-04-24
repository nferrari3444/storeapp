import React, { Fragment } from "react";
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import {Provider} from 'react-redux';

import {NavBar} from '../components';

import {ProductsList, ProductAdd, ProductUpdate} from '../pages';
import store from '../store/store'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('sis sis isi ')
  return (
    <Fragment>
    <Provider store={store}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/products/list" element ={<ProductsList/>} />
        <Route path="/products/create" element ={<ProductAdd/>} />
        <Route path="/products/update/:id" element ={<ProductUpdate/>}
        />
      </Routes>
    </Router>
    </Provider>
    </Fragment>
  )
}


// import logo from './logo.svg';
// import './App.css';


// function App() {

//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//     .then((res) => res.json())
//     .then((data) => setData(data.message));


//   } , [])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}

//           {!data ? "Loading..." : data}

//         </p>
   
//       </header>
//     </div>
//   );
// }

export default App;
