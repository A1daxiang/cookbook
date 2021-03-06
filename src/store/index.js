//引入需要的成员
import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import reducer_search from "@/store/reducers/reducer_search";

//使用中间件
import thunk from "redux-thunk";

// 解决redux-dev-tool工具不能使用的问题（代码来自于github）
//浏览器调试工具需要的代码（如果需要启用的话）
const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

//创建仓库
const store = createStore(
    combineReducers({
        reducer_search,
    }),
    composeEnhancers(applyMiddleware(thunk))
);

//导出仓库
export default store;
