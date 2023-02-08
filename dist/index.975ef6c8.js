// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _authHbs = require("./pages/authorization/auth.hbs");
var _authHbsDefault = parcelHelpers.interopDefault(_authHbs);
var _regHbs = require("./pages/registration/reg.hbs");
var _regHbsDefault = parcelHelpers.interopDefault(_regHbs);
var _chatlistHbs = require("./pages/chatlist/chatlist.hbs");
var _chatlistHbsDefault = parcelHelpers.interopDefault(_chatlistHbs);
var _errorserHbs = require("./pages/errorserver/errorser.hbs");
var _errorserHbsDefault = parcelHelpers.interopDefault(_errorserHbs);
var _errorcliHbs = require("./pages/errorclient/errorcli.hbs");
var _errorcliHbsDefault = parcelHelpers.interopDefault(_errorcliHbs);
var _profileHbs = require("./pages/profile/profile.hbs");
var _profileHbsDefault = parcelHelpers.interopDefault(_profileHbs);
var _profiledataHbs = require("./pages/profiledata/profiledata.hbs");
var _profiledataHbsDefault = parcelHelpers.interopDefault(_profiledataHbs);
var _profilepassHbs = require("./pages/profilepass/profilepass.hbs");
var _profilepassHbsDefault = parcelHelpers.interopDefault(_profilepassHbs);
var _authorization = require("./pages/authorization");
var _registration = require("./pages/registration");
var _chatlist = require("./pages/chatlist");
var _errorserver = require("./pages/errorserver");
var _errorclient = require("./pages/errorclient");
var _profile = require("./pages/profile");
var _profiledata = require("./pages/profiledata");
var _profilepass = require("./pages/profilepass");
var _title = require("./components/title");
var _input = require("./components/input");
var _button = require("./components/button");
var _img = require("./components/img");
var _indexPcss = require("./index.pcss");
var _ellipsePng = require("./images/Ellipse.png");
var _ellipsePngDefault = parcelHelpers.interopDefault(_ellipsePng);
function render(html) {
    const app = document.querySelector("#app");
    app.innerHTML = html;
}
const ROUTES = {
    "signin": (0, _authHbsDefault.default),
    "signup": (0, _regHbsDefault.default),
    "chatlist": (0, _chatlistHbsDefault.default),
    "errorser": (0, _errorserHbsDefault.default),
    "errorcli": (0, _errorcliHbsDefault.default),
    "profile": (0, _profileHbsDefault.default),
    "profiledata": (0, _profiledataHbsDefault.default),
    "profilepass": (0, _profilepassHbsDefault.default)
};
const PROPS = {
    "profile": {
        userAvatarUrl: (0, _ellipsePngDefault.default)
    },
    "profiledata": {
        userAvatarUrl: (0, _ellipsePngDefault.default)
    },
    "profilepass": {
        userAvatarUrl: (0, _ellipsePngDefault.default)
    }
};
window.goToPage = function(name) {
    const page = ROUTES[name];
    const props = PROPS[name];
    render(page(props));
};
window.addEventListener("DOMContentLoaded", ()=>{
    const context = {
        class: "formAuth",
        post: "post"
    };
    render(ROUTES.profiledata(PROPS.profile));
});

},{"./pages/authorization/auth.hbs":"hKnAy","./pages/registration/reg.hbs":"kl7vS","./pages/chatlist/chatlist.hbs":"aZnzr","./pages/errorserver/errorser.hbs":"dBksN","./pages/errorclient/errorcli.hbs":"heQiC","./pages/profile/profile.hbs":"hpzTq","./pages/profiledata/profiledata.hbs":"ek6jh","./pages/profilepass/profilepass.hbs":"75x5u","./pages/authorization":"1VQtU","./pages/registration":"fSkHX","./pages/chatlist":"lE7Jt","./pages/errorserver":"gc4oq","./pages/errorclient":"ipAYy","./pages/profile":"14hhl","./pages/profiledata":"TE8Vf","./pages/profilepass":"8REXS","./components/title":"ibW24","./components/input":"8Cm93","./components/button":"f08eE","./components/img":"ejAdu","./index.pcss":"jIaTT","./images/Ellipse.png":"aZ7qv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKnAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<form class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 1,
                    "column": 22
                }
            }
        }) : helper)) + '" method="' + alias4((helper = (helper = lookupProperty(helpers, "post") || (depth0 != null ? lookupProperty(depth0, "post") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "post",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 32
                },
                "end": {
                    "line": 1,
                    "column": 40
                }
            }
        }) : helper)) + '">\n    <div class="formAuth__block_first">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Вход",
                "class": "title"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    </div>\n    <div class="formAuth__block_second">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Логин",
                "class": "name"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "text",
                "class": "input"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Пароль",
                "class": "name"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "password",
                "class": "input"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    </div>\n    <div class="formAuth__block_third">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Авторизоваться",
                "class": "button_up"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "onClick": "window.goToPage('signup')",
                "title": "Нет аккаунта?",
                "class": "button_down"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n</form>\n   ";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7ZpO":[function(require,module,exports) {
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module1.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _handlebarsBase = __webpack_require__(3);
            var base = _interopRequireWildcard(_handlebarsBase);
            // Each of these augment the Handlebars object. No need to setup here.
            // (This is done to easily share code between commonjs and browse envs)
            var _handlebarsSafeString = __webpack_require__(36);
            var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
            var _handlebarsException = __webpack_require__(5);
            var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
            var _handlebarsUtils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_handlebarsUtils);
            var _handlebarsRuntime = __webpack_require__(37);
            var runtime = _interopRequireWildcard(_handlebarsRuntime);
            var _handlebarsNoConflict = __webpack_require__(43);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
            // For compatibility and usage outside of module systems, make the Handlebars object a namespace
            function create() {
                var hb = new base.HandlebarsEnvironment();
                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2["default"];
                hb.Exception = _handlebarsException2["default"];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;
                hb.VM = runtime;
                hb.template = function(spec) {
                    return runtime.template(spec, hb);
                };
                return hb;
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2["default"](inst);
            inst["default"] = inst;
            exports["default"] = inst;
            module1.exports = exports["default"];
        /***/ },
        /* 1 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                if (obj && obj.__esModule) return obj;
                else {
                    var newObj = {};
                    if (obj != null) {
                        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                    newObj["default"] = obj;
                    return newObj;
                }
            };
            exports.__esModule = true;
        /***/ },
        /* 2 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            };
            exports.__esModule = true;
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.HandlebarsEnvironment = HandlebarsEnvironment;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _helpers = __webpack_require__(9);
            var _decorators = __webpack_require__(29);
            var _logger = __webpack_require__(31);
            var _logger2 = _interopRequireDefault(_logger);
            var _internalProtoAccess = __webpack_require__(32);
            var VERSION = "4.7.7";
            exports.VERSION = VERSION;
            var COMPILER_REVISION = 8;
            exports.COMPILER_REVISION = COMPILER_REVISION;
            var LAST_COMPATIBLE_COMPILER_REVISION = 7;
            exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0 <4.3.0",
                8: ">= 4.3.0"
            };
            exports.REVISION_CHANGES = REVISION_CHANGES;
            var objectType = "[object Object]";
            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};
                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this);
            }
            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2["default"],
                log: _logger2["default"].log,
                registerHelper: function registerHelper(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple helpers");
                        _utils.extend(this.helpers, name);
                    } else this.helpers[name] = fn;
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name];
                },
                registerPartial: function registerPartial(name, partial) {
                    if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
                    else {
                        if (typeof partial === "undefined") throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
                        this.partials[name] = partial;
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name];
                },
                registerDecorator: function registerDecorator(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple decorators");
                        _utils.extend(this.decorators, name);
                    } else this.decorators[name] = fn;
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name];
                },
                /**
	   * Reset the memory of illegal property accesses that have already been logged.
	   * @deprecated should only be used in handlebars test-cases
	   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
                    _internalProtoAccess.resetLoggedProperties();
                }
            };
            var log = _logger2["default"].log;
            exports.log = log;
            exports.createFrame = _utils.createFrame;
            exports.logger = _logger2["default"];
        /***/ },
        /* 4 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.extend = extend;
            exports.indexOf = indexOf;
            exports.escapeExpression = escapeExpression;
            exports.isEmpty = isEmpty;
            exports.createFrame = createFrame;
            exports.blockParams = blockParams;
            exports.appendContextPath = appendContextPath;
            var escape = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
            function escapeChar(chr) {
                return escape[chr];
            }
            function extend(obj /* , ...source */ ) {
                for(var i = 1; i < arguments.length; i++){
                    for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
                }
                return obj;
            }
            var toString = Object.prototype.toString;
            exports.toString = toString;
            // Sourced from lodash
            // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
            /* eslint-disable func-style */ var isFunction = function isFunction(value) {
                return typeof value === "function";
            };
            // fallback for older versions of Chrome and Safari
            /* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
                return typeof value === "function" && toString.call(value) === "[object Function]";
            };
            exports.isFunction = isFunction;
            /* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
                return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
            };
            exports.isArray = isArray;
            // Older IE versions do not directly support indexOf so we must implement our own, sadly.
            function indexOf(array, value) {
                for(var i = 0, len = array.length; i < len; i++){
                    if (array[i] === value) return i;
                }
                return -1;
            }
            function escapeExpression(string) {
                if (typeof string !== "string") {
                    // don't escape SafeStrings, since they're already safe
                    if (string && string.toHTML) return string.toHTML();
                    else if (string == null) return "";
                    else if (!string) return string + "";
                    // Force a string conversion as this will be done by the append regardless and
                    // the regex test will do this transparently behind the scenes, causing issues if
                    // an object's to string has escaped characters in it.
                    string = "" + string;
                }
                if (!possible.test(string)) return string;
                return string.replace(badChars, escapeChar);
            }
            function isEmpty(value) {
                if (!value && value !== 0) return true;
                else if (isArray(value) && value.length === 0) return true;
                else return false;
            }
            function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame;
            }
            function blockParams(params, ids) {
                params.path = ids;
                return params;
            }
            function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + "." : "") + id;
            }
        /***/ },
        /* 5 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$defineProperty = __webpack_require__(6)["default"];
            exports.__esModule = true;
            var errorProps = [
                "description",
                "fileName",
                "lineNumber",
                "endLineNumber",
                "message",
                "name",
                "number",
                "stack"
            ];
            function Exception(message, node) {
                var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
                if (loc) {
                    line = loc.start.line;
                    endLineNumber = loc.end.line;
                    column = loc.start.column;
                    endColumn = loc.end.column;
                    message += " - " + line + ":" + column;
                }
                var tmp = Error.prototype.constructor.call(this, message);
                // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
                for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
                /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
                try {
                    if (loc) {
                        this.lineNumber = line;
                        this.endLineNumber = endLineNumber;
                        // Work around issue under safari where we can't directly set the column value
                        /* istanbul ignore next */ if (_Object$defineProperty) {
                            Object.defineProperty(this, "column", {
                                value: column,
                                enumerable: true
                            });
                            Object.defineProperty(this, "endColumn", {
                                value: endColumn,
                                enumerable: true
                            });
                        } else {
                            this.column = column;
                            this.endColumn = endColumn;
                        }
                    }
                } catch (nop) {
                /* Ignore if the browser is very particular */ }
            }
            Exception.prototype = new Error();
            exports["default"] = Exception;
            module1.exports = exports["default"];
        /***/ },
        /* 6 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(7),
                __esModule: true
            };
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function defineProperty(it, key, desc) {
                return $.setDesc(it, key, desc);
            };
        /***/ },
        /* 8 */ /***/ function(module1, exports) {
            var $Object = Object;
            module1.exports = {
                create: $Object.create,
                getProto: $Object.getPrototypeOf,
                isEnum: ({}).propertyIsEnumerable,
                getDesc: $Object.getOwnPropertyDescriptor,
                setDesc: $Object.defineProperty,
                setDescs: $Object.defineProperties,
                getKeys: $Object.keys,
                getNames: $Object.getOwnPropertyNames,
                getSymbols: $Object.getOwnPropertySymbols,
                each: [].forEach
            };
        /***/ },
        /* 9 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultHelpers = registerDefaultHelpers;
            exports.moveHelperToHooks = moveHelperToHooks;
            var _helpersBlockHelperMissing = __webpack_require__(10);
            var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
            var _helpersEach = __webpack_require__(11);
            var _helpersEach2 = _interopRequireDefault(_helpersEach);
            var _helpersHelperMissing = __webpack_require__(24);
            var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
            var _helpersIf = __webpack_require__(25);
            var _helpersIf2 = _interopRequireDefault(_helpersIf);
            var _helpersLog = __webpack_require__(26);
            var _helpersLog2 = _interopRequireDefault(_helpersLog);
            var _helpersLookup = __webpack_require__(27);
            var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
            var _helpersWith = __webpack_require__(28);
            var _helpersWith2 = _interopRequireDefault(_helpersWith);
            function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2["default"](instance);
                _helpersEach2["default"](instance);
                _helpersHelperMissing2["default"](instance);
                _helpersIf2["default"](instance);
                _helpersLog2["default"](instance);
                _helpersLookup2["default"](instance);
                _helpersWith2["default"](instance);
            }
            function moveHelperToHooks(instance, helperName, keepHelper) {
                if (instance.helpers[helperName]) {
                    instance.hooks[helperName] = instance.helpers[helperName];
                    if (!keepHelper) delete instance.helpers[helperName];
                }
            }
        /***/ },
        /* 10 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerHelper("blockHelperMissing", function(context, options) {
                    var inverse = options.inverse, fn = options.fn;
                    if (context === true) return fn(this);
                    else if (context === false || context == null) return inverse(this);
                    else if (_utils.isArray(context)) {
                        if (context.length > 0) {
                            if (options.ids) options.ids = [
                                options.name
                            ];
                            return instance.helpers.each(context, options);
                        } else return inverse(this);
                    } else {
                        if (options.data && options.ids) {
                            var data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                            options = {
                                data: data
                            };
                        }
                        return fn(context, options);
                    }
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 11 */ /***/ function(module1, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                var _Object$keys = __webpack_require__(12)["default"];
                var _interopRequireDefault = __webpack_require__(2)["default"];
                exports.__esModule = true;
                var _utils = __webpack_require__(4);
                var _exception = __webpack_require__(5);
                var _exception2 = _interopRequireDefault(_exception);
                exports["default"] = function(instance) {
                    instance.registerHelper("each", function(context, options) {
                        if (!options) throw new _exception2["default"]("Must pass iterator to #each");
                        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = undefined, contextPath = undefined;
                        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
                        if (_utils.isFunction(context)) context = context.call(this);
                        if (options.data) data = _utils.createFrame(options.data);
                        function execIteration(field, index, last) {
                            if (data) {
                                data.key = field;
                                data.index = index;
                                data.first = index === 0;
                                data.last = !!last;
                                if (contextPath) data.contextPath = contextPath + field;
                            }
                            ret = ret + fn(context[field], {
                                data: data,
                                blockParams: _utils.blockParams([
                                    context[field],
                                    field
                                ], [
                                    contextPath + field,
                                    null
                                ])
                            });
                        }
                        if (context && typeof context === "object") {
                            if (_utils.isArray(context)) {
                                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
                            } else if (global.Symbol && context[global.Symbol.iterator]) {
                                var newContext = [];
                                var iterator = context[global.Symbol.iterator]();
                                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                                context = newContext;
                                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
                            } else (function() {
                                var priorKey = undefined;
                                _Object$keys(context).forEach(function(key) {
                                    // We're running the iterations one step out of sync so we can detect
                                    // the last iteration without have to scan the object twice and create
                                    // an itermediate keys array.
                                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                                    priorKey = key;
                                    i++;
                                });
                                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
                            })();
                        }
                        if (i === 0) ret = inverse(this);
                        return ret;
                    });
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ },
        /* 12 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(13),
                __esModule: true
            };
        /***/ },
        /* 13 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(14);
            module1.exports = __webpack_require__(20).Object.keys;
        /***/ },
        /* 14 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__(15);
            __webpack_require__(17)("keys", function($keys) {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });
        /***/ },
        /* 15 */ /***/ function(module1, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(16);
            module1.exports = function(it) {
                return Object(defined(it));
            };
        /***/ },
        /* 16 */ /***/ function(module1, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        /***/ },
        /* 17 */ /***/ function(module1, exports, __webpack_require__) {
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__(18), core = __webpack_require__(20), fails = __webpack_require__(23);
            module1.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1);
                }), "Object", exp);
            };
        /***/ },
        /* 18 */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(19), core = __webpack_require__(20), ctx = __webpack_require__(21), PROTOTYPE = "prototype";
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
                if (IS_GLOBAL) source = name;
                for(key in source){
                    // contains in native
                    own = !IS_FORCED && target && key in target;
                    if (own && key in exports) continue;
                    // export native or passed
                    out = own ? target[key] : source[key];
                    // prevent global pollution for namespaces
                    exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                        var F = function(param) {
                            return this instanceof C ? new C(param) : C(param);
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F;
                    // make static versions for prototype methods
                    }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                    if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
                }
            };
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            module1.exports = $export;
        /***/ },
        /* 19 */ /***/ function(module1, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
            if (typeof __g == "number") __g = global; // eslint-disable-line no-undef
        /***/ },
        /* 20 */ /***/ function(module1, exports) {
            var core = module1.exports = {
                version: "1.2.6"
            };
            if (typeof __e == "number") __e = core; // eslint-disable-line no-undef
        /***/ },
        /* 21 */ /***/ function(module1, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__(22);
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /* 22 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != "function") throw TypeError(it + " is not a function!");
                return it;
            };
        /***/ },
        /* 23 */ /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        /***/ },
        /* 24 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("helperMissing", function() /* [args, ]options */ {
                    if (arguments.length === 1) // A missing field in a {{foo}} construct.
                    return undefined;
                    else // Someone is actually trying to call something, blow up.
                    throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 25 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("if", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#if requires exactly one argument");
                    if (_utils.isFunction(conditional)) conditional = conditional.call(this);
                    // Default behavior is to render the positive path if the value is truthy and not empty.
                    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
                    else return options.fn(this);
                });
                instance.registerHelper("unless", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#unless requires exactly one argument");
                    return instance.helpers["if"].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    });
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 26 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("log", function() /* message, options */ {
                    var args = [
                        undefined
                    ], options = arguments[arguments.length - 1];
                    for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
                    var level = 1;
                    if (options.hash.level != null) level = options.hash.level;
                    else if (options.data && options.data.level != null) level = options.data.level;
                    args[0] = level;
                    instance.log.apply(instance, args);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 27 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("lookup", function(obj, field, options) {
                    if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
                    return obj;
                    return options.lookupProperty(obj, field);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 28 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("with", function(context, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#with requires exactly one argument");
                    if (_utils.isFunction(context)) context = context.call(this);
                    var fn = options.fn;
                    if (!_utils.isEmpty(context)) {
                        var data = options.data;
                        if (options.data && options.ids) {
                            data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
                        }
                        return fn(context, {
                            data: data,
                            blockParams: _utils.blockParams([
                                context
                            ], [
                                data && data.contextPath
                            ])
                        });
                    } else return options.inverse(this);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 29 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultDecorators = registerDefaultDecorators;
            var _decoratorsInline = __webpack_require__(30);
            var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
            function registerDefaultDecorators(instance) {
                _decoratorsInline2["default"](instance);
            }
        /***/ },
        /* 30 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerDecorator("inline", function(fn, props, container, options) {
                    var ret = fn;
                    if (!props.partials) {
                        props.partials = {};
                        ret = function(context, options) {
                            // Create a new partials stack frame prior to exec.
                            var original = container.partials;
                            container.partials = _utils.extend({}, original, props.partials);
                            var ret = fn(context, options);
                            container.partials = original;
                            return ret;
                        };
                    }
                    props.partials[options.args[0]] = options.fn;
                    return ret;
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 31 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var logger = {
                methodMap: [
                    "debug",
                    "info",
                    "warn",
                    "error"
                ],
                level: "info",
                // Maps a given level value to the `methodMap` indexes above.
                lookupLevel: function lookupLevel(level) {
                    if (typeof level === "string") {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        if (levelMap >= 0) level = levelMap;
                        else level = parseInt(level, 10);
                    }
                    return level;
                },
                // Can be overridden in the host environment
                log: function log(level) {
                    level = logger.lookupLevel(level);
                    if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        // eslint-disable-next-line no-console
                        if (!console[method]) method = "log";
                        for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
                        console[method].apply(console, message); // eslint-disable-line no-console
                    }
                }
            };
            exports["default"] = logger;
            module1.exports = exports["default"];
        /***/ },
        /* 32 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.createProtoAccessControl = createProtoAccessControl;
            exports.resultIsAllowed = resultIsAllowed;
            exports.resetLoggedProperties = resetLoggedProperties;
            var _createNewLookupObject = __webpack_require__(35);
            var _logger = __webpack_require__(31);
            var logger = _interopRequireWildcard(_logger);
            var loggedProperties = _Object$create(null);
            function createProtoAccessControl(runtimeOptions) {
                var defaultMethodWhiteList = _Object$create(null);
                defaultMethodWhiteList["constructor"] = false;
                defaultMethodWhiteList["__defineGetter__"] = false;
                defaultMethodWhiteList["__defineSetter__"] = false;
                defaultMethodWhiteList["__lookupGetter__"] = false;
                var defaultPropertyWhiteList = _Object$create(null);
                // eslint-disable-next-line no-proto
                defaultPropertyWhiteList["__proto__"] = false;
                return {
                    properties: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
                        defaultValue: runtimeOptions.allowProtoPropertiesByDefault
                    },
                    methods: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
                        defaultValue: runtimeOptions.allowProtoMethodsByDefault
                    }
                };
            }
            function resultIsAllowed(result, protoAccessControl, propertyName) {
                if (typeof result === "function") return checkWhiteList(protoAccessControl.methods, propertyName);
                else return checkWhiteList(protoAccessControl.properties, propertyName);
            }
            function checkWhiteList(protoAccessControlForType, propertyName) {
                if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
                if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
                logUnexpecedPropertyAccessOnce(propertyName);
                return false;
            }
            function logUnexpecedPropertyAccessOnce(propertyName) {
                if (loggedProperties[propertyName] !== true) {
                    loggedProperties[propertyName] = true;
                    logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + "You can add a runtime option to disable the check or this warning:\n" + "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details");
                }
            }
            function resetLoggedProperties() {
                _Object$keys(loggedProperties).forEach(function(propertyName) {
                    delete loggedProperties[propertyName];
                });
            }
        /***/ },
        /* 33 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(34),
                __esModule: true
            };
        /***/ },
        /* 34 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function create(P, D) {
                return $.create(P, D);
            };
        /***/ },
        /* 35 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            exports.__esModule = true;
            exports.createNewLookupObject = createNewLookupObject;
            var _utils = __webpack_require__(4);
            /**
	 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
	 * The resulting object can be used with "object[property]" to check if a property exists
	 * @param {...object} sources a varargs parameter of source objects that will be merged
	 * @returns {object}
	 */ function createNewLookupObject() {
                for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
                return _utils.extend.apply(undefined, [
                    _Object$create(null)
                ].concat(sources));
            }
        /***/ },
        /* 36 */ /***/ function(module1, exports) {
            // Build out our basic SafeString type
            "use strict";
            exports.__esModule = true;
            function SafeString(string) {
                this.string = string;
            }
            SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
                return "" + this.string;
            };
            exports["default"] = SafeString;
            module1.exports = exports["default"];
        /***/ },
        /* 37 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$seal = __webpack_require__(38)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.checkRevision = checkRevision;
            exports.template = template;
            exports.wrapProgram = wrapProgram;
            exports.resolvePartial = resolvePartial;
            exports.invokePartial = invokePartial;
            exports.noop = noop;
            var _utils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_utils);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _base = __webpack_require__(3);
            var _helpers = __webpack_require__(9);
            var _internalWrapHelper = __webpack_require__(42);
            var _internalProtoAccess = __webpack_require__(32);
            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
                if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
                    var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                    throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
                } else // Use the embedded version info since the runtime doesn't know about this revision yet
                throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
            }
            function template(templateSpec, env) {
                /* istanbul ignore next */ if (!env) throw new _exception2["default"]("No environment passed to template");
                if (!templateSpec || !templateSpec.main) throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
                templateSpec.main.decorator = templateSpec.main_d;
                // Note: Using env.VM references rather than local var references throughout this section to allow
                // for external users to override these as pseudo-supported APIs.
                env.VM.checkRevision(templateSpec.compiler);
                // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
                var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
                function invokePartialWrapper(partial, context, options) {
                    if (options.hash) {
                        context = Utils.extend({}, context, options.hash);
                        if (options.ids) options.ids[0] = true;
                    }
                    partial = env.VM.resolvePartial.call(this, partial, context, options);
                    var extendedOptions = Utils.extend({}, options, {
                        hooks: this.hooks,
                        protoAccessControl: this.protoAccessControl
                    });
                    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
                    if (result == null && env.compile) {
                        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                        result = options.partials[options.name](context, extendedOptions);
                    }
                    if (result != null) {
                        if (options.indent) {
                            var lines = result.split("\n");
                            for(var i = 0, l = lines.length; i < l; i++){
                                if (!lines[i] && i + 1 === l) break;
                                lines[i] = options.indent + lines[i];
                            }
                            result = lines.join("\n");
                        }
                        return result;
                    } else throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
                }
                // Just add water
                var container = {
                    strict: function strict(obj, name, loc) {
                        if (!obj || !(name in obj)) throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                            loc: loc
                        });
                        return container.lookupProperty(obj, name);
                    },
                    lookupProperty: function lookupProperty(parent, propertyName) {
                        var result = parent[propertyName];
                        if (result == null) return result;
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
                        if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
                        return undefined;
                    },
                    lookup: function lookup(depths, name) {
                        var len = depths.length;
                        for(var i = 0; i < len; i++){
                            var result = depths[i] && container.lookupProperty(depths[i], name);
                            if (result != null) return depths[i][name];
                        }
                    },
                    lambda: function lambda(current, context) {
                        return typeof current === "function" ? current.call(context) : current;
                    },
                    escapeExpression: Utils.escapeExpression,
                    invokePartial: invokePartialWrapper,
                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        ret.decorator = templateSpec[i + "_d"];
                        return ret;
                    },
                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i], fn = this.fn(i);
                        if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
                        else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
                        return programWrapper;
                    },
                    data: function data(value, depth) {
                        while(value && depth--)value = value._parent;
                        return value;
                    },
                    mergeIfNeeded: function mergeIfNeeded(param, common) {
                        var obj = param || common;
                        if (param && common && param !== common) obj = Utils.extend({}, common, param);
                        return obj;
                    },
                    // An empty object to use as replacement for null-contexts
                    nullContext: _Object$seal({}),
                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };
                function ret(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var data = options.data;
                    ret._setup(options);
                    if (!options.partial && templateSpec.useData) data = initData(context, data);
                    var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
                    if (templateSpec.useDepths) {
                        if (options.depths) depths = context != options.depths[0] ? [
                            context
                        ].concat(options.depths) : options.depths;
                        else depths = [
                            context
                        ];
                    }
                    function main(context /*, options*/ ) {
                        return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
                    }
                    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                    return main(context, options);
                }
                ret.isTop = true;
                ret._setup = function(options) {
                    if (!options.partial) {
                        var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
                        wrapHelpersToPassLookupProperty(mergedHelpers, container);
                        container.helpers = mergedHelpers;
                        if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
                        container.partials = container.mergeIfNeeded(options.partials, env.partials);
                        if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
                        container.hooks = {};
                        container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
                        var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
                        _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
                        _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
                    } else {
                        container.protoAccessControl = options.protoAccessControl; // internal option
                        container.helpers = options.helpers;
                        container.partials = options.partials;
                        container.decorators = options.decorators;
                        container.hooks = options.hooks;
                    }
                };
                ret._child = function(i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) throw new _exception2["default"]("must pass block params");
                    if (templateSpec.useDepths && !depths) throw new _exception2["default"]("must pass parent depths");
                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                };
                return ret;
            }
            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var currentDepths = depths;
                    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
                        context
                    ].concat(depths);
                    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
                        options.blockParams
                    ].concat(blockParams), currentDepths);
                }
                prog = executeDecorators(fn, prog, container, depths, data, blockParams);
                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog;
            }
            /**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */ function resolvePartial(partial, context, options) {
                if (!partial) {
                    if (options.name === "@partial-block") partial = options.data["partial-block"];
                    else partial = options.partials[options.name];
                } else if (!partial.call && !options.name) {
                    // This is a dynamic partial that returned a string
                    options.name = partial;
                    partial = options.partials[partial];
                }
                return partial;
            }
            function invokePartial(partial, context, options) {
                // Use the current closure context to save the partial-block if this partial
                var currentPartialBlock = options.data && options.data["partial-block"];
                options.partial = true;
                if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
                var partialBlock = undefined;
                if (options.fn && options.fn !== noop) (function() {
                    options.data = _base.createFrame(options.data);
                    // Wrapper function to get access to currentPartialBlock from the closure
                    var fn = options.fn;
                    partialBlock = options.data["partial-block"] = function partialBlockWrapper(context) {
                        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        // Restore the partial-block from the closure for the execution of the block
                        // i.e. the part inside the block of the partial call.
                        options.data = _base.createFrame(options.data);
                        options.data["partial-block"] = currentPartialBlock;
                        return fn(context, options);
                    };
                    if (fn.partials) options.partials = Utils.extend({}, options.partials, fn.partials);
                })();
                if (partial === undefined && partialBlock) partial = partialBlock;
                if (partial === undefined) throw new _exception2["default"]("The partial " + options.name + " could not be found");
                else if (partial instanceof Function) return partial(context, options);
            }
            function noop() {
                return "";
            }
            function initData(context, data) {
                if (!data || !("root" in data)) {
                    data = data ? _base.createFrame(data) : {};
                    data.root = context;
                }
                return data;
            }
            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                    Utils.extend(prog, props);
                }
                return prog;
            }
            function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
                _Object$keys(mergedHelpers).forEach(function(helperName) {
                    var helper = mergedHelpers[helperName];
                    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
                });
            }
            function passLookupPropertyOption(helper, container) {
                var lookupProperty = container.lookupProperty;
                return _internalWrapHelper.wrapHelper(helper, function(options) {
                    return Utils.extend({
                        lookupProperty: lookupProperty
                    }, options);
                });
            }
        /***/ },
        /* 38 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(39),
                __esModule: true
            };
        /***/ },
        /* 39 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(40);
            module1.exports = __webpack_require__(20).Object.seal;
        /***/ },
        /* 40 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.17 Object.seal(O)
            var isObject = __webpack_require__(41);
            __webpack_require__(17)("seal", function($seal) {
                return function seal(it) {
                    return $seal && isObject(it) ? $seal(it) : it;
                };
            });
        /***/ },
        /* 41 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
            };
        /***/ },
        /* 42 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.wrapHelper = wrapHelper;
            function wrapHelper(helper, transformOptionsFn) {
                if (typeof helper !== "function") // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
                // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
                return helper;
                var wrapper = function wrapper() /* dynamic arguments */ {
                    var options = arguments[arguments.length - 1];
                    arguments[arguments.length - 1] = transformOptionsFn(options);
                    return helper.apply(this, arguments);
                };
                return wrapper;
            }
        /***/ },
        /* 43 */ /***/ function(module1, exports) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                exports.__esModule = true;
                exports["default"] = function(Handlebars) {
                    /* istanbul ignore next */ var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
                    /* istanbul ignore next */ Handlebars.noConflict = function() {
                        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
                        return Handlebars;
                    };
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kl7vS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<form class="formReg" method="post">\n    <div class="formReg__block_first">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Регистрация",
                "class": "title"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    </div>\n    <div class="formReg__block_second">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Почта",
                "class": "name"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "email",
                "class": "input"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Логин",
                "class": "name"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "text",
                "class": "input"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Имя",
                "class": "name"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "text",
                "class": "input"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Фамилия",
                "class": "name"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "text",
                "class": "input"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Телефон",
                "class": "name"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "tel",
                "class": "input"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Пароль",
                "class": "name"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "password",
                "class": "input"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Пароль (ещё раз)",
                "class": "name"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "password",
                "class": "input"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    </div>\n    <div class="formReg__block_third">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Зарегистрироваться",
                "class": "button_up"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Войти",
                "class": "button_down"
            },
            "data": data,
            "indent": "       ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n</form>\n   ";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZnzr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="chatlist">\n    <div class="chatlist__leftCol">\n        <div class="leftCol__head">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Профиль >",
                "class": "button_goToProfile"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "type": "text",
                "class": "input__search"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="leftCol__content">\n            Список чатов\n        </div>\n    </div>\n    <div class="chatlist__rightCol">\n        Лента переписки\n    </div>\n</div>\n   ';
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBksN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="errorser">\n    <div class="errorser__content">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "500",
                "class": "errorser__title_num"
            },
            "data": data,
            "indent": "   ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Мы уже фиксим",
                "class": "errorser__title_message"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Назад к чатам",
                "class": "errorser__btn"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n \n</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"heQiC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="errorcli">\n    <div class="errorcli__content">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "404",
                "class": "errorcli__title_num"
            },
            "data": data,
            "indent": "   ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Не туда попали",
                "class": "errorcli__title_message"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Назад к чатам",
                "class": "errorcli__btn"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpzTq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '\n<div class="profile">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "<",
                "class": "profile__button_back"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    <div class="profile__wrapper">\n        <div class="profile__head">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "img"), depth0, {
            "name": "img",
            "hash": {
                "alt": "Ellipse",
                "avatar": depth0 != null ? lookupProperty(depth0, "userAvatarUrl") : depth0
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Иван"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="profile__content">\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Почта"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "class": "profile__content_data",
                "title": "pochta@yandex.ru"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Логин"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "class": "profile__content_data",
                "title": "ivanivanov"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Имя"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "class": "profile__content_data",
                "title": "Иван"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Фаимлия"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "class": "profile__content_data",
                "title": "Иванов"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Имя в чате"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "class": "profile__content_data",
                "title": "Иван"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Телефон"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "class": "profile__content_data",
                "title": "+7 (909) 987-39-30"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n        </div>\n        <div class="profile__footer">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Изменить данные",
                "class": "profile__footer_btn"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Изменить пароль",
                "class": "profile__footer_btn"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Выйти",
                "class": "profile__footer_btn out"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "        </div>\n    </div>    \n</div>\n   ";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ek6jh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="profile">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "<",
                "class": "profile__button_back"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    <div class="profile__wrapper">\n        <div class="profile__head">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "img"), depth0, {
            "name": "img",
            "hash": {
                "alt": "Ellipse",
                "avatar": depth0 != null ? lookupProperty(depth0, "userAvatarUrl") : depth0
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="profile__content">\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Почта"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "placeholder": "pochta@yandex.ru",
                "type": "text",
                "class": "profile__content_input"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Логин"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "placeholder": "ivanivanov",
                "type": "text",
                "class": "profile__content_input"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Имя"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "placeholder": "Иван",
                "type": "text",
                "class": "profile__content_input"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Фамилия"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "placeholder": "Иванов",
                "type": "text",
                "class": "profile__content_input"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Имя в чате"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "placeholder": "Иван",
                "type": "text",
                "class": "profile__content_input"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Телефон"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "placeholder": "+7 (900) 957-09-80",
                "type": "text",
                "class": "profile__content_input"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n        </div>\n        <div class="profile__footer">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Сохранить",
                "class": "profile__footer_data"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "        </div>\n    </div>    \n</div>\n   ";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"75x5u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="profile">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "<",
                "class": "profile__button_back"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    <div class="profile__wrapper">\n        <div class="profile__head">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "img"), depth0, {
            "name": "img",
            "hash": {
                "alt": "Ellipse",
                "avatar": depth0 != null ? lookupProperty(depth0, "userAvatarUrl") : depth0
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="profile__content">\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Старый пароль"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "placeholder": "********",
                "type": "text",
                "class": "profile__content_input"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Новый пароль"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "placeholder": "********",
                "type": "text",
                "class": "profile__content_input"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n           <div class="profile__content_wrapper">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "title"), depth0, {
            "name": "title",
            "hash": {
                "title": "Повторите новый пароль"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "input"), depth0, {
            "name": "input",
            "hash": {
                "placeholder": "********",
                "type": "text",
                "class": "profile__content_input"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '           </div>\n        </div>\n        <div class="profile__footer">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "button"), depth0, {
            "name": "button",
            "hash": {
                "title": "Сохранить",
                "class": "profile__footer_data"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "        </div>\n    </div>    \n</div>\n   ";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VQtU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _authHbs = require("./auth.hbs");
var _authHbsDefault = parcelHelpers.interopDefault(_authHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _authPcss = require("./auth.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("auth", (0, _authHbsDefault.default));

},{"./auth.hbs":"hKnAy","handlebars/dist/handlebars.runtime":"b7ZpO","./auth.pcss":"fBRLU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBRLU":[function() {},{}],"fSkHX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _regHbs = require("./reg.hbs");
var _regHbsDefault = parcelHelpers.interopDefault(_regHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _regPcss = require("./reg.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("reg", (0, _regHbsDefault.default));

},{"./reg.hbs":"kl7vS","handlebars/dist/handlebars.runtime":"b7ZpO","./reg.pcss":"4px26","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4px26":[function() {},{}],"lE7Jt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _chatlistHbs = require("./chatlist.hbs");
var _chatlistHbsDefault = parcelHelpers.interopDefault(_chatlistHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _chatlistPcss = require("./chatlist.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("chastlist", (0, _chatlistHbsDefault.default));

},{"./chatlist.hbs":"aZnzr","handlebars/dist/handlebars.runtime":"b7ZpO","./chatlist.pcss":"cPSxs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cPSxs":[function() {},{}],"gc4oq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _errorserHbs = require("./errorser.hbs");
var _errorserHbsDefault = parcelHelpers.interopDefault(_errorserHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _errorserPcss = require("./errorser.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("errorser", (0, _errorserHbsDefault.default));

},{"./errorser.hbs":"dBksN","handlebars/dist/handlebars.runtime":"b7ZpO","./errorser.pcss":"97V3H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97V3H":[function() {},{}],"ipAYy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _errorcliHbs = require("./errorcli.hbs");
var _errorcliHbsDefault = parcelHelpers.interopDefault(_errorcliHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _errorcliPcss = require("./errorcli.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("errorcli", (0, _errorcliHbsDefault.default));

},{"./errorcli.hbs":"heQiC","handlebars/dist/handlebars.runtime":"b7ZpO","./errorcli.pcss":"jlNyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jlNyz":[function() {},{}],"14hhl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _profileHbs = require("./profile.hbs");
var _profileHbsDefault = parcelHelpers.interopDefault(_profileHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _profilePcss = require("./profile.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("profile", (0, _profileHbsDefault.default));

},{"./profile.hbs":"hpzTq","handlebars/dist/handlebars.runtime":"b7ZpO","./profile.pcss":"2XPsy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XPsy":[function() {},{}],"TE8Vf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _profiledataHbs = require("./profiledata.hbs");
var _profiledataHbsDefault = parcelHelpers.interopDefault(_profiledataHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _profiledataPcss = require("./profiledata.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("profiledata", (0, _profiledataHbsDefault.default));

},{"./profiledata.hbs":"ek6jh","handlebars/dist/handlebars.runtime":"b7ZpO","./profiledata.pcss":"ie3Mr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ie3Mr":[function() {},{}],"8REXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _profilepassHbs = require("./profilepass.hbs");
var _profilepassHbsDefault = parcelHelpers.interopDefault(_profilepassHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _profilepassPcss = require("./profilepass.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("profilepass", (0, _profilepassHbsDefault.default));

},{"./profilepass.hbs":"75x5u","handlebars/dist/handlebars.runtime":"b7ZpO","./profilepass.pcss":"iaDtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaDtN":[function() {},{}],"ibW24":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _titleHbs = require("./title.hbs");
var _titleHbsDefault = parcelHelpers.interopDefault(_titleHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _titlePcss = require("./title.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("title", (0, _titleHbsDefault.default));

},{"./title.hbs":"arZ5x","handlebars/dist/handlebars.runtime":"b7ZpO","./title.pcss":"4BZXJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"arZ5x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<h3 class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 11
                },
                "end": {
                    "line": 1,
                    "column": 20
                }
            }
        }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 22
                },
                "end": {
                    "line": 1,
                    "column": 31
                }
            }
        }) : helper)) + "</h3>\n   ";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BZXJ":[function() {},{}],"8Cm93":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _inputHbs = require("./input.hbs");
var _inputHbsDefault = parcelHelpers.interopDefault(_inputHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _inputPcss = require("./input.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("input", (0, _inputHbsDefault.default));

},{"./input.hbs":"6eWJV","handlebars/dist/handlebars.runtime":"b7ZpO","./input.pcss":"1YUiL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eWJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<input class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 14
                },
                "end": {
                    "line": 1,
                    "column": 23
                }
            }
        }) : helper)) + '" type="' + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 31
                },
                "end": {
                    "line": 1,
                    "column": 39
                }
            }
        }) : helper)) + '" placeholder="' + alias4((helper = (helper = lookupProperty(helpers, "placeholder") || (depth0 != null ? lookupProperty(depth0, "placeholder") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "placeholder",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 54
                },
                "end": {
                    "line": 1,
                    "column": 69
                }
            }
        }) : helper)) + '">   ';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YUiL":[function() {},{}],"f08eE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _buttonHbs = require("./button.hbs");
var _buttonHbsDefault = parcelHelpers.interopDefault(_buttonHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _buttonPcss = require("./button.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("button", (0, _buttonHbsDefault.default));

},{"./button.hbs":"jyi3k","handlebars/dist/handlebars.runtime":"b7ZpO","./button.pcss":"eEF87","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jyi3k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<button class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 24
                }
            }
        }) : helper)) + '" onclick="' + alias4((helper = (helper = lookupProperty(helpers, "onClick") || (depth0 != null ? lookupProperty(depth0, "onClick") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "onClick",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 46
                }
            }
        }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 48
                },
                "end": {
                    "line": 1,
                    "column": 57
                }
            }
        }) : helper)) + "</button>\n   ";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEF87":[function() {},{}],"ejAdu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _imgHbs = require("./img.hbs");
