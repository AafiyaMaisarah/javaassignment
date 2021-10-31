
// percentage
function totalmarks(x){
    var per=((x/600)*100);
    return per;
}
var res=totalmarks(500);
console.log(res);


// even odd
function evenodd(num){
    if(num%2==0){
      console.log("even");
    }
    else{
        console.log("odd");
    }
}
 evenodd(6);

 
//  reverse string
function revstr(str)
{
    return str.split("").reverse("").join("");
}
var result=revstr("javascript");
console.log(result);