(() => {
    const calculator = document.querySelector('.calculator')
    if (calculator){
        const displayElement = calculator.querySelector('input')
        if (!displayElement) {return}
        const display = displayElement;

        //Calculates value of the string
        function calculate(expression: string): string{
            return "67"
        }

        //Handels input from mulltple sources
        function handleInput(input: string){
            if (display.value === 'Error'){
                display.value = ''
            }

            //inputs that can be repeated
            const repeatValues: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '.'] 
            //inputs that can not be repeated
            const nonRepeatValues: string[] = ['/', '*', '+', '-', '^'];
            //inputs with that need brakets
            const functionValues: string[] = ['sin', 'cos', 'tan', 'log'];
            //clear input
            const ClearValue: string = 'CL'
            //delete input
            const DeleteValue: string = 'DL'
            //calculate input
            const CalculateValue: string = '='

            //Handel the input
            if (repeatValues.includes(input)){
                display.value += input
            }
            else if (nonRepeatValues.includes(input)) {
                if (nonRepeatValues.includes(display.value.slice(-1)))
                    display.value = display.value.slice(0,-1)
                display.value += input;
            }
            else if (functionValues.includes(input)) {
                display.value += input + '(';
            }
            else if (input === ClearValue){
                display.value = '';
            }
            else if (input === DeleteValue){
                display.value = display.value.slice(0,-1)
            }
            else if (input === CalculateValue){
                display.value = calculate(display.value);
            }
        }

        calculator.addEventListener('click', (e) => {
            const button = (e.target as HTMLElement)?.closest('button');
            if (button) 
                handleInput(button.innerText);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleInput('=');
            } else if (e.key === 'Backspace') {
                handleInput('DL');
            } else if (e.key === 'Delete') {
                e.preventDefault();
                handleInput('CL');
            } else if (e.key === 's') {
                handleInput('sin');
            } else if (e.key === 'c') {
                handleInput('cos');
            } else if (e.key === 't') {
                handleInput('tan');
            } else if (e.key === 'l') {
                handleInput('log');
            } else {
                const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '.', '/', '*', '+', '-', '^'];
                if (validKeys.includes(e.key)) {
                    handleInput(e.key);
                }
            }
        });
    }
})()
