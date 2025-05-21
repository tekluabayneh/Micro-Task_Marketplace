const filterfreelancer = require("../filterFreelancer.js")



const filterfreelancer = require("../filterFreelancer.js")
jest.mock('filterfreelancer.js')
descibe('filterfreelancer middlware', ()=>{

let req, res, next;


beforeEach(() =>{

   req ={query:{ Search:{} };

   res = {
     status:jest.fn().mockReturnThis(),
     json:jest.fn(),
    next = jest.fn(),
   };


test('should return 400 if the Seach query is empty',
  async ()=> {

await filterfreelancer(req, res, next)

expect(req.query.Search).toHaveBeenCalledwith(400)

expect(res.status).toHaveBeenCalledwith({error:'missing search query'})

 // since there is Erroe the next shouldn't be called
 expect(next).not.toHaveBeenCalled()


  }

test('should fetch all the profile if the query is not All', async () =>{

req.query.Search = "Frontend Developer"
const mockResult =  [{id:1, name:'teklu'}]

  // and we have to also mock the database result 
  db.execute.mockResolvedValueOnce([mockResult])


filterfreelancer(req,res, next)

expect(req.SearchResult).toEqual(mockResult)
  expect(db.execute).toHaveBeenCalled()
  expect(next).toHaveBeenCalled()
}


})





test('should retun internal server error' , async () =>{

  res = {
  status:jest.fn().mockReturnThis(),
  json:jest.fn(),

  }
expect(res.status).toHaveBeenCalledwith({error:'Somthing went Wrong'})

expect(res.json).toHaveBeenCalled()




} 


})
