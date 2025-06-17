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



    it('should fetch the myjobs ', async () => {
        const userEmail = "ex@gmai.com"
        const fakeJobs = [{ id: 1, title: "Frontend Dev" }];

        mock.onGet(`https://micro-task-marketplace.onrender.com/myJobs/myJobs?email=${userEmail}`).reply(200, fakeJobs);

        render(<MyJobs />)

        fakeJobs.forEach(async (job) => {
            const jobs = await screen.findByText(job)
            expect(jobs).toBeInTheDocument()
        })
    })

})

