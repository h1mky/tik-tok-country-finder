import "../DataList/dataList.css";
import { useSelector } from "react-redux";

const DataList = () => {
  const userData = useSelector((state) => state.data.user);
  const dataLoadingStatus = useSelector(
    (state) => state.data.dataLoadingStatus
  );

  if (dataLoadingStatus === "loading") {
    return (
      <section className="result-area p-4 mt-4 rounded-4">
        <div className="initial-message d-flex justify-content-center align-items-center text-center">
          Loading data...
        </div>
      </section>
    );
  } else if (dataLoadingStatus === "error") {
    return (
      <div className="error-message text-center fs-6">
        Could not parse data from TikTok page.
      </div>
    );
  }

  if (!userData) {
    return (
      <section className="result-area p-4 mt-4 rounded-4">
        <div className="initial-message d-flex justify-content-center align-items-center text-center">
          Enter a TikTok username and click Fetch Data.
        </div>
      </section>
    );
  }

  return (
    <section className="result-area p-4 mt-4 rounded-4">
      <div id="resultContent">
        <div className="results-grid">
          <div className="avatar-section d-flex flex-column align-items-center pt-1 gap-3">
            <img
              id="avatar"
              alt="avatar"
              src={userData.profile["Avatar URL"]}
            />
            <button
              id="download"
              href
              className="d-flex align-items-center py-2 px-3 rounded-4"
            >
              Download
            </button>
          </div>
          <div className="result-card text-left d-flex flex-column gap-3">
            <div className="results-header pb-0 mb-0">
              <h3 id="resultNickname">
                {userData.profile.Nickname || "No nickname"}
              </h3>
              <p id="resultUsername">
                {userData.profile.Username || "No username"}
              </p>
              <p id="resultRegion" className="d-flex align-items-center gap-1">
                <img alt="region flag" />
                {userData.profile.Country || "No region"}
              </p>
            </div>
            <div className="results-bio">
              {userData.profile.About || "User has no bio"}
            </div>
            <div id="resultBioLink">
              <span className="bio-link">
                <i />
                {userData.bioLink || "No bio link available"}
              </span>
            </div>
            <div className="results-stats">
              <h4>Stats</h4>
              <hr />
              <div className="stats-grid">
                <div className="stats-item">
                  <span className="start-value">
                    {userData.stats.Followers || 0}
                  </span>
                  <span className="start-label">
                    <i className="fa-solid fa-users"></i>
                    Followers
                  </span>
                </div>
                <div className="stats-item">
                  <span className="start-value">
                    {userData.stats.Following || 0}
                  </span>
                  <span className="start-label">
                    <i className="fa-solid fa-users"></i>
                    Following
                  </span>
                </div>
                <div className="stats-item">
                  <span className="start-value">
                    {userData.stats.Hearts || 0}
                  </span>
                  <span className="start-label">
                    <i className="fa-solid fa-heart"></i>
                    Hearts
                  </span>
                </div>
                <div className="stats-item">
                  <span className="start-value">
                    {userData.stats.Videos || 0}
                  </span>
                  <span className="start-label">
                    <i className="fa-solid fa-video"></i>
                    Videos
                  </span>
                </div>
                <div className="stats-item">
                  <span className="start-value">
                    {userData.stats.Friends || 0}
                  </span>
                  <span className="start-label">
                    <i className="fa-solid fa-user-friends"></i>
                    Friends
                  </span>
                </div>
              </div>
            </div>
            <div className="result-details">
              <h4>Details</h4>
              <hr />
              <p className="my-2 d-flex align-items-center gap-2">
                {userData.profile.Language || "No language"}
              </p>
              <p className="my-2 d-flex align-items-center gap-2">
                {userData.profile["User ID"] || "No user ID"}
              </p>
              <p className="my-2 d-flex align-items-center gap-2">
                {userData.profile["Account Created"] || "No creation date"}
              </p>
              <p className="my-2 d-flex align-items-center gap-2">
                {userData.profile["Nickname Last Modified"] ||
                  "No modification date"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataList;
