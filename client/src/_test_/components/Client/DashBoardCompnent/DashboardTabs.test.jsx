
import { describe, it } from "vitest";
import DashboardTabs from "../../../../components/Client/DashBoardComponent/DashboardTabs";
import { screen, render } from "@testing-library/react";
import axios from "axios";


describe("DashboadTabs test", () => {
    const tabs = {
        tab1: "this is tab one ", tab2: "this is tab tow"
    }
    it('it should fetch the client profile data', async () => {
        render(
            <DashboardTabs {...tabs} />)



    })

})



