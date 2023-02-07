import auth from "./pages/authorization/auth.hbs";
import reg from "./pages/registration/reg.hbs";
import chatlist from "./pages/chatlist/chatlist.hbs";
import "./pages/authorization";
import "./pages/registration";
import "./pages/chatlist";
import "./components/title";
import "./components/input";
import "./components/button";
import "./index.pcss";

function render(html) {
  const app = document.querySelector("#app");
  app.innerHTML = html;
}
const ROUTES = {
  "signin": auth,
  "signup": reg,
  "chatlist": chatlist
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
  render(ROUTES.chatlist());
  // render(ROUTES.signin(context));
});
