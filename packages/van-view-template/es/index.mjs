import * as o from "./src/index.mjs";
import { Button as f } from "./src/button/index.mjs";
import { Icon as x } from "./src/icon/index.mjs";
const r = {
  install: (t) => {
    for (const n in o)
      t.use(o[n]);
  }
};
export {
  f as Button,
  x as Icon,
  r as default
};
