function Greeting() {
  function sayHello(name) {
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={() => sayHello("React")}>
      Say Hello
    </button>
  );
}