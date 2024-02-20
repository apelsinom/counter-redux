import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {thunk} from "redux-thunk";
import {loadState, saveState} from "../../utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export  const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
})
export type AppStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store