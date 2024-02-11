import { render ,screen} from "@testing-library/react-native"
import { NextDays } from "@components/NextDays"
import ClearDay from "@assets/clear_day.svg"
describe('Component: NextDays',()=>{
    it('It should be return day',()=>{
        const  {debug}=   render(
            <NextDays
            data={[{
                day:'11/02',
                min:'30C',
                max:'34C',
                icon:ClearDay,
                weather:'Céu limpo'
            },
            {
                day:'12/02',
                min:'30C',
                max:'34C',
                icon:ClearDay,
                weather:'Céu limpo'
            },
            {
                day:'13/02',
                min:'30C',
                max:'34C',
                icon:ClearDay,
                weather:'Céu limpo'
            }]}
            />)
            expect(screen.getByText('11/02')).toBeTruthy()
    })
})