import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import Layout from "./Layout/Layout";
import Information from "./Screens/Information"
import Energy1 from "./Screens/Energy1";
import Humanr from "./Screens/Humanr";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/bilgi" element={<Information />}/> 
          <Route path="/enerji" element={<Energy1 />}/> 
          <Route path="/insan-kaynaklari" element={<Humanr />}/> 
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
