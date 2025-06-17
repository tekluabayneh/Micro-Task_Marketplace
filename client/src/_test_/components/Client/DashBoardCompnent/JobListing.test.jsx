import React from "react"
import JobListing from "../../../../components/Client/DashBoardComponent/JobListings.jsx"
import { it, describe, expect } from "vitest"
import { render, screen } from "@testing-library/react"

describe("JobListing test", () => {

    it('should rnder the MyJob component ', async () => {
        render(
            <JobListing />
        )
        expect(screen.getByText(/My Posted Jobs/i)).toBeInTheDocument()
    })

})


