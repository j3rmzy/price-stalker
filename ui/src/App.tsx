import { styled } from "@mui/material/styles";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ScraperDetails from "./pages/ScraperDetails";

const SiteContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #F4F4F4;
`

function App() {
  return (
    <SiteContainer>
      <Header />
      <main>
        <Home />
      </main>
    </SiteContainer>
  )
}

export default App
