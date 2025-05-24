const filterFreelancerUpdateFields = require("../filterFreelancerUpdateFields");

describe("filterFreelancerUpdateFields", () => {
  // if the fields are not valid, it should reutrn 404 error
  // if the fields are valid it should return the filtered fields
  // since the middleware is checking the body of the request and has and also since it has the 400 error it should not call the next middlewae
  it("should return 400 error if no valid fields are provided", () => {
    const next = jest.fn();
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const req = {
      body: {
        someInvalidField: "junk",
      },
    };

    filterFreelancerUpdateFields(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "No valid fields provided to update",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return the filtered fields if the filtered fields are provided", () => {
    let req = {
      body: {
        name: "John Doe",
        title: "Senior Full Stack Developer",
        bio: "Experienced developer with 5+ years in web development",
        paragraph: "Passionate about creating efficient and scalable solutions",
        skills: "JavaScript, React, Node.js, Python, AWS",
        experience_level: "Senior",
        hourly_rate: "75",
        location: "New York, USA",
        availability: "Full-time",
        work_history: "2 years at Tech Corp as Senior Developer",
        language: "English, Spanish",
        Education: "Bachelor of Computer Science from Tech University",
        Licenses: "AWS Certified Developer",
        isVerified: "true",
        overview:
          "Dedicated full stack developer with strong problem-solving skills",
        earned: "50000",
        image: "profile-image.jpg",
      },
    };

    let res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    let next = jest.fn();

    filterFreelancerUpdateFields(req, res, next);

    expect(req.body).toEqual({
      name: "John Doe",
      title: "Senior Full Stack Developer",
      bio: "Experienced developer with 5+ years in web development",
      paragraph: "Passionate about creating efficient and scalable solutions",
      skills: "JavaScript, React, Node.js, Python, AWS",
      experience_level: "Senior",
      hourly_rate: "75",
      location: "New York, USA",
      availability: "Full-time",
      work_history: "2 years at Tech Corp as Senior Developer",
      language: "English, Spanish",
      Education: "Bachelor of Computer Science from Tech University",
      Licenses: "AWS Certified Developer",
      isVerified: "true",
      overview:
        "Dedicated full stack developer with strong problem-solving skills",
      earned: "50000",
      image: "profile-image.jpg",
    });

    expect(res.status).not.toHaveBeenCalledWith(400);
    expect(next).toHaveBeenCalled();
  });
});
