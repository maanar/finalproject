
import {BrowserRouter,Link, Route, Routes} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
  <div class = "grid-container">
  
      <header >
      <div>
        <a href="/#/signin">Sign-in</a>
        <a href="/#/cart">Cart</a>
    </div>
    <div class="brand">
        <Link  to="/">FRAICHE</Link >
        </div>
      </header>
      <main>
        <Routes>
        <Route path="/Product/:slug" element={< ProductScreen />} />
          <Route path="/" element={< HomeScreen />} />
        </Routes>
    
      </main>
      <footer> 
       all rights reserved @2022
      </footer>
  </div>
  </BrowserRouter>
  
  );
}

export default App;
