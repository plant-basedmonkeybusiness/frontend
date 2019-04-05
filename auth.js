 // Modal Sign up
 // Búa til breytur til að sækja modal og takka frá HTML  
const modal = document.querySelector('#modal-signup');
const modalOpen = document.querySelector('#sign-up-btn');
const modalClose = document.querySelector('#close-btn-signup');

// Bæta við 'click event' á sign-up takkann til að virkja modalinn/ sýna hann með klasa sem heitir active. 
// og sá klasi er með display = block í CSS. 
// Hann lokast með 'click-event' á modalClose sem er "X" uppi í hægra horni 
modalOpen.addEventListener('click', ()=> {
  modal.classList.add('active');
});
modalClose.addEventListener('click', ()=> {
  modal.classList.remove('active');
});

 // Modal Log in
 // alveg það sama og signUp nema fyrir LogIn 
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
// Þetta er formið í Modal glugganum, input svæði til að skrá sig. 
// submit er með default virkni sem refresh-ar gluggann,  við tökum hann af með e.preventDefault
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  // Til að ná í value-input frá notandanum
  // signUpForm er object, og property geta ekki verið með bandstriki svo þessu uppsetning er þörf.
  // þetta er ekki array heldur bara vegna bandstriks í signup-email. 
  
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  // firebase býr til notanda hér 
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
   
  });
});
// logout
// það sama og signIn og signUp, 
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
    window.location.replace("../frontend/index.html");
  })
});
// login
// sama og í línu 33 
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  // sama og í línu 42
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  // sama og línu 47
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
// Sigrún + Sunna 
