console.log('Start of the program')

function task_one() {
    setTimeout(function (...args) {
        console.log('this is a scheduled task I that will run in 5 seconds');
    }, 5000);
}

function task_two() {
    setTimeout(function (...args) {
        console.log('this is a scheduled task II that will run in 2 seconds');
    }, 2000);
}

function task_three() {
    setTimeout(function (...args) {
        console.log('this is a scheduled task III that will run in 1 seconds');
    }, 1000);
}
function task_four() {
    setTimeout(function (...args) {
        console.log('this is a scheduled task IV that will run in 1 seconds');
    }, 0);
}
function f(callback) {
    setTimeout(function () {
        console.log('doStaff in f');
        callback();
    }, 3000);

    return ({ computedValueF: 5 });
}

function g() {
    setTimeout(function () {
        console.log('doStaff in g ');
    }, 2000);
    return ({ computedValueG: 10 });
}

f(g);  // execute g apres f même si f s'execute aprés 3000ms et g 