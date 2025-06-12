
import DashboardTabs from "../../../../components/Client/DashBoardComponent/DashboardTabs";
import axios from "axios";
import { it, vi, describe, expect, beforEach } from "vitest"
import MockAddapter from "axios-mock-adapter"
import React from "react";
import { render, waitFor } from "@testing-library/react";

vi.mock('axios');

const mcok = new MockAddapter(axios)

describe("DashboadTabs test", () => {


    it("calls API with email from localStorage", async () => {
        localStorage.setItem("userEmail", "client@example.com");

        axios.get.mockResolvedValue({ data: [{ name: "John Doe" }] });

        render(<DashboardTabs />);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(
                "https://micro-task-marketplace.onrender.com/api/ClientProfileData",
                {
                    params: { email: "client@example.com" },
                }
            );
        });


    });

})



