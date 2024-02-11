import { render ,screen} from "@testing-library/react-native"
import { Day } from "."
import ClearDay from "@assets/clear_day.svg"
describe('Component: Day',()=>{
    it('Should be render day',()=>{
     const  {debug}=   render(
        <Day
        data={{
            day:'11/02',
            min:'30C',
            max:'34C',
            icon:ClearDay,
            weather:'Céu limpo'
        }}
        />)
        expect(screen.getByText('11/02')).toBeTruthy()
    })
})