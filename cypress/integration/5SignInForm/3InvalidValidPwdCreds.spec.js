describe('Submit form with InValid Name and Valid Pwd', function () {
    
        before(function(){
      
              cy.fixture('EcologiFixturesData').then(function(data){
              this.data=data
        })
      
      })
      
        it ('InValid Uname and Valid Password' , function()
        {
          cy.visit('http://localhost:3000/');
          cy.get('[data-cy="Uname"]').type(this.data.InValidUname);
          cy.get('[data-cy="Password"]').type(this.data.ValidPassword);
          cy.get("[data-cy='SubmitButton']").click();
        })
        
        it('Form Submit button', () => {
      
           cy.get('[data-cy="SubmitButton"]').should('be.visible').click()
          
        })   
            
        it('Form Submission result', () => {
                
            cy.get('[data-cy="Result"]').contains('Fail!!!')
            
        })   
      
        
    })