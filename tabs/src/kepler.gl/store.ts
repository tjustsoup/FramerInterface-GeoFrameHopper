import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import keplerGlReducer from "kepler.gl/reducers";
import { enhanceReduxMiddleware } from "kepler.gl/middleware";

const initialState = {};
const reducers = combineReducers({
  // <-- mount kepler.gl reducer in your app
  keplerGl: keplerGlReducer.initialState({
    uiState: {
      activeSidePanel: "custom",
      currentModal: null,
      mapControls: {
        visibleLayers: {
          show: false
        },
        mapLegend: {
          show: false,
        },
        toggle3d: {
          show: false
        },
        splitMap: {
          show: false
        },
        mapDraw: {
          show: false
        }
      }
    },
    mapStyle: {
      styleType: "satellite"
    },
  }),
});

const middlewares = enhanceReduxMiddleware([
  // Add other middlewares here
]);
const enhancers = [applyMiddleware(...middlewares)];

export default createStore(reducers, initialState, compose(...enhancers));
