import auth from "./pages/authorization/auth.hbs";
import reg from "./pages/registration/reg.hbs";
import chatlist from "./pages/chatlist/chatlist.hbs";
import errorser from "./pages/errorserver/errorser.hbs";
import errorcli from "./pages/errorclient/errorcli.hbs";
import profile from "./pages/profile/profile.hbs";
import profiledata from "./pages/profiledata/profiledata.hbs";
import profilepass from "./pages/profilepass/profilepass.hbs";

import "./pages/authorization";
import "./pages/registration";
import "./pages/chatlist";
import "./pages/errorserver";
import "./pages/errorclient";
import "./pages/profile";
import "./pages/profiledata";
import "./pages/profilepass";
import "./components/title";
import "./components/input";
import "./components/button";
import "./components/img";
import "./index.pcss";

import Ellipse from "./images/Ellipse.png";

function render(html) {
  const app = document.querySelector("#app");
  app.innerHTML = html;
}
const ROUTES = {
  "signin": auth,
  "signup": reg,
  "chatlist": chatlist,
  "errorser": errorser,
  "errorcli": errorcli,
  "profile": profile,
  "profiledata": profiledata,
  "profilepass": profilepass,
};
const PROPS = {
  "profile": {
    userAvatarUrl: Ellipse
  },
   "profiledata": {
    userAvatarUrl: Ellipse

   },
  "profilepass": {
        userAvatarUrl: Ellipse

  },
};

window.goToPage = function (name) {
  const page = ROUTES[name];
  const props = PROPS[name]
  render(page(props));
};

window.addEventListener("DOMContentLoaded", () => {
  const context = {
    class: "formAuth",
    post: "post",
  };
  render(ROUTES.profiledata(PROPS.profile));
});
