//Задача 1 
function func1 (a, b, c) {
    let result = ((a - b)/c)
    console.log(result);
}

func1(12,6,3);
func1(10,2,4);
 

//Задача 2 
function func2 (a) {
    let kub = a*a*a;
    let kva = a*a;
    console.log(kub);
    console.log(kva);
    return kva;
}
func2 (5);

//Задача 3
function func3_min (a, b) {
    if (a < b) {
    return a;
} else {
} return b;
}
func3_min (8,6);

function func3_max (a, b) {
    if (a > b) {
    return a;
} else {
} return b;
}
func3_max (7,8);



//Задача 5
function isEven (a) {
    let result = a%2;
    if (result===1) {
      return false;
} else {
  return true;
} 
}
isEven (2);


//Задача 6
function func6 (arr) {
    let newArr = [];
    for (i  = 0; i < arr.length; i++){
       let value = arr[i];
       let isValueEven = isEven(value);
       if (isValueEven === true) {
           newArr.push(value);
       }
    }
    
  
    return newArr;
  }
  func6( [1, 2, 3, 4, 7, 12, 33, 44, 22] );

  //Задача 7

  let p = +prompt('Введите число')
    function pyramid (p) {
        for (let i = 1; i <= p; i++) {

        for (let j = 1; j <= p; j++) {
            document.write('&ensp;');
        }
        for (let k = 0; k < i*2 - 1; k++) {
            document.write('*');
        } document.write('<br>');
    }
}
pyramid (p);

