function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return { result: a + b, action: 'sum' }

        case '-':
            return { result: a - b, action: 'diferrence' }

        case '*':
            return { result: a * b, action: 'product' }

        case '/':
            return { result: a / b, action: 'quotient' }
    }
}

module.exports = { calculate }