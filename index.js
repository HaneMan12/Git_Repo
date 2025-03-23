function greeting() {
    console.log('Hello, World!');
  var name = document.getElementById('name').value;
  if (name !== '') {
  document.getElementById('greeting_message').innerHTML = 'Hello, ' + name + '!';
}
}

// alert(Hello, name);
// console.log(Hello, name);