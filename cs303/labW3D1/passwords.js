"use strict";
 
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */
/**
 * 
 * @param {fun} ok callback function
 * @param {fun} fail callback function
 * @returns {boolean} true, if password is correct, otherwise false
 */
 
function askPassword(ok, fail) {
    let password ="rockstar";
    if (password === "rockstar") return ok();
    else return fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      return`${this.name} logged in`;
    },
  
    loginFail() {
      return`${this.name} failed to log in`;
    },
  
  };
  //askPassword = askPassword.bind(user)
 console.log(askPassword(user.loginOk.bind(user), user.loginFail.bind(user)));
 
/**
 * 
 * @param {fun} ok callback function
 * @param {fun} fail callback function
 * @returns {boolean} true, if password is correct, otherwise false
 */
 
 function askPassword2(ok, fail) {
     let password ="1234";
    if (password === "rockstar") return ok();
    else return fail(); 
  }
  
  let user2 = {
    name: 'John',
  
    login(result) {
      return( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  console.log(askPassword2(()=>user2.login(true), ()=>user2.login(false)));