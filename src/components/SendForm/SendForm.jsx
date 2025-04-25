import "../SendForm/SendForm.css";

const SendForm = () => {
  return (
    <>
      <header className="d-flex align-items-center justify-content-center mb-3 text-center">
        <h1>TikTok User Finder</h1>
      </header>

      <section className="mb-4 text-center">
        <h2>Explore TikTok User Stats & Region Instantly</h2>
      </section>

      <section className="input-area d-flex align-items-center flex-wrap gap-2 mb-3">
        {/* .input-group больше не нужен — заменён кастомным стилем */}
        <div className="custom-input-wrapper">
          <input
            type="text"
            placeholder="Enter TikTok username (e.g., tiktok)"
          />
        </div>
        <button id="fetchButton">Fetch Data</button>
      </section>
    </>
  );
};

export default SendForm;
