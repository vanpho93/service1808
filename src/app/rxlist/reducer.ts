import { Action } from '@ngrx/store';

interface Word {
    en: string;
    vn: string;
    _id: string;
}
const WORD: Word[] = [
    {
      '_id': '59f08ff476ab40f4a22b5fa0',
      'en': 'activity',
      'vn': 'hoạt động'
    },
    {
      '_id': '59f08ff476ab40f4a22b5fa1',
      'en': 'active',
      'vn': 'chủ động'
    },
    {
      '_id': '59f08ff476ab40f4a22b5fa3',
      'en': 'bedroom',
      'vn': 'phòng ngủ'
    },
    {
      '_id': '59f32e87bc87844a532224b3',
      'en': 'new',
      'vn': 'mới'
    }
];

const defaultState = {
    words: WORD,
    isShowForm: false
};

export const reducer = (state = defaultState, action: Action) => {
    if (action.type === 'REMOVE_WORD') {
        const newWords = state.words.filter(word => word._id !== action.payload._id);
        return { ...state, words: newWords };
    }
    if (action.type === 'ADD_WORD') {
        const { en, vn, _id } = action.payload;
        const newWords = state.words.concat({ en, vn, _id });
        return { ...state, words: newWords };
    }
    return state;
};