var _imgHbsDefault = parcelHelpers.interopDefault(_imgHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _imgPcss = require("./img.pcss");
(0, _handlebarsRuntimeDefault.default).registerPartial("img", (0, _imgHbsDefault.default));

},{"./img.hbs":"lV1du","handlebars/dist/handlebars.runtime":"b7ZpO","./img.pcss":"iSWu3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lV1du":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<img class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 21
                }
            }
        }) : helper)) + '" src="' + alias4((helper = (helper = lookupProperty(helpers, "avatar") || (depth0 != null ? lookupProperty(depth0, "avatar") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "avatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 28
                },
                "end": {
                    "line": 1,
                    "column": 38
                }
            }
        }) : helper)) + '" alt="' + alias4((helper = (helper = lookupProperty(helpers, "alt") || (depth0 != null ? lookupProperty(depth0, "alt") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "alt",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 45
                },
                "end": {
                    "line": 1,
                    "column": 52
                }
            }
        }) : helper)) + '">\n\n   ';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSWu3":[function() {},{}],"jIaTT":[function() {},{}],"aZ7qv":[function(require,module,exports) {
module.exports = require("4b7058f20db1009a").getBundleURL("bLxZJ") + "Ellipse.553ef7ba.png" + "?" + Date.now();

},{"4b7058f20db1009a":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequirefc40")

//# sourceMappingURL=index.975ef6c8.js.map
