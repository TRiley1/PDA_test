describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Do the number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '22')
  })

  it('2 + 2 should equal 4', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '4')
  })

  it('does 3 + 1 - 2 == 2', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '2')

  })

  it('should return a positive number', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '6')
  })

  it('should return a negative number', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '-2')
  })
  
  it('should return a decimal', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '1.5')
  })
  
  it('should return a very large number', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '99980001')
  })

  it('should return infinity when dividing by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '∞')
  })


})