// App.js
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS here
import 'bootstrap/dist/css/bootstrap.css';
import AppLayout from './client/components/AppLayout';
import RestaurentMenu from './client/components/RestaurentMenu';
import About from './client/components/About';
import Grocery from './client/components/Grocery';
import CartInfo from './client/redux/CartInfo';
import UserContext, { CartContext } from './client/common/UserContext';
import { store, persistor } from './client/common/AppStore'; // Import store and persistor
import './App.css'

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an API Call
    const data = {
      name: 'Devi',
    };
    setUserName(data.name);
  }, []);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      {/* Bootstrap scripts should be included in the HTML file */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      <Provider store={store}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <CartContext.Provider value={{cart, setCart}}>
          <PersistGate persistor={persistor}>
            <Router>
              <Routes>
                <Route exact path="/" element={<AppLayout />} />
                <Route exact path="/restaurants/:resId" element={<RestaurentMenu />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/grocery" element={<Suspense fallback="Loading..."><Grocery /></Suspense>} />
                <Route exact path="/cart" element={<CartInfo />} />
              </Routes>
            </Router>
          </PersistGate>
          </CartContext.Provider>
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
