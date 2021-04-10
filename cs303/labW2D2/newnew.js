function isPrime(n){
    for(let i=2;i<n;i++){
    if(n%i===0){
        return false;
    }else{
        return true;
    }
}

function myFilter(arr,isPrime){
    let newArr=[]
    for(let key of arr){
        if(isPrime(key)){
            newArr.push(key)
        }
    }return newArr;
}

console.log(myFilter([1,2,3,4,5,6],isPrime));
