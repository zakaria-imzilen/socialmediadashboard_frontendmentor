import { useState } from "react";
import OverAllCard from "./components/OverAllCard";
import FB from "./images/icon-facebook.svg";
import IG from "./images/icon-instagram.svg";
import TW from "./images/icon-twitter.svg";
import YB from "./images/icon-youtube.svg";
import Up from "./images/icon-up.svg";
import Down from "./images/icon-down.svg";
import TodayCard from "./components/TodayCard";

function App() {
  const [theme, setTheme] = useState(false);

  const offSwitchSty = "off";
  const onSwitchSty = "on";

  return (
    <div className={`App m-0 py-5 container-fluid ${theme ? "dark" : "light"}`}>
      <div className="container-lg content mx-auto">
        {/* NAVBAR */}
        <nav className="w-100 row align-items-center">
          {/* Title & SubTitle */}
          <div className="col-12 col-lg-9 py-2">
            <h1 className={`fw-bolder ${theme ? "text-light" : "text-dark"}`}>
              Social Media Dashboard
            </h1>
            <p className="text-muted fw-bold">Total Followers: 23,004</p>
          </div>
          {/* Switcher */}
          <div className="p-0 m-0 py-3 col-12 col-lg-3 row row-cols-2 gap-lg-2 switch-wrapper">
            <p className="text-muted fw-bold col">
              {theme ? "Dark" : "Light"} Mode
            </p>
            <div
              className={`switch p-0 m-0 row row-cols-2 position-relative rounded-pill ${
                theme ? onSwitchSty : offSwitchSty
              }`}
            >
              <div
                className="switch-off w-50 m-0 p-0"
                onClick={() => setTheme(false)}
              ></div>
              <div
                className="switch-on w-50 m-0 p-0"
                onClick={() => setTheme(true)}
              ></div>

              {/* Switch: Toggle BS Classes */}
              <div
                className={`mx-1 switch-circle bg-light rounded-5 position-absolute top-50 ${
                  theme ? "on" : "off"
                } translate-middle-y`}
              ></div>
            </div>
          </div>
        </nav>

        {/* MAIN */}
        <main className="my-3 w-100">
          {/* OVERALL */}
          <div className="overall w-100 row row-cols-1 row-cols-md-2 row-cols-lg-4 gap-lg-3 justify-content-between flex-lg-nowrap gy-3 gy-lg-0">
            <OverAllCard
              name="fb"
              social={FB}
              socialNum="1987"
              icon={Up}
              today="12"
              todayColor="success"
              theme={theme}
              userName="@zakariaimzilen"
            />

            <OverAllCard
              name="tw"
              social={TW}
              socialNum="1044"
              icon={Up}
              today="99"
              todayColor="success"
              theme={theme}
              userName="@zakariaimzilen"
            />
            <OverAllCard
              name="ig"
              social={IG}
              socialNum="11k"
              icon={Up}
              today="1099"
              todayColor="success"
              theme={theme}
              userName="@zakaria.imzilen"
            />
            <OverAllCard
              name="yb"
              social={YB}
              socialNum="8239"
              icon={Down}
              today="144"
              todayColor="danger"
              theme={theme}
              userName="Zakaria Imz."
            />
          </div>

          {/* TODAY */}
          <div className="my-5 today w-100">
            <h2 className="my-5 fw-semibold text-secondary">
              Overview - Today
            </h2>
            <div className="w-100 mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-between gap-lg-4 flex-lg-wrap">
              <TodayCard
                num="87"
                title="Page Views"
                theme={theme}
                color="success"
                social={FB}
                perc="3"
                icon={Up}
              />
              <TodayCard
                num="52"
                title="Likes"
                theme={theme}
                color="danger"
                social={FB}
                perc="2"
                icon={Down}
              />
              <TodayCard
                num="5462"
                title="Likes"
                theme={theme}
                color="success"
                social={IG}
                perc="264.7"
                icon={Up}
              />
              <TodayCard
                num="52k"
                title="Profile Views"
                theme={theme}
                color="success"
                social={IG}
                perc="13"
                icon={Up}
              />
              <TodayCard
                num="117"
                title="Retweets"
                theme={theme}
                color="success"
                social={TW}
                perc="303"
                icon={Up}
              />
              <TodayCard
                num="507"
                title="Likes"
                theme={theme}
                color="success"
                social={TW}
                perc="553"
                icon={Up}
              />
              <TodayCard
                num="107"
                title="Likes"
                theme={theme}
                color="danger"
                social={YB}
                perc="19"
                icon={Down}
              />
              <TodayCard
                num="1407"
                title="Total Views"
                theme={theme}
                color="danger"
                social={YB}
                perc="12"
                icon={Down}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
