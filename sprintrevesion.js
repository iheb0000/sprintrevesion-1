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
    while( number > 0)
        somme += number % 10
        number //= 10
    return sum
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