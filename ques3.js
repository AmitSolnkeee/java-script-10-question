 //Question :3

 /*var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company 
Console.log(emp1.company);

/*Answer:This code has many syntax errors such as first letter as uppercase and lowercase
such as : Employee ---->employee
          Emp1 -----> emp1
          Console------> console
   
 Howwever if we correct this small syntax error*/ 

 var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(Employee);
delete Emp1.company 
console.log(Emp1.company); /// After correcting the codes output will be Rohit
