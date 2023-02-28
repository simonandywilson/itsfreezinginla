import {
  MEDIA_FRAGMENT,
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  A,
  AddToCartButton,
  C,
  F,
  Heading,
  I,
  IconCaret,
  IconCheck,
  IconClose,
  L,
  Link,
  P,
  ProductGallery,
  ProductSwimlane,
  Section,
  Skeleton,
  Text,
  V,
  X,
  a,
  c,
  clsx_m_default,
  d,
  e,
  h,
  h2,
  j,
  ke,
  l,
  m,
  o,
  o2,
  p,
  r,
  s,
  s2,
  s3,
  u,
  u2,
  x,
  y
} from "/build/_shared/chunk-2T36A5ND.js";
import {
  getExcerpt
} from "/build/_shared/chunk-7IMEBFFC.js";
import "/build/_shared/chunk-F6XALK7G.js";
import {
  Money,
  ShopPayButton,
  flattenConnection
} from "/build/_shared/chunk-IKF5OSCB.js";
import "/build/_shared/chunk-BWK6FPRY.js";
import "/build/_shared/chunk-B5NAOUMV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NDYBTKM5.js";
import {
  Await,
  require_react,
  useLoaderData,
  useLocation,
  useSearchParams,
  useTransition
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/products/$productHandle.tsx
var import_react4 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react = __toESM(require_react(), 1);
function i(e3, o4) {
  let [u3, t] = (0, import_react.useState)(e3), r2 = s(e3);
  return l(() => t(r2.current), [r2, t, ...o4]), u3;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e2(n = {}, r2 = null, t = []) {
  for (let [i2, o4] of Object.entries(n))
    f(t, s5(r2, i2), o4);
  return t;
}
function s5(n, r2) {
  return n ? n + "[" + r2 + "]" : r2;
}
function f(n, r2, t) {
  if (Array.isArray(t))
    for (let [i2, o4] of t.entries())
      f(n, s5(r2, i2.toString()), o4);
  else
    t instanceof Date ? n.push([r2, t.toISOString()]) : typeof t == "boolean" ? n.push([r2, t ? "1" : "0"]) : typeof t == "string" ? n.push([r2, t]) : typeof t == "number" ? n.push([r2, `${t}`]) : t == null ? n.push([r2, ""]) : e2(t, r2, n);
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react2 = __toESM(require_react(), 1);
function T(l2, r2, c2) {
  let [i2, s6] = (0, import_react2.useState)(c2), e3 = l2 !== void 0, t = (0, import_react2.useRef)(e3), u3 = (0, import_react2.useRef)(false), d2 = (0, import_react2.useRef)(false);
  return e3 && !t.current && !u3.current ? (u3.current = true, t.current = e3, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e3 && t.current && !d2.current && (d2.current = true, t.current = e3, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e3 ? l2 : i2, o((n) => (e3 || s6(n), r2 == null ? void 0 : r2(n)))];
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react3 = __toESM(require_react(), 1);
var Ue = ((o4) => (o4[o4.Open = 0] = "Open", o4[o4.Closed = 1] = "Closed", o4))(Ue || {});
var Be = ((o4) => (o4[o4.Single = 0] = "Single", o4[o4.Multi = 1] = "Multi", o4))(Be || {});
var He = ((o4) => (o4[o4.Pointer = 0] = "Pointer", o4[o4.Other = 1] = "Other", o4))(He || {});
var Ge = ((n) => (n[n.OpenListbox = 0] = "OpenListbox", n[n.CloseListbox = 1] = "CloseListbox", n[n.GoToOption = 2] = "GoToOption", n[n.Search = 3] = "Search", n[n.ClearSearch = 4] = "ClearSearch", n[n.RegisterOption = 5] = "RegisterOption", n[n.UnregisterOption = 6] = "UnregisterOption", n[n.RegisterLabel = 7] = "RegisterLabel", n))(Ge || {});
function q(e3, r2 = (o4) => o4) {
  let o4 = e3.activeOptionIndex !== null ? e3.options[e3.activeOptionIndex] : null, p2 = A(r2(e3.options.slice()), (c2) => c2.dataRef.current.domRef.current), i2 = o4 ? p2.indexOf(o4) : null;
  return i2 === -1 && (i2 = null), { options: p2, activeOptionIndex: i2 };
}
var je = { [1](e3) {
  return e3.dataRef.current.disabled || e3.listboxState === 1 ? e3 : { ...e3, activeOptionIndex: null, listboxState: 1 };
}, [0](e3) {
  if (e3.dataRef.current.disabled || e3.listboxState === 0)
    return e3;
  let r2 = e3.activeOptionIndex, { isSelected: o4 } = e3.dataRef.current, p2 = e3.options.findIndex((i2) => o4(i2.dataRef.current.value));
  return p2 !== -1 && (r2 = p2), { ...e3, listboxState: 0, activeOptionIndex: r2 };
}, [2](e3, r2) {
  var i2;
  if (e3.dataRef.current.disabled || e3.listboxState === 1)
    return e3;
  let o4 = q(e3), p2 = x(r2, { resolveItems: () => o4.options, resolveActiveIndex: () => o4.activeOptionIndex, resolveId: (c2) => c2.id, resolveDisabled: (c2) => c2.dataRef.current.disabled });
  return { ...e3, ...o4, searchQuery: "", activeOptionIndex: p2, activationTrigger: (i2 = r2.trigger) != null ? i2 : 1 };
}, [3]: (e3, r2) => {
  if (e3.dataRef.current.disabled || e3.listboxState === 1)
    return e3;
  let p2 = e3.searchQuery !== "" ? 0 : 1, i2 = e3.searchQuery + r2.value.toLowerCase(), t = (e3.activeOptionIndex !== null ? e3.options.slice(e3.activeOptionIndex + p2).concat(e3.options.slice(0, e3.activeOptionIndex + p2)) : e3.options).find((n) => {
    var T2;
    return !n.dataRef.current.disabled && ((T2 = n.dataRef.current.textValue) == null ? void 0 : T2.startsWith(i2));
  }), u3 = t ? e3.options.indexOf(t) : -1;
  return u3 === -1 || u3 === e3.activeOptionIndex ? { ...e3, searchQuery: i2 } : { ...e3, searchQuery: i2, activeOptionIndex: u3, activationTrigger: 1 };
}, [4](e3) {
  return e3.dataRef.current.disabled || e3.listboxState === 1 || e3.searchQuery === "" ? e3 : { ...e3, searchQuery: "" };
}, [5]: (e3, r2) => {
  let o4 = { id: r2.id, dataRef: r2.dataRef }, p2 = q(e3, (i2) => [...i2, o4]);
  return e3.activeOptionIndex === null && e3.dataRef.current.isSelected(r2.dataRef.current.value) && (p2.activeOptionIndex = p2.options.indexOf(o4)), { ...e3, ...p2 };
}, [6]: (e3, r2) => {
  let o4 = q(e3, (p2) => {
    let i2 = p2.findIndex((c2) => c2.id === r2.id);
    return i2 !== -1 && p2.splice(i2, 1), p2;
  });
  return { ...e3, ...o4, activationTrigger: 1 };
}, [7]: (e3, r2) => ({ ...e3, labelId: r2.id }) };
var X2 = (0, import_react3.createContext)(null);
X2.displayName = "ListboxActionsContext";
function B(e3) {
  let r2 = (0, import_react3.useContext)(X2);
  if (r2 === null) {
    let o4 = new Error(`<${e3} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, B), o4;
  }
  return r2;
}
var J = (0, import_react3.createContext)(null);
J.displayName = "ListboxDataContext";
function H(e3) {
  let r2 = (0, import_react3.useContext)(J);
  if (r2 === null) {
    let o4 = new Error(`<${e3} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, H), o4;
  }
  return r2;
}
function Ke(e3, r2) {
  return u(r2.type, je, e3, r2);
}
var Ve = import_react3.Fragment;
var Ne = V(function(r2, o4) {
  let { value: p2, defaultValue: i2, name: c2, onChange: t, by: u3 = (l2, f3) => l2 === f3, disabled: n = false, horizontal: T2 = false, multiple: g = false, ...A2 } = r2;
  const m2 = T2 ? "horizontal" : "vertical";
  let P2 = y(o4), [y2 = g ? [] : void 0, S] = T(p2, t, i2), [h3, s6] = (0, import_react3.useReducer)(Ke, { dataRef: (0, import_react3.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), a2 = (0, import_react3.useRef)({ static: false, hold: false }), x2 = (0, import_react3.useRef)(null), D = (0, import_react3.useRef)(null), $ = (0, import_react3.useRef)(null), M = o(typeof u3 == "string" ? (l2, f3) => {
    let v = u3;
    return (l2 == null ? void 0 : l2[v]) === (f3 == null ? void 0 : f3[v]);
  } : u3), L2 = (0, import_react3.useCallback)((l2) => u(d2.mode, { [1]: () => y2.some((f3) => M(f3, l2)), [0]: () => M(y2, l2) }), [y2]), d2 = (0, import_react3.useMemo)(() => ({ ...h3, value: y2, disabled: n, mode: g ? 1 : 0, orientation: m2, compare: M, isSelected: L2, optionsPropsRef: a2, labelRef: x2, buttonRef: D, optionsRef: $ }), [y2, n, g, h3]);
  l(() => {
    h3.dataRef.current = d2;
  }, [d2]), L([d2.buttonRef, d2.optionsRef], (l2, f3) => {
    var v;
    s6({ type: 1 }), h(f3, F.Loose) || (l2.preventDefault(), (v = d2.buttonRef.current) == null || v.focus());
  }, d2.listboxState === 0);
  let G = (0, import_react3.useMemo)(() => ({ open: d2.listboxState === 0, disabled: n, value: y2 }), [d2, n, y2]), ie = o((l2) => {
    let f3 = d2.options.find((v) => v.id === l2);
    !f3 || k(f3.dataRef.current.value);
  }), re = o(() => {
    if (d2.activeOptionIndex !== null) {
      let { dataRef: l2, id: f3 } = d2.options[d2.activeOptionIndex];
      k(l2.current.value), s6({ type: 2, focus: a.Specific, id: f3 });
    }
  }), ae = o(() => s6({ type: 0 })), le = o(() => s6({ type: 1 })), se = o((l2, f3, v) => l2 === a.Specific ? s6({ type: 2, focus: a.Specific, id: f3, trigger: v }) : s6({ type: 2, focus: l2, trigger: v })), ue = o((l2, f3) => (s6({ type: 5, id: l2, dataRef: f3 }), () => s6({ type: 6, id: l2 }))), pe = o((l2) => (s6({ type: 7, id: l2 }), () => s6({ type: 7, id: null }))), k = o((l2) => u(d2.mode, { [0]() {
    return S == null ? void 0 : S(l2);
  }, [1]() {
    let f3 = d2.value.slice(), v = f3.findIndex((w) => M(w, l2));
    return v === -1 ? f3.push(l2) : f3.splice(v, 1), S == null ? void 0 : S(f3);
  } })), de = o((l2) => s6({ type: 3, value: l2 })), ce = o(() => s6({ type: 4 })), fe = (0, import_react3.useMemo)(() => ({ onChange: k, registerOption: ue, registerLabel: pe, goToOption: se, closeListbox: le, openListbox: ae, selectActiveOption: re, selectOption: ie, search: de, clearSearch: ce }), []), be = { ref: P2 }, j2 = (0, import_react3.useRef)(null), Te = p();
  return (0, import_react3.useEffect)(() => {
    !j2.current || i2 !== void 0 && Te.addEventListener(j2.current, "reset", () => {
      k(i2);
    });
  }, [j2, k]), import_react3.default.createElement(X2.Provider, { value: fe }, import_react3.default.createElement(J.Provider, { value: d2 }, import_react3.default.createElement(c, { value: u(d2.listboxState, { [0]: d.Open, [1]: d.Closed }) }, c2 != null && y2 != null && e2({ [c2]: y2 }).map(([l2, f3], v) => import_react3.default.createElement(h2, { features: s3.Hidden, ref: v === 0 ? (w) => {
    var Y;
    j2.current = (Y = w == null ? void 0 : w.closest("form")) != null ? Y : null;
  } : void 0, ...P({ key: l2, as: "input", type: "hidden", hidden: true, readOnly: true, name: l2, value: f3 }) })), X({ ourProps: be, theirProps: A2, slot: G, defaultTag: Ve, name: "Listbox" }))));
});
var We = "button";
var Qe = V(function(r2, o4) {
  var h3;
  let p2 = I(), { id: i2 = `headlessui-listbox-button-${p2}`, ...c2 } = r2, t = H("Listbox.Button"), u3 = B("Listbox.Button"), n = y(t.buttonRef, o4), T2 = p(), g = o((s6) => {
    switch (s6.key) {
      case o2.Space:
      case o2.Enter:
      case o2.ArrowDown:
        s6.preventDefault(), u3.openListbox(), T2.nextFrame(() => {
          t.value || u3.goToOption(a.First);
        });
        break;
      case o2.ArrowUp:
        s6.preventDefault(), u3.openListbox(), T2.nextFrame(() => {
          t.value || u3.goToOption(a.Last);
        });
        break;
    }
  }), A2 = o((s6) => {
    switch (s6.key) {
      case o2.Space:
        s6.preventDefault();
        break;
    }
  }), m2 = o((s6) => {
    if (r(s6.currentTarget))
      return s6.preventDefault();
    t.listboxState === 0 ? (u3.closeListbox(), T2.nextFrame(() => {
      var a2;
      return (a2 = t.buttonRef.current) == null ? void 0 : a2.focus({ preventScroll: true });
    })) : (s6.preventDefault(), u3.openListbox());
  }), P2 = i(() => {
    if (!!t.labelId)
      return [t.labelId, i2].join(" ");
  }, [t.labelId, i2]), y2 = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled, value: t.value }), [t]), S = { ref: n, id: i2, type: s2(r2, t.buttonRef), "aria-haspopup": "listbox", "aria-controls": (h3 = t.optionsRef.current) == null ? void 0 : h3.id, "aria-expanded": t.disabled ? void 0 : t.listboxState === 0, "aria-labelledby": P2, disabled: t.disabled, onKeyDown: g, onKeyUp: A2, onClick: m2 };
  return X({ ourProps: S, theirProps: c2, slot: y2, defaultTag: We, name: "Listbox.Button" });
});
var $e = "label";
var ze = V(function(r2, o4) {
  let p2 = I(), { id: i2 = `headlessui-listbox-label-${p2}`, ...c2 } = r2, t = H("Listbox.Label"), u3 = B("Listbox.Label"), n = y(t.labelRef, o4);
  l(() => u3.registerLabel(i2), [i2]);
  let T2 = o(() => {
    var m2;
    return (m2 = t.buttonRef.current) == null ? void 0 : m2.focus({ preventScroll: true });
  }), g = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled }), [t]);
  return X({ ourProps: { ref: n, id: i2, onClick: T2 }, theirProps: c2, slot: g, defaultTag: $e, name: "Listbox.Label" });
});
var qe = "ul";
var Xe = j.RenderStrategy | j.Static;
var Je = V(function(r2, o4) {
  var s6;
  let p2 = I(), { id: i2 = `headlessui-listbox-options-${p2}`, ...c2 } = r2, t = H("Listbox.Options"), u3 = B("Listbox.Options"), n = y(t.optionsRef, o4), T2 = p(), g = p(), A2 = C(), m2 = (() => A2 !== null ? (A2 & d.Open) === d.Open : t.listboxState === 0)();
  (0, import_react3.useEffect)(() => {
    var x2;
    let a2 = t.optionsRef.current;
    !a2 || t.listboxState === 0 && a2 !== ((x2 = e(a2)) == null ? void 0 : x2.activeElement) && a2.focus({ preventScroll: true });
  }, [t.listboxState, t.optionsRef]);
  let P2 = o((a2) => {
    switch (g.dispose(), a2.key) {
      case o2.Space:
        if (t.searchQuery !== "")
          return a2.preventDefault(), a2.stopPropagation(), u3.search(a2.key);
      case o2.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), t.activeOptionIndex !== null) {
          let { dataRef: x2 } = t.options[t.activeOptionIndex];
          u3.onChange(x2.current.value);
        }
        t.mode === 0 && (u3.closeListbox(), m().nextFrame(() => {
          var x2;
          return (x2 = t.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        }));
        break;
      case u(t.orientation, { vertical: o2.ArrowDown, horizontal: o2.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), u3.goToOption(a.Next);
      case u(t.orientation, { vertical: o2.ArrowUp, horizontal: o2.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), u3.goToOption(a.Previous);
      case o2.Home:
      case o2.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), u3.goToOption(a.First);
      case o2.End:
      case o2.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), u3.goToOption(a.Last);
      case o2.Escape:
        return a2.preventDefault(), a2.stopPropagation(), u3.closeListbox(), T2.nextFrame(() => {
          var x2;
          return (x2 = t.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        });
      case o2.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (u3.search(a2.key), g.setTimeout(() => u3.clearSearch(), 350));
        break;
    }
  }), y2 = i(() => {
    var a2, x2, D;
    return (D = (a2 = t.labelRef.current) == null ? void 0 : a2.id) != null ? D : (x2 = t.buttonRef.current) == null ? void 0 : x2.id;
  }, [t.labelRef.current, t.buttonRef.current]), S = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0 }), [t]), h3 = { "aria-activedescendant": t.activeOptionIndex === null || (s6 = t.options[t.activeOptionIndex]) == null ? void 0 : s6.id, "aria-multiselectable": t.mode === 1 ? true : void 0, "aria-labelledby": y2, "aria-orientation": t.orientation, id: i2, onKeyDown: P2, role: "listbox", tabIndex: 0, ref: n };
  return X({ ourProps: h3, theirProps: c2, slot: S, defaultTag: qe, features: Xe, visible: m2, name: "Listbox.Options" });
});
var Ye = "li";
var Ze = V(function(r2, o4) {
  let p2 = I(), { id: i2 = `headlessui-listbox-option-${p2}`, disabled: c2 = false, value: t, ...u3 } = r2, n = H("Listbox.Option"), T2 = B("Listbox.Option"), g = n.activeOptionIndex !== null ? n.options[n.activeOptionIndex].id === i2 : false, A2 = n.isSelected(t), m2 = (0, import_react3.useRef)(null), P2 = s({ disabled: c2, value: t, domRef: m2, get textValue() {
    var L2, d2;
    return (d2 = (L2 = m2.current) == null ? void 0 : L2.textContent) == null ? void 0 : d2.toLowerCase();
  } }), y2 = y(o4, m2);
  l(() => {
    if (n.listboxState !== 0 || !g || n.activationTrigger === 0)
      return;
    let L2 = m();
    return L2.requestAnimationFrame(() => {
      var d2, G;
      (G = (d2 = m2.current) == null ? void 0 : d2.scrollIntoView) == null || G.call(d2, { block: "nearest" });
    }), L2.dispose;
  }, [m2, g, n.listboxState, n.activationTrigger, n.activeOptionIndex]), l(() => T2.registerOption(i2, P2), [P2, i2]);
  let S = o((L2) => {
    if (c2)
      return L2.preventDefault();
    T2.onChange(t), n.mode === 0 && (T2.closeListbox(), m().nextFrame(() => {
      var d2;
      return (d2 = n.buttonRef.current) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }), h3 = o(() => {
    if (c2)
      return T2.goToOption(a.Nothing);
    T2.goToOption(a.Specific, i2);
  }), s6 = u2(), a2 = o((L2) => s6.update(L2)), x2 = o((L2) => {
    !s6.wasMoved(L2) || c2 || g || T2.goToOption(a.Specific, i2, 0);
  }), D = o((L2) => {
    !s6.wasMoved(L2) || c2 || !g || T2.goToOption(a.Nothing);
  }), $ = (0, import_react3.useMemo)(() => ({ active: g, selected: A2, disabled: c2 }), [g, A2, c2]);
  return X({ ourProps: { id: i2, ref: y2, role: "option", tabIndex: c2 === true ? void 0 : -1, "aria-disabled": c2 === true ? true : void 0, "aria-selected": A2, disabled: void 0, onClick: S, onFocus: h3, onPointerEnter: a2, onMouseEnter: a2, onPointerMove: x2, onMouseMove: x2, onPointerLeave: D, onMouseLeave: D }, theirProps: u3, slot: $, defaultTag: Ye, name: "Listbox.Option" });
});
var Mt = Object.assign(Ne, { Button: Qe, Label: ze, Options: Je, Option: Ze });

// app/routes/($lang)/products/$productHandle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var seo = ({ data }) => {
  const media = flattenConnection(data.product.media).find(
    (media2) => media2.mediaContentType === "IMAGE"
  );
  return {
    title: data?.product?.seo?.title ?? data?.product?.title,
    media: media?.image,
    description: data?.product?.seo?.description ?? data?.product?.description,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      brand: data?.product?.vendor,
      name: data?.product?.title
    }
  };
};
var handle = {
  seo
};
function Product() {
  const { product, shop, recommended } = useLoaderData();
  const { media, title, vendor, descriptionHtml } = product;
  const { shippingPolicy, refundPolicy } = shop;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { padding: "x", className: "px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-start md:gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ProductGallery,
        {
          media: media.nodes,
          className: "w-screen md:w-full lg:col-span-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 133,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sticky md:-mb-nav md:top-nav md:-translate-y-nav md:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-col w-full max-w-xl gap-8 p-6 md:mx-auto md:max-w-sm md:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h1", className: "whitespace-normal", children: title }, void 0, false, {
            fileName: "app/routes/($lang)/products/$productHandle.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          vendor && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "opacity-50 font-medium", children: vendor }, void 0, false, {
            fileName: "app/routes/($lang)/products/$productHandle.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductForm, {}, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 py-4", children: [
          descriptionHtml && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductDetail,
            {
              title: "Product Details",
              content: descriptionHtml
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 150,
              columnNumber: 19
            },
            this
          ),
          shippingPolicy?.body && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductDetail,
            {
              title: "Shipping",
              content: getExcerpt(shippingPolicy.body),
              learnMore: `/policies/${shippingPolicy.handle}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 156,
              columnNumber: 19
            },
            this
          ),
          refundPolicy?.body && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductDetail,
            {
              title: "Returns",
              content: getExcerpt(refundPolicy.body),
              learnMore: `/policies/${refundPolicy.handle}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 163,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-32" }, void 0, false, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 174,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Await,
      {
        errorElement: "There was a problem loading related products",
        resolve: recommended,
        children: (products) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductSwimlane, { title: "Related Products", products }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 175,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}
function ProductForm() {
  const { product, analytics } = useLoaderData();
  const [currentSearchParams] = useSearchParams();
  const transition = useTransition();
  const searchParams = (0, import_react4.useMemo)(() => {
    return transition.location ? new URLSearchParams(transition.location.search) : currentSearchParams;
  }, [currentSearchParams, transition]);
  const firstVariant = product.variants.nodes[0];
  const searchParamsWithDefaults = (0, import_react4.useMemo)(() => {
    const clonedParams = new URLSearchParams(searchParams);
    for (const { name, value } of firstVariant.selectedOptions) {
      if (!searchParams.has(name)) {
        clonedParams.set(name, value);
      }
    }
    return clonedParams;
  }, [searchParams, firstVariant.selectedOptions]);
  const selectedVariant = product.selectedVariant ?? firstVariant;
  const isOutOfStock = !selectedVariant?.availableForSale;
  const isOnSale = selectedVariant?.price?.amount && selectedVariant?.compareAtPrice?.amount && selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;
  const productAnalytics = {
    ...analytics.products[0],
    quantity: 1
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ProductOptions,
      {
        options: product.options,
        searchParamsWithDefaults
      },
      void 0,
      false,
      {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 246,
        columnNumber: 9
      },
      this
    ),
    selectedVariant && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-stretch gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        AddToCartButton,
        {
          lines: [
            {
              merchandiseId: selectedVariant.id,
              quantity: 1
            }
          ],
          variant: isOutOfStock ? "secondary" : "primary",
          "data-test": "add-to-cart",
          analytics: {
            products: [productAnalytics],
            totalValue: parseFloat(productAnalytics.price)
          },
          children: isOutOfStock ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Sold out" }, void 0, false, {
            fileName: "app/routes/($lang)/products/$productHandle.tsx",
            lineNumber: 267,
            columnNumber: 17
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Text,
            {
              as: "span",
              className: "flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add to Bag" }, void 0, false, {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 273,
                  columnNumber: 19
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\xB7" }, void 0, false, {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 273,
                  columnNumber: 43
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Money,
                  {
                    withoutTrailingZeros: true,
                    data: selectedVariant?.price,
                    as: "span"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($lang)/products/$productHandle.tsx",
                    lineNumber: 274,
                    columnNumber: 19
                  },
                  this
                ),
                isOnSale && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Money,
                  {
                    withoutTrailingZeros: true,
                    data: selectedVariant?.compareAtPrice,
                    as: "span",
                    className: "opacity-50 strike"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($lang)/products/$productHandle.tsx",
                    lineNumber: 280,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 269,
              columnNumber: 17
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 252,
          columnNumber: 13
        },
        this
      ),
      !isOutOfStock && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShopPayButton, { variantIds: [selectedVariant?.id] }, void 0, false, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 291,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 251,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 245,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 244,
    columnNumber: 5
  }, this);
}
function ProductOptions({
  options,
  searchParamsWithDefaults
}) {
  const closeRef = (0, import_react4.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: options.filter((option) => option.values.length > 1).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "legend", size: "lead", className: "min-w-[4rem]", children: option.name }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-baseline gap-4", children: option.values.length > 7 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mt, { children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Mt.Button,
            {
              ref: closeRef,
              className: clsx_m_default(
                "flex items-center justify-between w-full py-3 px-4 border border-primary",
                open ? "rounded-b md:rounded-t md:rounded-b-none" : "rounded"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: searchParamsWithDefaults.get(option.name) }, void 0, false, {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 343,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconCaret, { direction: open ? "up" : "down" }, void 0, false, {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 346,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 334,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Mt.Options,
            {
              className: clsx_m_default(
                "border-primary bg-contrast absolute bottom-12 z-30 grid h-48 w-full overflow-y-scroll rounded-t border px-2 py-2 transition-[max-height] duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none md:border-t-0 md:border-b",
                open ? "max-h-48" : "max-h-0"
              ),
              children: option.values.map((value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Mt.Option,
                {
                  value,
                  children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    ProductOptionLink,
                    {
                      optionName: option.name,
                      optionValue: value,
                      className: clsx_m_default(
                        "text-primary w-full p-2 transition rounded flex justify-start items-center text-left cursor-pointer",
                        active && "bg-primary/10"
                      ),
                      searchParams: searchParamsWithDefaults,
                      onClick: () => {
                        if (!closeRef?.current)
                          return;
                        closeRef.current.click();
                      },
                      children: [
                        value,
                        searchParamsWithDefaults.get(option.name) === value && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconCheck, {}, void 0, false, {
                          fileName: "app/routes/($lang)/products/$productHandle.tsx",
                          lineNumber: 377,
                          columnNumber: 39
                        }, this) }, void 0, false, {
                          fileName: "app/routes/($lang)/products/$productHandle.tsx",
                          lineNumber: 376,
                          columnNumber: 37
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/($lang)/products/$productHandle.tsx",
                      lineNumber: 360,
                      columnNumber: 33
                    },
                    this
                  )
                },
                `option-${option.name}-${value}`,
                false,
                {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 355,
                  columnNumber: 29
                },
                this
              ))
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 348,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 333,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 331,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 330,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: option.values.map((value) => {
          const checked = searchParamsWithDefaults.get(option.name) === value;
          const id = `option-${option.name}-${value}`;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductOptionLink,
            {
              optionName: option.name,
              optionValue: value,
              searchParams: searchParamsWithDefaults,
              className: clsx_m_default(
                "leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200",
                checked ? "border-primary/50" : "border-primary/0"
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 398,
              columnNumber: 25
            },
            this
          ) }, id, false, {
            fileName: "app/routes/($lang)/products/$productHandle.tsx",
            lineNumber: 397,
            columnNumber: 23
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 390,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 320,
          columnNumber: 13
        }, this)
      ]
    },
    option.name,
    true,
    {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 313,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 309,
    columnNumber: 5
  }, this);
}
function ProductOptionLink({
  optionName,
  optionValue,
  searchParams,
  children,
  ...props
}) {
  const { pathname } = useLocation();
  const isLangPathname = /\/[a-zA-Z]{2}-[a-zA-Z]{2}\//g.test(pathname);
  const path = isLangPathname ? `/${pathname.split("/").slice(2).join("/")}` : pathname;
  const clonedSearchParams = new URLSearchParams(searchParams);
  clonedSearchParams.set(optionName, optionValue);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link,
    {
      ...props,
      preventScrollReset: true,
      prefetch: "intent",
      replace: true,
      to: `${path}?${clonedSearchParams.toString()}`,
      children: children ?? optionValue
    },
    void 0,
    false,
    {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 443,
      columnNumber: 5
    },
    this
  );
}
function ProductDetail({
  title,
  content,
  learnMore
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ke, { as: "div", className: "grid w-full gap-2", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ke.Button, { className: "text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { size: "lead", as: "h4", children: title }, void 0, false, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 470,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        IconClose,
        {
          className: clsx_m_default(
            "transition-transform transform-gpu duration-200",
            !open && "rotate-[45deg]"
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 473,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 469,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 468,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ke.Panel, { className: "pb-4 pt-2 grid gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "prose dark:prose-invert",
          dangerouslySetInnerHTML: { __html: content }
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 483,
          columnNumber: 13
        },
        this
      ),
      learnMore && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          className: "pb-px border-b border-primary/30 text-primary/50",
          to: learnMore,
          children: "Learn more"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 489,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 488,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 482,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 467,
    columnNumber: 9
  }, this) }, title, false, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 465,
    columnNumber: 5
  }, this);
}
var PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    selectedOptions {
      name
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`;
var PRODUCT_QUERY = `#graphql
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      descriptionHtml
      description
      options {
        name
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariantFragment
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 1) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      name
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
`;
var RECOMMENDED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query productRecommendations(
    $productId: ID!
    $count: Int
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
export {
  Product as default,
  handle
};
//# sourceMappingURL=/build/routes/($lang)/products/$productHandle-L36BFEV4.js.map
