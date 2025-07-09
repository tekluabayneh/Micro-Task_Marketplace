import React from "react"
import Skills from "../Skills.jsx"
import { screen, render, fireEvent } from "@testing-library/react"
import { vi, it, describe, expect } from "vitest"
const updateSkills = vi.fn()
describe("skills test", () => {
    const skills = ["js", "react", "nextjs", "nodejs"]
    const Props = { skills: skills, updateSkill: updateSkills }


    it('should render skills that are mapped', async () => {
        render(<Skills {...Props} />)

        Props.skills.forEach(skill => {
            const _skill = screen.getByText(skill)
            expect(_skill).toBeInTheDocument()
        })

    })

    it('should not show message if the skill are not provided yet', async () => {
        const Props = { skills: [], updateSkill: updateSkills }
        render(<Skills {...Props} />)

        const messageElement = screen.getByText("No skills added yet")
        expect(messageElement).toBeInTheDocument()
    })

    it('should add skill to the array ', async () => {
        render(<Skills {...Props} />)

        const buttonElement = screen.getByRole("button", { name: "Add" })
        expect(buttonElement).toBeInTheDocument()

        fireEvent.click(buttonElement)
        const inputElement = screen.getByTestId("input_element")
        Props.skills.push(inputElement.nodeValue)
        expect(Props.skills.length).toBe(5)
    })



    it('should remove skill from the skills array', async () => {
        render(<Skills {...Props} />)

        const buttonElement = screen.getByRole("button", { name: /typescript/i })
        expect(buttonElement).toBeInTheDocument()
        const fakeSkill = "yml"
        Props.skills.push(fakeSkill)
        fireEvent.click(buttonElement)
        expect(Props.skills.length).toBe(6)
    })





})
