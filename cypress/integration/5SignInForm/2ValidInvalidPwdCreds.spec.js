describe('Submit form with Valid Name and Invalid Pwd', function () {

    before(function(){
  
          cy.fixture('EcologiFixturesData').then(function(data){
          this.data=data
    })
  
  })
  
    it ('Valid Uname and InValid Password' , function()
    {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="Uname"]').type(this.data.ValidUname);
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