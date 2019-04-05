 // Modal Sign up
const modal = document.querySelector('#modal-signup');
const modalOpen = document.querySelector('#sign-up-btn');
const modalClose = document.querySelector('#close-btn-signup');

modalOpen.addEventListener('click', ()=> {
  modal.classList.add('active');
});
modalClose.addEventListener('click', ()=> {
  modal.classList.remove('active');
});

 // Modal Log in
 const logInModal = document.querySelector('#modal-login');
 const openLogInModal = document.querySelector('#login-btn');
 const closeLogInModal = document.querySelector('#close-btn-login');
 
 openLogInModal.addEventListener('click', ()=> {
  logInModal.classList.add('active');
 });
 closeLogInModal.addEventListener('click', ()=> {
  logInModal.classList.remove('active');
 });
 
// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
    // close the signup modal & reset form
    // const modal = document.querySelector('#modal-signup');
    // M.Modal.getInstance(modal).close();
    // signupForm.reset();
  });
});
// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
    window.location.replace("../frontend/index.html");
  })
});
// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password)
  .then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    // const modal = document.querySelector('#modal-login');
    // M.Modal.getInstance(modal).close();
    // loginForm.reset();
    window.location.replace("../cms/index.html");

  });
});
