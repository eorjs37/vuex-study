# vuex-study

## vuex 모둘화 하는 이유

> 기존에 모듈화를 사용하지 않고 했을때 사이즈가 점점 커짐에 따라 관리가 힘들어지는 단점이 생김  
> 그리하여 업무 성격에 맞게 모듈화를 해야겠다는 필요성을 느낌

## vuex 모듈화 구조

```bash
|---store
|     |---modules
|        |---moduleA.js // moduleA작성
|        |---moduleB.js // moduleB작성
|--index.js // 모듈 등록
```

### moduleA 구조 소스

```javascript
const moduleA = {
  namespaced: true,
  state: () => ({
    obj1: {},
  }),
  getters: {
    getObj1(state) {
      return state.obj1;
    },
  },
  actions: {
    someAction({ commit }, payload) {
      commit("setObj1", payload);
    },
  },
  mutations: {
    setObj1(state, payload) {
      state.obj1 = payload;
    },
  },
};
export { moduleA };
```

### moduleB 구조

```javascript
const moduleB = {
  namespaced: true,
  state: () => ({
    obj1: {},
  }),
  getters: {},
  actions: {},
  mutations: {},
};
export { moduleB };
```

### index.js 모듈 등록

```javascript
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
```

### main.js vuex 등록

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store/index";

const app = createApp(App);
app.use(store);
app.mount("#app");
```
