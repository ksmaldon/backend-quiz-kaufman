// PLAN 
// Set up front end page 

/*describe('My first test', () => {
  it('opens up our page', () => {
    cy.visit('http://localhost:3000')
  })
})
//checks if the questions.topics and answers box is empty
describe('testing question input box', () => {
  it('Gets,types and asserts', () => {
    cy.visit('http://localhost:3000')
    cy.get('textarea[name="Questions"').should('be.empty')
    cy.get('textarea[name="Questions"]').type('What does HTML mean')
  })
})
//testing of the answer button
describe('testing question input box', () => {
  it('Gets,types and asserts', () => {
    cy.visit('http://localhost:3000')
    cy.get('textarea[name="Answer"').should('be.empty')
    cy.get('textarea[name="Answer"]').type('Hypertext Markup Language')

  })
})
//Testing  the input of topic button  
//does the submit button work 
//.submit() doesn't work because we dont have a form 

describe('testing question input box', () => {
  it('Gets,types and asserts', () => {
    cy.visit('http://localhost:3000')
    cy.get('textarea[name="Topic"').should('be.empty')
    cy.get('textarea[name="Topic"]').type('HTML/CSS')
    cy.get('button').click()
    
  })
})
*/
//edit button doesnt have a form or a class so  can't click it 

describe('testing checkbox', () => {
  it('does checkbox work', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[id="react"]').should('be.empty')
   // cy.get('input[id="HTML_CSS"]').should('be.empty')
    //cy.get('input[id="SQL"]').should('be.empty')
   // cy.get('input[id="JS"]').should('be.empty')
    cy.get('input[id="react"]').first().check()
   // cy.get('input[id="HTML_CSS"]').first().check()
   // cy.get('input[id="SQL"]').first().check()
   // cy.get('input[id="JS"]').first().check()
    cy.get('#crud-btn-container').click()
   // cy.get('button[class="hidden"]').click() doesnt have a class so can't work
  })
})








