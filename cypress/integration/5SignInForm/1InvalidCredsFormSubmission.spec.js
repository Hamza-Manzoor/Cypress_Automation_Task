describe('Submit form with InValid credentials', function () {

  before(function(){

        cy.fixture('EcologiFixturesData').then(function(data){
        this.data=data
  })

})

  it ('should not be able to login' , function()
  {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="Uname"]').type(this.data.InValidUname);
    cy.get('[data-cy="Password"]').type(this.data.InValidPassword);
    cy.get("[data-cy='SubmitButton']").click();
  })
  
      it('Form Submit button', () => {

          cy.get('[data-cy="SubmitButton"]').should('be.visible').click()
    
        })   
      
      it('Form Submission result', () => {
          
         cy.get('[data-cy="Result"]').contains('Fail!!!')
      
        })   

  

    })