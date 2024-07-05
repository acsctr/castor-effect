describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });
        cy.visit('/')
    })
})