import { styled } from "@mui/material/styles";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ScraperDetails from "./pages/ScraperDetails";
import AddProduct from "./pages/AddProduct";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

const SiteContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #F4F4F4;
`

function App() {
  return (
    <Router>
      <SiteContainer>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<Home />} />
            <Route path="/products/:id" element={<ScraperDetails />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route
              path="*"
              element={
                <div>
                  Sorry! Page is not found
                </div>
              }
            />
          </Routes>
        </main>
      </SiteContainer>
    </Router>
  )
}

export default App
