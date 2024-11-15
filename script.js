function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var role = document.getElementById('role').value;

  if (username === 'commander' && password === 'password' && role === 'commander') {
    alert('Commander login successful');
    
  } else if (username === 'soldier' && password === 'password' && role === 'soldier') {
    alert('Soldier login successful');

  } else {
    alert('Invalid credentials');
  }
}
