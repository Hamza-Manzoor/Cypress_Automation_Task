describe('Footer elements checks', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    

       it('Read documentation button', () => {
  
        cy.get('[data-cy="footernextlink"]').should('not.be.disabled').contains('Read Documentation')
        .should('have.attr', 'href').and('include', 'https://nextjs.org/docs/basic-features/pages')
         })   

   it('View on Github link footer', () => {

        cy.get('[data-cy="footergitlink"]').should('be.visible').contains('View on GitHub')
        .should('have.attr', 'href').and('include', 'https://github.com/vercel/next.js/tree/canary/examples/blog-starter')
        }) 

    }) 