let employees=[
  {
      id:1,
      first_name:"Sourav",
      last_name:"Das",
      email:"sourav@gmail.com",
      gender:"Male" ,
      ip_address:"160.192.170.21",
  },
  {
      id:2,
      first_name:"Pavan",
      last_name:"Sai",
      email:"pavan@gmail.com",
      gender:"Male" ,
      ip_address:"160.193.170.21",
  },
  {
      id:3,
      first_name:"Pavni",
      last_name:"Das",
      email:"pavni@gmail.com",
      gender:"Female" ,
      ip_address:"160.197.170.21",
  },
  {
      id:4,
      first_name:"John",
      last_name:"Paul",
      email:"john@gmail.com",
      gender:"Male" ,
      ip_address:"160.172.170.21",

  },
  {
      id:5,
      first_name:"Ramya",
      last_name:"Maram",
      email:"Ramya@gmail.com",
      gender:"Female" ,
      ip_address:"160.292.170.21",
  },
  {
      id:6,
      first_name:"Tushar",
      last_name:"Vinocha",
      email:"Tushar@gmail.com",
      gender:"Male" ,
      ip_address:"160.182.170.21",

  }
]


//All employee 
let allEmpButton=document.querySelector("#all-emp-btn")
allEmpButton.addEventListener('click',function(){
    displayEmployees(employees)
})


//To get the Male employee data 
let maleEmpButton=document.querySelector("#male-emp-btn")

maleEmpButton.addEventListener("click",function(){
    let maleEmployee=employees.filter(function(employee){
        return employee.gender==="Male"
        
    })

    displayEmployees(maleEmployee)
})


//To get the Male employee data 

let FemaleEmpButton=document.querySelector("#female-emp-btn")

FemaleEmpButton.addEventListener("click",function(){
    let femaleEmployee=employees.filter(function(employee){
        return employee.gender==="Female"
        
    })

    displayEmployees(femaleEmployee)
})



let searchBox=document.querySelector("#search-box")
searchBox.addEventListener("keyup",function(){
   let textEntered= searchBox.value
//    console.log(textEntered)
let filteredEmployee=[];
if(textEntered!==""){
    filteredEmployee=employees.filter(function(employee){
        return employee.last_name.toLowerCase().includes(textEntered.toLowerCase())
    })
    // console.log(filteredEmployee)

    document.querySelector("#table-body").innerHTML=""
    displayEmployees(filteredEmployee)
}else{
    document.querySelector("#table-body").innerHTML="" 
}

})

// Display the the data using templ literal inside tbody

let displayEmployees=(employees)=>{
    let tableBody=document.querySelector("#table-body")
    let tablerow="";

    for(let employee of employees){
        tablerow+=`<tr>
        <td>${employee.id}</td>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.email}</td>
        <td>${employee.gender}</td>
        <td>${employee.ip_address}</td>
        </tr>`;
        tableBody.innerHTML=tablerow
    }
}