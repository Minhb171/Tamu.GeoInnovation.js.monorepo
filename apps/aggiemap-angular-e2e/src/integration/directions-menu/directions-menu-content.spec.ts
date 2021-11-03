import { desktopSizes } from '../../support/resolutions';

desktopSizes.forEach((size) => {
  describe(`Directions Menu Content on ${size} Resolution`, () => {
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
      cy.visit('http://localhost:4200'); // setup to run aggiemap locally
      cy.get('canvas').should('be.visible');
      // TODO: click directions tab
    });

    it('Should Display Content for Directions Menu', () => {
      // change selectors from here down
      cy.get('[ng-reflect-title="Directions"] > .esri-component > div > .material-icons').click();

      // input containers for directions
      cy.get('[ng-reflect-index="0"] > :nth-child(1) > .input-action-container > .margin-right')
        .should('be.visible')
        .and('have.attr', 'placeholder')
        .and('contain', 'Choose point or click on the map');
      cy.get('[ng-reflect-index="1"] > :nth-child(1) > .input-action-container > .margin-right')
        .should('be.visible')
        .and('have.attr', 'placeholder')
        .and('contain', 'Choose point or click on the map');

      cy.get('.travel-modes').should('be.visible');
      cy.get('.options-container').should('be.visible');
      cy.get('#direction-feedback > .ng-star-inserted').should('be.visible');
    });
  });
});
