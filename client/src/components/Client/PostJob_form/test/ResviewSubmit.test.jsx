import React from "react"
import ReviewSubmit from "../ReviewSubmit.jsx"
import { vi, it, expect, describe } from "vitest"
import { render, screen } from "@testing-library/react"

const formData = {
    jobTitle: "front dev", jobSize: "mid", experience: "sinor", description: "we just want dev", skills: ["reacrt", "js",
        "python"], budget: 12
}
const onSubmit = vi.fn()
const isSubmitting = vi.fn()
const Props = { formData, onSubmit, isSubmitting }
describe("ReviewSubmit test", () => {
    it('should check if element are in the dom ', async () => {
        render(<ReviewSubmit {...Props} />)

        formData.skills.forEach(data => {
            const formItem = screen.getByText(data)
            expect(formItem).toBeInTheDocument()
        })

        const JobTitleElement = screen.getByText(formData.jobTitle)
        expect(JobTitleElement).toBeInTheDocument()

        const JobSizeElement = screen.getByText(formData.jobSize)
        expect(JobSizeElement).toBeInTheDocument()


        const descriptionElement = screen.getByText(formData.description)
        expect(descriptionElement).toBeInTheDocument()


    })
})
