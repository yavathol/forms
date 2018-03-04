export const FORM_UPDATE_VALUE = 'FORM_UPDATE_VALUE';

export function update(name, value) {
    return {
        type: FORM_UPDATE_VALUE,
        payload: {name, value}
    };
}

export const FORM_RESET = 'FORM_RESET';

export function reset() {
    return {
        type: FORM_RESET
    };
}