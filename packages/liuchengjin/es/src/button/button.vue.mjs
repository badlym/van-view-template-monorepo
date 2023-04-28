import { defineComponent as e, computed as u, openBlock as l, createElementBlock as s, normalizeClass as a, unref as p, renderSlot as c } from "vue";
import "./style/index.css";
const m = e({ name: "ea-button" }), d = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null,
    size: null
  },
  setup(n) {
    const t = n, o = u(() => ({ [`ea-button--${t.type}`]: t.type }));
    return (r, f) => (l(), s("button", {
      class: a(["ea-button", p(o)])
    }, [
      c(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
