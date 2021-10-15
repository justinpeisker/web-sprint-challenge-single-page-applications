describe('pizza form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    const nameInput = cy.get('input [name= name]');
    const sizeInput = cy.get('select [name= size]');
    const submit = cy.get('button [id= "order-button"]')
    const pepInput = cy.get('input [type = checkbox]')
    const sausageInput = cy.get('input [type = checkbox]')

    it('sanity test', () => {
        expect(1 + 1).to.equal(2);
    })

    it('name input', () => {
        nameInput
            .should('exist')
            .type('Justin');
        
    })

    it('toppings test', () => {
        pepInput.check();
        sausageInput.check();
    })

    it('pizza size', () => {
        sizeInput.should('exist')
    })

    it('submit button', () => {
        nameInput.type('Justin')
        sizeInput.select('Large')
        submit.click()
    })

   

})