describe('Author Blog Post', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  

    it('Page title verification', () => {
  
      cy.get('[data-cy="Pagetitle"]').should('be.visible').contains('Blog.')
   
    })

 it('Tag line and Next.js link verification', () => {

      cy.get('[data-cy="tagline"]').should('be.visible').contains('A statically generated blog example using')
      cy.get('[data-cy="taglinenextlink"]').should('be.visible').contains('Next.js')
      .should('have.attr', 'href').and('include', 'https://nextjs.org/')
     
      })

// it('Cover Image verification', () => {
//       cy.get('[data-cy="coverimage"]').should('be.visible').and(($img) => {
//         expect($img[0].naturalWidth).to.be.greaterThan(0)
//       })     
//       })     

it('JJ Kasper Icon verification', () => {

  cy.get('[data-cy="Imageb"]').should('be.visible')

  })

it('Dynamic Date verification', () => {

    cy.get('[data-cy="datetime"]').should('be.visible').contains('March 16, 2020')
 
    })
    })