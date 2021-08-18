  //Question :4
 
  function foo1()
  {
  return {
  bar: "hello"
  };
  }
  function foo2(){
  return
  {
  bar: "hello"
  };
  }
  console.log(foo1());
  console.log(foo2());
  
  //Answer : Output for above function
  //foo1() will be   -----> hello
  //foo2() will be  ------> undefined
  // beacuse opening curly braces on line :77 should have been opened on line : 76 after return
  /* i.e: return{
       bar:"hello"
  }*/
  