import {
  DEFAULT_LOCALE,
  formatText,
  getInputStyleClasses,
  isDiscounted,
  isNewArrival,
  missingClass,
  statusMessage,
  useIsHomePath
} from "/build/_shared/chunk-7IMEBFFC.js";
import {
  Image,
  MediaFile,
  Money,
  flattenConnection,
  useMoney
} from "/build/_shared/chunk-IKF5OSCB.js";
import {
  require_react_dom
} from "/build/_shared/chunk-B5NAOUMV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NDYBTKM5.js";
import {
  Await,
  Form,
  Link,
  NavLink,
  require_react,
  useFetcher,
  useFetchers,
  useLocation,
  useMatches,
  useNavigate,
  useParams,
  useSearchParams,
  useTransition
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r12, n4, ...a9) {
  if (r12 in n4) {
    let e5 = n4[r12];
    return typeof e5 == "function" ? e5(...a9) : e5;
  }
  let t13 = new Error(`Tried to handle "${r12}" but there is no handler defined. Only defined handlers are: ${Object.keys(n4).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t13, u), t13;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e(...n4) {
  return n4.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var j = ((a9) => (a9[a9.None = 0] = "None", a9[a9.RenderStrategy = 1] = "RenderStrategy", a9[a9.Static = 2] = "Static", a9))(j || {});
var w = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(w || {});
function X({ ourProps: r12, theirProps: t13, slot: e5, defaultTag: a9, features: s13, visible: n4 = true, name: l11 }) {
  let o9 = h(t13, r12);
  if (n4)
    return m(o9, e5, a9, l11);
  let u7 = s13 != null ? s13 : 0;
  if (u7 & 2) {
    let { static: i7 = false, ...d13 } = o9;
    if (i7)
      return m(d13, e5, a9, l11);
  }
  if (u7 & 1) {
    let { unmount: i7 = true, ...d13 } = o9;
    return u(i7 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m({ ...d13, hidden: true, style: { display: "none" } }, e5, a9, l11);
    } });
  }
  return m(o9, e5, a9, l11);
}
function m(r12, t13 = {}, e5, a9) {
  var y4;
  let { as: s13 = e5, children: n4, refName: l11 = "ref", ...o9 } = T(r12, ["unmount", "static"]), u7 = r12.ref !== void 0 ? { [l11]: r12.ref } : {}, i7 = typeof n4 == "function" ? n4(t13) : n4;
  o9.className && typeof o9.className == "function" && (o9.className = o9.className(t13));
  let d13 = {};
  if (t13) {
    let f8 = false, c8 = [];
    for (let [p6, F7] of Object.entries(t13))
      typeof F7 == "boolean" && (f8 = true), F7 === true && c8.push(p6);
    f8 && (d13["data-headlessui-state"] = c8.join(" "));
  }
  if (s13 === import_react.Fragment && Object.keys(P(o9)).length > 0) {
    if (!(0, import_react.isValidElement)(i7) || Array.isArray(i7) && i7.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a9} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o9).map((p6) => `  - ${p6}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p6) => `  - ${p6}`).join(`
`)].join(`
`));
    let f8 = e((y4 = i7.props) == null ? void 0 : y4.className, o9.className), c8 = f8 ? { className: f8 } : {};
    return (0, import_react.cloneElement)(i7, Object.assign({}, h(i7.props, P(T(o9, ["ref"]))), d13, u7, O(i7.ref, u7.ref), c8));
  }
  return (0, import_react.createElement)(s13, Object.assign({}, T(o9, ["ref"]), s13 !== import_react.Fragment && u7, s13 !== import_react.Fragment && d13), i7);
}
function O(...r12) {
  return { ref: r12.every((t13) => t13 == null) ? void 0 : (t13) => {
    for (let e5 of r12)
      e5 != null && (typeof e5 == "function" ? e5(t13) : e5.current = t13);
  } };
}
function h(...r12) {
  var a9;
  if (r12.length === 0)
    return {};
  if (r12.length === 1)
    return r12[0];
  let t13 = {}, e5 = {};
  for (let s13 of r12)
    for (let n4 in s13)
      n4.startsWith("on") && typeof s13[n4] == "function" ? ((a9 = e5[n4]) != null || (e5[n4] = []), e5[n4].push(s13[n4])) : t13[n4] = s13[n4];
  if (t13.disabled || t13["aria-disabled"])
    return Object.assign(t13, Object.fromEntries(Object.keys(e5).map((s13) => [s13, void 0])));
  for (let s13 in e5)
    Object.assign(t13, { [s13](n4, ...l11) {
      let o9 = e5[s13];
      for (let u7 of o9) {
        if ((n4 instanceof Event || (n4 == null ? void 0 : n4.nativeEvent) instanceof Event) && n4.defaultPrevented)
          return;
        u7(n4, ...l11);
      }
    } });
  return t13;
}
function V(r12) {
  var t13;
  return Object.assign((0, import_react.forwardRef)(r12), { displayName: (t13 = r12.displayName) != null ? t13 : r12.name });
}
function P(r12) {
  let t13 = Object.assign({}, r12);
  for (let e5 in t13)
    t13[e5] === void 0 && delete t13[e5];
  return t13;
}
function T(r12, t13 = []) {
  let e5 = Object.assign({}, r12);
  for (let a9 of t13)
    a9 in e5 && delete e5[a9];
  return e5;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t13, e5, n4) => e5 in t13 ? i(t13, e5, { enumerable: true, configurable: true, writable: true, value: n4 }) : t13[e5] = n4;
var r = (t13, e5, n4) => (d(t13, typeof e5 != "symbol" ? e5 + "" : e5, n4), n4);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e5) {
    this.current !== e5 && (this.handoffState = "pending", this.currentId = 0, this.current = e5);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e5, f8) => {
  s.isServer ? (0, import_react2.useEffect)(e5, f8) : (0, import_react2.useLayoutEffect)(e5, f8);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s2(e5) {
  let r12 = (0, import_react3.useRef)(e5);
  return l(() => {
    r12.current = e5;
  }, [e5]), r12;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o2 = function(t13) {
  let e5 = s2(t13);
  return import_react4.default.useCallback((...r12) => e5.current(...r12), [e5]);
};

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var u2 = Symbol();
function T2(t13, n4 = true) {
  return Object.assign(t13, { [u2]: n4 });
}
function y(...t13) {
  let n4 = (0, import_react5.useRef)(t13);
  (0, import_react5.useEffect)(() => {
    n4.current = t13;
  }, [t13]);
  let c8 = o2((e5) => {
    for (let o9 of n4.current)
      o9 != null && (typeof o9 == "function" ? o9(e5) : o9.current = e5);
  });
  return t13.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u2])) ? void 0 : c8;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
