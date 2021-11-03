import { desktopSizes } from '../../support/resolutions';

desktopSizes.forEach((size) => {
  describe(`Features Menu Content on ${size} Resolution`, () => {
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
      cy.visit('http://localhost:4200'); // setup to run aggiemap locally
      cy.get('canvas').should('be.visible');
    });

    it('Should Display Content for Features Menu', () => {
      cy.get('[data-cy=building-search-bar]').should('be.visible');
      cy.contains('Layers').should('be.visible');
      cy.contains('Legend').should('be.visible');
      // change selectors from here down
      cy.get('tamu-gisc-layer-list').should('be.visible');
      cy.get('tamu-gisc-legend').should('be.visible');
    });
  });
});
