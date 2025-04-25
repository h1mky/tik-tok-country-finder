import SendForm from "../SendForm/SendForm";
import "../App/app.css";
import DataList from "../DataList/DataList";

import "normalize.css";

const App = () => {
  return (
    <>
      <button id="themeToggle">
        <i className="fa-solid fa-sun"></i>
      </button>
      <div className="container shadow-lg rounded-4 p-4 m-auto">
        <SendForm />
        <DataList />
      </div>
    </>
  );
};
export default App;
