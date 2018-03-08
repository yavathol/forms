import {FORM_SAVE_VALUE} from './actions'

const initialState = {
    contactForm: {}
};

export const store = (state = initialState, action) => {
    switch (action.type) {
        case FORM_SAVE_VALUE:
            return {
                ...state,
                contactForm: {
                    ...state.contactForm,
                    [action.payload.name]: action.payload.value
                }
            };
        default:
            return state;
    }
};