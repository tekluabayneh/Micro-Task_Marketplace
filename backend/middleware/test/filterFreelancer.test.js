const filterfreelancer = require("../filterFreelancer.js")



const filterfreelancer = require("../filterFreelancer.js")
jest.mock('filterfreelancer.js')
descibe('filterfreelancer middlware', ()=>{

let req, res, next;


beforeEach(() =>{

   req ={query:{ Search:{} }

   res = {
     status:jest.fn().mockReturnThis(),
     json:jest.fn(),

   }



test('should return 400 if the Seach query is empty', ()=>{
  })



})

})
