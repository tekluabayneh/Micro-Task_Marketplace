import RecommendationsList from "../../../../components/Client/DashBoardComponent/RecommendationsList";
import React from "react";
import { vi, describe, expect, it} from "vitest"
import { toast } from "sonner";
import { render , screen, fireEvent} from "@testing-library/react";
import axios from "axios";
import MockAdaptor from "axios-mock-adapter"
 import {MemoryRouter} from "react-router-dom";


vi.mock("sonner", () => {
    const toasterfn = vi.fn()
    toasterfn.error = vi.fn()
    toasterfn.success = vi.fn()
    toasterfn.info = vi.fn()
    return {
        toast: toasterfn
    }
})
const mock = new MockAdaptor(axios)
describe("RecommendationsList test", () => {


    it('should render the loading ', async () => {
		render(
			<MemoryRouter>
			<RecommendationsList />
			</MemoryRouter>
		);
        expect(screen.getByRole("status")).toBeInTheDocument()
    })




it("should show toast when inviting and re-inviting a freelancer", async () => {
  const email = "ex@gmail.com";
  const fakeData = [
    {
      freelancer: "user",
      score: "12",
      reson: "user is best for this postin the freelancer has strong knowlade"
    },
    {
      freelancer: "AnotherCo",
      score: "15",
      reson: "user is great for building SaaS projects"
    }
  ];

  mock.onGet(
    "https://micro-task-marketplace.onrender.com/api/recommendation",
    { params: { email } }
  ).reply(200, fakeData);

  render(
    <MemoryRouter>
      <RecommendationsList />
    </MemoryRouter>
  );

  // Wait for all items to be rendered
  await Promise.all(
    fakeData.map(async (item) => {
      const reason = await screen.findByText(item.reson);
      expect(reason).toBeInTheDocument();
    })
  );

  const inviteButton = await screen.findByTestId("invite-button-user");

  fireEvent.click(inviteButton);
  expect(toast.success).toHaveBeenCalledWith("Invitation sent to user");

  expect(inviteButton.textContent).toBe("Invited");

  fireEvent.click(inviteButton);
  expect(toast.error).toHaveBeenCalledWith("user has already been invited");
});


    it('should return the Ai RecommendationsList', async () => {
        const email = "ex@gmail.com"
	const fakeData = [
				    { score: '12', reson: 'user is best for this postin the freelancer has strong knowlade' },
	    { score: 'AnotherCo', reson: ' user is greate for building sass project since the user build a lot of sass project can be good ' }
	];

        mock.onGet(
            "https://micro-task-marketplace.onrender.com/api/recommendation",
            {
                params: {
                    email,
                },
            }

        ).reply(200, fakeData);

    render(
        <MemoryRouter>
	    <RecommendationsList />
	</MemoryRouter>
    );

		fakeData.forEach(async (items) => {
		const tiem = await screen.findByText(items)
             expect(tiem).toBeInTheDocument()
	     		})


    })


    it('if the data is not fetch or if data if not found throw error with toster', async () => {
	const fakeData = [ ]
        const email = "ex@gmail.com"
        mock.onGet(
            "https://micro-task-marketplace.onrender.com/api/recommendation",
            {
                params: {
                    email,
                },
            }

        ).reply(200, fakeData);

    render(
        <MemoryRouter>
	    <RecommendationsList />
	</MemoryRouter>
    );


    if (!fakeData) {
	expect(await screen.findByText(expect.stringContaining("No recommendations found."))).toBeInTheDocument();
    }
    })
});
