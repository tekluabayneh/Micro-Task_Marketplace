import React from "react"
import Description_and_budget from "../Description_budget.jsx"
import { describe, expect, vi, it } from "vitest"
import { render, screen } from "@testing-library/react"

describe("test Description_budget ", () => {
    screen.debug()
    const Fakefunction = vi.fn()
    const Description = vi.fn()
    const Budget = vi.fn()
    const Props = {
        Description: Description, updateField: Fakefunction, Budget: Budget
    }
    it('input and textarea element should be in the document', async () => {
        render(<Description_and_budget {...Fakefunction} />)
        expect(screen.getByTestId("input_testid")).toBeInTheDocument()
        expect(screen.getByRole("textbox")).toBeInTheDocument()
    })
})
