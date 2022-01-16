import { styled } from "@mui/material/styles";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ScraperDetails from "./pages/ScraperDetails";
import {
  Link,
  Router,
  ReactLocation,
  Outlet
} from "react-location";

const SiteContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #F4F4F4;
`

const location = new ReactLocation();

function App() {
  return (
    <SiteContainer>
      <Header />
      <main>
        <Router
          location={location}
          routes={[
            {
              path: "/",
              element: <Home />,
              loader: async () => {
                console.log("load scrapers")
              }
            },
            {
              path: ":id",
              element: <ScraperDetails />,
              loader: async () => {
                console.log("load scraper details")
              }
            }
          ]}>
            <Outlet />
          </Router>

      </main>
    </SiteContainer>
  )
}

export default App