function l3() {
  let [e5, f8] = (0, import_react6.useState)(s.isHandoffComplete);
  return e5 && s.isHandoffComplete === false && f8(false), (0, import_react6.useEffect)(() => {
    e5 !== true && f8(true);
  }, [e5]), (0, import_react6.useEffect)(() => s.handoff(), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o4;
var I = (o4 = import_react7.default.useId) != null ? o4 : function() {
  let n4 = l3(), [e5, u7] = import_react7.default.useState(n4 ? () => s.nextId() : null);
  return l(() => {
    e5 === null && u7(s.nextId());
  }, [e5]), e5 != null ? "" + e5 : void 0;
};

// node_modules/@headlessui/react/dist/components/keyboard.js
var o5 = ((r12) => (r12.Space = " ", r12.Enter = "Enter", r12.Escape = "Escape", r12.Backspace = "Backspace", r12.Delete = "Delete", r12.ArrowLeft = "ArrowLeft", r12.ArrowUp = "ArrowUp", r12.ArrowRight = "ArrowRight", r12.ArrowDown = "ArrowDown", r12.Home = "Home", r12.End = "End", r12.PageUp = "PageUp", r12.PageDown = "PageDown", r12.Tab = "Tab", r12))(o5 || {});

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n4) {
  let e5 = n4.parentElement, l11 = null;
  for (; e5 && !(e5 instanceof HTMLFieldSetElement); )
    e5 instanceof HTMLLegendElement && (l11 = e5), e5 = e5.parentElement;
  let t13 = (e5 == null ? void 0 : e5.getAttribute("disabled")) === "";
  return t13 && i3(l11) ? false : t13;
}
function i3(n4) {
  if (!n4)
    return false;
  let e5 = n4.previousElementSibling;
  for (; e5 !== null; ) {
    if (e5 instanceof HTMLLegendElement)
      return false;
    e5 = e5.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react8 = __toESM(require_react(), 1);
var n = (0, import_react8.createContext)(null);
n.displayName = "OpenClosedContext";
var d2 = ((e5) => (e5[e5.Open = 1] = "Open", e5[e5.Closed = 2] = "Closed", e5[e5.Closing = 4] = "Closing", e5[e5.Opening = 8] = "Opening", e5))(d2 || {});
function C() {
  return (0, import_react8.useContext)(n);
}
function c2({ value: o9, children: r12 }) {
  return import_react8.default.createElement(n.Provider, { value: o9 }, r12);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react9 = __toESM(require_react(), 1);
function i4(t13) {
  var n4;
  if (t13.type)
    return t13.type;
  let e5 = (n4 = t13.as) != null ? n4 : "button";
  if (typeof e5 == "string" && e5.toLowerCase() === "button")
    return "button";
}
function s3(t13, e5) {
  let [n4, u7] = (0, import_react9.useState)(() => i4(t13));
  return l(() => {
    u7(i4(t13));
  }, [t13.type, t13.as]), l(() => {
    n4 || !e5.current || e5.current instanceof HTMLButtonElement && !e5.current.hasAttribute("type") && u7("button");
  }, [n4, e5]), n4;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e2(r12) {
  return s.isServer ? null : r12 instanceof Node ? r12.ownerDocument : r12 != null && r12.hasOwnProperty("current") && r12.current instanceof Node ? r12.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react10 = __toESM(require_react(), 1);
var t5;
var a2 = (t5 = import_react10.default.startTransition) != null ? t5 : function(i7) {
  i7();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var Q = ((l11) => (l11[l11.Open = 0] = "Open", l11[l11.Closed = 1] = "Closed", l11))(Q || {});
var V2 = ((t13) => (t13[t13.ToggleDisclosure = 0] = "ToggleDisclosure", t13[t13.CloseDisclosure = 1] = "CloseDisclosure", t13[t13.SetButtonId = 2] = "SetButtonId", t13[t13.SetPanelId = 3] = "SetPanelId", t13[t13.LinkPanel = 4] = "LinkPanel", t13[t13.UnlinkPanel = 5] = "UnlinkPanel", t13))(V2 || {});
var X2 = { [0]: (e5) => ({ ...e5, disclosureState: u(e5.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e5) => e5.disclosureState === 1 ? e5 : { ...e5, disclosureState: 1 }, [4](e5) {
  return e5.linkedPanel === true ? e5 : { ...e5, linkedPanel: true };
}, [5](e5) {
  return e5.linkedPanel === false ? e5 : { ...e5, linkedPanel: false };
}, [2](e5, n4) {
  return e5.buttonId === n4.buttonId ? e5 : { ...e5, buttonId: n4.buttonId };
}, [3](e5, n4) {
  return e5.panelId === n4.panelId ? e5 : { ...e5, panelId: n4.panelId };
} };
var B = (0, import_react11.createContext)(null);
B.displayName = "DisclosureContext";
function v(e5) {
  let n4 = (0, import_react11.useContext)(B);
  if (n4 === null) {
    let l11 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l11, v), l11;
  }
  return n4;
}
var h2 = (0, import_react11.createContext)(null);
h2.displayName = "DisclosureAPIContext";
function K(e5) {
  let n4 = (0, import_react11.useContext)(h2);
  if (n4 === null) {
    let l11 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l11, K), l11;
  }
  return n4;
}
var H = (0, import_react11.createContext)(null);
H.displayName = "DisclosurePanelContext";
function Y() {
  return (0, import_react11.useContext)(H);
}
function Z(e5, n4) {
  return u(n4.type, X2, e5, n4);
}
var ee = import_react11.Fragment;
var te = V(function(n4, l11) {
  let { defaultOpen: y4 = false, ...u7 } = n4, T7 = (0, import_react11.useRef)(null), t13 = y(l11, T2((a9) => {
    T7.current = a9;
  }, n4.as === void 0 || n4.as === import_react11.Fragment)), o9 = (0, import_react11.useRef)(null), f8 = (0, import_react11.useRef)(null), s13 = (0, import_react11.useReducer)(Z, { disclosureState: y4 ? 0 : 1, linkedPanel: false, buttonRef: f8, panelRef: o9, buttonId: null, panelId: null }), [{ disclosureState: i7, buttonId: p6 }, D3] = s13, d13 = o2((a9) => {
    D3({ type: 1 });
    let r12 = e2(T7);
    if (!r12 || !p6)
      return;
    let c8 = (() => a9 ? a9 instanceof HTMLElement ? a9 : a9.current instanceof HTMLElement ? a9.current : r12.getElementById(p6) : r12.getElementById(p6))();
    c8 == null || c8.focus();
  }), P5 = (0, import_react11.useMemo)(() => ({ close: d13 }), [d13]), I4 = (0, import_react11.useMemo)(() => ({ open: i7 === 0, close: d13 }), [i7, d13]), S4 = { ref: t13 };
  return import_react11.default.createElement(B.Provider, { value: s13 }, import_react11.default.createElement(h2.Provider, { value: P5 }, import_react11.default.createElement(c2, { value: u(i7, { [0]: d2.Open, [1]: d2.Closed }) }, X({ ourProps: S4, theirProps: u7, slot: I4, defaultTag: ee, name: "Disclosure" }))));
});
var ne = "button";
var le = V(function(n4, l11) {
  let y4 = I(), { id: u7 = `headlessui-disclosure-button-${y4}`, ...T7 } = n4, [t13, o9] = v("Disclosure.Button"), f8 = Y(), s13 = f8 === null ? false : f8 === t13.panelId, i7 = (0, import_react11.useRef)(null), p6 = y(i7, l11, s13 ? null : t13.buttonRef);
  (0, import_react11.useEffect)(() => {
    if (!s13)
      return o9({ type: 2, buttonId: u7 }), () => {
        o9({ type: 2, buttonId: null });
      };
  }, [u7, o9, s13]);
  let D3 = o2((r12) => {
    var c8;
    if (s13) {
      if (t13.disclosureState === 1)
        return;
      switch (r12.key) {
        case o5.Space:
        case o5.Enter:
          r12.preventDefault(), r12.stopPropagation(), o9({ type: 0 }), (c8 = t13.buttonRef.current) == null || c8.focus();
          break;
      }
    } else
      switch (r12.key) {
        case o5.Space:
        case o5.Enter:
          r12.preventDefault(), r12.stopPropagation(), o9({ type: 0 });
          break;
      }
  }), d13 = o2((r12) => {
    switch (r12.key) {
      case o5.Space:
        r12.preventDefault();
        break;
    }
  }), P5 = o2((r12) => {
    var c8;
    r3(r12.currentTarget) || n4.disabled || (s13 ? (o9({ type: 0 }), (c8 = t13.buttonRef.current) == null || c8.focus()) : o9({ type: 0 }));
  }), I4 = (0, import_react11.useMemo)(() => ({ open: t13.disclosureState === 0 }), [t13]), S4 = s3(n4, i7), a9 = s13 ? { ref: p6, type: S4, onKeyDown: D3, onClick: P5 } : { ref: p6, id: u7, type: S4, "aria-expanded": n4.disabled ? void 0 : t13.disclosureState === 0, "aria-controls": t13.linkedPanel ? t13.panelId : void 0, onKeyDown: D3, onKeyUp: d13, onClick: P5 };
  return X({ ourProps: a9, theirProps: T7, slot: I4, defaultTag: ne, name: "Disclosure.Button" });
});
var re = "div";
var oe = j.RenderStrategy | j.Static;
var se = V(function(n4, l11) {
  let y4 = I(), { id: u7 = `headlessui-disclosure-panel-${y4}`, ...T7 } = n4, [t13, o9] = v("Disclosure.Panel"), { close: f8 } = K("Disclosure.Panel"), s13 = y(l11, t13.panelRef, (P5) => {
    a2(() => o9({ type: P5 ? 4 : 5 }));
  });
  (0, import_react11.useEffect)(() => (o9({ type: 3, panelId: u7 }), () => {
    o9({ type: 3, panelId: null });
  }), [u7, o9]);
  let i7 = C(), p6 = (() => i7 !== null ? (i7 & d2.Open) === d2.Open : t13.disclosureState === 0)(), D3 = (0, import_react11.useMemo)(() => ({ open: t13.disclosureState === 0, close: f8 }), [t13, f8]), d13 = { ref: s13, id: u7 };
  return import_react11.default.createElement(H.Provider, { value: t13.panelId }, X({ ourProps: d13, theirProps: T7, slot: D3, defaultTag: re, features: oe, visible: p6, name: "Disclosure.Panel" }));
});
var ke = Object.assign(te, { Button: le, Panel: se });

// app/components/Drawer.tsx
var import_react32 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t6(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o9) => setTimeout(() => {
    throw o9;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function m2() {
  let a9 = [], i7 = [], r12 = { enqueue(e5) {
    i7.push(e5);
  }, addEventListener(e5, t13, n4, s13) {
    return e5.addEventListener(t13, n4, s13), r12.add(() => e5.removeEventListener(t13, n4, s13));
  }, requestAnimationFrame(...e5) {
    let t13 = requestAnimationFrame(...e5);
    return r12.add(() => cancelAnimationFrame(t13));
  }, nextFrame(...e5) {
    return r12.requestAnimationFrame(() => r12.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t13 = setTimeout(...e5);
    return r12.add(() => clearTimeout(t13));
  }, microTask(...e5) {
    let t13 = { current: true };
    return t6(() => {
      t13.current && e5[0]();
    }), r12.add(() => {
      t13.current = false;
    });
  }, add(e5) {
    return a9.push(e5), () => {
      let t13 = a9.indexOf(e5);
      if (t13 >= 0) {
        let [n4] = a9.splice(t13, 1);
        n4();
      }
    };
  }, dispose() {
    for (let e5 of a9.splice(0))
      e5();
  }, async workQueue() {
    for (let e5 of i7.splice(0))
      await e5();
  }, style(e5, t13, n4) {
    let s13 = e5.style.getPropertyValue(t13);
    return Object.assign(e5.style, { [t13]: n4 }), this.add(() => {
      Object.assign(e5.style, { [t13]: s13 });
    });
  } };
  return r12;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p2() {
  let [e5] = (0, import_react12.useState)(m2);
  return (0, import_react12.useEffect)(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var L2 = ((r12) => (r12[r12.First = 1] = "First", r12[r12.Previous = 2] = "Previous", r12[r12.Next = 4] = "Next", r12[r12.Last = 8] = "Last", r12[r12.WrapAround = 16] = "WrapAround", r12[r12.NoScroll = 32] = "NoScroll", r12))(L2 || {});
var N2 = ((o9) => (o9[o9.Error = 0] = "Error", o9[o9.Overflow = 1] = "Overflow", o9[o9.Success = 2] = "Success", o9[o9.Underflow = 3] = "Underflow", o9))(N2 || {});
var T3 = ((n4) => (n4[n4.Previous = -1] = "Previous", n4[n4.Next = 1] = "Next", n4))(T3 || {});
function E3(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(f)).sort((t13, n4) => Math.sign((t13.tabIndex || Number.MAX_SAFE_INTEGER) - (n4.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var F = ((n4) => (n4[n4.Strict = 0] = "Strict", n4[n4.Loose = 1] = "Loose", n4))(F || {});
function h3(e5, t13 = 0) {
  var n4;
  return e5 === ((n4 = e2(e5)) == null ? void 0 : n4.body) ? false : u(t13, { [0]() {
    return e5.matches(f);
  }, [1]() {
    let l11 = e5;
    for (; l11 !== null; ) {
      if (l11.matches(f))
        return true;
      l11 = l11.parentElement;
    }
    return false;
  } });
}
function g3(e5) {
  let t13 = e2(e5);
  m2().nextFrame(() => {
    t13 && !h3(t13.activeElement, 0) && S(e5);
  });
}
function S(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var H2 = ["textarea", "input"].join(",");
function w3(e5) {
  var t13, n4;
  return (n4 = (t13 = e5 == null ? void 0 : e5.matches) == null ? void 0 : t13.call(e5, H2)) != null ? n4 : false;
}
function A(e5, t13 = (n4) => n4) {
  return e5.slice().sort((n4, l11) => {
    let o9 = t13(n4), i7 = t13(l11);
    if (o9 === null || i7 === null)
      return 0;
    let r12 = o9.compareDocumentPosition(i7);
    return r12 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r12 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v2(e5, t13) {
  return I2(E3(), t13, { relativeTo: e5 });
}
function I2(e5, t13, { sorted: n4 = true, relativeTo: l11 = null, skipElements: o9 = [] } = {}) {
  let i7 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, r12 = Array.isArray(e5) ? n4 ? A(e5) : e5 : E3(e5);
  o9.length > 0 && r12.length > 1 && (r12 = r12.filter((s13) => !o9.includes(s13))), l11 = l11 != null ? l11 : i7.activeElement;
  let d13 = (() => {
    if (t13 & 5)
      return 1;
    if (t13 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (t13 & 1)
      return 0;
    if (t13 & 2)
      return Math.max(0, r12.indexOf(l11)) - 1;
    if (t13 & 4)
      return Math.max(0, r12.indexOf(l11)) + 1;
    if (t13 & 8)
      return r12.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p6 = t13 & 32 ? { preventScroll: true } : {}, c8 = 0, a9 = r12.length, u7;
  do {
    if (c8 >= a9 || c8 + a9 <= 0)
      return 0;
    let s13 = x6 + c8;
    if (t13 & 16)
      s13 = (s13 + a9) % a9;
    else {
      if (s13 < 0)
        return 3;
      if (s13 >= a9)
        return 1;
    }
    u7 = r12[s13], u7 == null || u7.focus(p6), c8 += d13;
  } while (u7 !== i7.activeElement);
  return t13 & 6 && w3(u7) && u7.select(), u7.hasAttribute("tabindex") || u7.setAttribute("tabindex", "0"), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react13 = __toESM(require_react(), 1);
function d3(e5, r12, n4) {
  let o9 = s2(r12);
  (0, import_react13.useEffect)(() => {
    function t13(u7) {
      o9.current(u7);
    }
    return document.addEventListener(e5, t13, n4), () => document.removeEventListener(e5, t13, n4);
  }, [e5, n4]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L3(m11, E6, c8 = true) {
  let i7 = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    requestAnimationFrame(() => {
      i7.current = c8;
    });
  }, [c8]);
  function f8(e5, o9) {
    if (!i7.current || e5.defaultPrevented)
      return;
    let l11 = function r12(t13) {
      return typeof t13 == "function" ? r12(t13()) : Array.isArray(t13) || t13 instanceof Set ? t13 : [t13];
    }(m11), n4 = o9(e5);
    if (n4 !== null && !!n4.getRootNode().contains(n4)) {
      for (let r12 of l11) {
        if (r12 === null)
          continue;
        let t13 = r12 instanceof HTMLElement ? r12 : r12.current;
        if (t13 != null && t13.contains(n4) || e5.composed && e5.composedPath().includes(t13))
          return;
      }
      return !h3(n4, F.Loose) && n4.tabIndex !== -1 && e5.preventDefault(), E6(e5, n4);
    }
  }
  let u7 = (0, import_react14.useRef)(null);
  d3("mousedown", (e5) => {
    var o9, l11;
    i7.current && (u7.current = ((l11 = (o9 = e5.composedPath) == null ? void 0 : o9.call(e5)) == null ? void 0 : l11[0]) || e5.target);
  }, true), d3("click", (e5) => {
    !u7.current || (f8(e5, () => u7.current), u7.current = null);
  }, true), d3("blur", (e5) => f8(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react15 = __toESM(require_react(), 1);
function F2({ container: e5, accept: t13, walk: r12, enabled: c8 = true }) {
  let o9 = (0, import_react15.useRef)(t13), l11 = (0, import_react15.useRef)(r12);
  (0, import_react15.useEffect)(() => {
    o9.current = t13, l11.current = r12;
  }, [t13, r12]), l(() => {
    if (!e5 || !c8)
      return;
    let n4 = e2(e5);
    if (!n4)
      return;
    let f8 = o9.current, p6 = l11.current, d13 = Object.assign((i7) => f8(i7), { acceptNode: f8 }), u7 = n4.createTreeWalker(e5, NodeFilter.SHOW_ELEMENT, d13, false);
    for (; u7.nextNode(); )
      p6(u7.currentNode);
  }, [e5, c8, o9, l11]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f2(r12) {
  throw new Error("Unexpected object: " + r12);
}
var a3 = ((e5) => (e5[e5.First = 0] = "First", e5[e5.Previous = 1] = "Previous", e5[e5.Next = 2] = "Next", e5[e5.Last = 3] = "Last", e5[e5.Specific = 4] = "Specific", e5[e5.Nothing = 5] = "Nothing", e5))(a3 || {});
function x2(r12, n4) {
  let t13 = n4.resolveItems();
  if (t13.length <= 0)
    return null;
  let l11 = n4.resolveActiveIndex(), s13 = l11 != null ? l11 : -1, d13 = (() => {
    switch (r12.focus) {
      case 0:
        return t13.findIndex((e5) => !n4.resolveDisabled(e5));
      case 1: {
        let e5 = t13.slice().reverse().findIndex((i7, c8, u7) => s13 !== -1 && u7.length - c8 - 1 >= s13 ? false : !n4.resolveDisabled(i7));
        return e5 === -1 ? e5 : t13.length - 1 - e5;
      }
      case 2:
        return t13.findIndex((e5, i7) => i7 <= s13 ? false : !n4.resolveDisabled(e5));
      case 3: {
        let e5 = t13.slice().reverse().findIndex((i7) => !n4.resolveDisabled(i7));
        return e5 === -1 ? e5 : t13.length - 1 - e5;
      }
      case 4:
        return t13.findIndex((e5) => n4.resolveId(e5) === r12.id);
      case 5:
        return null;
      default:
        f2(r12);
    }
  })();
  return d13 === -1 ? l11 : d13;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a4 = "div";
var s6 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(s6 || {});
var h4 = V(function(t13, o9) {
  let { features: e5 = 1, ...r12 } = t13, d13 = { ref: o9, "aria-hidden": (e5 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e5 & 4) === 4 && (e5 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d13, theirProps: r12, slot: {}, defaultTag: a4, name: "Hidden" });
});

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react16 = __toESM(require_react(), 1);
function m5(u7, t13) {
  let e5 = (0, import_react16.useRef)([]), r12 = o2(u7);
  (0, import_react16.useEffect)(() => {
    let o9 = [...e5.current];
    for (let [n4, a9] of t13.entries())
      if (e5.current[n4] !== a9) {
        let l11 = r12(t13, o9);
        return e5.current = t13, l11;
      }
  }, [r12, ...t13]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react17 = __toESM(require_react(), 1);
function t7(e5) {
  return [e5.screenX, e5.screenY];
}
function u3() {
  let e5 = (0, import_react17.useRef)([-1, -1]);
  return { wasMoved(r12) {
    let n4 = t7(r12);
    return e5.current[0] === n4[0] && e5.current[1] === n4[1] ? false : (e5.current = n4, true);
  }, update(r12) {
    e5.current = t7(r12);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t8() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react28 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react23 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react19 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react18 = __toESM(require_react(), 1);
function s8(e5, r12, n4) {
  let o9 = s2(r12);
  (0, import_react18.useEffect)(() => {
    function t13(i7) {
      o9.current(i7);
    }
    return window.addEventListener(e5, t13, n4), () => window.removeEventListener(e5, t13, n4);
  }, [e5, n4]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s9 = ((r12) => (r12[r12.Forwards = 0] = "Forwards", r12[r12.Backwards = 1] = "Backwards", r12))(s9 || {});
function n2() {
  let e5 = (0, import_react19.useRef)(0);
  return s8("keydown", (o9) => {
    o9.key === "Tab" && (e5.current = o9.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react20 = __toESM(require_react(), 1);
function f4() {
  let e5 = (0, import_react20.useRef)(false);
  return l(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react21 = __toESM(require_react(), 1);
function n3(...e5) {
  return (0, import_react21.useMemo)(() => e2(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react22 = __toESM(require_react(), 1);
function E5(n4, e5, a9, t13) {
  let i7 = s2(a9);
  (0, import_react22.useEffect)(() => {
    n4 = n4 != null ? n4 : window;
    function r12(o9) {
      i7.current(o9);
    }
    return n4.addEventListener(e5, r12, t13), () => n4.removeEventListener(e5, r12, t13);
  }, [n4, e5, t13]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var z = "div";
var A2 = ((t13) => (t13[t13.None = 1] = "None", t13[t13.InitialFocus = 2] = "InitialFocus", t13[t13.TabLock = 4] = "TabLock", t13[t13.FocusLock = 8] = "FocusLock", t13[t13.RestoreFocus = 16] = "RestoreFocus", t13[t13.All = 30] = "All", t13))(A2 || {});
var de = Object.assign(V(function(u7, e5) {
  let l11 = (0, import_react23.useRef)(null), a9 = y(l11, e5), { initialFocus: m11, containers: t13, features: n4 = 30, ...E6 } = u7;
  l3() || (n4 = 1);
  let s13 = n3(l11);
  J({ ownerDocument: s13 }, Boolean(n4 & 16));
  let S4 = Q2({ ownerDocument: s13, container: l11, initialFocus: m11 }, Boolean(n4 & 2));
  X3({ ownerDocument: s13, container: l11, containers: t13, previousActiveElement: S4 }, Boolean(n4 & 8));
  let H6 = n2(), R2 = o2((o9) => {
    let c8 = l11.current;
    if (!c8)
      return;
    ((_4) => _4())(() => {
      u(H6.current, { [s9.Forwards]: () => {
        I2(c8, L2.First, { skipElements: [o9.relatedTarget] });
      }, [s9.Backwards]: () => {
        I2(c8, L2.Last, { skipElements: [o9.relatedTarget] });
      } });
    });
  }), B2 = p2(), L6 = (0, import_react23.useRef)(false), P5 = { ref: a9, onKeyDown(o9) {
    o9.key == "Tab" && (L6.current = true, B2.requestAnimationFrame(() => {
      L6.current = false;
    }));
  }, onBlur(o9) {
    let c8 = new Set(t13 == null ? void 0 : t13.current);
    c8.add(l11);
    let p6 = o9.relatedTarget;
    p6 instanceof HTMLElement && p6.dataset.headlessuiFocusGuard !== "true" && (h5(c8, p6) || (L6.current ? I2(l11.current, u(H6.current, { [s9.Forwards]: () => L2.Next, [s9.Backwards]: () => L2.Previous }) | L2.WrapAround, { relativeTo: o9.target }) : o9.target instanceof HTMLElement && S(o9.target)));
  } };
  return import_react23.default.createElement(import_react23.default.Fragment, null, Boolean(n4 & 4) && import_react23.default.createElement(h4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R2, features: s6.Focusable }), X({ ourProps: P5, theirProps: E6, defaultTag: z, name: "FocusTrap" }), Boolean(n4 & 4) && import_react23.default.createElement(h4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R2, features: s6.Focusable }));
}), { features: A2 });
function J({ ownerDocument: r12 }, u7) {
  let e5 = (0, import_react23.useRef)(null);
  E5(r12 == null ? void 0 : r12.defaultView, "focusout", (a9) => {
    !u7 || e5.current || (e5.current = a9.target);
  }, true), m5(() => {
    u7 || ((r12 == null ? void 0 : r12.activeElement) === (r12 == null ? void 0 : r12.body) && S(e5.current), e5.current = null);
  }, [u7]);
  let l11 = (0, import_react23.useRef)(false);
  (0, import_react23.useEffect)(() => (l11.current = false, () => {
    l11.current = true, t6(() => {
      !l11.current || (S(e5.current), e5.current = null);
    });
  }), []);
}
function Q2({ ownerDocument: r12, container: u7, initialFocus: e5 }, l11) {
  let a9 = (0, import_react23.useRef)(null), m11 = f4();
  return m5(() => {
    if (!l11)
      return;
    let t13 = u7.current;
    !t13 || t6(() => {
      if (!m11.current)
        return;
      let n4 = r12 == null ? void 0 : r12.activeElement;
      if (e5 != null && e5.current) {
        if ((e5 == null ? void 0 : e5.current) === n4) {
          a9.current = n4;
          return;
        }
      } else if (t13.contains(n4)) {
        a9.current = n4;
        return;
      }
      e5 != null && e5.current ? S(e5.current) : I2(t13, L2.First) === N2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a9.current = r12 == null ? void 0 : r12.activeElement;
    });
  }, [l11]), a9;
}
function X3({ ownerDocument: r12, container: u7, containers: e5, previousActiveElement: l11 }, a9) {
  let m11 = f4();
  E5(r12 == null ? void 0 : r12.defaultView, "focus", (t13) => {
    if (!a9 || !m11.current)
      return;
    let n4 = new Set(e5 == null ? void 0 : e5.current);
    n4.add(u7);
    let E6 = l11.current;
    if (!E6)
      return;
    let s13 = t13.target;
    s13 && s13 instanceof HTMLElement ? h5(n4, s13) ? (l11.current = s13, S(s13)) : (t13.preventDefault(), t13.stopPropagation(), S(E6)) : S(l11.current);
  }, true);
}
function h5(r12, u7) {
  var e5;
  for (let l11 of r12)
    if ((e5 = l11.current) != null && e5.contains(u7))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var i5 = /* @__PURE__ */ new Set();
var r6 = /* @__PURE__ */ new Map();
function u4(t13) {
  t13.setAttribute("aria-hidden", "true"), t13.inert = true;
}
function l5(t13) {
  let n4 = r6.get(t13);
  !n4 || (n4["aria-hidden"] === null ? t13.removeAttribute("aria-hidden") : t13.setAttribute("aria-hidden", n4["aria-hidden"]), t13.inert = n4.inert);
}
function M(t13, n4 = true) {
  l(() => {
    if (!n4 || !t13.current)
      return;
    let o9 = t13.current, a9 = e2(o9);
    if (!!a9) {
      i5.add(o9);
      for (let e5 of r6.keys())
        e5.contains(o9) && (l5(e5), r6.delete(e5));
      return a9.querySelectorAll("body > *").forEach((e5) => {
        if (e5 instanceof HTMLElement) {
          for (let f8 of i5)
            if (e5.contains(f8))
              return;
          i5.size === 1 && (r6.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), u4(e5));
        }
      }), () => {
        if (i5.delete(o9), i5.size > 0)
          a9.querySelectorAll("body > *").forEach((e5) => {
            if (e5 instanceof HTMLElement && !r6.has(e5)) {
              for (let f8 of i5)
                if (e5.contains(f8))
                  return;
              r6.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), u4(e5);
            }
          });
        else
          for (let e5 of r6.keys())
            l5(e5), r6.delete(e5);
      };
    }
  }, [n4]);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react25 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react24 = __toESM(require_react(), 1);
var e3 = (0, import_react24.createContext)(false);
function l6() {
  return (0, import_react24.useContext)(e3);
}
function P2(o9) {
  return import_react24.default.createElement(e3.Provider, { value: o9.force }, o9.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function x3(i7) {
  let u7 = l6(), o9 = (0, import_react25.useContext)(A3), e5 = n3(i7), [r12, f8] = (0, import_react25.useState)(() => {
    if (!u7 && o9 !== null || s.isServer)
      return null;
    let n4 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (n4)
      return n4;
    if (e5 === null)
      return null;
    let t13 = e5.createElement("div");
    return t13.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(t13);
  });
  return (0, import_react25.useEffect)(() => {
    r12 !== null && (e5 != null && e5.body.contains(r12) || e5 == null || e5.body.appendChild(r12));
  }, [r12, e5]), (0, import_react25.useEffect)(() => {
    u7 || o9 !== null && f8(o9.current);
  }, [o9, f8, u7]), r12;
}
var _ = import_react25.Fragment;
var U3 = V(function(u7, o9) {
  let e5 = u7, r12 = (0, import_react25.useRef)(null), f8 = y(T2((a9) => {
    r12.current = a9;
  }), o9), n4 = n3(r12), t13 = x3(r12), [l11] = (0, import_react25.useState)(() => {
    var a9;
    return s.isServer ? null : (a9 = n4 == null ? void 0 : n4.createElement("div")) != null ? a9 : null;
  }), b4 = l3(), p6 = (0, import_react25.useRef)(false);
  return l(() => {
    if (p6.current = false, !(!t13 || !l11))
      return t13.contains(l11) || (l11.setAttribute("data-headlessui-portal", ""), t13.appendChild(l11)), () => {
        p6.current = true, t6(() => {
          var a9;
          !p6.current || !t13 || !l11 || (l11 instanceof Node && t13.contains(l11) && t13.removeChild(l11), t13.childNodes.length <= 0 && ((a9 = t13.parentElement) == null || a9.removeChild(t13)));
        });
      };
  }, [t13, l11]), b4 ? !t13 || !l11 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: f8 }, theirProps: e5, defaultTag: _, name: "Portal" }), l11) : null;
});
var j3 = import_react25.Fragment;
var A3 = (0, import_react25.createContext)(null);
var F3 = V(function(u7, o9) {
  let { target: e5, ...r12 } = u7, n4 = { ref: y(o9) };
  return import_react25.default.createElement(A3.Provider, { value: e5 }, X({ ourProps: n4, theirProps: r12, defaultTag: j3, name: "Popover.Group" }));
});
var $ = Object.assign(U3, { Group: F3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react26 = __toESM(require_react(), 1);
var d9 = (0, import_react26.createContext)(null);
function u5() {
  let n4 = (0, import_react26.useContext)(d9);
  if (n4 === null) {
    let t13 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t13, u5), t13;
  }
  return n4;
}
function k() {
  let [n4, t13] = (0, import_react26.useState)([]);
  return [n4.length > 0 ? n4.join(" ") : void 0, (0, import_react26.useMemo)(() => function(e5) {
    let i7 = o2((r12) => (t13((o9) => [...o9, r12]), () => t13((o9) => {
      let s13 = o9.slice(), p6 = s13.indexOf(r12);
      return p6 !== -1 && s13.splice(p6, 1), s13;
    }))), a9 = (0, import_react26.useMemo)(() => ({ register: i7, slot: e5.slot, name: e5.name, props: e5.props }), [i7, e5.slot, e5.name, e5.props]);
    return import_react26.default.createElement(d9.Provider, { value: a9 }, e5.children);
  }, [t13])];
}
var S2 = "p";
var F4 = V(function(t13, c8) {
  let e5 = I(), { id: i7 = `headlessui-description-${e5}`, ...a9 } = t13, r12 = u5(), o9 = y(c8);
  l(() => r12.register(i7), [i7, r12.register]);
  let s13 = { ref: o9, ...r12.props, id: i7 };
  return X({ ourProps: s13, theirProps: a9, slot: r12.slot || {}, defaultTag: S2, name: r12.name || "Description" });
});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react27 = __toESM(require_react(), 1);
var a5 = (0, import_react27.createContext)(() => {
});
a5.displayName = "StackContext";
var s11 = ((e5) => (e5[e5.Add = 0] = "Add", e5[e5.Remove = 1] = "Remove", e5))(s11 || {});
function x4() {
  return (0, import_react27.useContext)(a5);
}
function M2({ children: i7, onUpdate: r12, type: e5, element: n4, enabled: u7 }) {
  let l11 = x4(), o9 = o2((...t13) => {
    r12 == null || r12(...t13), l11(...t13);
  });
  return l(() => {
    let t13 = u7 === void 0 || u7 === true;
    return t13 && o9(0, e5, n4), () => {
      t13 && o9(1, e5, n4);
    };
  }, [o9, e5, n4, u7]), import_react27.default.createElement(a5.Provider, { value: o9 }, i7);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l8 = __toESM(require_react(), 1);
function i6(e5, t13) {
  return e5 === t13 && (e5 !== 0 || 1 / e5 === 1 / t13) || e5 !== e5 && t13 !== t13;
}
var d11 = typeof Object.is == "function" ? Object.is : i6;
var { useState: u6, useEffect: h7, useLayoutEffect: f6, useDebugValue: p3 } = l8;
function y3(e5, t13, c8) {
  const a9 = t13(), [{ inst: n4 }, o9] = u6({ inst: { value: a9, getSnapshot: t13 } });
  return f6(() => {
    n4.value = a9, n4.getSnapshot = t13, r8(n4) && o9({ inst: n4 });
  }, [e5, a9, t13]), h7(() => (r8(n4) && o9({ inst: n4 }), e5(() => {
    r8(n4) && o9({ inst: n4 });
  })), [e5]), p3(a9), a9;
}
function r8(e5) {
  const t13 = e5.getSnapshot, c8 = e5.value;
  try {
    const a9 = t13();
    return !d11(c8, a9);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t12(r12, e5, n4) {
  return e5();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r9 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s12 = !r9;
var c5 = s12 ? t12 : y3;
var a6 = "useSyncExternalStore" in e4 ? ((n4) => n4.useSyncExternalStore)(e4) : c5;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S3(t13) {
  return a6(t13.subscribe, t13.getSnapshot, t13.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o9, r12) {
  let t13 = o9(), n4 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t13;
  }, subscribe(e5) {
    return n4.add(e5), () => n4.delete(e5);
  }, dispatch(e5, ...s13) {
    let i7 = r12[e5].call(t13, ...s13);
    i7 && (t13 = i7, n4.forEach((c8) => c8()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c6() {
  let o9;
  return { before({ doc: e5 }) {
    var l11;
    let n4 = e5.documentElement;
    o9 = ((l11 = e5.defaultView) != null ? l11 : window).innerWidth - n4.clientWidth;
  }, after({ doc: e5, d: n4 }) {
    let t13 = e5.documentElement, l11 = t13.clientWidth - t13.offsetWidth, r12 = o9 - l11;
    n4.style(t13, "paddingRight", `${r12}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p4() {
  if (!t8())
    return {};
  let o9;
  return { before() {
    o9 = window.pageYOffset;
  }, after({ doc: r12, d: l11, meta: s13 }) {
    function i7(e5) {
      return s13.containers.flatMap((t13) => t13()).some((t13) => t13.contains(e5));
    }
    l11.style(r12.body, "marginTop", `-${o9}px`), window.scrollTo(0, 0);
    let n4 = null;
    l11.addEventListener(r12, "click", (e5) => {
      if (e5.target instanceof HTMLElement)
        try {
          let t13 = e5.target.closest("a");
          if (!t13)
            return;
          let { hash: c8 } = new URL(t13.href), a9 = r12.querySelector(c8);
          a9 && !i7(a9) && (n4 = a9);
        } catch {
        }
    }, true), l11.addEventListener(r12, "touchmove", (e5) => {
      e5.target instanceof HTMLElement && !i7(e5.target) && e5.preventDefault();
    }, { passive: false }), l11.add(() => {
      window.scrollTo(0, window.pageYOffset + o9), n4 && n4.isConnected && (n4.scrollIntoView({ block: "nearest" }), n4 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l9() {
  return { before({ doc: e5, d: o9 }) {
    o9.style(e5.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m9(e5) {
  let n4 = {};
  for (let t13 of e5)
    Object.assign(n4, t13(n4));
  return n4;
}
var a8 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e5, n4) {
  var o9;
  let t13 = (o9 = this.get(e5)) != null ? o9 : { doc: e5, count: 0, d: m2(), meta: /* @__PURE__ */ new Set() };
  return t13.count++, t13.meta.add(n4), this.set(e5, t13), this;
}, POP(e5, n4) {
  let t13 = this.get(e5);
  return t13 && (t13.count--, t13.meta.delete(n4)), this;
}, SCROLL_PREVENT({ doc: e5, d: n4, meta: t13 }) {
  let o9 = { doc: e5, d: n4, meta: m9(t13) }, c8 = [p4(), c6(), l9()];
  c8.forEach(({ before: r12 }) => r12 == null ? void 0 : r12(o9)), c8.forEach(({ after: r12 }) => r12 == null ? void 0 : r12(o9));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a8.subscribe(() => {
  let e5 = a8.getSnapshot(), n4 = /* @__PURE__ */ new Map();
  for (let [t13] of e5)
    n4.set(t13, t13.documentElement.style.overflow);
  for (let t13 of e5.values()) {
    let o9 = n4.get(t13.doc) === "hidden", c8 = t13.count !== 0;
    (c8 && !o9 || !c8 && o9) && a8.dispatch(t13.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t13), t13.count === 0 && a8.dispatch("TEARDOWN", t13);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p5(e5, r12, n4) {
  let f8 = S3(a8), o9 = e5 ? f8.get(e5) : void 0, i7 = o9 ? o9.count > 0 : false;
  return l(() => {
    if (!(!e5 || !r12))
      return a8.dispatch("PUSH", e5, n4), () => a8.dispatch("POP", e5, n4);
  }, [r12, e5]), i7;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Oe = ((t13) => (t13[t13.Open = 0] = "Open", t13[t13.Closed = 1] = "Closed", t13))(Oe || {});
var Se = ((e5) => (e5[e5.SetTitleId = 0] = "SetTitleId", e5))(Se || {});
var Le = { [0](r12, e5) {
  return r12.titleId === e5.id ? r12 : { ...r12, titleId: e5.id };
} };
var M3 = (0, import_react28.createContext)(null);
M3.displayName = "DialogContext";
function L5(r12) {
  let e5 = (0, import_react28.useContext)(M3);
  if (e5 === null) {
    let t13 = new Error(`<${r12} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t13, L5), t13;
  }
  return e5;
}
function ke2(r12, e5, t13 = () => [document.body]) {
  p5(r12, e5, (u7) => {
    var l11;
    return { containers: [...(l11 = u7.containers) != null ? l11 : [], t13] };
  });
}
function Fe(r12, e5) {
  return u(e5.type, Le, r12, e5);
}
var Ie = "div";
var Me = j.RenderStrategy | j.Static;
var _e = V(function(e5, t13) {
  let u7 = I(), { id: l11 = `headlessui-dialog-${u7}`, open: a9, onClose: o9, initialFocus: i7, __demoMode: c8 = false, ...g4 } = e5, [D3, k2] = (0, import_react28.useState)(0), n4 = C();
  a9 === void 0 && n4 !== null && (a9 = (n4 & d2.Open) === d2.Open);
  let _4 = (0, import_react28.useRef)(/* @__PURE__ */ new Set()), T7 = (0, import_react28.useRef)(null), Q3 = y(T7, t13), $2 = (0, import_react28.useRef)(null), P5 = n3(T7), N5 = e5.hasOwnProperty("open") || n4 !== null, W = e5.hasOwnProperty("onClose");
  if (!N5 && !W)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N5)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!W)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof a9 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a9}`);
  if (typeof o9 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o9}`);
  let s13 = a9 ? 0 : 1, [y4, X6] = (0, import_react28.useReducer)(Fe, { titleId: null, descriptionId: null, panelRef: (0, import_react28.createRef)() }), R2 = o2(() => o9(false)), Y3 = o2((p6) => X6({ type: 0, id: p6 })), w4 = l3() ? c8 ? false : s13 === 0 : false, F7 = D3 > 1, Z3 = (0, import_react28.useContext)(M3) !== null, ee2 = F7 ? "parent" : "leaf", j4 = n4 !== null ? (n4 & d2.Closing) === d2.Closing : false, te2 = (() => !F7 || j4 ? false : w4)();
  M(T7, te2);
  let K4 = o2(() => {
    var E6, f8;
    return [...Array.from((E6 = P5 == null ? void 0 : P5.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? E6 : []).filter((m11) => !(m11 === document.body || m11 === document.head || !(m11 instanceof HTMLElement) || m11.contains($2.current) || y4.panelRef.current && m11.contains(y4.panelRef.current))), (f8 = y4.panelRef.current) != null ? f8 : T7.current];
  }), oe3 = (() => !(!w4 || F7))();
  L3(() => K4(), R2, oe3);
  let re3 = (() => !(F7 || s13 !== 0))();
  E5(P5 == null ? void 0 : P5.defaultView, "keydown", (p6) => {
    !re3 || p6.defaultPrevented || p6.key === o5.Escape && (p6.preventDefault(), p6.stopPropagation(), R2());
  });
  let le2 = (() => !(j4 || s13 !== 0 || Z3))();
  ke2(P5, le2, K4), (0, import_react28.useEffect)(() => {
    if (s13 !== 0 || !T7.current)
      return;
    let p6 = new IntersectionObserver((E6) => {
      for (let f8 of E6)
        f8.boundingClientRect.x === 0 && f8.boundingClientRect.y === 0 && f8.boundingClientRect.width === 0 && f8.boundingClientRect.height === 0 && R2();
    });
    return p6.observe(T7.current), () => p6.disconnect();
  }, [s13, T7, R2]);
  let [ne2, ae] = k(), ie2 = (0, import_react28.useMemo)(() => [{ dialogState: s13, close: R2, setTitleId: Y3 }, y4], [s13, y4, R2, Y3]), V3 = (0, import_react28.useMemo)(() => ({ open: s13 === 0 }), [s13]), se3 = { ref: Q3, id: l11, role: "dialog", "aria-modal": s13 === 0 ? true : void 0, "aria-labelledby": y4.titleId, "aria-describedby": ne2 };
  return import_react28.default.createElement(M2, { type: "Dialog", enabled: s13 === 0, element: T7, onUpdate: o2((p6, E6, f8) => {
    E6 === "Dialog" && u(p6, { [s11.Add]() {
      _4.current.add(f8), k2((m11) => m11 + 1);
    }, [s11.Remove]() {
      _4.current.add(f8), k2((m11) => m11 - 1);
    } });
  }) }, import_react28.default.createElement(P2, { force: true }, import_react28.default.createElement($, null, import_react28.default.createElement(M3.Provider, { value: ie2 }, import_react28.default.createElement($.Group, { target: T7 }, import_react28.default.createElement(P2, { force: false }, import_react28.default.createElement(ae, { slot: V3, name: "Dialog.Description" }, import_react28.default.createElement(de, { initialFocus: i7, containers: _4, features: w4 ? u(ee2, { parent: de.features.RestoreFocus, leaf: de.features.All & ~de.features.FocusLock }) : de.features.None }, X({ ourProps: se3, theirProps: g4, slot: V3, defaultTag: Ie, features: Me, visible: s13 === 0, name: "Dialog" })))))))), import_react28.default.createElement(h4, { features: s6.Hidden, ref: $2 }));
});
var we = "div";
var xe = V(function(e5, t13) {
  let u7 = I(), { id: l11 = `headlessui-dialog-overlay-${u7}`, ...a9 } = e5, [{ dialogState: o9, close: i7 }] = L5("Dialog.Overlay"), c8 = y(t13), g4 = o2((n4) => {
    if (n4.target === n4.currentTarget) {
      if (r3(n4.currentTarget))
        return n4.preventDefault();
      n4.preventDefault(), n4.stopPropagation(), i7();
    }
  }), D3 = (0, import_react28.useMemo)(() => ({ open: o9 === 0 }), [o9]);
  return X({ ourProps: { ref: c8, id: l11, "aria-hidden": true, onClick: g4 }, theirProps: a9, slot: D3, defaultTag: we, name: "Dialog.Overlay" });
});
var He = "div";
var Ge = V(function(e5, t13) {
  let u7 = I(), { id: l11 = `headlessui-dialog-backdrop-${u7}`, ...a9 } = e5, [{ dialogState: o9 }, i7] = L5("Dialog.Backdrop"), c8 = y(t13);
  (0, import_react28.useEffect)(() => {
    if (i7.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [i7.panelRef]);
  let g4 = (0, import_react28.useMemo)(() => ({ open: o9 === 0 }), [o9]);
  return import_react28.default.createElement(P2, { force: true }, import_react28.default.createElement($, null, X({ ourProps: { ref: c8, id: l11, "aria-hidden": true }, theirProps: a9, slot: g4, defaultTag: He, name: "Dialog.Backdrop" })));
});
var Be = "div";
var Ue = V(function(e5, t13) {
  let u7 = I(), { id: l11 = `headlessui-dialog-panel-${u7}`, ...a9 } = e5, [{ dialogState: o9 }, i7] = L5("Dialog.Panel"), c8 = y(t13, i7.panelRef), g4 = (0, import_react28.useMemo)(() => ({ open: o9 === 0 }), [o9]), D3 = o2((n4) => {
    n4.stopPropagation();
  });
  return X({ ourProps: { ref: c8, id: l11, onClick: D3 }, theirProps: a9, slot: g4, defaultTag: Be, name: "Dialog.Panel" });
});
var $e = "h2";
var Ne = V(function(e5, t13) {
  let u7 = I(), { id: l11 = `headlessui-dialog-title-${u7}`, ...a9 } = e5, [{ dialogState: o9, setTitleId: i7 }] = L5("Dialog.Title"), c8 = y(t13);
  (0, import_react28.useEffect)(() => (i7(l11), () => i7(null)), [l11, i7]);
  let g4 = (0, import_react28.useMemo)(() => ({ open: o9 === 0 }), [o9]);
  return X({ ourProps: { ref: c8, id: l11 }, theirProps: a9, slot: g4, defaultTag: $e, name: "Dialog.Title" });
});
var yt = Object.assign(_e, { Backdrop: Ge, Panel: Ue, Overlay: xe, Title: Ne, Description: F4 });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react29 = __toESM(require_react(), 1);
var pe2 = ((o9) => (o9[o9.Open = 0] = "Open", o9[o9.Closed = 1] = "Closed", o9))(pe2 || {});
var de3 = ((o9) => (o9[o9.Pointer = 0] = "Pointer", o9[o9.Other = 1] = "Other", o9))(de3 || {});
var me = ((e5) => (e5[e5.OpenMenu = 0] = "OpenMenu", e5[e5.CloseMenu = 1] = "CloseMenu", e5[e5.GoToItem = 2] = "GoToItem", e5[e5.Search = 3] = "Search", e5[e5.ClearSearch = 4] = "ClearSearch", e5[e5.RegisterItem = 5] = "RegisterItem", e5[e5.UnregisterItem = 6] = "UnregisterItem", e5))(me || {});
function U4(t13, i7 = (o9) => o9) {
  let o9 = t13.activeItemIndex !== null ? t13.items[t13.activeItemIndex] : null, s13 = A(i7(t13.items.slice()), (u7) => u7.dataRef.current.domRef.current), a9 = o9 ? s13.indexOf(o9) : null;
  return a9 === -1 && (a9 = null), { items: s13, activeItemIndex: a9 };
}
var fe2 = { [1](t13) {
  return t13.menuState === 1 ? t13 : { ...t13, activeItemIndex: null, menuState: 1 };
}, [0](t13) {
  return t13.menuState === 0 ? t13 : { ...t13, menuState: 0 };
}, [2]: (t13, i7) => {
  var a9;
  let o9 = U4(t13), s13 = x2(i7, { resolveItems: () => o9.items, resolveActiveIndex: () => o9.activeItemIndex, resolveId: (u7) => u7.id, resolveDisabled: (u7) => u7.dataRef.current.disabled });
  return { ...t13, ...o9, searchQuery: "", activeItemIndex: s13, activationTrigger: (a9 = i7.trigger) != null ? a9 : 1 };
}, [3]: (t13, i7) => {
  let s13 = t13.searchQuery !== "" ? 0 : 1, a9 = t13.searchQuery + i7.value.toLowerCase(), n4 = (t13.activeItemIndex !== null ? t13.items.slice(t13.activeItemIndex + s13).concat(t13.items.slice(0, t13.activeItemIndex + s13)) : t13.items).find((d13) => {
    var l11;
    return ((l11 = d13.dataRef.current.textValue) == null ? void 0 : l11.startsWith(a9)) && !d13.dataRef.current.disabled;
  }), e5 = n4 ? t13.items.indexOf(n4) : -1;
  return e5 === -1 || e5 === t13.activeItemIndex ? { ...t13, searchQuery: a9 } : { ...t13, searchQuery: a9, activeItemIndex: e5, activationTrigger: 1 };
}, [4](t13) {
  return t13.searchQuery === "" ? t13 : { ...t13, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (t13, i7) => {
  let o9 = U4(t13, (s13) => [...s13, { id: i7.id, dataRef: i7.dataRef }]);
  return { ...t13, ...o9 };
}, [6]: (t13, i7) => {
  let o9 = U4(t13, (s13) => {
    let a9 = s13.findIndex((u7) => u7.id === i7.id);
    return a9 !== -1 && s13.splice(a9, 1), s13;
  });
  return { ...t13, ...o9, activationTrigger: 1 };
} };
var G = (0, import_react29.createContext)(null);
G.displayName = "MenuContext";
function F5(t13) {
  let i7 = (0, import_react29.useContext)(G);
  if (i7 === null) {
    let o9 = new Error(`<${t13} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o9, F5), o9;
  }
  return i7;
}
function Te(t13, i7) {
  return u(i7.type, fe2, t13, i7);
}
var ye = import_react29.Fragment;
var Ie2 = V(function(i7, o9) {
  let s13 = (0, import_react29.useReducer)(Te, { menuState: 1, buttonRef: (0, import_react29.createRef)(), itemsRef: (0, import_react29.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: a9, itemsRef: u7, buttonRef: n4 }, e5] = s13, d13 = y(o9);
  L3([n4, u7], (R2, A4) => {
    var g4;
    e5({ type: 1 }), h3(A4, F.Loose) || (R2.preventDefault(), (g4 = n4.current) == null || g4.focus());
  }, a9 === 0);
  let l11 = o2(() => {
    e5({ type: 1 });
  }), f8 = (0, import_react29.useMemo)(() => ({ open: a9 === 0, close: l11 }), [a9, l11]), M6 = i7, T7 = { ref: d13 };
  return import_react29.default.createElement(G.Provider, { value: s13 }, import_react29.default.createElement(c2, { value: u(a9, { [0]: d2.Open, [1]: d2.Closed }) }, X({ ourProps: T7, theirProps: M6, slot: f8, defaultTag: ye, name: "Menu" })));
});
var ge = "button";
var Me2 = V(function(i7, o9) {
  var g4;
  let s13 = I(), { id: a9 = `headlessui-menu-button-${s13}`, ...u7 } = i7, [n4, e5] = F5("Menu.Button"), d13 = y(n4.buttonRef, o9), l11 = p2(), f8 = o2((c8) => {
    switch (c8.key) {
      case o5.Space:
      case o5.Enter:
      case o5.ArrowDown:
        c8.preventDefault(), c8.stopPropagation(), e5({ type: 0 }), l11.nextFrame(() => e5({ type: 2, focus: a3.First }));
        break;
      case o5.ArrowUp:
        c8.preventDefault(), c8.stopPropagation(), e5({ type: 0 }), l11.nextFrame(() => e5({ type: 2, focus: a3.Last }));
        break;
    }
  }), M6 = o2((c8) => {
    switch (c8.key) {
      case o5.Space:
        c8.preventDefault();
        break;
    }
  }), T7 = o2((c8) => {
    if (r3(c8.currentTarget))
      return c8.preventDefault();
    i7.disabled || (n4.menuState === 0 ? (e5({ type: 1 }), l11.nextFrame(() => {
      var b4;
      return (b4 = n4.buttonRef.current) == null ? void 0 : b4.focus({ preventScroll: true });
    })) : (c8.preventDefault(), e5({ type: 0 })));
  }), R2 = (0, import_react29.useMemo)(() => ({ open: n4.menuState === 0 }), [n4]), A4 = { ref: d13, id: a9, type: s3(i7, n4.buttonRef), "aria-haspopup": "menu", "aria-controls": (g4 = n4.itemsRef.current) == null ? void 0 : g4.id, "aria-expanded": i7.disabled ? void 0 : n4.menuState === 0, onKeyDown: f8, onKeyUp: M6, onClick: T7 };
  return X({ ourProps: A4, theirProps: u7, slot: R2, defaultTag: ge, name: "Menu.Button" });
});
var Re = "div";
var be = j.RenderStrategy | j.Static;
var Ae = V(function(i7, o9) {
  var b4, S4;
  let s13 = I(), { id: a9 = `headlessui-menu-items-${s13}`, ...u7 } = i7, [n4, e5] = F5("Menu.Items"), d13 = y(n4.itemsRef, o9), l11 = n3(n4.itemsRef), f8 = p2(), M6 = C(), T7 = (() => M6 !== null ? (M6 & d2.Open) === d2.Open : n4.menuState === 0)();
  (0, import_react29.useEffect)(() => {
    let r12 = n4.itemsRef.current;
    !r12 || n4.menuState === 0 && r12 !== (l11 == null ? void 0 : l11.activeElement) && r12.focus({ preventScroll: true });
  }, [n4.menuState, n4.itemsRef, l11]), F2({ container: n4.itemsRef.current, enabled: n4.menuState === 0, accept(r12) {
    return r12.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : r12.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(r12) {
    r12.setAttribute("role", "none");
  } });
  let R2 = o2((r12) => {
    var h8, L6;
    switch (f8.dispose(), r12.key) {
      case o5.Space:
        if (n4.searchQuery !== "")
          return r12.preventDefault(), r12.stopPropagation(), e5({ type: 3, value: r12.key });
      case o5.Enter:
        if (r12.preventDefault(), r12.stopPropagation(), e5({ type: 1 }), n4.activeItemIndex !== null) {
          let { dataRef: p6 } = n4.items[n4.activeItemIndex];
          (L6 = (h8 = p6.current) == null ? void 0 : h8.domRef.current) == null || L6.click();
        }
        g3(n4.buttonRef.current);
        break;
      case o5.ArrowDown:
        return r12.preventDefault(), r12.stopPropagation(), e5({ type: 2, focus: a3.Next });
      case o5.ArrowUp:
        return r12.preventDefault(), r12.stopPropagation(), e5({ type: 2, focus: a3.Previous });
      case o5.Home:
      case o5.PageUp:
        return r12.preventDefault(), r12.stopPropagation(), e5({ type: 2, focus: a3.First });
      case o5.End:
      case o5.PageDown:
        return r12.preventDefault(), r12.stopPropagation(), e5({ type: 2, focus: a3.Last });
      case o5.Escape:
        r12.preventDefault(), r12.stopPropagation(), e5({ type: 1 }), m2().nextFrame(() => {
          var p6;
          return (p6 = n4.buttonRef.current) == null ? void 0 : p6.focus({ preventScroll: true });
        });
        break;
      case o5.Tab:
        r12.preventDefault(), r12.stopPropagation(), e5({ type: 1 }), m2().nextFrame(() => {
          v2(n4.buttonRef.current, r12.shiftKey ? L2.Previous : L2.Next);
        });
        break;
      default:
        r12.key.length === 1 && (e5({ type: 3, value: r12.key }), f8.setTimeout(() => e5({ type: 4 }), 350));
        break;
    }
  }), A4 = o2((r12) => {
    switch (r12.key) {
      case o5.Space:
        r12.preventDefault();
        break;
    }
  }), g4 = (0, import_react29.useMemo)(() => ({ open: n4.menuState === 0 }), [n4]), c8 = { "aria-activedescendant": n4.activeItemIndex === null || (b4 = n4.items[n4.activeItemIndex]) == null ? void 0 : b4.id, "aria-labelledby": (S4 = n4.buttonRef.current) == null ? void 0 : S4.id, id: a9, onKeyDown: R2, onKeyUp: A4, role: "menu", tabIndex: 0, ref: d13 };
  return X({ ourProps: c8, theirProps: u7, slot: g4, defaultTag: Re, features: be, visible: T7, name: "Menu.Items" });
});
var ve = import_react29.Fragment;
var Se2 = V(function(i7, o9) {
  let s13 = I(), { id: a9 = `headlessui-menu-item-${s13}`, disabled: u7 = false, ...n4 } = i7, [e5, d13] = F5("Menu.Item"), l11 = e5.activeItemIndex !== null ? e5.items[e5.activeItemIndex].id === a9 : false, f8 = (0, import_react29.useRef)(null), M6 = y(o9, f8);
  l(() => {
    if (e5.menuState !== 0 || !l11 || e5.activationTrigger === 0)
      return;
    let p6 = m2();
    return p6.requestAnimationFrame(() => {
      var v5, B2;
      (B2 = (v5 = f8.current) == null ? void 0 : v5.scrollIntoView) == null || B2.call(v5, { block: "nearest" });
    }), p6.dispose;
  }, [f8, l11, e5.menuState, e5.activationTrigger, e5.activeItemIndex]);
  let T7 = (0, import_react29.useRef)({ disabled: u7, domRef: f8 });
  l(() => {
    T7.current.disabled = u7;
  }, [T7, u7]), l(() => {
    var p6, v5;
    T7.current.textValue = (v5 = (p6 = f8.current) == null ? void 0 : p6.textContent) == null ? void 0 : v5.toLowerCase();
  }, [T7, f8]), l(() => (d13({ type: 5, id: a9, dataRef: T7 }), () => d13({ type: 6, id: a9 })), [T7, a9]);
  let R2 = o2(() => {
    d13({ type: 1 });
  }), A4 = o2((p6) => {
    if (u7)
      return p6.preventDefault();
    d13({ type: 1 }), g3(e5.buttonRef.current);
  }), g4 = o2(() => {
    if (u7)
      return d13({ type: 2, focus: a3.Nothing });
    d13({ type: 2, focus: a3.Specific, id: a9 });
  }), c8 = u3(), b4 = o2((p6) => c8.update(p6)), S4 = o2((p6) => {
    !c8.wasMoved(p6) || u7 || l11 || d13({ type: 2, focus: a3.Specific, id: a9, trigger: 0 });
  }), r12 = o2((p6) => {
    !c8.wasMoved(p6) || u7 || !l11 || d13({ type: 2, focus: a3.Nothing });
  }), h8 = (0, import_react29.useMemo)(() => ({ active: l11, disabled: u7, close: R2 }), [l11, u7, R2]);
  return X({ ourProps: { id: a9, ref: M6, role: "menuitem", tabIndex: u7 === true ? void 0 : -1, "aria-disabled": u7 === true ? true : void 0, disabled: void 0, onClick: A4, onFocus: g4, onPointerEnter: b4, onMouseEnter: b4, onPointerMove: S4, onMouseMove: S4, onPointerLeave: r12, onMouseLeave: r12 }, theirProps: n4, slot: h8, defaultTag: ve, name: "Menu.Item" });
});
var Ze = Object.assign(Ie2, { Button: Me2, Items: Ae, Item: Se2 });

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react30 = __toESM(require_react(), 1);
function b3(g4 = 0) {
  let [t13, l11] = (0, import_react30.useState)(g4), u7 = (0, import_react30.useCallback)((e5) => l11((a9) => a9 | e5), [t13]), n4 = (0, import_react30.useCallback)((e5) => Boolean(t13 & e5), [t13]), o9 = (0, import_react30.useCallback)((e5) => l11((a9) => a9 & ~e5), [l11]), s13 = (0, import_react30.useCallback)((e5) => l11((a9) => a9 ^ e5), [l11]);
  return { flags: t13, addFlag: u7, hasFlag: n4, removeFlag: o9, toggleFlag: s13 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l10(r12) {
  let e5 = { called: false };
  return (...t13) => {
    if (!e5.called)
      return e5.called = true, r12(...t13);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function v4(t13, ...e5) {
  t13 && e5.length > 0 && t13.classList.add(...e5);
}
function f7(t13, ...e5) {
  t13 && e5.length > 0 && t13.classList.remove(...e5);
}
function F6(t13, e5) {
  let n4 = m2();
  if (!t13)
    return n4.dispose;
  let { transitionDuration: a9, transitionDelay: i7 } = getComputedStyle(t13), [m11, d13] = [a9, i7].map((o9) => {
    let [r12 = 0] = o9.split(",").filter(Boolean).map((l11) => l11.includes("ms") ? parseFloat(l11) : parseFloat(l11) * 1e3).sort((l11, g4) => g4 - l11);
    return r12;
  });
  if (m11 + d13 !== 0) {
    let o9 = n4.addEventListener(t13, "transitionend", (r12) => {
      r12.target === r12.currentTarget && (e5(), o9());
    });
  } else
    e5();
  return n4.add(() => e5()), n4.dispose;
}
function M4(t13, e5, n4, a9) {
  let i7 = n4 ? "enter" : "leave", m11 = m2(), d13 = a9 !== void 0 ? l10(a9) : () => {
  };
  i7 === "enter" && (t13.removeAttribute("hidden"), t13.style.display = "");
  let u7 = u(i7, { enter: () => e5.enter, leave: () => e5.leave }), o9 = u(i7, { enter: () => e5.enterTo, leave: () => e5.leaveTo }), r12 = u(i7, { enter: () => e5.enterFrom, leave: () => e5.leaveFrom });
  return f7(t13, ...e5.enter, ...e5.enterTo, ...e5.enterFrom, ...e5.leave, ...e5.leaveFrom, ...e5.leaveTo, ...e5.entered), v4(t13, ...u7, ...r12), m11.nextFrame(() => {
    f7(t13, ...r12), v4(t13, ...o9), F6(t13, () => (f7(t13, ...u7), v4(t13, ...e5.entered), d13()));
  }), m11.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D2({ container: i7, direction: t13, classes: o9, onStart: s13, onStop: u7 }) {
  let a9 = f4(), c8 = p2(), r12 = s2(t13);
  l(() => {
    let e5 = m2();
    c8.add(e5.dispose);
    let n4 = i7.current;
    if (!!n4 && r12.current !== "idle" && !!a9.current)
      return e5.dispose(), s13.current(r12.current), e5.add(M4(n4, o9.current, r12.current === "enter", () => {
        e5.dispose(), u7.current(r12.current);
      })), e5.dispose;
  }, [t13]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function H5(i7 = "") {
  return i7.split(" ").filter((e5) => e5.trim().length > 1);
}
var M5 = (0, import_react31.createContext)(null);
M5.displayName = "TransitionContext";
var Ee = ((s13) => (s13.Visible = "visible", s13.Hidden = "hidden", s13))(Ee || {});
function Se3() {
  let i7 = (0, import_react31.useContext)(M5);
  if (i7 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i7;
}
function xe2() {
  let i7 = (0, import_react31.useContext)(I3);
  if (i7 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i7;
}
var I3 = (0, import_react31.createContext)(null);
I3.displayName = "NestingContext";
function _3(i7) {
  return "children" in i7 ? _3(i7.children) : i7.current.filter(({ el: e5 }) => e5.current !== null).filter(({ state: e5 }) => e5 === "visible").length > 0;
}
function re2(i7, e5) {
  let s13 = s2(i7), n4 = (0, import_react31.useRef)([]), m11 = f4(), y4 = p2(), E6 = o2((l11, r12 = w.Hidden) => {
    let t13 = n4.current.findIndex(({ el: o9 }) => o9 === l11);
    t13 !== -1 && (u(r12, { [w.Unmount]() {
      n4.current.splice(t13, 1);
    }, [w.Hidden]() {
      n4.current[t13].state = "hidden";
    } }), y4.microTask(() => {
      var o9;
      !_3(n4) && m11.current && ((o9 = s13.current) == null || o9.call(s13));
    }));
  }), S4 = o2((l11) => {
    let r12 = n4.current.find(({ el: t13 }) => t13 === l11);
    return r12 ? r12.state !== "visible" && (r12.state = "visible") : n4.current.push({ el: l11, state: "visible" }), () => E6(l11, w.Unmount);
  }), x6 = (0, import_react31.useRef)([]), u7 = (0, import_react31.useRef)(Promise.resolve()), p6 = (0, import_react31.useRef)({ enter: [], leave: [], idle: [] }), d13 = o2((l11, r12, t13) => {
    x6.current.splice(0), e5 && (e5.chains.current[r12] = e5.chains.current[r12].filter(([o9]) => o9 !== l11)), e5 == null || e5.chains.current[r12].push([l11, new Promise((o9) => {
      x6.current.push(o9);
    })]), e5 == null || e5.chains.current[r12].push([l11, new Promise((o9) => {
      Promise.all(p6.current[r12].map(([f8, a9]) => a9)).then(() => o9());
    })]), r12 === "enter" ? u7.current = u7.current.then(() => e5 == null ? void 0 : e5.wait.current).then(() => t13(r12)) : t13(r12);
  }), v5 = o2((l11, r12, t13) => {
    Promise.all(p6.current[r12].splice(0).map(([o9, f8]) => f8)).then(() => {
      var o9;
      (o9 = x6.current.shift()) == null || o9();
    }).then(() => t13(r12));
  });
  return (0, import_react31.useMemo)(() => ({ children: n4, register: S4, unregister: E6, onStart: d13, onStop: v5, wait: u7, chains: p6 }), [S4, E6, n4, d13, v5, p6, u7]);
}
function Pe() {
}
var He2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie(i7) {
  var s13;
  let e5 = {};
  for (let n4 of He2)
    e5[n4] = (s13 = i7[n4]) != null ? s13 : Pe;
  return e5;
}
function Ne2(i7) {
  let e5 = (0, import_react31.useRef)(ie(i7));
  return (0, import_react31.useEffect)(() => {
    e5.current = ie(i7);
  }, [i7]), e5;
}
var Re2 = "div";
var oe2 = j.RenderStrategy;
var se2 = V(function(e5, s13) {
  let { beforeEnter: n4, afterEnter: m11, beforeLeave: y4, afterLeave: E6, enter: S4, enterFrom: x6, enterTo: u7, entered: p6, leave: d13, leaveFrom: v5, leaveTo: l11, ...r12 } = e5, t13 = (0, import_react31.useRef)(null), o9 = y(t13, s13), f8 = r12.unmount ? w.Unmount : w.Hidden, { show: a9, appear: P5, initial: le2 } = Se3(), [h8, j4] = (0, import_react31.useState)(a9 ? "visible" : "hidden"), Q3 = xe2(), { register: F7, unregister: L6 } = Q3, U5 = (0, import_react31.useRef)(null);
  (0, import_react31.useEffect)(() => F7(t13), [F7, t13]), (0, import_react31.useEffect)(() => {
    if (f8 === w.Hidden && !!t13.current) {
      if (a9 && h8 !== "visible") {
        j4("visible");
        return;
      }
      return u(h8, { ["hidden"]: () => L6(t13), ["visible"]: () => F7(t13) });
    }
  }, [h8, t13, F7, L6, a9, f8]);
  let k2 = s2({ enter: H5(S4), enterFrom: H5(x6), enterTo: H5(u7), entered: H5(p6), leave: H5(d13), leaveFrom: H5(v5), leaveTo: H5(l11) }), O2 = Ne2({ beforeEnter: n4, afterEnter: m11, beforeLeave: y4, afterLeave: E6 }), G2 = l3();
  (0, import_react31.useEffect)(() => {
    if (G2 && h8 === "visible" && t13.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [t13, h8, G2]);
  let B2 = le2 && !P5, ae = (() => !G2 || B2 || U5.current === a9 ? "idle" : a9 ? "enter" : "leave")(), D3 = b3(0), ue2 = o2((g4) => u(g4, { enter: () => {
    D3.addFlag(d2.Opening), O2.current.beforeEnter();
  }, leave: () => {
    D3.addFlag(d2.Closing), O2.current.beforeLeave();
  }, idle: () => {
  } })), de4 = o2((g4) => u(g4, { enter: () => {
    D3.removeFlag(d2.Opening), O2.current.afterEnter();
  }, leave: () => {
    D3.removeFlag(d2.Closing), O2.current.afterLeave();
  }, idle: () => {
  } })), w4 = re2(() => {
    j4("hidden"), L6(t13);
  }, Q3);
  D2({ container: t13, classes: k2, direction: ae, onStart: s2((g4) => {
    w4.onStart(t13, g4, ue2);
  }), onStop: s2((g4) => {
    w4.onStop(t13, g4, de4), g4 === "leave" && !_3(w4) && (j4("hidden"), L6(t13));
  }) }), (0, import_react31.useEffect)(() => {
    !B2 || (f8 === w.Hidden ? U5.current = null : U5.current = a9);
  }, [a9, B2, h8]);
  let W = r12, fe3 = { ref: o9 };
  return P5 && a9 && s.isServer && (W = { ...W, className: e(r12.className, ...k2.current.enter, ...k2.current.enterFrom) }), import_react31.default.createElement(I3.Provider, { value: w4 }, import_react31.default.createElement(c2, { value: u(h8, { ["visible"]: d2.Open, ["hidden"]: d2.Closed }) | D3.flags }, X({ ourProps: fe3, theirProps: W, defaultTag: Re2, features: oe2, visible: h8 === "visible", name: "Transition.Child" })));
});
var K3 = V(function(e5, s13) {
  let { show: n4, appear: m11 = false, unmount: y4, ...E6 } = e5, S4 = (0, import_react31.useRef)(null), x6 = y(S4, s13);
  l3();
  let u7 = C();
  if (n4 === void 0 && u7 !== null && (n4 = (u7 & d2.Open) === d2.Open), ![true, false].includes(n4))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [p6, d13] = (0, import_react31.useState)(n4 ? "visible" : "hidden"), v5 = re2(() => {
    d13("hidden");
  }), [l11, r12] = (0, import_react31.useState)(true), t13 = (0, import_react31.useRef)([n4]);
  l(() => {
    l11 !== false && t13.current[t13.current.length - 1] !== n4 && (t13.current.push(n4), r12(false));
  }, [t13, n4]);
  let o9 = (0, import_react31.useMemo)(() => ({ show: n4, appear: m11, initial: l11 }), [n4, m11, l11]);
  (0, import_react31.useEffect)(() => {
    if (n4)
      d13("visible");
    else if (!_3(v5))
      d13("hidden");
    else {
      let a9 = S4.current;
      if (!a9)
        return;
      let P5 = a9.getBoundingClientRect();
      P5.x === 0 && P5.y === 0 && P5.width === 0 && P5.height === 0 && d13("hidden");
    }
  }, [n4, v5]);
  let f8 = { unmount: y4 };
  return import_react31.default.createElement(I3.Provider, { value: v5 }, import_react31.default.createElement(M5.Provider, { value: o9 }, X({ ourProps: { ...f8, as: import_react31.Fragment, children: import_react31.default.createElement(se2, { ref: x6, ...f8, ...E6 }) }, theirProps: {}, defaultTag: import_react31.Fragment, features: oe2, visible: p6 === "visible", name: "Transition" })));
});
var ye2 = V(function(e5, s13) {
  let n4 = (0, import_react31.useContext)(M5) !== null, m11 = C() !== null;
  return import_react31.default.createElement(import_react31.default.Fragment, null, !n4 && m11 ? import_react31.default.createElement(K3, { ref: s13, ...e5 }) : import_react31.default.createElement(se2, { ref: s13, ...e5 }));
});
var Ye = Object.assign(K3, { Child: ye2, Root: K3 });

// app/components/Drawer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Drawer({
  heading,
  open,
  onClose,
  openFrom = "right",
  children
}) {
  const offScreen = {
    right: "translate-x-full",
    left: "-translate-x-full"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ye, { appear: true, show: open, as: import_react32.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(yt, { as: "div", className: "relative z-50", onClose, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Ye.Child,
      {
        as: import_react32.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 left-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, false, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Drawer.tsx",
        lineNumber: 35,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed inset-y-0 flex max-w-full ${openFrom === "right" ? "right-0" : ""}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Ye.Child,
          {
            as: import_react32.Fragment,
            enter: "transform transition ease-in-out duration-300",
            enterFrom: offScreen[openFrom],
            enterTo: "translate-x-0",
            leave: "transform transition ease-in-out duration-300",
            leaveFrom: "translate-x-0",
            leaveTo: offScreen[openFrom],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(yt.Panel, { className: "w-screen max-w-lg text-left align-middle transition-all transform shadow-xl h-screen-dynamic bg-contrast", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "header",
                {
                  className: `sticky top-0 flex items-center px-6 h-nav sm:px-8 md:px-12 ${heading ? "justify-between" : "justify-end"}`,
                  children: [
                    heading !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(yt.Title, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "span", size: "lead", id: "cart-contents", children: heading }, void 0, false, {
                      fileName: "app/components/Drawer.tsx",
                      lineNumber: 71,
                      columnNumber: 25
                    }, this) }, void 0, false, {
                      fileName: "app/components/Drawer.tsx",
                      lineNumber: 70,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "button",
                      {
                        type: "button",
                        className: "p-4 -m-4 transition text-primary hover:text-primary/50",
                        onClick: onClose,
                        "data-test": "close-cart",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconClose, { "aria-label": "Close panel" }, void 0, false, {
                          fileName: "app/components/Drawer.tsx",
                          lineNumber: 82,
                          columnNumber: 23
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/Drawer.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/Drawer.tsx",
                  lineNumber: 64,
                  columnNumber: 19
                },
                this
              ),
              children
            ] }, void 0, true, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 63,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 54,
            columnNumber: 15
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/Drawer.tsx",
        lineNumber: 49,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Drawer.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Drawer.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Drawer.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Drawer.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
Drawer.Title = yt.Title;
function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = (0, import_react32.useState)(openDefault);
  function openDrawer() {
    setIsOpen(true);
  }
  function closeDrawer() {
    setIsOpen(false);
  }
  return {
    isOpen,
    openDrawer,
    closeDrawer
  };
}

// node_modules/clsx/dist/clsx.m.js
function r11(e5) {
  var t13, f8, n4 = "";
  if ("string" == typeof e5 || "number" == typeof e5)
    n4 += e5;
  else if ("object" == typeof e5)
    if (Array.isArray(e5))
      for (t13 = 0; t13 < e5.length; t13++)
        e5[t13] && (f8 = r11(e5[t13])) && (n4 && (n4 += " "), n4 += f8);
    else
      for (t13 in e5)
        e5[t13] && (n4 && (n4 += " "), n4 += t13);
  return n4;
}
function clsx() {
  for (var e5, t13, f8 = 0, n4 = ""; f8 < arguments.length; )
    (e5 = arguments[f8++]) && (t13 = r11(e5)) && (n4 && (n4 += " "), n4 += t13);
  return n4;
}
var clsx_m_default = clsx;

// app/components/Text.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Text({
  as: Component2 = "span",
  className,
  color = "default",
  format,
  size = "copy",
  width = "default",
  children,
  ...props
}) {
  const colors = {
    default: "inherit",
    primary: "text-primary/90",
    subtle: "text-primary/50",
    notice: "text-notice",
    contrast: "text-contrast/90"
  };
  const sizes = {
    lead: "text-lead font-medium",
    copy: "text-copy",
    fine: "text-fine subpixel-antialiased"
  };
  const widths = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide"
  };
  const styles = clsx_m_default(
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "text-") && colors[color],
    sizes[size],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Component2, { ...props, className: styles, children: format ? formatText(children) : children }, void 0, false, {
    fileName: "app/components/Text.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function Heading({
  as: Component2 = "h2",
  children,
  className = "",
  format,
  size = "heading",
  width = "default",
  ...props
}) {
  const sizes = {
    display: "font-bold text-display",
    heading: "font-bold text-heading",
    lead: "font-bold text-lead",
    copy: "font-medium text-copy"
  };
  const widths = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide"
  };
  const styles = clsx_m_default(
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "font-") && sizes[size],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Component2, { ...props, className: styles, children: format ? formatText(children) : children }, void 0, false, {
    fileName: "app/components/Text.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
function Section({
  as: Component2 = "section",
  children,
  className,
  divider = "none",
  display = "grid",
  heading,
  padding = "all",
  ...props
}) {
  const paddings = {
    x: "px-6 md:px-8 lg:px-12",
    y: "py-6 md:py-8 lg:py-12",
    swimlane: "pt-4 md:pt-8 lg:pt-12 md:pb-4 lg:pb-8",
    all: "p-6 md:p-8 lg:p-12"
  };
  const dividers = {
    none: "border-none",
    top: "border-t border-primary/05",
    bottom: "border-b border-primary/05",
    both: "border-y border-primary/05"
  };
  const displays = {
    flex: "flex",
    grid: "grid"
  };
  const styles = clsx_m_default(
    "w-full gap-4 md:gap-8",
    displays[display],
    missingClass(className, "\\mp[xy]?-") && paddings[padding],
    dividers[divider],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Component2, { ...props, className: styles, children: [
    heading && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { size: "lead", className: padding === "y" ? paddings["x"] : "", children: heading }, void 0, false, {
      fileName: "app/components/Text.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Text.tsx",
    lineNumber: 148,
    columnNumber: 5
  }, this);
}
function PageHeader({
  children,
  className,
  heading,
  variant = "default",
  ...props
}) {
  const variants = {
    default: "grid w-full gap-8 p-6 py-8 md:p-8 lg:p-12 justify-items-start",
    blogPost: "grid md:text-center w-full gap-4 p-6 py-8 md:p-8 lg:p-12 md:justify-items-center",
    allCollections: "flex justify-between items-baseline gap-8 p-6 md:p-8 lg:p-12"
  };
  const styles = clsx_m_default(variants[variant], className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { ...props, className: styles, children: [
    heading && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { as: "h1", width: "narrow", size: "heading", className: "inline-block", children: heading }, void 0, false, {
      fileName: "app/components/Text.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Text.tsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}

// app/components/Input.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Input({
  className = "",
  type,
  variant,
  ...props
}) {
  const variants = {
    search: "bg-transparent px-0 py-2 text-heading w-full focus:ring-0 border-x-0 border-t-0 transition border-b-2 border-primary/10 focus:border-primary/90",
    minisearch: "bg-transparent hidden md:inline-block text-left lg:text-right border-b transition border-transparent -mb-px border-x-0 border-t-0 appearance-none px-0 py-1 focus:ring-transparent placeholder:opacity-20 placeholder:text-inherit"
  };
  const styles = clsx_m_default(variants[variant], className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type, ...props, className: styles }, void 0, false, {
    fileName: "app/components/Input.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// app/lib/const.ts
var DEFAULT_GRID_IMG_LOAD_EAGER_COUNT = 4;
var ATTR_LOADING_EAGER = "eager";
function getImageLoadingPriority(index, maxEagerLoadCount = DEFAULT_GRID_IMG_LOAD_EAGER_COUNT) {
  return index < maxEagerLoadCount ? ATTR_LOADING_EAGER : void 0;
}

// app/components/ProductGallery.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ProductGallery({
  media,
  className
}) {
  if (!media.length) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      className: `swimlane md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 ${className}`,
      children: media.map((med, i7) => {
        let mediaProps = {};
        const isFirst = i7 === 0;
        const isFourth = i7 === 3;
        const isFullWidth = i7 % 3 === 0;
        const data = {
          ...med,
          image: {
            ...med.image,
            altText: med.alt || "Product image"
          }
        };
        switch (med.mediaContentType) {
          case "IMAGE":
            mediaProps = {
              width: 800,
              widths: [400, 800, 1200, 1600, 2e3, 2400]
            };
            break;
          case "VIDEO":
            mediaProps = {
              width: "100%",
              autoPlay: true,
              controls: false,
              muted: true,
              loop: true,
              preload: "auto"
            };
            break;
          case "EXTERNAL_VIDEO":
            mediaProps = { width: "100%" };
            break;
          case "MODEL_3D":
            mediaProps = {
              width: "100%",
              interactionPromptThreshold: "0",
              ar: true,
              loading: ATTR_LOADING_EAGER,
              disableZoom: true
            };
            break;
        }
        if (i7 === 0 && med.mediaContentType === "IMAGE") {
          mediaProps.loading = ATTR_LOADING_EAGER;
        }
        const style = [
          isFullWidth ? "md:col-span-2" : "md:col-span-1",
          isFirst || isFourth ? "" : "md:aspect-[4/5]",
          "aspect-square snap-center card-image bg-white dark:bg-contrast/10 w-mobileGallery md:w-full"
        ].join(" ");
        return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "div",
          {
            className: style,
            children: med.image && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "img",
              {
                src: data.image.url,
                alt: data.image.altText,
                className: "w-full h-full aspect-square fadeIn object-cover"
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductGallery.tsx",
                lineNumber: 87,
                columnNumber: 15
              },
              this
            )
          },
          med.id || med.image.id,
          false,
          {
            fileName: "app/components/ProductGallery.tsx",
            lineNumber: 80,
            columnNumber: 11
          },
          this
        );
      })
    },
    void 0,
    false,
    {
      fileName: "app/components/ProductGallery.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/lib/placeholders.ts
var PLACEHOLDERS = {
  HEROS: [
    {
      heading: { value: "All Mountain All Season" },
      byline: {
        value: "The All New Hydrogen Snowboard Exclusively From Shopify"
      },
      cta: { value: "Shop Now \u2192" },
      handle: "freestyle",
      spread: {
        reference: {
          mediaContentType: "IMAGE",
          alt: "Tracks in the snow leading to a person on a mountain top with a red jacket contrasting to an epic blue horizon with a mountain range in the distance.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468"
          },
          id: "gid://shopify/MediaImage/29259478466616",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468",
            width: 2500,
            height: 3155
          }
        }
      },
      spreadSecondary: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "A snowboarder standing on a mountain top in choppy snow, shows off the back of his snowboard which reads Hydrogen in a cursive script.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_2.jpg?v=1654902468"
          },
          id: "gid://shopify/MediaImage/29259478499384",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_2.jpg?v=1654902468",
            width: 2500,
            height: 3155
          }
        }
      },
      height: "full",
      top: true,
      loading: "eager"
    },
    {
      heading: { value: "From the Slopes to the Chalet" },
      byline: null,
      cta: { value: "Shop Now \u2192" },
      handle: "backcountry",
      spread: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "A skier hikes up a mountain through the snow with skis over their shoulder.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_1.jpg?v=1654902306"
          },
          id: "gid://shopify/MediaImage/29259478368312",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_1.jpg?v=1654902306",
            width: 2500,
            height: 2500
          }
        }
      },
      spreadSecondary: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "A snow covered lodge is illuminated by lights at night with a dark starry sky and mountain backdrop.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_2.jpg?v=1654902306"
          },
          id: "gid://shopify/MediaImage/29259478401080",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_2.jpg?v=1654902306",
            width: 2500,
            height: 2500
          }
        }
      }
    },
    {
      heading: { value: "The Winter 2022 Collection" },
      byline: { value: "Just Dropped" },
      cta: { value: "Shop Now \u2192" },
      handle: "winter-2022",
      spread: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "Three young women in snowboarding attire embracing and laughing while snow falls around them",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Collection_Feature_Wide.jpg?v=1654902160"
          },
          id: "gid://shopify/MediaImage/29259478302776",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Collection_Feature_Wide.jpg?v=1654902160",
            width: 5e3,
            height: 2500
          }
        }
      },
      spreadSecondary: null
    }
  ],
  PRODUCT_INFO: [
    {
      title: "Description",
      content: "We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down..."
    },
    {
      title: "Size and Fit",
      content: "We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down..."
    },
    {
      title: "Delivery and Returns",
      content: `The towels had been hanging from the rod for years. They were stained and worn, and quite frankly, just plain ugly. Debra didn't want to touch them but she really didn't have a choice. It was important for her to see what was living within them. Patrick didn't want to go. The fact that she was insisting they must go made him want to go even less. He had no desire to make small talk with strangers he would never again see just to be polite. But she insisted that Patrick go, and she would soon find out that this would be the biggest mistake she could make in their relationship.`
    }
  ],
  PRODUCT: {
    label: "Limited Edition",
    id: "gid://shopify/Product/6730850828344",
    title: "The Hydrogen",
    publishedAt: "2021-06-17T18:33:17Z",
    handle: "snowboard",
    description: "Description Our flagship board, ideal for technical terrain and those who dare to go where the chairlift can't take you. The Hydrogen excels in the backcountry making riding out of bounds as easy as resort groomers. New for 2021, the Hydrogen Snowboard has Oxygen Pack inserts giving you more float on the deepest days. Care Guide Clean well after use Wax regularly Specs Weight: 5 lb Length: 4 ft Width: 1 ft Manufactured on: 8/2/2021, 3:30:00 PM Manufactured by: Shopify",
    priceRange: {
      minVariantPrice: {
        amount: "775.0",
        currencyCode: "CAD"
      },
      maxVariantPrice: {
        amount: "775.0",
        currencyCode: "CAD"
      }
    },
    options: [
      {
        name: "Color",
        values: ["Morning", "Evening", "Night"]
      },
      {
        name: "Size",
        values: ["154", "158", "160"]
      }
    ],
    variants: {
      nodes: [
        {
          id: "gid://shopify/ProductVariant/41007289630776",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-morning.jpg?v=1636146509",
            altText: "The Hydrogen snowboard, color Morning",
            width: 1200,
            height: 1504
          },
          price: {
            amount: "775.0",
            currencyCode: "CAD"
          },
          compareAtPrice: {
            amount: "840.0",
            currencyCode: "CAD"
          }
        }
      ]
    }
  }
};
function getHeroPlaceholder(heros) {
  if (!heros?.length)
    return [];
  return heros.map((hero, index) => {
    if (hero?.heading?.value) {
      return hero;
    }
    const placeholder = PLACEHOLDERS.HEROS[index];
    const byLine = hero?.byLine || hero?.descriptionHtml ? { value: hero.descriptionHtml } : placeholder.byline;
    const heading = hero?.heading || hero?.title ? { value: hero.title } : placeholder.heading;
    return {
      heading,
      byLine,
      cta: hero?.cta || placeholder.cta,
      handle: hero?.handle || placeholder.handle,
      id: hero?.id || index,
      spread: hero?.spread || placeholder.spread,
      spreadSecondary: hero?.spreadSecondary || placeholder.spreadSecondary,
      height: placeholder?.height || void 0,
      top: placeholder?.top || void 0
    };
  });
}
function getProductPlaceholder() {
  return PLACEHOLDERS.PRODUCT;
}

// app/components/ProductCard.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd
}) {
  let cardLabel;
  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length)
    return null;
  const firstVariant = flattenConnection(cardProduct.variants)[0];
  if (!firstVariant)
    return null;
  const { image, price, compareAtPrice } = firstVariant;
  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = "Sale";
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = "New";
  }
  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Link2,
      {
        onClick,
        to: `/products/${product.handle}`,
        prefetch: "intent",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: clsx_m_default("grid gap-4", className), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-image aspect-[4/5] bg-primary/5", children: [
            image && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Image,
              {
                className: "aspect-[4/5] w-full object-cover fadeIn",
                widths: [320],
                sizes: "320px",
                loaderOptions: {
                  crop: "center",
                  scale: 2,
                  width: 320,
                  height: 400
                },
                data: image,
                alt: image.altText || `Picture of ${product.title}`,
                loading
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 70,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Text,
              {
                as: "label",
                size: "fine",
                className: "absolute top-0 right-0 m-4 text-right text-notice",
                children: cardLabel
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 85,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Text,
              {
                className: "w-full overflow-hidden whitespace-nowrap text-ellipsis ",
                as: "h3",
                children: product.title
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 94,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Money, { withoutTrailingZeros: true, data: price }, void 0, false, {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 102,
                columnNumber: 17
              }, this),
              isDiscounted(price, compareAtPrice) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                CompareAtPrice,
                {
                  className: "opacity-50",
                  data: compareAtPrice
                },
                void 0,
                false,
                {
                  fileName: "app/components/ProductCard.tsx",
                  lineNumber: 104,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/ProductCard.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/ProductCard.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    ),
    quickAdd && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      AddToCartButton,
      {
        lines: [
          {
            quantity: 1,
            merchandiseId: firstVariant.id
          }
        ],
        variant: "secondary",
        className: "mt-2",
        analytics: {
          products: [productAnalytics],
          totalValue: parseFloat(productAnalytics.price)
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { as: "span", className: "flex items-center justify-center gap-2", children: "Add to Bag" }, void 0, false, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 115,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
function CompareAtPrice({
  data,
  className
}) {
  const { currencyNarrowSymbol, withoutTrailingZerosAndCurrency } = useMoney(data);
  const styles = clsx_m_default("strike", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: styles, children: [
    currencyNarrowSymbol,
    withoutTrailingZerosAndCurrency
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 151,
    columnNumber: 5
  }, this);
}

// app/components/ProductSwimlane.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var mockProducts = new Array(12).fill("");
function ProductSwimlane({
  title = "Featured Products",
  products = mockProducts,
  count = 12,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Section, { heading: title, padding: "y", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    ProductCard,
    {
      product,
      className: "snap-start w-80"
    },
    product.id,
    false,
    {
      fileName: "app/components/ProductSwimlane.tsx",
      lineNumber: 21,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/ProductSwimlane.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductSwimlane.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/ProductGrid.tsx
var import_react35 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function ProductGrid({
  url,
  collection,
  ...props
}) {
  const [initialProducts, setInitialProducts] = (0, import_react35.useState)(
    collection?.products?.nodes || []
  );
  const [nextPage, setNextPage] = (0, import_react35.useState)(
    collection?.products?.pageInfo?.hasNextPage
  );
  const [endCursor, setEndCursor] = (0, import_react35.useState)(
    collection?.products?.pageInfo?.endCursor
  );
  const [products, setProducts] = (0, import_react35.useState)(initialProducts);
  const productProps = collection?.products?.nodes || [];
  if (initialProducts !== productProps) {
    setInitialProducts(productProps);
    setProducts(productProps);
  }
  const fetcher = useFetcher();
  function fetchMoreProducts() {
    fetcher.load(`${url}?index&cursor=${endCursor}`);
  }
  (0, import_react35.useEffect)(() => {
    if (!fetcher.data)
      return;
    const { collection: collection2 } = fetcher.data;
    setProducts((prev) => [...prev, ...collection2.products.nodes]);
    setNextPage(collection2.products.pageInfo.hasNextPage);
    setEndCursor(collection2.products.pageInfo.endCursor);
  }, [fetcher.data]);
  const haveProducts = initialProducts.length > 0;
  if (!haveProducts) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "No products found on this collection" }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link2, { to: "/products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "underline", children: "Browse catalog" }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Grid, { layout: "products", ...props, children: products.map((product, i7) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      ProductCard,
      {
        product,
        loading: getImageLoadingPriority(i7)
      },
      product.id,
      false,
      {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 67,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    nextPage && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Button,
      {
        disabled: fetcher.state !== "idle",
        variant: "secondary",
        onClick: fetchMoreProducts,
        width: "full",
        prefetch: "intent",
        children: fetcher.state !== "idle" ? "Loading..." : "Load more products"
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 77,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/components/Skeleton.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function Skeleton({
  as: Component2 = "div",
  width,
  height,
  className,
  ...props
}) {
  const styles = clsx_m_default("rounded bg-primary/10", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Component2, { ...props, width, height, className: styles }, void 0, false, {
    fileName: "app/components/Skeleton.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/Button.tsx
var import_react36 = __toESM(require_react());
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var Button = (0, import_react36.forwardRef)(
  ({
    as = "button",
    className = "",
    variant = "primary",
    width = "auto",
    ...props
  }, ref) => {
    const Component2 = props?.to ? Link : as;
    const baseButtonClasses = "inline-block rounded font-medium text-center py-3 px-6";
    const variants = {
      primary: `${baseButtonClasses} bg-primary text-contrast`,
      secondary: `${baseButtonClasses} border border-primary/10 bg-contrast text-primary`,
      inline: "border-b border-primary/10 leading-none pb-1"
    };
    const widths = {
      auto: "w-auto",
      full: "w-full"
    };
    const styles = clsx_m_default(
      missingClass(className, "bg-") && variants[variant],
      missingClass(className, "w-") && widths[width],
      className
    );
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Component2,
      {
        className: styles,
        ...props,
        ref
      },
      void 0,
      false,
      {
        fileName: "app/components/Button.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    );
  }
);

// app/components/CountrySelector.tsx
var import_react39 = __toESM(require_react());

// node_modules/react-intersection-observer/react-intersection-observer.modern.mjs
var React = __toESM(require_react(), 1);
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root)
    return "0";
  if (RootIds.has(root))
    return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter((key) => options[key] !== void 0).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  let id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _elements$get;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_elements$get = elements.get(entry.target)) == null ? void 0 : _elements$get.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  let callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}
function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _state$entry;
  const [ref, setRef] = React.useState(null);
  const callback = React.useRef();
  const [state, setState] = React.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  React.useEffect(
    () => {
      if (skip || !ref)
        return;
      let unobserve;
      unobserve = observe(ref, (inView, entry) => {
        setState({
          inView,
          entry
        });
        if (callback.current)
          callback.current(inView, entry);
        if (entry.isIntersecting && triggerOnce && unobserve) {
          unobserve();
          unobserve = void 0;
        }
      }, {
        root,
        rootMargin,
        threshold,
        trackVisibility,
        delay
      }, fallbackInView);
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    [
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_state$entry = state.entry) == null ? void 0 : _state$entry.target;
  const previousEntryTarget = React.useRef();
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

// app/components/CountrySelector.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function CountrySelector() {
  const [root] = useMatches();
  const fetcher = useFetcher();
  const closeRef = (0, import_react39.useRef)(null);
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
  const { pathname, search } = useLocation();
  const pathWithoutLocale = `${pathname.replace(
    selectedLocale.pathPrefix,
    ""
  )}${search}`;
  const countries = fetcher.data ?? {};
  const defaultLocale = countries?.["default"];
  const defaultLocalePrefix = defaultLocale ? `${defaultLocale?.language}-${defaultLocale?.country}` : "";
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const observerRef = (0, import_react39.useRef)(null);
  (0, import_react39.useEffect)(() => {
    ref(observerRef.current);
  }, [ref, observerRef]);
  (0, import_react39.useEffect)(() => {
    if (!inView || fetcher.data || fetcher.state === "loading")
      return;
    fetcher.load("/api/countries");
  }, [inView, fetcher]);
  const closeDropdown = (0, import_react39.useCallback)(() => {
    closeRef.current?.removeAttribute("open");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "section",
    {
      ref: observerRef,
      className: "grid w-full gap-4 md:max-w-xs md:ml-auto",
      onMouseLeave: closeDropdown,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Heading, { size: "lead", className: "cursor-default", as: "h3", children: "Country" }, void 0, false, {
          fileName: "app/components/CountrySelector.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "details",
          {
            className: "absolute w-full border rounded border-contrast/30 dark:border-white open:round-b-none overflow-clip",
            ref: closeRef,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("summary", { className: "flex items-center justify-between w-full px-4 py-3 cursor-pointer", children: selectedLocale.label }, void 0, false, {
                fileName: "app/components/CountrySelector.tsx",
                lineNumber: 61,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full overflow-auto border-t border-contrast/30 dark:border-white bg-contrast/30 max-h-36", children: countries && Object.keys(countries).map((countryPath) => {
                const countryLocale = countries[countryPath];
                const isSelected = countryLocale.language === selectedLocale.language && countryLocale.country === selectedLocale.country;
                const countryUrlPath = getCountryUrlPath({
                  countryLocale,
                  defaultLocalePrefix,
                  pathWithoutLocale
                });
                return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                  Country,
                  {
                    closeDropdown,
                    countryUrlPath,
                    isSelected,
                    countryLocale
                  },
                  countryPath,
                  false,
                  {
                    fileName: "app/components/CountrySelector.tsx",
                    lineNumber: 79,
                    columnNumber: 19
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "app/components/CountrySelector.tsx",
                lineNumber: 64,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/CountrySelector.tsx",
            lineNumber: 57,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/CountrySelector.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/CountrySelector.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}
function Country({
  closeDropdown,
  countryLocale,
  countryUrlPath,
  isSelected
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    ChangeLocaleForm,
    {
      redirectTo: countryUrlPath,
      buyerIdentity: {
        countryCode: countryLocale.country
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Button,
        {
          className: clsx_m_default([
            "text-contrast dark:text-primary",
            "bg-primary dark:bg-contrast w-full p-2 transition rounded flex justify-start",
            "items-center text-left cursor-pointer py-2 px-4"
          ]),
          type: "submit",
          variant: "primary",
          onClick: closeDropdown,
          children: [
            countryLocale.label,
            isSelected ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IconCheck, {}, void 0, false, {
              fileName: "app/components/CountrySelector.tsx",
              lineNumber: 127,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/CountrySelector.tsx",
              lineNumber: 126,
              columnNumber: 11
            }, this) : null
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/CountrySelector.tsx",
          lineNumber: 114,
          columnNumber: 7
        },
        this
      )
    },
    countryLocale.country,
    false,
    {
      fileName: "app/components/CountrySelector.tsx",
      lineNumber: 107,
      columnNumber: 5
    },
    this
  );
}
function ChangeLocaleForm({
  children,
  buyerIdentity,
  redirectTo
}) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "cartAction",
        value: "UPDATE_BUYER_IDENTITY" /* UPDATE_BUYER_IDENTITY */
      },
      void 0,
      false,
      {
        fileName: "app/components/CountrySelector.tsx",
        lineNumber: 148,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "buyerIdentity",
        value: JSON.stringify(buyerIdentity)
      },
      void 0,
      false,
      {
        fileName: "app/components/CountrySelector.tsx",
        lineNumber: 153,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
      fileName: "app/components/CountrySelector.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/CountrySelector.tsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}
function getCountryUrlPath({
  countryLocale,
  defaultLocalePrefix,
  pathWithoutLocale
}) {
  let countryPrefixPath = "";
  const countryLocalePrefix = `${countryLocale.language}-${countryLocale.country}`;
  if (countryLocalePrefix !== defaultLocalePrefix) {
    countryPrefixPath = `/${countryLocalePrefix.toLowerCase()}`;
  }
  return `${countryPrefixPath}${pathWithoutLocale}`;
}

// app/components/Cart.tsx
var import_react47 = __toESM(require_react());

// node_modules/react-use/esm/misc/util.js
function on(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.addEventListener) {
    obj.addEventListener.apply(obj, args);
  }
}
function off(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.removeEventListener) {
    obj.removeEventListener.apply(obj, args);
  }
}
var isBrowser = typeof window !== "undefined";

// node_modules/react-use/esm/useDebounce.js
var import_react41 = __toESM(require_react());

// node_modules/react-use/esm/useTimeoutFn.js
var import_react40 = __toESM(require_react());
function useTimeoutFn(fn, ms) {
  if (ms === void 0) {
    ms = 0;
  }
  var ready = (0, import_react40.useRef)(false);
  var timeout = (0, import_react40.useRef)();
  var callback = (0, import_react40.useRef)(fn);
  var isReady = (0, import_react40.useCallback)(function() {
    return ready.current;
  }, []);
  var set = (0, import_react40.useCallback)(function() {
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(function() {
      ready.current = true;
      callback.current();
    }, ms);
  }, [ms]);
  var clear = (0, import_react40.useCallback)(function() {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);
  (0, import_react40.useEffect)(function() {
    callback.current = fn;
  }, [fn]);
  (0, import_react40.useEffect)(function() {
    set();
    return clear;
  }, [ms]);
  return [isReady, clear, set];
}

// node_modules/react-use/esm/useDebounce.js
function useDebounce(fn, ms, deps) {
  if (ms === void 0) {
    ms = 0;
  }
  if (deps === void 0) {
    deps = [];
  }
  var _a = useTimeoutFn(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
  (0, import_react41.useEffect)(reset, deps);
  return [isReady, cancel];
}

// node_modules/react-use/esm/useEffectOnce.js
var import_react42 = __toESM(require_react());
var useEffectOnce = function(effect) {
  (0, import_react42.useEffect)(effect, []);
};
var useEffectOnce_default = useEffectOnce;

// node_modules/react-use/esm/useRafState.js
var import_react44 = __toESM(require_react());

// node_modules/react-use/esm/useUnmount.js
var import_react43 = __toESM(require_react());
var useUnmount = function(fn) {
  var fnRef = (0, import_react43.useRef)(fn);
  fnRef.current = fn;
  useEffectOnce_default(function() {
    return function() {
      return fnRef.current();
    };
  });
};
var useUnmount_default = useUnmount;

// node_modules/react-use/esm/useRafState.js
var useRafState = function(initialState) {
  var frame = (0, import_react44.useRef)(0);
  var _a = (0, import_react44.useState)(initialState), state = _a[0], setState = _a[1];
  var setRafState = (0, import_react44.useCallback)(function(value) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(function() {
      setState(value);
    });
  }, []);
  useUnmount_default(function() {
    cancelAnimationFrame(frame.current);
  });
  return [state, setRafState];
};
var useRafState_default = useRafState;

// node_modules/react-use/esm/useScroll.js
var import_react45 = __toESM(require_react());
var useScroll = function(ref) {
  if (true) {
    if (typeof ref !== "object" || typeof ref.current === "undefined") {
      console.error("`useScroll` expects a single ref argument.");
    }
  }
  var _a = useRafState_default({
    x: 0,
    y: 0
  }), state = _a[0], setState = _a[1];
  (0, import_react45.useEffect)(function() {
    var handler = function() {
      if (ref.current) {
        setState({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop
        });
      }
    };
    if (ref.current) {
      on(ref.current, "scroll", handler, {
        capture: false,
        passive: true
      });
    }
    return function() {
      if (ref.current) {
        off(ref.current, "scroll", handler);
      }
    };
  }, [ref]);
  return state;
};
var useScroll_default = useScroll;

// node_modules/react-use/esm/useWindowScroll.js
var import_react46 = __toESM(require_react());
var useWindowScroll = function() {
  var _a = useRafState_default(function() {
    return {
      x: isBrowser ? window.pageXOffset : 0,
      y: isBrowser ? window.pageYOffset : 0
    };
  }), state = _a[0], setState = _a[1];
  (0, import_react46.useEffect)(function() {
    var handler = function() {
      setState(function(state2) {
        var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset;
        return state2.x !== pageXOffset || state2.y !== pageYOffset ? {
          x: pageXOffset,
          y: pageYOffset
        } : state2;
      });
    };
    handler();
    on(window, "scroll", handler, {
      capture: false,
      passive: true
    });
    return function() {
      off(window, "scroll", handler);
    };
  }, []);
  return state;
};
var useWindowScroll_default = useWindowScroll;

// app/components/Cart.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function Cart({
  layout,
  onClose,
  cart
}) {
  const linesCount = Boolean(cart?.lines?.edges?.length || 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartEmpty, { hidden: linesCount, onClose, layout }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartDetails, { cart, layout }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function CartDetails({
  layout,
  cart
}) {
  const isZeroCost = !cart || cart?.cost?.subtotalAmount?.amount === "0.0";
  const container = {
    drawer: "grid grid-cols-1 h-screen-no-nav grid-rows-[1fr_auto]",
    page: "w-full pb-12 grid md:grid-cols-2 md:items-start gap-8 md:gap-8 lg:gap-12"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: container[layout], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartLines, { lines: cart?.lines, layout }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    !isZeroCost && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartSummary, { cost: cart.cost, layout, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartDiscounts, { discountCodes: cart.discountCodes }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartCheckoutActions, { checkoutUrl: cart.checkoutUrl }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
function CartDiscounts({
  discountCodes
}) {
  const codes = discountCodes?.map(({ code }) => code).join(", ") || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dl", { className: codes ? "grid" : "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-between font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { as: "dt", children: "Discount(s)" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          IconRemove,
          {
            "aria-hidden": "true",
            style: { height: 18, marginRight: 4 }
          },
          void 0,
          false,
          {
            fileName: "app/components/Cart.tsx",
            lineNumber: 93,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { as: "dd", children: codes }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "div",
      {
        className: clsx_m_default(
          codes ? "hidden" : "flex",
          "items-center gap-4 justify-between text-copy"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "input",
            {
              className: getInputStyleClasses(),
              type: "text",
              name: "discountCode",
              placeholder: "Discount code"
            },
            void 0,
            false,
            {
              fileName: "app/components/Cart.tsx",
              lineNumber: 112,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "flex justify-end font-medium whitespace-nowrap", children: "Apply Discount" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 118,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 106,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function UpdateDiscountForm({ children }) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "cartAction",
        value: "UPDATE_DISCOUNT" /* UPDATE_DISCOUNT */
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 131,
        columnNumber: 7
      },
      this
    ),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}
function CartLines({
  layout = "drawer",
  lines: cartLines
}) {
  const currentLines = cartLines ? flattenConnection(cartLines) : [];
  const scrollRef = (0, import_react47.useRef)(null);
  const { y: y4 } = useScroll_default(scrollRef);
  const className = clsx_m_default([
    y4 > 0 ? "border-t" : "",
    layout === "page" ? "flex-grow md:translate-y-4" : "px-6 pb-6 sm-max:pt-2 overflow-auto transition md:px-12"
  ]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "section",
    {
      ref: scrollRef,
      "aria-labelledby": "cart-contents",
      className,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { className: "grid gap-6 md:gap-10", children: currentLines.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartLineItem, { line }, line.id, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 165,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.tsx",
      lineNumber: 160,
      columnNumber: 5
    },
    this
  );
}
function CartCheckoutActions({ checkoutUrl }) {
  if (!checkoutUrl)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: checkoutUrl, target: "_self", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { as: "span", width: "full", children: "Continue to Checkout" }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 180,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 179,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 178,
    columnNumber: 5
  }, this);
}
function CartSummary({
  cost,
  layout,
  children = null
}) {
  const summary = {
    drawer: "grid gap-4 p-6 border-t md:px-12",
    page: "sticky top-nav grid gap-6 p-4 md:px-6 md:translate-y-4 bg-primary/5 rounded w-full"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { "aria-labelledby": "summary-heading", className: summary[layout], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { id: "summary-heading", className: "sr-only", children: "Order summary" }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 205,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dl", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-between font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { as: "dt", children: "Subtotal" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { as: "dd", "data-test": "subtotal", children: cost?.subtotalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Money, { data: cost?.subtotalAmount }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 213,
        columnNumber: 15
      }, this) : "-" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 211,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 209,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 204,
    columnNumber: 5
  }, this);
}
function CartLineItem({ line }) {
  if (!line?.id)
    return null;
  const { id, quantity, merchandise } = line;
  if (typeof quantity === "undefined" || !merchandise?.product)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex-shrink", children: merchandise.image && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      Image,
      {
        width: 220,
        height: 220,
        data: merchandise.image,
        className: "object-cover object-center w-24 h-24 border rounded md:w-28 md:h-28",
        alt: merchandise.title
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 236,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 234,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-between flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Heading, { as: "h3", size: "copy", children: merchandise?.product?.handle ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Link2, { to: `/products/${merchandise.product.handle}`, children: merchandise?.product?.title || "" }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 250,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { children: merchandise?.product?.title || "" }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 254,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 248,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid pb-2", children: (merchandise?.selectedOptions || []).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { color: "subtle", children: [
          option.name,
          ": ",
          option.value
        ] }, option.name, true, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 260,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 258,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-start text-copy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartLineQuantityAdjust, { line }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 268,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 267,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ItemRemoveButton, { lineIds: [id] }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 270,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 266,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartLinePrice, { line, as: "span" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 274,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this)
  ] }, id, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 233,
    columnNumber: 5
  }, this);
}
function ItemRemoveButton({ lineIds }) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "cartAction",
        value: "REMOVE_FROM_CART" /* REMOVE_FROM_CART */
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 286,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "linesIds", value: JSON.stringify(lineIds) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 291,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "button",
      {
        className: "flex items-center justify-center w-10 h-10 border rounded",
        type: "submit",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "sr-only", children: "Remove" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 296,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(IconRemove, { "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 297,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 292,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 285,
    columnNumber: 5
  }, this);
}
function CartLineQuantityAdjust({ line }) {
  if (!line || typeof line?.quantity === "undefined")
    return null;
  const { id: lineId, quantity } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: `quantity-${lineId}`, className: "sr-only", children: [
      "Quantity, ",
      quantity
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 311,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center border rounded", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UpdateCartButton, { lines: [{ id: lineId, quantity: prevQuantity }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "button",
        {
          name: "decrease-quantity",
          "aria-label": "Decrease quantity",
          className: "w-10 h-10 transition text-primary/50 hover:text-primary disabled:text-primary/10",
          value: prevQuantity,
          disabled: quantity <= 1,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "\u2212" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 323,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.tsx",
          lineNumber: 316,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 315,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "px-2 text-center", "data-test": "item-quantity", children: quantity }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UpdateCartButton, { lines: [{ id: lineId, quantity: nextQuantity }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "button",
        {
          className: "w-10 h-10 transition text-primary/50 hover:text-primary",
          name: "increase-quantity",
          value: nextQuantity,
          "aria-label": "Increase quantity",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "+" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 338,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.tsx",
          lineNumber: 332,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 314,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 310,
    columnNumber: 5
  }, this);
}
function UpdateCartButton({
  children,
  lines
}) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "cartAction", value: "UPDATE_CART" /* UPDATE_CART */ }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 357,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "lines", value: JSON.stringify(lines) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 358,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 356,
    columnNumber: 5
  }, this);
}
function CartLinePrice({
  line,
  priceType = "regular",
  ...passthroughProps
}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount)
    return null;
  const moneyV2 = priceType === "regular" ? line.cost.totalAmount : line.cost.compareAtAmountPerQuantity;
  if (moneyV2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Money, { withoutTrailingZeros: true, ...passthroughProps, data: moneyV2 }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 384,
    columnNumber: 10
  }, this);
}
function CartEmpty({
  hidden = false,
  layout = "drawer",
  onClose
}) {
  const scrollRef = (0, import_react47.useRef)(null);
  const { y: y4 } = useScroll_default(scrollRef);
  const container = {
    drawer: clsx_m_default([
      "content-start gap-4 px-6 pb-8 transition overflow-y-scroll md:gap-12 md:px-12 h-screen-no-nav md:pb-12",
      y4 > 0 ? "border-t" : ""
    ]),
    page: clsx_m_default([
      hidden ? "" : "grid",
      `pb-12 w-full md:items-start gap-4 md:gap-8 lg:gap-12`
    ])
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref: scrollRef, className: container[layout], hidden, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "grid gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { format: true, children: "Looks like you haven\u2019t added anything yet, let\u2019s get you started!" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 413,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { onClick: onClose, children: "Continue shopping" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 418,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 417,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 412,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "grid gap-8 pt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      FeaturedProducts,
      {
        count: 4,
        heading: "Shop Best Sellers",
        layout,
        onClose,
        sortKey: "BEST_SELLING"
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 422,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 421,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 411,
    columnNumber: 5
  }, this);
}

// app/components/CartLoading.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function CartLoading() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-full h-screen-no-nav justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 38,
      height: 38,
      viewBox: "0 0 38 38",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("linearGradient", { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("stop", { stopColor: "#fff", stopOpacity: 0, offset: "0%" }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 13,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("stop", { stopColor: "#fff", stopOpacity: ".631", offset: "63.146%" }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("stop", { stopColor: "#fff", offset: "100%" }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 15,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 11,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("g", { fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("g", { transform: "translate(1 1)", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "path",
            {
              d: "M36 18c0-9.94-8.06-18-18-18",
              id: "Oval-2",
              stroke: "url(#a)",
              strokeWidth: 2,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "animateTransform",
                {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "0.9s",
                  repeatCount: "indefinite"
                },
                void 0,
                false,
                {
                  fileName: "app/components/CartLoading.tsx",
                  lineNumber: 26,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/CartLoading.tsx",
              lineNumber: 20,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("circle", { fill: "#fff", cx: 36, cy: 18, r: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "animateTransform",
            {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite"
            },
            void 0,
            false,
            {
              fileName: "app/components/CartLoading.tsx",
              lineNumber: 36,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/CartLoading.tsx",
      lineNumber: 5,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/CartLoading.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/OrderCard.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function OrderCard({ order }) {
  if (!order?.id)
    return null;
  const [legacyOrderId, key] = order.id.split("/").pop().split("?");
  const lineItems = flattenConnection(order?.lineItems);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { className: "grid text-center border rounded", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      Link2,
      {
        className: "grid items-center gap-4 p-4 md:gap-6 md:p-6 md:grid-cols-2",
        to: `/account/orders/${legacyOrderId}?${key}`,
        prefetch: "intent",
        children: [
          lineItems[0].variant?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "card-image aspect-square bg-primary/5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "img",
            {
              width: 168,
              height: 168,
              className: "w-full fadeIn cover",
              alt: lineItems[0].variant?.image?.altText ?? "Order image",
              src: lineItems[0].variant?.image.url
            },
            void 0,
            false,
            {
              fileName: "app/components/OrderCard.tsx",
              lineNumber: 20,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/OrderCard.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "div",
            {
              className: `flex-col justify-center text-left ${!lineItems[0].variant?.image && "md:col-span-2"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Heading, { as: "h3", format: true, size: "copy", children: lineItems.length > 1 ? `${lineItems[0].title} +${lineItems.length - 1} more` : lineItems[0].title }, void 0, false, {
                  fileName: "app/components/OrderCard.tsx",
                  lineNumber: 34,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dl", { className: "grid grid-gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { className: "sr-only", children: "Order ID" }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text, { size: "fine", color: "subtle", children: [
                    "Order No. ",
                    order.orderNumber
                  ] }, void 0, true, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 42,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 41,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { className: "sr-only", children: "Order Date" }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text, { size: "fine", color: "subtle", children: new Date(order.processedAt).toDateString() }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 48,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 47,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { className: "sr-only", children: "Fulfillment Status" }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                    "span",
                    {
                      className: `px-3 py-1 text-xs font-medium rounded-full ${order.fulfillmentStatus === "FULFILLED" ? "bg-green-100 text-green-800" : "bg-primary/5 text-primary/50"}`,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text, { size: "fine", children: statusMessage(order.fulfillmentStatus) }, void 0, false, {
                        fileName: "app/components/OrderCard.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/OrderCard.tsx",
                      lineNumber: 54,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/OrderCard.tsx",
                  lineNumber: 39,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/OrderCard.tsx",
              lineNumber: 29,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/OrderCard.tsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "self-end border-t", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      Link2,
      {
        className: "block w-full p-2 text-center",
        to: `/account/orders/${legacyOrderId}?${key}`,
        prefetch: "intent",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text, { color: "subtle", className: "ml-3", children: "View Details" }, void 0, false, {
          fileName: "app/components/OrderCard.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/OrderCard.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/OrderCard.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OrderCard.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/AccountDetails.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function AccountDetails({ customer }) {
  const { firstName, lastName, email, phone } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "font-bold text-lead", children: "Account Details" }, void 0, false, {
      fileName: "app/components/AccountDetails.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "lg:p-8 p-6 border border-gray-200 rounded", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "font-bold text-base flex-1", children: "Profile & Security" }, void 0, false, {
          fileName: "app/components/AccountDetails.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          Link2,
          {
            prefetch: "intent",
            className: "underline text-sm font-normal",
            to: "/account/edit",
            children: "Edit"
          },
          void 0,
          false,
          {
            fileName: "app/components/AccountDetails.tsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Name" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1", children: [
        firstName || lastName ? (firstName ? firstName + " " : "") + lastName : "Add name",
        " "
      ] }, void 0, true, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Contact" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1", children: phone ?? "Add mobile" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Email address" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1", children: email }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Password" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1", children: "**************" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccountDetails.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccountDetails.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/AccountDetails.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/AccountAddressBook.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function AccountAddressBook({
  customer,
  addresses
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "font-bold text-lead", children: "Address Book" }, void 0, false, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      !addresses?.length && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Text, { className: "mb-1", width: "narrow", as: "p", size: "copy", children: "You haven't saved any addresses yet." }, void 0, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-48", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        Button,
        {
          to: "address/add",
          className: "mt-2 text-sm w-full mb-6",
          variant: "secondary",
          children: "Add an Address"
        },
        void 0,
        false,
        {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 26,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      Boolean(addresses?.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: [
        customer.defaultAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Address, { address: customer.defaultAddress, defaultAddress: true }, void 0, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        addresses.filter((address) => address.id !== customer.defaultAddress?.id).map((address) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Address, { address }, address.id, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 42,
          columnNumber: 19
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccountAddressBook.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/AccountAddressBook.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function Address({
  address,
  defaultAddress
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "lg:p-8 p-6 border border-gray-200 rounded flex flex-col", children: [
    defaultAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mb-3 flex flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary/50", children: "Default" }, void 0, false, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { className: "flex-1 flex-row", children: [
      (address.firstName || address.lastName) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: "" + (address.firstName && address.firstName + " ") + address?.lastName }, void 0, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      address.formatted && address.formatted.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: line }, line, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 77,
        columnNumber: 51
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-row font-medium mt-6 items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        Link2,
        {
          to: `/account/address/${encodeURIComponent(address.id)}`,
          className: "text-left underline text-sm",
          prefetch: "intent",
          children: "Edit"
        },
        void 0,
        false,
        {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 81,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Form, { action: "address/delete", method: "delete", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "addressId", value: address.id }, void 0, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { className: "text-left text-primary/50 ml-6 text-sm", children: "Remove" }, void 0, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccountAddressBook.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/components/Modal.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function Modal({
  children,
  cancelLink
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    "div",
    {
      className: "relative z-50",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      id: "modal-bg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "fixed inset-0 transition-opacity bg-opacity-75 bg-primary/40" }, void 0, false, {
          fileName: "app/components/Modal.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-center min-h-full p-4 text-center sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "div",
          {
            className: "relative flex-1 px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded shadow-xl bg-contrast sm:my-12 sm:flex-none sm:w-full sm:max-w-sm sm:p-6",
            role: "button",
            onClick: (e5) => {
              e5.stopPropagation();
            },
            onKeyPress: (e5) => {
              e5.stopPropagation();
            },
            tabIndex: 0,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "absolute top-0 right-0 hidden pt-4 pr-4 sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                Link2,
                {
                  to: cancelLink,
                  className: "p-4 -m-4 transition text-primary hover:text-primary/50",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(IconClose, { "aria-label": "Close panel" }, void 0, false, {
                    fileName: "app/components/Modal.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/Modal.tsx",
                  lineNumber: 33,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/Modal.tsx",
                lineNumber: 32,
                columnNumber: 13
              }, this),
              children
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/Modal.tsx",
            lineNumber: 21,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/Modal.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/components/Modal.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Modal.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/components/Link.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function Link2(props) {
  const { to, className, ...resOfProps } = props;
  const [root] = useMatches();
  const selectedLocale = root.data?.selectedLocale;
  let toWithLocale = to;
  if (typeof to === "string") {
    toWithLocale = selectedLocale ? `${selectedLocale.pathPrefix}${to}` : to;
  }
  if (typeof className === "function") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(NavLink, { to: toWithLocale, className, ...resOfProps }, void 0, false, {
      fileName: "app/components/Link.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Link, { to: toWithLocale, className, ...resOfProps }, void 0, false, {
    fileName: "app/components/Link.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

// app/components/FeaturedCollections.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
function FeaturedCollections({
  collections,
  title = "Collections",
  ...props
}) {
  const haveCollections = collections && collections.length > 0;
  if (!haveCollections)
    return null;
  const items = collections.filter((item) => item.image).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Section, { ...props, heading: title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Grid, { items, children: collections.map((collection) => {
    if (!collection?.image) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Link2, { to: `/collections/${collection.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "card-image bg-primary/5 aspect-[3/2]", children: collection?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        Image,
        {
          alt: `Image of ${collection.title}`,
          data: collection.image,
          height: 400,
          sizes: "(max-width: 32em) 100vw, 33vw",
          width: 600,
          widths: [400, 500, 600, 700, 800, 900],
          loaderOptions: {
            scale: 2,
            crop: "center"
          }
        },
        void 0,
        false,
        {
          fileName: "app/components/FeaturedCollections.tsx",
          lineNumber: 32,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/FeaturedCollections.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Heading, { size: "copy", children: collection.title }, void 0, false, {
        fileName: "app/components/FeaturedCollections.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FeaturedCollections.tsx",
      lineNumber: 29,
      columnNumber: 15
    }, this) }, collection.id, false, {
      fileName: "app/components/FeaturedCollections.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/FeaturedCollections.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/FeaturedCollections.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/Hero.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
function Hero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spreadSecondary,
  top
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Link2, { to: `/collections/${handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "section",
    {
      className: clsx_m_default(
        "relative justify-end flex flex-col w-full",
        top && "-mt-nav",
        height === "full" ? "h-screen" : "aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip", children: [
          spread?.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            SpreadMedia,
            {
              scale: 2,
              sizes: spreadSecondary?.reference ? "(min-width: 80em) 700px, (min-width: 48em) 450px, 500px" : "(min-width: 80em) 1400px, (min-width: 48em) 900px, 500px",
              widths: spreadSecondary?.reference ? [500, 450, 700] : [500, 900, 1400],
              width: spreadSecondary?.reference ? 375 : 750,
              data: spread.reference,
              loading
            },
            void 0,
            false,
            {
              fileName: "app/components/Hero.tsx",
              lineNumber: 40,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this),
          spreadSecondary?.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            SpreadMedia,
            {
              sizes: "(min-width: 80em) 700, (min-width: 48em) 450, 500",
              widths: [450, 700],
              width: 375,
              data: spreadSecondary.reference
            },
            void 0,
            false,
            {
              fileName: "app/components/Hero.tsx",
              lineNumber: 60,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast", children: [
          heading?.value && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Heading, { format: true, as: "h2", size: "display", className: "max-w-md", children: heading.value }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          byline?.value && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Text, { format: true, width: "narrow", as: "p", size: "lead", children: byline.value }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          cta?.value && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Text, { size: "lead", children: cta.value }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 80,
            columnNumber: 26
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Hero.tsx",
      lineNumber: 28,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Hero.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function SpreadMedia({
  data,
  loading,
  scale,
  sizes,
  width,
  widths
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    MediaFile,
    {
      data,
      className: "block object-cover w-full h-full",
      mediaOptions: {
        video: {
          controls: false,
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true,
          width: (scale ?? 1) * width,
          previewImageOptions: { scale, src: data.previewImage?.url ?? "" }
        },
        image: {
          loading,
          loaderOptions: { scale, crop: "center" },
          widths,
          sizes,
          width,
          alt: data.alt || ""
        }
      }
    },
    void 0,
    false,
    {
      fileName: "app/components/Hero.tsx",
      lineNumber: 105,
      columnNumber: 5
    },
    this
  );
}

// app/components/SortFilter.tsx
var import_react51 = __toESM(require_react());
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
function SortFilter({
  filters,
  appliedFilters = [],
  children,
  collections = []
}) {
  const [isOpen, setIsOpen] = (0, import_react51.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IconFilters, {}, void 0, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SortMenu, {}, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col flex-wrap md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "div",
        {
          className: `transition-all duration-200 ${isOpen ? "opacity-100 min-w-full md:min-w-[240px] md:w-[240px] md:pr-8 max-h-full" : "opacity-0 md:min-w-[0px] md:w-[0px] pr-0 max-h-0 md:max-h-full"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            FiltersDrawer,
            {
              collections,
              filters,
              appliedFilters
            },
            void 0,
            false,
            {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 60,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex-1", children }, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function FiltersDrawer({
  filters = [],
  appliedFilters = [],
  collections = []
}) {
  const [params] = useSearchParams();
  const location = useLocation();
  const filterMarkup = (filter, option) => {
    switch (filter.type) {
      case "PRICE_RANGE":
        const min = params.has("minPrice") && !isNaN(Number(params.get("minPrice"))) ? Number(params.get("minPrice")) : void 0;
        const max = params.has("maxPrice") && !isNaN(Number(params.get("maxPrice"))) ? Number(params.get("maxPrice")) : void 0;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PriceRangeFilter, { min, max }, void 0, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 97,
          columnNumber: 16
        }, this);
      default:
        const to = getFilterLink(
          filter,
          option.input,
          params,
          location
        );
        return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          Link,
          {
            className: "focus:underline hover:underline",
            prefetch: "intent",
            to,
            children: option.label
          },
          void 0,
          false,
          {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 107,
            columnNumber: 11
          },
          this
        );
    }
  };
  const collectionsMarkup = collections.map((collection) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { className: "pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      Link,
      {
        to: `/collections/${collection.handle}`,
        className: "focus:underline hover:underline",
        prefetch: "intent",
        children: collection.title
      },
      collection.handle,
      false,
      {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 121,
        columnNumber: 9
      },
      this
    ) }, collection.handle, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("nav", { className: "py-8", children: [
    appliedFilters.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "pb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AppliedFilters, { filters: appliedFilters }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 138,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 137,
      columnNumber: 11
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Heading, { as: "h4", size: "lead", className: "pb-4", children: "Filter By" }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 142,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "divide-y", children: filters.map(
      (filter) => filter.values.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ke, { as: "div", className: "w-full", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ke.Button, { className: "flex justify-between w-full py-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text, { size: "lead", children: filter.label }, void 0, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 153,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IconCaret, { direction: open ? "up" : "down" }, void 0, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 154,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 152,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ke.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { className: "py-2", children: filter.values?.map((option) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { className: "pb-4", children: filterMarkup(filter, option) }, option.id, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 160,
            columnNumber: 31
          }, this);
        }) }, filter.id, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 157,
          columnNumber: 25
        }, this) }, filter.id, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 156,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 151,
        columnNumber: 21
      }, this) }, filter.id, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 149,
        columnNumber: 17
      }, this)
    ) }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 135,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
function AppliedFilters({ filters = [] }) {
  const [params] = useSearchParams();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Heading, { as: "h4", size: "lead", className: "pb-4", children: "Applied filters" }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: filters.map((filter) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        Link,
        {
          to: getAppliedFilterLink(filter, params, location),
          className: "flex px-2 border rounded-full gap",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "flex-grow", children: filter.label }, void 0, false, {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 194,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IconXMark, {}, void 0, false, {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 196,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 195,
              columnNumber: 15
            }, this)
          ]
        },
        `${filter.label}-${filter.urlParam}`,
        true,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 189,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 182,
    columnNumber: 5
  }, this);
}
function getAppliedFilterLink(filter, params, location) {
  const paramsClone = new URLSearchParams(params);
  if (filter.urlParam.key === "variantOption") {
    const variantOptions = paramsClone.getAll("variantOption");
    const filteredVariantOptions = variantOptions.filter(
      (options) => !options.includes(filter.urlParam.value)
    );
    paramsClone.delete(filter.urlParam.key);
    for (const filteredVariantOption of filteredVariantOptions) {
      paramsClone.append(filter.urlParam.key, filteredVariantOption);
    }
  } else {
    paramsClone.delete(filter.urlParam.key);
  }
  return `${location.pathname}?${paramsClone.toString()}`;
}
function getSortLink(sort, params, location) {
  params.set("sort", sort);
  return `${location.pathname}?${params.toString()}`;
}
function getFilterLink(filter, rawInput, params, location) {
  const paramsClone = new URLSearchParams(params);
  const newParams = filterInputToParams(filter.type, rawInput, paramsClone);
  return `${location.pathname}?${newParams.toString()}`;
}
var PRICE_RANGE_FILTER_DEBOUNCE = 500;
function PriceRangeFilter({ max, min }) {
  const location = useLocation();
  const params = (0, import_react51.useMemo)(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = (0, import_react51.useState)(min ? String(min) : "");
  const [maxPrice, setMaxPrice] = (0, import_react51.useState)(max ? String(max) : "");
  useDebounce(
    () => {
      if ((minPrice === "" || minPrice === String(min)) && (maxPrice === "" || maxPrice === String(max)))
        return;
      const price = {};
      if (minPrice !== "")
        price.min = minPrice;
      if (maxPrice !== "")
        price.max = maxPrice;
      const newParams = filterInputToParams("PRICE_RANGE", { price }, params);
      navigate(`${location.pathname}?${newParams.toString()}`);
    },
    PRICE_RANGE_FILTER_DEBOUNCE,
    [minPrice, maxPrice]
  );
  const onChangeMax = (event) => {
    const newMaxPrice = event.target.value;
    setMaxPrice(newMaxPrice);
  };
  const onChangeMin = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: "from" }, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 292,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "input",
        {
          name: "maxPrice",
          className: "text-black",
          type: "text",
          defaultValue: min,
          placeholder: "$",
          onChange: onChangeMin
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 293,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 291,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: "to" }, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 303,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "input",
        {
          name: "minPrice",
          className: "text-black",
          type: "number",
          defaultValue: max,
          placeholder: "$",
          onChange: onChangeMax
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 304,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 302,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 290,
    columnNumber: 5
  }, this);
}
function filterInputToParams(type, rawInput, params) {
  const input = typeof rawInput === "string" ? JSON.parse(rawInput) : rawInput;
  switch (type) {
    case "PRICE_RANGE":
      if (input.price.min)
        params.set("minPrice", input.price.min);
      if (input.price.max)
        params.set("maxPrice", input.price.max);
      break;
    case "LIST":
      Object.entries(input).forEach(([key, value]) => {
        if (typeof value === "string") {
          params.set(key, value);
        } else if (typeof value === "boolean") {
          params.set(key, value.toString());
        } else {
          const { name, value: val } = value;
          const allVariants = params.getAll(`variantOption`);
          const newVariant = `${name}:${val}`;
          if (!allVariants.includes(newVariant)) {
            params.append("variantOption", newVariant);
          }
        }
      });
      break;
  }
  return params;
}
function SortMenu() {
  const items = [
    { label: "Featured", key: "featured" },
    {
      label: "Price: Low - High",
      key: "price-low-high"
    },
    {
      label: "Price: High - Low",
      key: "price-high-low"
    },
    {
      label: "Best Selling",
      key: "best-selling"
    },
    {
      label: "Newest",
      key: "newest"
    }
  ];
  const [params] = useSearchParams();
  const location = useLocation();
  const activeItem = items.find((item) => item.key === params.get("sort"));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Ze, { as: "div", className: "relative z-40", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Ze.Button, { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "px-2 font-medium", children: "Sort by:" }, void 0, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 377,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: (activeItem || items[0]).label }, void 0, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 378,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 376,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IconCaret, {}, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 380,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 375,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      Ze.Items,
      {
        as: "nav",
        className: "absolute right-0 flex flex-col p-4 text-right rounded-sm bg-contrast",
        children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Ze.Item, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          Link,
          {
            className: `block text-sm pb-2 px-3 ${activeItem?.key === item.key ? "font-bold" : "font-normal"}`,
            to: getSortLink(item.key, params, location),
            children: item.label
          },
          void 0,
          false,
          {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 390,
            columnNumber: 15
          },
          this
        ) }, item.label, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 388,
          columnNumber: 11
        }, this))
      },
      void 0,
      false,
      {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 383,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 374,
    columnNumber: 5
  }, this);
}

// app/components/Grid.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
function Grid({
  as: Component2 = "div",
  className,
  flow = "row",
  gap = "default",
  items = 4,
  layout = "default",
  ...props
}) {
  const layouts = {
    default: `grid-cols-1 ${items === 2 && "md:grid-cols-2"}  ${items === 3 && "sm:grid-cols-3"} ${items > 3 && "md:grid-cols-3"} ${items >= 4 && "lg:grid-cols-4"}`,
    products: `grid-cols-2 ${items >= 3 && "md:grid-cols-3"} ${items >= 4 && "lg:grid-cols-4"}`,
    auto: "auto-cols-auto",
    blog: "grid-cols-1 md:grid-cols-2"
  };
  const gaps = {
    default: "grid gap-2 gap-y-6 md:gap-4 lg:gap-6",
    blog: "grid gap-6"
  };
  const flows = {
    row: "grid-flow-row",
    col: "grid-flow-col"
  };
  const styles = clsx_m_default(flows[flow], gaps[gap], layouts[layout], className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Component2, { ...props, className: styles }, void 0, false, {
    fileName: "app/components/Grid.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}

// app/components/FeaturedProducts.tsx
var import_react55 = __toESM(require_react());
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
function FeaturedProducts({
  count = 4,
  heading = "Shop Best Sellers",
  layout = "drawer",
  onClose,
  query,
  reverse,
  sortKey = "BEST_SELLING"
}) {
  const { load, data } = useFetcher();
  const queryString = (0, import_react55.useMemo)(
    () => Object.entries({ count, sortKey, query, reverse }).map(([key, val]) => val ? `${key}=${val}` : null).filter(Boolean).join("&"),
    [count, sortKey, query, reverse]
  );
  (0, import_react55.useEffect)(() => {
    load(`/api/products?${queryString}`);
  }, [load, queryString]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Heading, { format: true, size: "copy", className: "t-4", children: heading }, void 0, false, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "div",
      {
        className: clsx_m_default([
          `grid grid-cols-2 gap-x-6 gap-y-8`,
          layout === "page" ? "md:grid-cols-4 sm:grid-col-4" : ""
        ]),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          FeatureProductsContent,
          {
            count,
            onClick: onClose,
            products: data?.products
          },
          void 0,
          false,
          {
            fileName: "app/components/FeaturedProducts.tsx",
            lineNumber: 64,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/FeaturedProducts.tsx",
        lineNumber: 58,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/FeaturedProducts.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function FeatureProductsContent({
  count = 4,
  onClick,
  products
}) {
  const id = (0, import_react55.useId)();
  if (!products) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [...new Array(count)].map((_4, i7) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Skeleton, { className: "aspect-[3/4]" }, void 0, false, {
        fileName: "app/components/FeaturedProducts.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Skeleton, { className: "w-32 h-4" }, void 0, false, {
        fileName: "app/components/FeaturedProducts.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, `${id + i7}`, true, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this);
  }
  if (products?.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { format: true, children: "No products found." }, void 0, false, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 102,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    ProductCard,
    {
      product,
      onClick,
      quickAdd: true
    },
    product.id,
    false,
    {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 108,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/FeaturedProducts.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/components/Pagination.tsx
var import_react57 = __toESM(require_react());
function Pagination({
  connection,
  children = () => null,
  autoLoadOnScroll = true
}) {
  const transition = useTransition();
  const isLoading = transition.state === "loading";
  const autoScrollEnabled = Boolean(autoLoadOnScroll);
  const autoScrollConfig = autoScrollEnabled ? autoLoadOnScroll : {
    threshold: 0,
    rootMargin: "1000px 0px 0px 0px"
  };
  const { ref: nextLinkRef, inView } = useInView(autoScrollConfig);
  const {
    endCursor,
    hasNextPage,
    hasPreviousPage,
    nextPageUrl,
    nodes,
    prevPageUrl,
    startCursor
  } = usePagination(connection);
  useLoadMoreWhenInView({
    disabled: !autoScrollEnabled,
    connection: {
      pageInfo: { startCursor, endCursor, hasPreviousPage, hasNextPage },
      nodes
    },
    inView,
    isLoading
  });
  return children({
    endCursor,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    nextLinkRef,
    nextPageUrl,
    nodes,
    prevPageUrl,
    startCursor
  });
}
function usePagination(connection) {
  const [nodes, setNodes] = (0, import_react57.useState)(connection.nodes);
  const { state, search } = useLocation();
  const params = new URLSearchParams(search);
  const direction = params.get("direction");
  const isPrevious = direction === "previous";
  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = connection.pageInfo;
  const currentPageInfo = (0, import_react57.useMemo)(() => {
    let pageStartCursor = state?.pageInfo?.startCursor === void 0 ? startCursor : state.pageInfo.startCursor;
    let pageEndCursor = state?.pageInfo?.endCursor === void 0 ? endCursor : state.pageInfo.endCursor;
    if (state?.nodes) {
      if (isPrevious) {
        pageStartCursor = startCursor;
      } else {
        pageEndCursor = endCursor;
      }
    }
    const previousPageExists = state?.pageInfo?.hasPreviousPage === void 0 ? hasPreviousPage : state.pageInfo.hasPreviousPage;
    const nextPageExists = state?.pageInfo?.hasNextPage === void 0 ? hasNextPage : state.pageInfo.hasNextPage;
    return {
      startCursor: pageStartCursor,
      endCursor: pageEndCursor,
      hasPreviousPage: previousPageExists,
      hasNextPage: nextPageExists
    };
  }, [isPrevious, state, hasNextPage, hasPreviousPage, startCursor, endCursor]);
  const prevPageUrl = (0, import_react57.useMemo)(() => {
    const params2 = new URLSearchParams(search);
    params2.set("direction", "previous");
    currentPageInfo.startCursor && params2.set("cursor", currentPageInfo.startCursor);
    return `?${params2.toString()}`;
  }, [search, currentPageInfo.startCursor]);
  const nextPageUrl = (0, import_react57.useMemo)(() => {
    const params2 = new URLSearchParams(search);
    params2.set("direction", "next");
    currentPageInfo.endCursor && params2.set("cursor", currentPageInfo.endCursor);
    return `?${params2.toString()}`;
  }, [search, currentPageInfo.endCursor]);
  (0, import_react57.useEffect)(() => {
    if (!state || !state?.nodes) {
      setNodes(connection.nodes);
      return;
    }
    if (isPrevious) {
      setNodes([...connection.nodes, ...state.nodes]);
    } else {
      setNodes([...state.nodes, ...connection.nodes]);
    }
  }, [state, isPrevious, connection.nodes]);
  return { ...currentPageInfo, prevPageUrl, nextPageUrl, nodes };
}
function useLoadMoreWhenInView({
  disabled,
  inView,
  isLoading,
  connection
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    pageInfo: { startCursor, endCursor, hasPreviousPage, hasNextPage },
    nodes
  } = connection;
  (0, import_react57.useEffect)(() => {
    if (!inView)
      return;
    if (!hasNextPage)
      return;
    if (!endCursor)
      return;
    if (disabled)
      return;
    if (isLoading)
      return;
    const nextPageUrl = location.pathname + `?index&cursor=${endCursor}&direction=next`;
    navigate(nextPageUrl, {
      state: {
        pageInfo: {
          endCursor,
          hasPreviousPage,
          startCursor
        },
        nodes
      }
    });
  }, [
    disabled,
    endCursor,
    hasNextPage,
    hasPreviousPage,
    inView,
    isLoading,
    nodes,
    location.pathname,
    navigate,
    startCursor
  ]);
}

// app/components/AddToCartButton.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
function AddToCartButton({
  children,
  lines,
  className = "",
  variant = "primary",
  width = "full",
  analytics,
  ...props
}) {
  const [root] = useMatches();
  const selectedLocale = root?.data?.selectedLocale;
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "hidden", name: "cartAction", value: "ADD_TO_CART" /* ADD_TO_CART */ }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "hidden", name: "countryCode", value: selectedLocale.country }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "hidden", name: "lines", value: JSON.stringify(lines) }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "hidden", name: "analytics", value: JSON.stringify(analytics) }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      Button,
      {
        as: "button",
        type: "submit",
        width,
        variant,
        className,
        ...props,
        children
      },
      void 0,
      false,
      {
        fileName: "app/components/AddToCartButton.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/AddToCartButton.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/components/Icon.tsx
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime());
function Icon({
  children,
  className,
  fill = "currentColor",
  stroke,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      ...props,
      fill,
      stroke,
      className: clsx_m_default("w-5 h-5", className),
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/Icon.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
function IconMenu(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Menu" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "3", y1: "6.375", x2: "17", y2: "6.375", strokeWidth: "1.25" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "3", y1: "10.375", x2: "17", y2: "10.375", strokeWidth: "1.25" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "3", y1: "14.375", x2: "17", y2: "14.375", strokeWidth: "1.25" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function IconClose(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Close" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "line",
      {
        x1: "4.44194",
        y1: "4.30806",
        x2: "15.7556",
        y2: "15.6218",
        strokeWidth: "1.25"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "line",
      {
        y1: "-0.625",
        x2: "16",
        y2: "-0.625",
        transform: "matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)",
        strokeWidth: "1.25"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function IconCaret({
  direction = "down",
  stroke = "currentColor",
  ...props
}) {
  let rotate;
  switch (direction) {
    case "down":
      rotate = "rotate-0";
      break;
    case "up":
      rotate = "rotate-180";
      break;
    case "left":
      rotate = "-rotate-90";
      break;
    case "right":
      rotate = "rotate-90";
      break;
    default:
      rotate = "rotate-0";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    Icon,
    {
      ...props,
      className: `w-5 h-5 transition ${rotate}`,
      fill: "transparent",
      stroke,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Caret" }, void 0, false, {
          fileName: "app/components/Icon.tsx",
          lineNumber: 120,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M14 8L10 12L6 8", strokeWidth: "1.25" }, void 0, false, {
          fileName: "app/components/Icon.tsx",
          lineNumber: 121,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Icon.tsx",
      lineNumber: 114,
      columnNumber: 5
    },
    this
  );
}
function IconBag(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Bag" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 140,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 138,
    columnNumber: 5
  }, this);
}
function IconAccount(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Account" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M9.9998 12.625c-1.9141 0-3.6628.698-5.0435 1.8611C3.895 13.2935 3.25 11.7221 3.25 10c0-3.728 3.022-6.75 6.75-6.75 3.7279 0 6.75 3.022 6.75 6.75 0 1.7222-.645 3.2937-1.7065 4.4863-1.3807-1.1632-3.1295-1.8613-5.0437-1.8613ZM10 18c-2.3556 0-4.4734-1.0181-5.9374-2.6382C2.7806 13.9431 2 12.0627 2 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8Zm0-12.5c-1.567 0-2.75 1.394-2.75 3s1.183 3 2.75 3 2.75-1.394 2.75-3-1.183-3-2.75-3Z"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 152,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 150,
    columnNumber: 5
  }, this);
}
function IconSearch(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Search" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M13.3 8.52a4.77 4.77 0 1 1-9.55 0 4.77 4.77 0 0 1 9.55 0Zm-.98 4.68a6.02 6.02 0 1 1 .88-.88l4.3 4.3-.89.88-4.3-4.3Z"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 173,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 171,
    columnNumber: 5
  }, this);
}
function IconCheck({
  stroke = "currentColor",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, fill: "transparent", stroke, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Check" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("circle", { cx: "10", cy: "10", r: "7.25", strokeWidth: "1.25" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "m7.04 10.37 2.42 2.41 3.5-5.56"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 189,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 186,
    columnNumber: 5
  }, this);
}
function IconXMark({
  stroke = "currentColor",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, fill: "transparent", stroke, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Delete" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 205,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 206,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 204,
    columnNumber: 5
  }, this);
}
function IconRemove(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, fill: "transparent", stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Remove" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        d: "M4 6H16",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 219,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M8.5 9V14", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M11.5 9V14", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 226,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        d: "M5.5 6L6 17H14L14.5 6",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 227,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        d: "M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6",
        strokeWidth: "1.25"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 233,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 217,
    columnNumber: 5
  }, this);
}
function IconFilters(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, fill: "transparent", stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Filters" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("circle", { cx: "4.5", cy: "6.5", r: "2" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "6", y1: "6.5", x2: "14", y2: "6.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "4.37114e-08", y1: "6.5", x2: "3", y2: "6.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 247,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "4.37114e-08", y1: "13.5", x2: "8", y2: "13.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "11", y1: "13.5", x2: "14", y2: "13.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 249,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("circle", { cx: "9.5", cy: "13.5", r: "2" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 250,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 243,
    columnNumber: 5
  }, this);
}

// app/components/Layout.tsx
var import_react64 = __toESM(require_react());

// app/hooks/useIsHydrated.tsx
var import_react60 = __toESM(require_react());
function useIsHydrated() {
  const [isHydrated, setHydrated] = (0, import_react60.useState)(false);
  (0, import_react60.useEffect)(() => {
    setHydrated(true);
  }, []);
  return isHydrated;
}

// app/hooks/useCartFetchers.tsx
function useCartFetchers(actionName) {
  const fetchers = useFetchers();
  const cartFetchers = [];
  for (const fetcher of fetchers) {
    const formData = fetcher.submission?.formData;
    if (formData && formData.get("cartAction") === actionName) {
      cartFetchers.push(fetcher);
    }
  }
  return cartFetchers;
}

// app/components/Layout.tsx
var import_jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime());
function Layout({
  children,
  layout
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("a", { href: "#mainContent", className: "sr-only", children: "Skip to content" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        Header,
        {
          title: layout?.shop.name ?? "Hydrogen",
          menu: layout?.headerMenu
        },
        void 0,
        false,
        {
          fileName: "app/components/Layout.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("main", { role: "main", id: "mainContent", className: "flex-grow", children }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Footer, { menu: layout?.footerMenu }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function Header({ title, menu }) {
  const isHome = useIsHomePath();
  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart
  } = useDrawer();
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu
  } = useDrawer();
  const addToCartFetchers = useCartFetchers("ADD_TO_CART");
  (0, import_react64.useEffect)(() => {
    if (isCartOpen || !addToCartFetchers.length)
      return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CartDrawer, { isOpen: isCartOpen, onClose: closeCart }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    menu && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(MenuDrawer, { isOpen: isMenuOpen, onClose: closeMenu, menu }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      DesktopHeader,
      {
        isHome,
        title,
        menu,
        openCart
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.tsx",
        lineNumber: 88,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      MobileHeader,
      {
        isHome,
        title,
        openCart,
        openMenu
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.tsx",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function CartDrawer({ isOpen, onClose }) {
  const [root] = useMatches();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Drawer, { open: isOpen, onClose, heading: "Cart", openFrom: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react64.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CartLoading, {}, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 110,
    columnNumber: 29
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Await, { resolve: root.data?.cart, children: (cart) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Cart, { layout: "drawer", onClose, cart }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 112,
    columnNumber: 24
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 111,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 110,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}
function MenuDrawer({
  isOpen,
  onClose,
  menu
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Drawer, { open: isOpen, onClose, openFrom: "left", heading: "Menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(MenuMobileNav, { menu, onClose }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 132,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 131,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}
function MenuMobileNav({
  menu,
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("nav", { className: "grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8", children: (menu?.items || []).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Link2,
    {
      to: item.to,
      target: item.target,
      onClick: onClose,
      className: ({ isActive }) => isActive ? "pb-1 border-b -mb-px" : "pb-1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Text, { as: "span", size: "copy", children: item.title }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 150,
      columnNumber: 11
    },
    this
  ) }, item.id, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 149,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 146,
    columnNumber: 5
  }, this);
}
function MobileHeader({
  title,
  isHome,
  openCart,
  openMenu
}) {
  const params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "header",
    {
      role: "banner",
      className: `${isHome ? "bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader" : "bg-contrast/80 text-primary"} flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center justify-start w-full gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            "button",
            {
              onClick: openMenu,
              className: "relative flex items-center justify-center w-8 h-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconMenu, {}, void 0, false, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 197,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 193,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Form,
            {
              method: "get",
              action: params.lang ? `/${params.lang}/search` : "/search",
              className: "items-center gap-2 sm:flex",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    className: "relative flex items-center justify-center w-8 h-8",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconSearch, {}, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 208,
                      columnNumber: 13
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 204,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  Input,
                  {
                    className: isHome ? "focus:border-contrast/20 dark:focus:border-primary/20" : "focus:border-primary/20",
                    type: "search",
                    variant: "minisearch",
                    placeholder: "Search",
                    name: "q"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 199,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 192,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          Link2,
          {
            className: "flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full",
            to: "/",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Heading, { className: "font-bold text-center", as: isHome ? "h1" : "h2", children: title }, void 0, false, {
              fileName: "app/components/Layout.tsx",
              lineNumber: 228,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 224,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center justify-end w-full gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Link2,
            {
              to: "/account",
              className: "relative flex items-center justify-center w-8 h-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconAccount, {}, void 0, false, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 238,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 234,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CartCount, { isHome, openCart }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 240,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 233,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 184,
      columnNumber: 5
    },
    this
  );
}
function DesktopHeader({
  isHome,
  menu,
  openCart,
  title
}) {
  const params = useParams();
  const { y: y4 } = useWindowScroll_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "header",
    {
      role: "banner",
      className: `${isHome ? "bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader" : "bg-contrast/80 text-primary"} ${!isHome && y4 > 50 && " shadow-lightHeader"} hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex gap-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Link2, { className: "font-bold", to: "/", prefetch: "intent", children: title }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 271,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("nav", { className: "flex gap-8", children: (menu?.items || []).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Link2,
            {
              to: item.to,
              target: item.target,
              prefetch: "intent",
              className: ({ isActive }) => isActive ? "pb-1 border-b -mb-px" : "pb-1",
              children: item.title
            },
            item.id,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 277,
              columnNumber: 13
            },
            this
          )) }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 274,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 270,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Form,
            {
              method: "get",
              action: params.lang ? `/${params.lang}/search` : "/search",
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  Input,
                  {
                    className: isHome ? "focus:border-contrast/20 dark:focus:border-primary/20" : "focus:border-primary/20",
                    type: "search",
                    variant: "minisearch",
                    placeholder: "Search",
                    name: "q"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 297,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconSearch, {}, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 312,
                      columnNumber: 13
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 308,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 292,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Link2,
            {
              to: "/account",
              className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconAccount, {}, void 0, false, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 319,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 315,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CartCount, { isHome, openCart }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 321,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 291,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 260,
      columnNumber: 5
    },
    this
  );
}
function CartCount({
  isHome,
  openCart
}) {
  const [root] = useMatches();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react64.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Badge, { count: 0, dark: isHome, openCart }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 337,
    columnNumber: 25
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Await, { resolve: root.data?.cart, children: (cart) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Badge,
    {
      dark: isHome,
      openCart,
      count: cart?.totalQuantity || 0
    },
    void 0,
    false,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 340,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 338,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 337,
    columnNumber: 5
  }, this);
}
function Badge({
  openCart,
  dark,
  count
}) {
  const isHydrated = useIsHydrated();
  const BadgeCounter = (0, import_react64.useMemo)(
    () => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconBag, {}, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 365,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "div",
        {
          className: `${dark ? "text-primary bg-contrast dark:text-contrast dark:bg-primary" : "text-contrast bg-primary"} absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { children: count || 0 }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 373,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Layout.tsx",
          lineNumber: 366,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 364,
      columnNumber: 7
    }, this),
    [count, dark]
  );
  return isHydrated ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "button",
    {
      onClick: openCart,
      className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
      children: BadgeCounter
    },
    void 0,
    false,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 381,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Link2,
    {
      to: "/cart",
      className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
      children: BadgeCounter
    },
    void 0,
    false,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 388,
      columnNumber: 5
    },
    this
  );
}
function Footer({ menu }) {
  const isHome = useIsHomePath();
  const itemsCount = menu ? menu?.items?.length + 1 > 4 ? 4 : menu?.items?.length + 1 : [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Section,
    {
      divider: isHome ? "none" : "top",
      as: "footer",
      role: "contentinfo",
      className: `grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(FooterMenu, { menu }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 413,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CountrySelector, {}, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 414,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "div",
          {
            className: `self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`,
            children: [
              "\xA9 ",
              new Date().getFullYear(),
              " / Shopify, Inc. Hydrogen is an MIT Licensed Open Source project."
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 415,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 406,
      columnNumber: 5
    },
    this
  );
}
var FooterLink = ({ item }) => {
  if (item.to.startsWith("http")) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("a", { href: item.to, target: item.target, rel: "noopener noreferrer", children: item.title }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 428,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Link2, { to: item.to, target: item.target, prefetch: "intent", children: item.title }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 435,
    columnNumber: 5
  }, this);
};
function FooterMenu({ menu }) {
  const styles = {
    section: "grid gap-4",
    nav: "grid gap-2 pb-6"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: (menu?.items || []).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("section", { className: styles.section, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ke, { children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ke.Button, { className: "text-left md:cursor-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Heading, { className: "flex justify-between", size: "lead", as: "h3", children: [
      item.title,
      item?.items?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconCaret, { direction: open ? "up" : "down" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 459,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 458,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 455,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 454,
      columnNumber: 17
    }, this),
    item?.items?.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "div",
      {
        className: `${open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`} overflow-hidden transition-all duration-300`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react64.Suspense, { "data-comment": "This suspense fixes a hydration bug in Disclosure.Panel with static prop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ke.Panel, { static: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("nav", { className: styles.nav, children: item.items.map((subItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(FooterLink, { item: subItem }, subItem.id, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 474,
          columnNumber: 29
        }, this)) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 472,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 471,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 470,
          columnNumber: 21
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.tsx",
        lineNumber: 465,
        columnNumber: 19
      },
      this
    ) : null
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 453,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 451,
    columnNumber: 11
  }, this) }, item.id, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 450,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 448,
    columnNumber: 5
  }, this);
}

export {
  l,
  s2 as s,
  m2 as m,
  p2 as p,
  o2 as o,
  I,
  u,
  e2 as e,
  F,
  h3 as h,
  A,
  L3 as L,
  s3 as s2,
  y,
  a3 as a,
  x2 as x,
  j,
  X,
  V,
  P,
  r3 as r,
  s6 as s3,
  h4 as h2,
  d2 as d,
  C,
  c2 as c,
  o5 as o2,
  u3 as u2,
  ke,
  Layout,
  clsx_m_default,
  Text,
  Heading,
  Section,
  PageHeader,
  Input,
  ATTR_LOADING_EAGER,
  getImageLoadingPriority,
  ProductGallery,
  getHeroPlaceholder,
  ProductCard,
  ProductSwimlane,
  ProductGrid,
  Skeleton,
  Button,
  Cart,
  CartLoading,
  OrderCard,
  AccountDetails,
  AccountAddressBook,
  Modal,
  Link2 as Link,
  FeaturedCollections,
  Hero,
  SortFilter,
  Grid,
  Pagination,
  AddToCartButton,
  IconClose,
  IconCaret,
  IconCheck
};
//# sourceMappingURL=/build/_shared/chunk-2T36A5ND.js.map
