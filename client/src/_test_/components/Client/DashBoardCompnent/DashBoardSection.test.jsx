import DashBaordSection from "../../../../components/Client/DashBoardComponent/DashboardSection.jsx"
import { render, screen } from '@testing-library/react'
import {it, describe } from "vitest"

describe('App component', () => {
  it('renders a welcome message', () => {
    render(<DashBaordSection/>)
  })
})

