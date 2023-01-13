import "./App.css";
import videoBg from "./assets/galaxy.mp4";
import Search from "./Search.js";
import GithubLink from "./GithubLink.js";

function App() {
  return (
    <div className="App">
      <video src={videoBg} autoPlay loop muted />
      <div className="Weather-app-content">
        <Search />
      </div>
      <GithubLink />
    </div>
  );
}

export default App;
