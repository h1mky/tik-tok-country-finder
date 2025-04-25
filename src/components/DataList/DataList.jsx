import "../DataList/dataList.css";

const DataList = () => {
  return (
    <>
      <section className="result-area p-4 mt-4 rounded-4">
        <div id="resultContent">
          <div className="results-grid ">
            <div className="avatar-section d-flex flex-column align-items-center pt-1  gap-3">
              <img
                id="avatar"
                alt="avatar"
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/816392fb68cb270976282cb473d2fa7e~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=a77097ad&x-expires=1745762400&x-signature=lZ3qVSxKCvJpq31VDla25GZW3fw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
              ></img>
              <button
                id="download"
                className="d-flex align-items-center py-2 px-3 rounded-4"
              >
                Downdload
              </button>
            </div>
            <div className="result-card text-left d-flex flex-column gap-3">
              <div className="results-header pb-0 mb-0 ">
                <h3 id="resultNickname">must have verified</h3>
                <p id="resultUsername">@h1mky</p>
                <p id="resultRegion d-flex align-items-center gap-1">
                  <img />
                  Ukraine
                </p>
              </div>
              <div className="results-bio">user has no about</div>
              <div id="resultBioLink">
                <span className="bio-link">
                  <i />
                  No bio Link available
                </span>
              </div>
              <div className="results-stats">
                <h4>Stats</h4>
                <hr />
                <div className="stats-grid ">
                  <div className="stats-item ">
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
                <hr />
                <p
                  id="resultLanguageP"
                  className="my-2 d-flex align-items-center gap-2"
                >
                  ru
                </p>
                <p
                  id="resultUserIdP"
                  className="my-2 d-flex align-items-center gap-2"
                >
                  6777377590204236806
                </p>
                <p
                  id="resultCreatedP"
                  className="my-2 d-flex align-items-center gap-2"
                >
                  1/2/2020, 8:08:49 AM
                </p>
                <p
                  id="resultModifiedP"
                  className="my-2 d-flex align-items-center gap-2"
                >
                  9/7/2023, 9:40:01 PM
                </p>
              </div>
            </div>
          </div>
          <button id="download" className="py-2 px-3 rounded-2 mt-2">
            Show Following
          </button>
        </div>
      </section>
    </>
  );
};

export default DataList;
