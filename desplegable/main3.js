function myFunction(arr,str){
   objArray=[];
   let a='papfrita'
   arr.forEach(e=>{a=e;a['continent']=str;console.log(a);objArray.push(a)})
   return objArray










}

s=myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
Expecteds=
[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]














console.log(Expecteds)
console.log(s===Expecteds)
 console.log(s)