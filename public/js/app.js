console.log('app.js loaded');

function showSignup() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

async function signup() {
  const u = document.getElementById('su-username').value;
  const p = document.getElementById('su-password').value;
  const c = document.getElementById('su-confirm').value;
  const role = document.getElementById('su-role').value;
  if (p !== c) return error('su-error', 'Passwords must match');
  const res = await fetch('/api/signup', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: u, password: p, role })
  });
  const data = await res.json();
  if (data.error) return error('su-error', data.error);
  showLogin();
}

async function login() {
  const u = document.getElementById('login-username').value;
  const p = document.getElementById('login-password').value;
  const res = await fetch('/api/login', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: u, password: p })
  });
  const data = await res.json();
  if (data.error) return error('login-error', data.error);
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  const prefix = data.role === 'Doctor' ? 'Dr. ' : data.role === 'Patient' ? 'Mr. ' : 'Admin ';
  document.getElementById('welcome').innerText = `Welcome ${prefix}${data.username}`;
}

function logout() { location.reload(); }

function error(id, msg) { document.getElementById(id).innerText = msg; }