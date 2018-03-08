export const FORM_SAVE_VALUE = "FORM_SAVE_VALUE";

export const saveFormValue = ({value, name}) => ({
    type: FORM_SAVE_VALUE,
    payload: {value, name}
});