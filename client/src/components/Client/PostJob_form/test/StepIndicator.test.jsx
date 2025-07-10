import React from 'react';
import StepIndicator from '../StepIndicator.jsx';
import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
describe('StepIndicator Component', () => {
    const steps = ["step 1", "step 2", "step 3"]
    const currentStep = steps.indexOf("step 1") // Assuming "step 1" is the current step 
    const Props = { steps, currentStep }
    it("should render the exact step indicator based on the current step", () => {
        render(<StepIndicator {...Props} />)
        screen.debug()
        const currentStepelement = screen.getByText(Props.steps[0])
        expect(currentStepelement).toHaveClass("text-black")
        expect(currentStepelement).toBeInTheDocument()
    })

    it('shoule render all the step in the document ', async () => {
        render(<StepIndicator {...Props} />)
        steps.forEach((step, index) => {
            const stepElement = screen.getByText(step)
            expect(stepElement).toBeInTheDocument()
            const ElemenindicatorIndex = screen.getByTestId(`span_index_edicator${index}`)
            expect(ElemenindicatorIndex).toBeInTheDocument()
        })
    })

})
