import DashBaordSection from "../../../../components/Client/DashBoardComponent/DashboardSection.jsx"
import { render, screen } from '@testing-library/react'
import React   from "react"
import {it, describe, expect } from "vitest"

describe('testing if testing is working ', () => {
  it('just test ', () => {
  let props = {title:"we loave Testing",rightContent:"rightContent",Children:"Children",ClassName:"ClassName"}
    render(<DashBaordSection {...props} />)


   const headingElement = screen.getByRole("heading") 
   expect(headingElement).toBeInTheDocument()
   expect(headingElement).toHaveTextContent("we loave Testing")

	   const  getElementCalss  = screen.getByTestId("dash-class")
	   expect(getElementCalss).toBeInTheDocument()
	   expect(getElementCalss).toHaveClass("mb-8")

	const getRgitElement = screen.getByTestId("right-testid")
	expect(getRgitElement).toBeInTheDocument()
	expect(getRgitElement).toHaveTextContent("rightContent")

  })

})

