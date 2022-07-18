//fibonacci sequence function
function fibonacciTen(){

    var numberOne = 0;
    var numberTwo = 1;
    
    for (let i = 0; i < 10; i++){
        if (i < 2){
            console.log(i);
        } else {
             var sum = numberOne + numberTwo;
             console.log(sum);
             numberOne = numberTwo;
             numberTwo = sum;
        } 
    }
}
