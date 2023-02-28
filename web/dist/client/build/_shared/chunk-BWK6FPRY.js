// node_modules/@shopify/hydrogen/dist/production/chunk-JXANKGQN.js
var r = Object.create;
var t = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var a = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf;
var d = Object.prototype.hasOwnProperty;
var m = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports);
var f = (e, o, n, c) => {
  if (o && typeof o == "object" || typeof o == "function")
    for (let l of a(o))
      !d.call(e, l) && l !== n && t(e, l, { get: () => o[l], enumerable: !(c = i(o, l)) || c.enumerable });
  return e;
};
var u = (e, o, n) => (n = e != null ? r(p(e)) : {}, f(o || !e || !e.__esModule ? t(n, "default", { value: e, enumerable: true }) : n, e));
function g({ headTags: e }) {
  return h(e), null;
}
function h(e) {
  let o = "text-transform: uppercase;", n = "text-transform: uppercase; font-weight: bold; text-transform: uppercase;font-weight: bold";
  console.log(" "), console.log("%cSEO Meta Tags", `${n}`), console.log(" "), e.forEach((c) => {
    if (c.tag === "script") {
      if (console.log("%c\u2022 JSON LD ", o), c.children)
        try {
          console.table(JSON.parse(c.children), ["name", "content"]);
        } catch {
          console.log(c.children);
        }
    } else {
      if (console.log(`%c\u2022 ${c.tag} `, o), c.children)
        if (typeof c.children == "string")
          console.log(`\u21B3 ${c.children}`);
        else
          try {
            Object.entries(JSON.parse(c.children)).map(([l, s]) => console.log(`\u21B3 ${s}`));
          } catch {
            console.log(c.children);
          }
      Object.entries(c.props).map(([l, s]) => console.log(`\u21B3 ${l} \u2192 ${s}`));
    }
    console.log(" ");
  });
}

export {
  m,
  u,
  g,
  h
};
//# sourceMappingURL=/build/_shared/chunk-BWK6FPRY.js.map
