Cypress.Commands.add(
  'getLinkByText',
  (text) => {
    cy.contains('a', text)
  },
);

it('origin example', () => {
  cy.visit('/')
  cy.getLinkByText('Start a free trial')

  cy.origin(
    'https://www.google.com/',
    () => {
      cy.visit('')
      cy.getLinkByText('Sign in')
    }
  )
})