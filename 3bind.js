//#region что выведет, что в this, как решить
this.a = 5;
const obj = {
    a: 15,
    log: function () { setTimeout(function () { console.log(this.a) }, 100) }
}

obj.log()

// #region варианты
const objWithArrow = {
    a: 15,
    log: function () { setTimeout(() => { console.log(this.a) }, 100) }
}

objWithArrow.log();

const objWithBind = {
    a: 15,
    log: function () { setTimeout(function () { console.log(this.a) }.bind(this), 100) }
}

objWithBind.log();

const objWithClosure = {
    a: 15,
    log: function () { setTimeout((function(param) { 
        return function () { console.log(param) }})(this.a), 100) }
}

const objWithTimeoutParam = {
    a: 15,
    log: function () { setTimeout(function (a) { console.log(a) }, 100, this.a) }
}

objWithTimeoutParam.log();

objWithClosure.log();
// #endregion

//#endregion


// #region сделать функцию вида sum1(a), которая вернет sum2(b) === sum(a,b)

function sum(a,b) {
    return a + b;
}


const sum1 = (a) => sum.bind(this, a);
const sum2 = sum1(1);
console.log(sum2(2));

// #endregion
