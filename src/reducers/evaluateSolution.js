export default function evaluateSolution(number1, operation, number2  ){
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);
    let num3 = 100;
     switch(operation){
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case 'x':
            return (num1 * num2).toString();
        case '÷':
            return (num1 / num2).toString();
        case '%':
            return (num1 / num3).toString();    
        case '√':
            return (Math.sqrt(num1)).toString();
        case 'sin':
            return (Math.sin(num1)).toString();
        case 'tan':
            return (Math.tan(num1)).toString();
        case 'cos':
            return (Math.cos(num1)).toString();
        case 'Exp':
            return (Math.exp(num1)).toString();
        case 'Log':
            return (Math.log(num1)).toString();
        
        default:
            return (num1 + num2).toString();
    }
}