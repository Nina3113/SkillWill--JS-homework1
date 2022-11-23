//Exercise 1
function myFunction(a,b) {
   if(a == b) {
    return 'Equal';
   }else {
    return 'Not equal';
   }
}

//Exercise 2
function fahrToCelsius(fahr) {
    if(typeof(fahr) == 'number') {
    return (5/9) * (fahr-32);
    }else{
        return 'false';
    }
}
// console.log(myFunction(5,6));
//console.log(myFunction(7,7));
//console.log(myFunction(7, '7'));
//console.log(fahrToCelsius(20));
//console.log(fahrToCelsius('n'));

//Exercise 3

const operations = ['+', '-', '*', '/'];
function myFunc(a,b,operation) {
    if((typeof a == 'number' && typeof b == 'number') &&
    operations.includes(operation)) {
        switch(operation) {
                        case '+':
                            return a + b;
                        case '-':
                            return a - b;
                        case '*':
                            return a * b;
                        case '/':
                            return a / b;
                    }
    }else {
        return 'false';
    }

};
//console.log(myFunc(9,5,'-'));
