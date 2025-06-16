import React from "react";
import { describe, expect, it } from "vitest";
import JobCard from "../../../../components/Client/DashBoardComponent/JobCard";
import { render, screen } from "@testing-library/react";

const Props = {
    title: "Senior Developer",
    company: "OpenAI",
    salary: "$120k",
    description: "Build AI models",
    tags: ["Remote", "Full-time"],
    postedDate: "2025-06-15",
    applicant: "John Doe",
    isactive: "Yes"
};

describe("JobCard test ", () => {

    it('it should render all the props components', async () => {

        render(
            <JobCard {...Props} />
        )


        const title = screen.getByText(Props.title);
        expect(title).toBeInTheDocument();

        const company = screen.getByText(Props.company);
        expect(company).toBeInTheDocument();

        const salary = screen.getByText(Props.salary);
        expect(salary).toBeInTheDocument();

        const description = screen.getByText(Props.description);
        expect(description).toBeInTheDocument();

        const postedDate = screen.getByText(Props.postedDate);
        expect(postedDate).toBeInTheDocument();


        Props.tags.forEach((tag) => {
            expect(screen.getByText(tag)).toBeInTheDocument()
        })

    })

})
