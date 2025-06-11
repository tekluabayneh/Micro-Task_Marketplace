
import DashboardTabs from "../../../../components/Client/DashBoardComponent/DashboardTabs";
import { screen, render } from "@testing-library/react";
import axios from "axios";
import {it, vi, describe, expect, beforEach} from "vitest"
import MockAddapter from "axios-mock-adapter"


const mcok = new MockAddapter(axios)

describe("DashboadTabs test", () => {
    const tabs = {
        tab1: "this is tab one ", tab2: "this is tab tow"
    }

    it('it should fetch the client profile data', async () => {
        render(
            <DashboardTabs {...tabs} />)

    })

})



