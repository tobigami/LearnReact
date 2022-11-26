import "./App.css";

import Heading from "./heading";
import Paragraph from "./paragraph";
import Button from "./button";

function App() {
  return (
    <div className="container dark">
      <h1>hello world</h1>
      <Heading />
      <Paragraph />
      <Button />
      <Button primary />
      <Button secondary />
    </div>
  );
}
export default App;
