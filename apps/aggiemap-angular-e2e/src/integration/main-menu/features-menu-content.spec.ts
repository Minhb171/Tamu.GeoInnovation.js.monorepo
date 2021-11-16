import { desktopSizes } from '../../support/resolutions';

desktopSizes.forEach((size) => {
  describe(`Display Features Menu Content on ${size} Resolution`, () => {
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
      cy.visit('http://localhost:4200'); // setup to run aggiemap locally
      cy.get('canvas').should('be.visible');
    });

    it('Should Display Search Bar', () => {
      cy.get('[data-cy=building-search-bar]')
        .should('be.visible')
        .and('to.be.empty')
        .and('contain.attr', 'Placeholder', 'Find Building or Parking');
    });

    it('Should Display Layer list', () => {
      cy.contains('Layers').should('be.visible');
      cy.get('tamu-gisc-layer-list').should('be.visible');
      cy.get('tamu-gisc-layer-list-item').should('be.visible').and('not.be.empty');
    });

    it('Should Display Legend List', () => {
      cy.contains('Legend').should('be.visible');
      cy.get('tamu-gisc-legend').should('be.visible');
      cy.get('.legend-info').should('be.visible').and('not.be.empty');
    });
  });
});
