/// <reference types="Cypress"/>

describe("Magento", () => {
  it("Gear->Bags", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(
      'a[href="https://magento.softwaretestingboard.com/gear.html"]'
    ).click();
    cy.get("dd > .items > :nth-child(1) > a").click();
    cy.get(":nth-child(5) > .field > .control > #limiter").select("36");

    cy.get(".price-box")
      .find(".price")
      .invoke("text")
      .then((pricetext) => {
        let total = 0;
        let priceslist = pricetext.split("$");
        for (let i = 0; i < priceslist.length; i++) {
          cy.log("price of bag #" + [i] + " " + Number(priceslist[i]));
          total += Number(priceslist[i]);
        }
        cy.log("Total=" + total + "$");
      });
  });
});
