describe('Remove Liquidity', () => {
  it('redirects', () => {
    cy.visit('/remove/0xc778417E063141139Fce010982780140Aa0cD5Ab-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.url().should(
      'contain',
      '/remove/0xc778417E063141139Fce010982780140Aa0cD5Ab/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85'
    )
  })

  it('AVAX remove', () => {
    cy.visit('/remove/AVAX/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'AVAX')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'SOLAR')
  })

  it('AVAX remove swap order', () => {
    cy.visit('/remove/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82/AVAX')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SOLAR')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'AVAX')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82-0xe9e7cea3dedca5984780bafc599bd69add087d56')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SOLAR')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if SOLAR is duplicated', () => {
    cy.visit('/remove/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82-0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SOLAR')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'SOLAR')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0x7083609fce4d1d8dc0c979aab8c869ea2c873402-0x2170ed0880ac9a755fd29b2688956bd959f933f8')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', DAIe')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'AVAX')
  })
})
