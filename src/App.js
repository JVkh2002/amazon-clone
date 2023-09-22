//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/home/index'
import { YourAccount } from './pages/yourAccount/index'





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourAccount" element={<YourAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
