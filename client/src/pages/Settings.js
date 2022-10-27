import React from "react";
import HomeNav from "../components/HomeNav.js";
import "./css/Settings.css"
function Settings() {
  return (
    <div>
      <HomeNav />
      <h1>Settings page</h1>

      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default Settings;
