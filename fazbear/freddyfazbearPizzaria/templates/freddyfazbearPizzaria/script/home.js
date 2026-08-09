  const form = document.getElementById('loginForm');
  const status = document.getElementById('loginStatus');
  const logoutBtn = document.getElementById('logoutBtn');
  const userField = document.getElementById('username');
  const passField = document.getElementById('password');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = userField.value.trim();
    if(!name){
      status.textContent = 'Enter an Employee ID';
      status.classList.remove('on');
      return;
    }
    status.textContent = 'Logged in as ' + name;
    status.classList.add('on');
    form.classList.add('hidden');
    logoutBtn.classList.remove('hidden');
  });

  logoutBtn.addEventListener('click', function(){
    userField.value = '';
    passField.value = '';
    status.textContent = 'Not logged in';
    status.classList.remove('on');
    form.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
  });