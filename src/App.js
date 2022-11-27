import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Page/Home";
import NewsPage from "./Page/News";
import ContactPage from "./Page/Contact";

function App() {
  return (
    <div className="container dark">
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* do HomePage la 1 function Component nen de chuyen no sang Element Componet thi truyen no vao trong the <functionComponent/> */}
      <Routes>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/News" element={<NewsPage />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}
export default App;
