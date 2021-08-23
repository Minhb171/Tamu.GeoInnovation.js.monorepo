/// <reference path="../support/index.d.ts" />
import { inRange, isTypedArray } from "cypress/types/lodash";
import {mobileSizes} from "./resolutions";

mobileSizes.forEach((size) => {
  describe(`Test Different Route Options on Mobile Layers Page: ${size} resolution`, function() {
    beforeEach(() => {
      cy.viewport(size[0], size[1])
      cy.intercept("GET", "**/TAMU_BaseMap/**").as("basemap")
      cy.intercept("GET", "**/Construction_2018/**").as("construction")
      cy.intercept("GET", "**/Physical_Distancing_Tents/**").as("tents")
      let routeData;
      cy.fixture('route-data').then(function(data) {
        routeData=data
      })
      cy.intercept("GET", 'https://gis.tamu.edu/arcgis/rest/services/Routing/20210407/NAServer/Route/solve?doNotLocateOnRestrictedElements=true&outputLines=esriNAOutputLineTrueShape&outSR=4326&returnBarriers=false&returnDirections=true&returnPolygonBarriers=false&returnPolylineBarriers=false&returnRoutes=true&returnStops=false&returnZ=false&startTimeIsUTC=true&stops=%7B%22features%22%3A%5B%7B%22geometry%22%3A%7B%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%2C%22x%22%3A-96.34159368595117%2C%22y%22%3A30.61113177551135%7D%2C%22symbol%22%3Anull%2C%22attributes%22%3A%7B%22routeName%22%3A1%2C%22stopName%22%3A%2230.6111%2C%20-96.3416%22%7D%2C%22popupTemplate%22%3Anull%7D%2C%7B%22geometry%22%3A%7B%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%2C%22x%22%3A-96.34036255938763%2C%22y%22%3A30.612954210633955%7D%2C%22symbol%22%3Anull%2C%22attributes%22%3A%7B%22routeName%22%3A1%2C%22stopName%22%3A%22Rudder%20Tower%22%7D%2C%22popupTemplate%22%3Anull%7D%5D%7D&travelMode=1&f=json',
        { fixture: 'route-data' }).as('walkRouteData')
      cy.intercept('GET', '**/arcgis/rest/services/FCOR/TAMU_BaseMap/MapServer/1/query?f=json&geometry=%7B%22spatialReference%22%3A%7B%22wkid%22%3A102100%7D%2C%22xmin%22%3A-10724573.690580126%2C%22ymin%22%3A3582603.5157282613%2C%22xmax%22%3A-10724420.816523556%2C%22ymax%22%3A3582756.3897848316%7D&orderByFields=OBJECTID%20ASC&outFields=*&outSR=102100&quantizationParameters=%7B%22extent%22%3A%7B%22spatialReference%22%3A%7B%22wkid%22%3A102100%7D%2C%22xmin%22%3A-10724573.690580126%2C%22ymin%22%3A3582603.5157282613%2C%22xmax%22%3A-10724420.816523556%2C%22ymax%22%3A3582756.3897848316%7D%2C%22mode%22%3A%22view%22%2C%22originPosition%22%3A%22upperLeft%22%2C%22tolerance%22%3A0.29858214173889186%7D&resultType=tile&returnExceededLimitFeatures=false&spatialRel=esriSpatialRelIntersects&where=1%3D1&geometryType=esriGeometryEnvelope&inSR=102100', 
        { fixture: 'building-data'} )
        .as('buildingData')
    })

    const building = 'Rudder Tower'

    it('Open Aggie Map', () => {
      cy.visit('https://aggiemap.tamu.edu/map/m')
      cy.get('canvas').should('be.visible', {timeout: 5000})
    })

    it('Input Building Search', () => {
      cy.get('tamu-gisc-search-mobile')
        .should('be.visible')
        .click()
      cy.get('.margin-left').type(building)
    })

    it('Search Results Displayed', () => {
      cy.get('.search-results-container').should('be.visible')
      cy.get('.focusable').should('contain.text', building)
    })
      
    it('Click Search Result', () => {
      cy.contains('Rudder Tower (0446)').click()
      cy.get('.feature-style-1').should('contain.text', building)
      cy.wait(2000)
      // verify that server request is fulfilled
      cy.wait('@buildingData').then(response => {
        expect(response).to.have.property('state', 'Complete')
        console.log()
      }) 
    })

    it('Drag Pop-up Into User View', () => {
      cy.get('tamu-gisc-feature-mobile-popup').should('be.visible')
      cy.get('.handle').move({ x: 0, y: -60, force: true})
    })

    it('Check Popup Results', () => {
      // redo test using fixture data by stubbing server response
      // check is correct building information is displayed
      cy.get('.feature-style-1')
          .should('not.be.empty')
          .and('be.visible')
      cy.get('.feature-style-2')
          .should('not.be.empty')
          .and('be.visible')
      cy.get('.feature-style-2 > :nth-child(1)')
          .should('not.be.empty')
          .and('be.visible')
      cy.get('.feature-style-2 > :nth-child(2)')
          .should('not.be.empty')
          .and('be.visible')
      cy.get('.feature-style-2 > :nth-child(3)')
          .should('not.be.empty')
          .and('be.visible')

      // check if correct copy URL is displayed
      cy.get('tamu-gisc-copy-field')
        .should('be.visible')
        .and('contain.text', 'https://aggiemap.tamu.edu/?bldg=0446')
      cy.wait(2000)
    })

    it('Check Walk Route Directions', () => {
      cy.get('.button')
        .should('have.attr', 'building-number')
      cy.contains('Directions To Here')
        .should('be.visible')
        .click()
      
      cy.get('canvas')
        .click('bottomRight')  // click random location
        .wait(1000)

      //Stub server response so that all routes are always available
      // cy.intercept('@walkRouteData',  { fixture: 'route-data' }).then((response) => {
      //   console.log()
      // })
      cy.intercept({
        method: 'GET',
        url: 'https://gis.tamu.edu/arcgis/rest/services/Routing/20210407/NAServer/Route/solve?doNotLocateOnRestrictedElements=true&outputLines=esriNAOutputLineTrueShape&outSR=4326&returnBarriers=false&returnDirections=true&returnPolygonBarriers=false&returnPolylineBarriers=false&returnRoutes=true&returnStops=false&returnZ=false&startTimeIsUTC=true&stops=%7B%22features%22%3A%5B%7B%22geometry%22%3A%7B%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%2C%22x%22%3A-96.34007759157538%2C%22y%22%3A30.612527917309713%7D%2C%22symbol%22%3Anull%2C%22attributes%22%3A%7B%22routeName%22%3A1%2C%22stopName%22%3A%2230.6125%2C%20-96.3401%22%7D%2C%22popupTemplate%22%3Anull%7D%2C%7B%22geometry%22%3A%7B%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%2C%22x%22%3A-96.34007988218595%2C%22y%22%3A30.612909929753148%7D%2C%22symbol%22%3Anull%2C%22attributes%22%3A%7B%22routeName%22%3A1%2C%22stopName%22%3A%22Rudder%20Tower%22%7D%2C%22popupTemplate%22%3Anull%7D%5D%7D&travelMode=1&f=json'
        },
        {
          statusCode: 200,
          body: [
            {
              "Total_time" : 500
            }
          ]
        }
      ).as('route')
      cy.wait('@route')
      console.log()

      // drag popup up and check if route features are displayed
      cy.get('.handle')
        .move({ x: 0, y: -400, force: true})
      cy.get('.directions-overview')
        .should('be.visible')
      cy.get('.directions-container')
        .should('be.visible')
      cy.get('.handle').move({ x: 0, y: 400, force: true }) // drag popup back down to access route options again
    })

    it('Check Bike Route Directions', () => {
      // click bike route option and check directions
      cy.get('tamu-gisc-trip-planner-mode-picker-mobile').should('be.visible')
      cy.get('.travel-modes > :nth-child(2) > div')
          .click()
          .should('have.class', 'active')
      cy.get('.handle').move({ x: 0, y: -400, force: true}) // drag popup back into view
      cy.get('.directions-overview')
        .should('be.visible')
      cy.get('.directions-container')
        .should('be.visible')
      cy.get('.handle').move({ x: 0, y: 400, force: true }) // drag popup back down to access route options again
    })

    it('Check Car Route Directions', () => {
      // click car route option and check directions
      cy.get('tamu-gisc-trip-planner-mode-picker-mobile').should('be.visible')
      cy.get('.travel-modes > :nth-child(3) > div')
          .click()
          .should('have.class', 'active')
      cy.get('.handle').move({ x: 0, y: -400, force: true}) // drag popup back into view
      cy.get('.directions-overview')
        .should('be.visible')
      cy.get('.directions-container')
        .should('be.visible')
      cy.get('.handle').move({ x: 0, y: 400, force: true }) // drag popup back down to access route options again
    })

    it('Check Bus Route Directions', () => {
      // click bus route option and check directions
      cy.get('tamu-gisc-trip-planner-mode-picker-mobile').should('be.visible')
      cy.get('.travel-modes > :nth-child(4) > div')
          .click()
          .should('have.class', 'active')
      cy.get('.handle').move({ x: 0, y: -400, force: true}) // drag popup back into view
      cy.get('.directions-overview')
        .should('be.visible')
      cy.get('.directions-container')
        .should('be.visible')
      cy.get('.handle').move({ x: 0, y: 500, force: true }) // drag popup back down to access route options again
    })

    it.skip('Change Start Location After Previous Route', () => {

      // click search bar for new starting location
      cy.get('.points > :nth-child(1) > .ng-tns-c91-1')
        .scrollIntoView()
        .should('be.visible')
        .click()

      // click current location
      cy.get('.focusable')
        .should('be.visible')
        .click()

      // mock geolocation
      cy.mockGeolocation()

      // click random location (no new circle should appear)


    })

  })
})