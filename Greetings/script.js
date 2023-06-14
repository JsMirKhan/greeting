function sayHello(){

  var name = document.getElementById("name").value;

  var greeting = "Hello, " + name + "!";

  document.getElementById("output").textContent = greeting;
}
