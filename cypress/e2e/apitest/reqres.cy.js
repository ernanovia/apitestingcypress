describe('Reqres API Testing', () => {
  function randomEmail(){
    const randomString = Math.random.toString(36).substring(2, 10)
    const email = randomString+"@work.com"
    return email
  }

  let emailAddress = randomEmail()
  console.log(emailAddress)

  it('get list user', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response)=> {
      expect(response.status).to.equal(200)
    })
  })

  it('create user', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        "name" : "erna",
        "job" : "Quality assurance engineer"

      }
    }).then((response)=> {
      expect(response.status).to.equal(201)
      expect(response.body).has.property("name", "erna")
    })
  })

  // it('create user Gores', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: 'https://gorest.co.in/public/v2/users',
  //     headers: {
  //       Authorization : 'Bearer e6088fcae1c9f7d5d0abfb08c2a7cf2d1d8dcea9d39060489a2f405e4ab17988'
  //     },
  //     body: {
  //       "name" : "erna gores",
  //       "email" : "erna3@work.com",
  //       "gender" : "female",
  //       "status" : "active"

  //     }
  //   }).then((response)=> {
  //     // expect(response.status).to.equal(201)
  //   })
  // })

  it('get user Gores', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/2139175',
      headers: {
        Authorization : 'Bearer e6088fcae1c9f7d5d0abfb08c2a7cf2d1d8dcea9d39060489a2f405e4ab17988'
      },
    }).then((response)=> {
      expect(response.status).to.equal(200)
    })
  })


})