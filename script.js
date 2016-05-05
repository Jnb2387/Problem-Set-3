//==========Problem 1
function palindrome(str){
    if(str == str.split('').reverse().join('')){
        return true
    }else{
        return false
    }
}
console.log(palindrome('racecar'))
console.log(palindrome('street'))
console.log(palindrome('madam'))

//Problem 1 using a ternary
function palindrome2(str){
    return str == str.split('').reverse().join('') ? true : false
}
console.log(palindrome2('racecar'))

function dashInsert(num){
       var num2 = num.toString().split("") 
        for(var i = 0; i < num2.length ; i++){
            if(num2[i] % 2 === 1 && num2[i+1] % 2 === 1){
               num2.splice(num2[i],'-')
        }
    }
}
console.log(dashInsert(454793))