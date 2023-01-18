import { createStore } from "vuex";
import { moduleA } from "./modules/moduleA";
import { moduleB } from "./modules/moduleB";
const store = createStore({
  modules: {
    moduleA: moduleA,
    moduleB: moduleB,
  },
});

export { store };
