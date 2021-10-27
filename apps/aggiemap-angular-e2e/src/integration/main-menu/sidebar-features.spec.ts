import { desktopSizes } from '../../support/resolutions';

// runs same the same tests on different resolutions
desktopSizes.forEach((size) => {
  describe(`Sidebar Features on ${size} Resolution`, () => {
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
      cy.visit('http://localhost:4200'); // setup to run aggiemap locally
      cy.get('canvas').should('be.visible');
    });
    // Tests begin here
    it(`Should Close Sidebar`, () => {
      cy.get('[ng-reflect-title="Features"] > .esri-component > div > .material-icons').click();
      cy.get('.tabs-content-container').should('not.be.visible');
    });
    // Tests end here
  });
});
