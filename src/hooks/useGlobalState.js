import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
    NavOpen: false
};

const { useGlobalState } = createGlobalState(initialState); 

export { useGlobalState };
