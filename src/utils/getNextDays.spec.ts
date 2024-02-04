
import { getNextDays } from "./getNextDays";

it("Should be return next five days",()=>{
    const days =getNextDays()

    expect(days.length).toBe(5)
})