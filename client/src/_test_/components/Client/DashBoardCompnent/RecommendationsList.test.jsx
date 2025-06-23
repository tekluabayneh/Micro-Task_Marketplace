import RecommendationsList from "../../../../components/Client/DashBoardComponent/RecommendationsList";
import React from "react";
import { vi, describe, expect, it} from "vitest"
import { toast } from "sonner";
import { render , screen} from "@testing-library/react";
import axios from "axios";
import MockAdaptor from "axios-mock-adapter"


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
		render(<RecommendationsList />) 
        expect(screen.getByRole("status")).toBeInTheDocument()
    })


    it("should give message with the ui", () => {
        render(<RecommendationsList />)
        const invitedFreelancers = ["Jone"];
        const setInvitedFreelancers = vi.fn();
        const freelancer = "Jone"

        const handleInvite = (freelancer) => {
            if (invitedFreelancers.includes(freelancer)) {
                toast.error(`${freelancer} has already been invited`);
                expect(toast.error).toHaveBeenCalledWith(`${freelancer} has already been invited`)
                return;
            }

            setInvitedFreelancers([...invitedFreelancers, freelancer]);
            toast.success(`Invitation sent to ${freelancer}`);
            expect(toast.success).toHaveBeenCalledWith(`${freelancer} has already been invited`)
        };
        handleInvite(freelancer)
    });



    it('should return the Ai RecommendationsList', async () => {
        const email = "ex@gmail.com"
        mock.onGet(
            "https://micro-task-marketplace.onrender.com/api/recommendation",
            {
                params: {
                    email,
                },
            }

        ).reply(200, [{ company_name: 'TestCo', owner_name: 'Teklu' }]);
        render(<RecommendationsList />)

       expect(await screen.findByText("TestCo")).toBeInTheDocument()
	// expect(await screen.findByText("Teklu")).toBeInTheDocument()

    })

    //
    // it('if the data is not fetch or if data if not found throw error with toster', async () => {
    //     const email = "ex@gmail.com"
    //     mock.onGet(
    //         "https://micro-task-marketplace.onrender.com/api/recommendation",
    //         {
    //             params: {
    //                 email,
    //             },
    //         }
    //
    //     ).reply(200, []);
    //     render(<RecommendationsList />)
    //
    //
    // })
    //


});
