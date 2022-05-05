function sumArr(a,b) {
 
  let sum =[]
 for(var i = 0; i < a.length; i++){
    let num = (Number(a[i]) + Number(b[i]));
   sum.push(num.toString())
}
  return sum
}
