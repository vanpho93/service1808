import { Action } from '@ngrx/store';

// lam sao de tao ra vung nho
// lam sao de truy xuat du lieu
// lam sao de thay du lieu

// Quan ly cac thuoc tinh can chia se giua cac component tai store
// defaultState

const defaultState = { value: 0 };

export const reducer = (state = defaultState, action: Action) => {
    // if (action.type === 'INCREMENT') return { value: state.value + 1 };
    // if (action.type === 'DESCREMENT') return { value: state.value - 1 };
    return state;
};
