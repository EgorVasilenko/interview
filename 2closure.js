//написать функцию генератор увеличения чисел без использования глобальных переменных
//generator() //1
//generator() //2
//generator() //3

function creator(counter = 0) {

    function incrementor() {
        return ++counter;
    }

    return incrementor;
}

// Альтернативы (Proxy, Generator, getters)
