describe('Loads the App', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:3000');
  });

  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('#add-list').click();
  });
});
