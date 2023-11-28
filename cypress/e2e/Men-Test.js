/// <reference types="Cypress"/>

describe("Magento", () => {
  it("Men->Hoodies & Sweatshirts", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(
      'a[href="https://magento.softwaretestingboard.com/men.html"]'
    ).click();
    cy.get(".categories-menu > :nth-child(2) > :nth-child(1) > a").click();
    cy.get(":nth-child(5) > .field > .control > #limiter").select("36");

    cy.get(".price-box")
      .find(".price")
      .invoke("text")
      .then((pricetext) => {
        let total = 0;
        let discount = 0;
        let priceslist = pricetext.split("$");
        for (let i = 0; i < priceslist.length; i++) {
          cy.log(
            "price before discount for item #" +
              [i] +
              " = " +
              Number(priceslist[i])
          );
          total += Number(priceslist[i]);
          discount = 0.1 * Number(priceslist[i]);
          cy.log(
            "price After  discount for item #" +
              [i] +
              " = " +
              (Number(priceslist[i]) - discount)
          );
        }
        cy.log("Total all items befoe discount=" + total + "$");
      });
  });
});
