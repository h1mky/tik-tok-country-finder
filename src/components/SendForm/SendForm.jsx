import "../SendForm/SendForm.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchData, setUsername } from "../../redux/dataSlice";
import { useEffect } from "react";

const SendForm = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.data.username);
  const userData = useSelector((state) => state.data.user);

  useEffect(() => {
    if (userData) {
      console.log("User data updated:", userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handleFetch = () => {
    dispatch(fetchData(username));
  };

  return (
    <>
      <header className="d-flex align-items-center justify-content-center mb-3 text-center">
        <h1>TikTok User Finder</h1>
      </header>

      <section className="mb-4 text-center">
        <h2>Explore TikTok User Stats & Region Instantly</h2>
      </section>

      <section className="input-area d-flex align-items-center flex-wrap gap-2 mb-3">
        <div className="custom-input-wrapper">
          <input
            type="text"
            placeholder="Enter TikTok username (e.g., tiktok)"
            onChange={handleChange}
          />
        </div>
        <button id="fetchButton" onClick={handleFetch}>
          Fetch Data
        </button>
      </section>
    </>
  );
};

export default SendForm;
