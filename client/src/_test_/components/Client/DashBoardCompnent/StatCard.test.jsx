import React from "react"
import { describe, expect, it } from "vitest"
import StatsCard from "../../../../components/Client/DashBoardComponent/StatsCard.jsx"
import { render, screen } from "@testing-library/react"

const data = { title: "frontend", change:23, value: "one", icon: "test", color: "red", trend: "up" }


describe('StatCard Component Tests', () => {

 screen.debug()


    it('should return check if element are in the dom', async () => {
        render(<StatsCard {...data} />)

        Array.from(data).forEach(element => {
            const el = screen.getByText(element)
            expect(el).toBeInTheDocument()
        });
    })
 
  it('should the up icon should be in the document if the trent is up', async () => {

        render(<StatsCard {...data} />)
      
    const upArrow = screen.getByTestId("up_arrow")
    const spanElemtn = screen.getByTestId("span_testid")
    expect(upArrow).toBeInTheDocument()
    expect(spanElemtn).toHaveClass("text-green-600")
  })

  it('should the down Arrow icon should be in the document if the trent is up', async () => {
	const data = { title: "frontend", change:23, value: "one", icon: "test", color: "red", trend: "down" }
        render(<StatsCard {...data} />)
      
    const upArrow = screen.getByTestId("down_arrow")
    const spanElemtn = screen.getByTestId("span_testid")
    expect(upArrow).toBeInTheDocument()
    expect(spanElemtn).toHaveClass("text-red-600")
  })




})
