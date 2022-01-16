import { styled } from "@mui/material/styles";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ScraperDetails from "./pages/ScraperDetails";
import AddProduct from "./pages/AddProduct";
import {
  Routes,
  Route,
} from "react-router-dom";

const SiteContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #F4F4F4;
`

function App() {
  return (
    <SiteContainer>
      <main>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/scrapers" element={<Home />} />
            <Route path="/scrapers/:id" element={<ScraperDetails />} />
            <Route path="add" element={<AddProduct />} />
            <Route
              path="*"
              element={
                <div>
                  Sorry! Page is not found
                </div>
              }
            />
          </Route>
        </Routes>
      </main>
    </SiteContainer>
  )
}

export default App
