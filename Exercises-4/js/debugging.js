setInterval(() => {
  function1();

  function function1() {
    const foo = "foo";
    // console.log(foo);
    function2(foo);
  }

  function function2(foo) {
    if (foo === "foo") {
      function3(); //(foo)
    } else {
      function4();
    }
  }

  function function3() { //(foo)
    // foo = "bar";  // foo = "bar"
    console.log("Hello from function3");
  }

  function function4() {
    console.log("Hello from function 4");
  }
}, 10000);
