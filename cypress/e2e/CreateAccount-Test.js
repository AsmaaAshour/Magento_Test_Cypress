/// <reference types="Cypress"/>

describe("Magento", () => {
  it("create an account(sign up)then sign in whith it", () => {
    let firstname = ["lema", "Ola", "Sanaa", "Rama"];
    let lastname = ["Alomari", "Alzoubi", "Awadeen", "Khaldy"];

    let randomindexfirstname = Math.floor(Math.random() * firstname.length);
    let randomindexlastname = Math.floor(Math.random() * lastname.length);
    let randomnumbertouseinemail = Math.floor(Math.random() * 100);
    let emailtosignin;
    let passwordtosignin;

    function generateRandomPassword(length) {
      let charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
      let password = "";

      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }

    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );

    //type first name
    cy.get("#firstname").type(firstname[randomindexfirstname]);
    //type last name
    cy.get("#lastname").type(lastname[randomindexlastname]);

    //type email
    emailtosignin =
      firstname[randomindexfirstname] +
      "." +
      lastname[randomindexlastname] +
      randomnumbertouseinemail +
      "@gmail.com"; //use this in sign in
    cy.get("#email_address").type(
      firstname[randomindexfirstname] +
        "." +
        lastname[randomindexlastname] +
        randomnumbertouseinemail +
        "@gmail.com"
    );

    //type password & password confirm
    passwordtosignin = generateRandomPassword(10); //use this in sign in
    cy.get("#password").type(passwordtosignin);
    cy.get("#password-confirmation").type(passwordtosignin);

    //click button to create account
    cy.get("button[title='Create an Account'] span").click();

    //logout
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/logout/"
    );
    //signin
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );

    // type sign in information
    cy.get("#email").type(emailtosignin);
    cy.get("#pass").type(passwordtosignin);
    cy.get(
      "fieldset[class='fieldset login'] div[class='primary'] span"
    ).click();
  });
});
