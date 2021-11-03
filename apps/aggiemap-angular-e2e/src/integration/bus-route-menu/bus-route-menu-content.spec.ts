import { desktopSizes } from '../../support/resolutions';

desktopSizes.forEach((size) => {
  describe(`Directions Bus Route Content on ${size} Resolution`, () => {
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
      cy.visit('http://localhost:4200'); // setup to run aggiemap locally
      cy.get('canvas').should('be.visible');
      // TODO: click bus route tab
    });

    it('Should Display Content for Bus Route Menu', () => {
      // change selectors from here down
      cy.get('.ng-star-inserted > .esri-component > div > .material-icons').click();
      cy.get('.sidebar-component-name > p').should('be.visible');
      cy.get(':nth-child(1) > .group-name').should('be.visible');
      cy.get(':nth-child(1) > .group-name').should('be.visible');
      cy.get(':nth-child(3) > .group-name').scrollIntoView().should('be.visible');
    });
  });
});
