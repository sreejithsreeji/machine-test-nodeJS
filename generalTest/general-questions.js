// find common in arrays
// question 1
const findCommon=(arr1,arr2)=>{
    let commonElementsArray=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                const isExist=commonElementsArray.findIndex(x=>{
                    return x===arr1[i];
                })
                if(isExist===-1)
                commonElementsArray.push(arr1[i]);
            }
        }
    }
    return commonElementsArray;
}
console.log("\ncommon elements are")
console.log(findCommon([1,2,3,1,3],[5,8,7,2,1,9,1]));

//multiplication table

const mult=(multiplicant,limit)=>{
    if(limit ===0){
        console.log('input is invalid')
        return;
    }
    for(let i=1;i<=limit;i++){
        console.log(multiplicant +"*"+ i +"="+(multiplicant*i));
    }
}
console.log('\nMultiplication table\n')
mult(0,5);

// question 3 : dont understand question properly. if you a sample output for the given input
  //i can complete this question.

//pattern

const pattern=(number)=>{
    let l=number.length-1;
    let count=0;
    let array=[];
 
    for(let i=0;i<=l;i++){
        count++;
        for(let j=0;j<count;j++){
            array.push(number[l-j])
        }
        if(i===l){

            const data=Object.assign([],number).slice(1);
            

            console.log(array.join('.')+'.'+data.join('.'));
            array=[];
            for(i=0;i<=l;i++){
                for(j=0;j<l-i;j++){
                    array.push(number[l-j])
                }
                console.log(array.join("."));
                array=[];
            }
        }else{
            console.log(array.join('.'));
        }
        array=[];
    }
}

console.log('\nPattern\n')
pattern("123456789");

//question 5

// 1:
 
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise resolve after 5 seconds')
    },5000)
});

p1.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})

//2: 
const add=(a,b,callback)=>{
    let c=a+b;
    callback(c);
}
const display=(sum)=>{
    console.log('sum obtained in callback function is '+sum);
}

add(10,20,display);