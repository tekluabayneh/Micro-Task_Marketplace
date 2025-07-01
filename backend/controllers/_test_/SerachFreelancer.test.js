const SearchFreelancer = require('../SearchFreelancer');

describe('SearchFreelancer', () => {


    it('should return 200 status and search results', () => {
        const req = {
            SearchResult: [
                { id: 1, name: 'Freelancer 1' },
                { id: 2, name: 'Freelancer 2' }
            ]
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        SearchFreelancer(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(req.SearchResult);
    })
})
