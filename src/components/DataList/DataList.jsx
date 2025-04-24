import "../DataList/dataList.css";

const DataList = () => {
  return (
    <>
      <section className="result-area p-4 mt-4 rounded-4">
        <div id="resultContent">
          <div className="result-grid">
            <div className="avatar-section">
              <img id="avatar" alt="avatar"></img>
              <button id="download">Downdload</button>
            </div>
            <div className="result-card">
              <div className="result-header">
                <h3 id="resultNickName">must have verified</h3>
                <p id="resultUserName">@h1mky</p>
                <p id="resultRegion">
                  <img />
                  Ukraine
                </p>
              </div>
              <div className="result-bio">user has no about</div>
              <div id="resultBioLink">
                <span className="bio-link">
                  <i />
                  No bio Link available
                </span>
              </div>
              <div className="result-stats">
                <h4>Stats</h4>
                <div className="stats-grid">
                  <div className="stats-item">
                    <span id="startFollowers" className="start-value">
                      79
                    </span>
                    <span className="start-label">
                      <i className="fa-solid fa-users"></i>
                      Followers
                    </span>
                  </div>
                  <div className="stats-item">
                    <span id="statsFollowing" className="start-value">
                      666
                    </span>
                    <span className="start-label">
                      <i className="fa-solid fa-users"></i>
                      Following
                    </span>
                  </div>
                  <div className="stats-item">
                    <span id="statsLikes" className="start-value">
                      0
                    </span>
                    <span className="start-label">
                      <i className="fa-solid fa-users"></i>
                      Hearts
                    </span>
                  </div>
                  <div className="stats-item">
                    <span id="statsVideo" className="start-value">
                      0
                    </span>
                    <span className="start-label">
                      <i className="fa-solid fa-users"></i>
                      Videos
                    </span>
                  </div>
                  <div className="stats-item">
                    <span id="statFriends" className="start-value">
                      34
                    </span>
                    <span className="start-label">
                      <i className="fa-solid fa-users"></i>
                      Friends
                    </span>
                  </div>
                </div>
              </div>

              {/* ✅ Новый div сразу после блока result-stats */}
              <div className="result-details">
                <h4>Details</h4>
                <p id="resultLanguageP">ru</p>
                <p id="resultUserIdP">6777377590204236806</p>
                <p id="resultCreatedP">1/2/2020, 8:08:49 AM</p>
                <p id="resultModifiedP">9/7/2023, 9:40:01 PM</p>
              </div>
            </div>
          </div>
          <button>Show Following</button>
        </div>
      </section>
    </>
  );
};

export default DataList;
