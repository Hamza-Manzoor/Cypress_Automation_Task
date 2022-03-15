describe('Promo bar text and link check', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  

it('Verify link of github in Promo bar', () => {
  
    cy.get('[data-cy="menugitlink"]').should('be.visible').contains('available on GitHub')
    .should('have.attr', 'href').and('include', 'https://github.com/vercel/next.js/tree/canary/examples/blog-starter')
 
    })  

})