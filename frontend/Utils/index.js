// import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import allReducers from '../src/store/reducers';
import { thunkMiddleware } from './../src/store'; npm

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    // const createStoreWithMiddleware = applyMiddleware(...thunkMiddleware)(createStore);
    return createStore(allReducers, applyMiddleware(thunkMiddleware));
};