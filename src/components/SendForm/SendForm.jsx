const SendForm = () => {
  return (
    <>
      <h1>TikTok User Finder</h1>
      <h2>Explore TikTok User Stats & Regions Instantly</h2>
      <section className="input-area d-flex align-items-center flex-wrap gap-2 mb-3 ">
        <div className="input-group d-flex align-items-center rounded">
          <input
            className="rounded"
            placeholder="Enter TikTok username (e.g., tiktok)"
          ></input>
        </div>
        <button className="rounded border border-1 ">Fetch Data</button>
      </section>
    </>
  );
};

export default SendForm;
