import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import Layout from "./Layout/Layout";
import Home from "./Screens/Home"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/> 
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
