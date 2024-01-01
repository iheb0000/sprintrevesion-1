function oddevent(n){
    if (n%2===0){
        return "is event"}
      else {
          return "is odd "
      }
  }
  function oddevenfor(n){
    for (var i =n;i>=0;i--){
    if (i%2===0){
         console.log(i,"is even")
        
    }
        else {
            console.log (i,"is odd")
            
        }
    

     
    }}
    function oddevenwhile(n){
        var i = n 
            while (i>0){
    
         if (i%2===0){
              console.log(i,"is even")
    
         }
             else {
                 console.log (i,"is odd")
    
             }
                  i--
    
     }}
 function oddevenrecersion(n){
    if (n===0){
        return 0
    }
     if (n%2===0){
          console.log(n,"is even")
         
     }
         else {
             console.log (n,"is odd")
             
         }
     return   oddeven(n-1)
     
 }
 function weirddivisionforloop(n){
    for (var i =n;i>=0;i++){
 if ((i%5===0) && (i%3===0)){
            return "jamesjulia"}
        if (i%5===0){
       return "james"
   }
        if (i%3===0){
        return "julia"     
        
    } 
        else {
           return n 
        }
    }
}
function laughh (n) {
    var res="ha"
    var i=1
    while ( i<n ) {
        res+="ha"
        i++
    }
    return res
}
function lau (n) {

    if(n===0){
        return ""
    }
    return "ha"+lau(n-1)
}
function laughh (n) {
    var res="ha"
    for (var i=1 ; i<n ; i++) {
        res+="ha"
    }
    return res
}
function summ (n) {
    var sum=0
    for (var i=n ; i>=0 ; i--) {
        sum+=i


    }
    return (sum)
}
function sum (n) {
    if(n===0) {
        return 0
    }
    return n+sum(n-1)
}
function factoriel (n) {
    if (n===1){
        return 1
    }
    return n*factoriel(n-1)
}
function rangeFor (min , max) {
    var arr=[]
    for (var i=min ; i<max ; i++){
        arr.push(i)
    }
    return arr
}
function addDigits(number):
    sum = 0
    while( number > 0){
        somme += number % 10 
       
    return sum }
function addDigits(number) {
  let sum = 0;
  let numStr = number.toString();
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
}
function addDigits(num) {
    var add=0
    var str=num.toString()
    for(var i=0 ; i< str.length ; i++) {
        add+=parseInt(str[i])
    }
    return add
}
function fibRecursive(number) {
    if (number===0){
        return 1
    }
    if(number===1){
        return 1
    }
    return fibRecursive(number-1)+fibRecursive(number-2)

}



function firstDigit(str) {
    for (var i=0 ; i<str.length ; i++){
        if (str[i]>=0 && str[i]<=9){
            return str[i]
        }
    } 
}

function firstDigitWithWhile(str) {
    var i=0
    while ( i<str.length ){
        if (str[i]>=0 && str[i]<=9){
            return str[i]
        }
         i++
    } 
}



function remove(arr, el) {
    var res= []
 
     for (var i=0 ; i<arr.length ; i++){
         if(arr[i] !== el){
            res.push(arr[i]) 
         }
     }
     return res
 }

 or 

 function remove(arr, el) {

    for (var i=0 ; i<arr.length ; i++){
        if(arr[i] === el){
           arr.splice(i,1) 
        }
    }
    return arr
}



 function averageWithFor (arr) {
    var ave = 0 
    for (var i=0 ; i<arr.length ; i++){
        ave+= arr[i]/arr.length
    }
    return ave
}
 recursion

function ave (arr) {
    if (arr.length===0){
        return 0
    }
    else (arr.length===1){
        return arr[0]
    }

    return (arr[0]+ave(arr.slice(1)) ) / arr.length
}


function findMax(str) {
    var max=str[0]
    for (var i=1 ; i<str.length ; i++){
        if(str[i]>max){
            max=str[i]
        }
    }
    return max
}

function findMax(str) {
    var max=str[0]
    var i=1
    while ( i<str.length  ){
        if(str[i]>max){
            max=str[i]
        }
        i++
    }
    return max
}





function evenDigits(str) {
    for (var i = 0; i < str.length; i++) {
        if (parseInt(str[i]) % 2 !== 0) {
            return false;
        }
    }
    return true;
}

 recursion

function even (str){
    if (str.length===0) {
        return true
    }

    if(parseInt(str[0]) %2 !== 0 ){
        return false
    }
    return even (str.slice(1))
}


function palindrom(str) {
    var reversed=""

    for (var i=str.length-1 ; i>=0 ; i--){
         reversed+=str[i]
    }
    if (str===reversed) {
       return true 
    }
    return false 
}



16 / 17 not found 