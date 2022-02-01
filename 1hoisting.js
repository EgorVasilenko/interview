var a = 5;
function varFunc(b) {
    if (b) {
        var a = 10;
    }
    console.log(a);
}

varFunc(false);
varFunc(true);


function letFunc(b) {
    if (b) {
        let a = 10;
    }
    console.log(a);
}

letFunc(false);
letFunc(true);

function varFunc1(b) {
    var a = 1;
    if (b) {
        var a = 10;
    }
    console.log(a);
}

varFunc1(false);
varFunc1(true);