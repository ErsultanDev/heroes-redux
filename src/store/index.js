import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import heroes from "../reducers/heroes";
import filters from "../reducers/filters";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const enhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);

    const oldDispatch = store.dispatch; // В oldDispatch сохранили оригинальный dispatch (который в себе приниал только обьект)
    store.dispatch = (action) => {
      // МЫ ВЗЯЛИ ОРИГИНАЛЬНЫЙ dispatch и перезаписали тоесть мы туда поместили функцию
      if (typeof action === "string") {
        return oldDispatch({
          // ТО В ТАКОМ СЛУЧАЕ ВЫЗЫВАЕМ ОРИГИНАЛЬНЫЙ dispatch
          type: action,
        });
      }
      return oldDispatch(action);
    };
    return store;
  };

const store = createStore(
  combineReducers({ heroes: heroes, filters: filters }),
  compose(
    applyMiddleware(ReduxThunk, stringMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
