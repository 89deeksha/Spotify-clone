const data={name:"Deeksha",city:"Agra"}



const storevariable=localStorage.setItem("xyz",JSON.stringify(data)
    
)
console.log(typeof (data))
const getstore=localStorage.getItem("xyz")
console.log(typeof(getstore))
const sessionstore=sessionStorage.setItem("abc",JSON.stringify(data)) 

