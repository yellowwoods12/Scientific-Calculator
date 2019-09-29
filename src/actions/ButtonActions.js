export const DIGIT_PRESSED = 'DIGIT_PRESSED'
export const OPERATION_PRESSED = 'OPERATION_PRESSED'
export const CLEAR = 'CLEAR'


export const onDigitPress = (value) => {
    return ({
        type: DIGIT_PRESSED,
        event: value 
    });
}

export const onOperationPress = (value) => {
    return ({
        type: OPERATION_PRESSED,
        event: value 
    });
}

export const onClear = () => {
    return ({
        type: CLEAR 
    });
}