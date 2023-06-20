import "./App.css";
import "./Header.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="Header">
        {" "}
        <Header />
      </div>
      <div>
        {" "}
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
