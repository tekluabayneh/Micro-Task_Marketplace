import React from "react";
import { describe, expect, it, vi } from "vitest";
import MyJobs from "../../../../pages/Jobs/MYPostedProjects";
import { render, screen } from "@testing-library/react";
import MockAddapter from "axios-mock-adapter"
import axios from "axios";
const mock = new MockAddapter(axios)



describe("MyJobs test", () => {
    it('should render the loading if the data is not fetch ', async () => {

        render(<MyJobs />)
        expect(screen.getByText(/Loading jobs.../i)).toBeInTheDocument()
    })


    it("renders 'no jobs' message when there are no jobs", async () => {
        const userEmail = "ex@gmai.com";
        mock
            .onGet(`https://micro-task-marketplace.onrender.com/myJobs/myJobs?email=${userEmail}`)
            .reply(400, []);

        render(<MyJobs />);

        const somethignWentwrongMessge = await screen.findByText(/Something went wrong/i)
        expect(somethignWentwrongMessge).toBeInTheDocument();
    });


    it('should fetch the myjobs ', async () => {
        const userEmail = "ex@gmai.com"
        const fakeJobs = [
            {
                id: 1,
                jobTitle: "Frontend Developer",
                status: "open",
                skills: ["React", "JavaScript", "CSS"],
                description: "Build and maintain the client-side of web applications.",
                createdAt: "2025-06-15T10:00:00Z",
            },
            {
                id: 2,
                jobTitle: "Backend Developer",
                status: "in progress",
                skills: ["Node.js", "Express", "MongoDB"],
                description: "Develop backend APIs and connect databases.",
                createdAt: "2025-06-10T14:30:00Z",
            },
            {
                id: 3,
                jobTitle: "Full Stack Engineer",
                status: "completed",
                skills: ["React", "Node.js", "PostgreSQL"],
                description: "Work on both frontend and backend tasks.",
                createdAt: "2025-06-01T09:15:00Z",
            }
        ];

        mock.onGet(`https://micro-task-marketplace.onrender.com/myJobs/myJobs?email=${userEmail}`).reply(200, fakeJobs);

        render(<MyJobs />)

        fakeJobs.forEach(async (job) => {
            const jobs = await screen.findByText(job)
            expect(jobs).toBeInTheDocument()
        })

        fakeJobs.forEach(async job => {
            const status = await screen.findByText(job)
            expect(status).toBeInTheDocument()
        })

    })

})

