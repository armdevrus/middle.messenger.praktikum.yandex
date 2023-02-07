import auth from "./pages/authorization/auth.hbs";
import reg from "./pages/registration/reg.hbs";
import chatlist from "./pages/chatlist/chatlist.hbs";
import errorser from "./pages/errorserver/errorser.hbs";
import errorcli from "./pages/errorclient/errorcli.hbs";
import profile from "./pages/profile/profile.hbs";
import "./pages/authorization";
import "./pages/registration";
import "./pages/chatlist";
import "./pages/errorserver";
import "./pages/errorclient";
import "./pages/profile";
import "./components/title";
import "./components/input";
import "./components/button";
import "./components/img";
import "./index.pcss";

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
};

window.goToPage = function(name) {
  const page = ROUTES[name];
  render(page());
};

window.addEventListener("DOMContentLoaded", () => {
  const context = {
    class: "formAuth",
    post: "post",
  };
  render(ROUTES.profile());
  // render(ROUTES.signin(context));
});
