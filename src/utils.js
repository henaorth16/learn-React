export function getLongestNonRepeating(str)  {
   let strArr = []
   let nonRepeat = ""
   let res = ""
   for(let i = 0; i < str.length; i++){
       if(!nonRepeat.includes(str[i])){
           nonRepeat += str[i]
       }else{
           strArr = str.split(str[i])
       }
   }
   for(let i = 0; i < strArr.length; i++){
               if(strArr[i].length > strArr[0].length && nonRepeat.includes(strArr[i])){
                   res += strArr[i]
               }
           }
           console.log(nonRepeat)
       return res
 }
 
 export function uppercase(str) {
   let result = []
   str.split(" ").forEach(char =>{
      result.push(char[0].toUpperCase() + char.slice(1))
   })
   return result.join(" ")
}
export function data() {
   return data = [
      {
         name: "henok",
       id:"ID093283",
       address: {country:"Ethiopia",
         city: "Addis Ababa",
         phone: "0965302420",
       }
     },
       {
         name: "Ashu",
       id:"ID0s543f4",
       address: {country:"Uganda",
         city: "Kampala",
         phone: "0961016778",
       }
     },
       {
         name: "habtenesh aytenfsu",
       id:"ID0t54643",
       address: {country:"Ethiopia",
         city: "Lemi",
         phone: "0909331666",
       }
     },
       {
         name: "Emyaye Sintayehu",
       id:"ID09e4343",
       address: {country:"Ethiopia",
         city: "Gosh-wha",
         phone: "0911873321",
       }
     }
   ]
}