
import { it, describe, expect, vi, beforeEach} from "vitest"
import DashboardTabs from "../../../../components/Client/DashBoardComponent/DashboardTabs";
import axios from "axios";
import React from "react";
import {screen, render} from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import MockAdapter from 'axios-mock-adapter';
import { toast } from 'react-toastify';

vi.mock('react-toastify', () => {
  return {
    toast: {
      warn: vi.fn(), 
    },
  };
});


vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});



beforeEach(() =>{
  vi.clearAllMocks()
})

const mock= new MockAdapter(axios)

describe("DashboadTabs test", () => {


it('shows loading spinner on first render', () => {
 render(
     <MemoryRouter>
	<DashboardTabs tab1={<div>job tab</div>} tab2={<div>Ai Recommendation</div>}/>
     </MemoryRouter>
)

const loadingElement = screen.getByTestId("loading_testid")
expect(loadingElement).toBeInTheDocument()
})


it('renders tab1 content after successful fetch', async () => {
    mock
  .onGet('https://micro-task-marketplace.onrender.com/api/ClientProfileData')
  .reply(200, [{ company_name: 'TestCo', owner_name: 'Teklu' }]);
 
	render(
	  <MemoryRouter>
	<DashboardTabs tab1={<div>job tab</div>} tab2={<div>Ai Recommendation</div>}/>
	 </MemoryRouter>
		)

	const JobTab= await screen.findByText(/job tab/i)
	expect(JobTab).toBeInTheDocument()
})


it('navigates to profile page if profile is incomplete', async () => {
  const navigate = vi.fn();
  useNavigate.mockReturnValue(navigate); 

  mock
    .onGet('https://micro-task-marketplace.onrender.com/api/ClientProfileData')
    .reply(200, [{}]);

  render(
    <MemoryRouter>
      <DashboardTabs tab1={<div>Tab1</div>} tab2={<div>Tab2</div>} />
    </MemoryRouter>
  );

  const button = await screen.findByText(/ai recommendations/i);
  button.click();

  expect(navigate).toHaveBeenCalledWith('/Client/ClientProfile');

  expect(toast.warn).toHaveBeenCalledWith(
    expect.stringContaining('You have to fill out your profile'),
    expect.any(Object)
  );
	
});











})



