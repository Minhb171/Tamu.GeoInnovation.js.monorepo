import { desktopSizes } from '../../support/resolutions';

// runs same the same tests on different resolutions
desktopSizes.forEach((size) => {
  describe(`Sidebar Features on ${size} Resolution`, () => {
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
      cy.visit('http://localhost:4200'); // setup to run aggiemap locally
      cy.get('canvas').should('be.visible');
      cy.get('.tabs-content-container').should('be.visible');
    });
    // Tests begin here *delete when submitting pull request*
    it(`Should Close Sidebar on Features Tab Click`, () => {
      cy.get('[ng-reflect-title="Features"] > .esri-component > div > .material-icons').click();
      cy.get('.tabs-content-container').should('not.be.visible');
    });

    it(`Should Close Sidebar on Directions Tab Double Click`, () => {
      cy.get('[ng-reflect-title="Directions"] > .esri-component > div > .material-icons').dblclick();
      cy.get('.tabs-content-container').should('not.be.visible');
    });

    it(`Should Close Sidebar on Bus Routes Tab Double Click`, () => {
      cy.get('.ng-star-inserted > .esri-component > div > .material-icons').dblclick();
      cy.get('.tabs-content-container').should('not.be.visible');
    });

    // Tests end here *delete when submitting pull request*
  });
});
