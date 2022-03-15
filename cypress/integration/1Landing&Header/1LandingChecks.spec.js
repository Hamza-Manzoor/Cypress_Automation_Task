describe('Landing checks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


  it('Verify URL and Page title', () => {

    cy.url().should('be.equal', 'http://localhost:3000/')
    cy.title().should('eq', 'Next.js Blog Example with Markdown')
    
    })

  })  