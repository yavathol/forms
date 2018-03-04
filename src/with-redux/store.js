import {FORM_RESET, FORM_UPDATE_VALUE} from './actions';

const initialState = {
    contactForm: {}
};

export const store = (state = initialState, action) => {
    switch (action.type) {

        case FORM_UPDATE_VALUE:
            return {
                ...state,
                contactForm: {
                    ...state.contactForm,
                    [action.payload.name]: action.payload.value,
                }
            };

        case FORM_RESET:
            return initialState;

        default:
            return state;
    }
};