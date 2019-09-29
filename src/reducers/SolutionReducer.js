import { DIGIT_PRESSED, OPERATION_PRESSED, CLEAR } from '../actions/ButtonActions'
import evaluateSolution from './evaluateSolution'

const initialState = {
    inputHistory: [],
    lastOperation: "",
    solutionDisplayValue: "0"
};

// i create these func because these func mutate the old state :)

function parseNewDigit(oldState, number) {
    let lastTyped = parseInt(oldState.inputHistory[oldState.inputHistory.length - 1])
    if (isNaN(lastTyped) !== true) {
        oldState.inputHistory[oldState.inputHistory.length - 1] += number
    }
    else {
        oldState.inputHistory.push(number);
    }
    oldState.solutionDisplayValue = oldState.inputHistory[oldState.inputHistory.length - 1]
    return oldState
}

function parseNewOperation(oldState, operation) {
    if (oldState.lastOperation === "") {
        oldState.inputHistory.push(operation);
        oldState.lastOperation = operation;
        return oldState;
    }
    else if(oldState.inputHistory.length === 5){
        let result = evaluateSolution(...oldState.inputHistory.slice(2));
        oldState.solutionDisplayValue = evaluateSolution(...oldState.inputHistory.slice(0,2),result);
        if(operation === '='){
            oldState.inputHistory = [oldState.solutionDisplayValue];
            oldState.lastOperation = "";
        }
        else{
            oldState.inputHistory = [oldState.solutionDisplayValue, operation];
            oldState.lastOperation = operation;
        }
        return  oldState;
    }
    else if (operation === '='){
        oldState.solutionDisplayValue = evaluateSolution(...oldState.inputHistory);
        oldState.inputHistory = [oldState.solutionDisplayValue];
        oldState.lastOperation = '';
        return oldState
    }
    else if (operation === "+") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    }
    else if (operation === "-") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    }
    else if (operation === "tan") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    }
    else if (operation === "sin") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    }
    else if (operation === "cos") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    }
    else if (operation === "Log") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    }
    else if (operation === "%") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    }
    else if (operation === "√") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    } 
    else if (operation === "Exp") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    } 
    else if (operation === "x") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    } 
    else if (operation === "÷") {
        return {
            ...evaluateSolution(oldState.inputHistory),
            inputHistory: 0,
            lastOperation: oldState.lastOperation + oldState.inputHistory,
            solutionDisplayValue: '',
          };
    } 
    
    
}

export default function SolutionReducer(state = initialState, action) {
    var newState
    switch (action.type) {
        case DIGIT_PRESSED:
            newState = JSON.parse(JSON.stringify(state));
            newState = parseNewDigit(newState, action.event)
            return newState;
        case OPERATION_PRESSED:
            newState = JSON.parse(JSON.stringify(state));
            newState = parseNewOperation(newState,action.event);
            return newState;
        case CLEAR:
            return initialState;
        default:
            return state;
    }
}