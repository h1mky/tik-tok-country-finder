import SendForm from "../SendForm/SendForm";
import "../App/app.css";
import DataList from "../DataList/DataList";

import "normalize.css";

const App = () => {
  return (
    <div className="0 d-flex justify-content-center align-items-center vh-100">
      <div className="container shadow rounded">
        <SendForm />
        <DataList />
      </div>
    </div>
  );
};
export default App;
