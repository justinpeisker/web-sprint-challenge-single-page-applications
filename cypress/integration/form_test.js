describe('pizza form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const nameInput = cy.get('input [name= name]');
    const sizeInput = cy.get('input [name= size');
    const submit = cy.get('button [id= "order-button"]')

    it('sanity test', () => {
        expect(1 + 1).to.equal(2);
    })

    it('name input', () => {
        nameInput.should('exist')
    })

    it('pizza size', () => {
        sizeInput.should('exist')
    })

    it('submit button', () => {
        submit.should('exist')
    })

})