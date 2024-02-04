import { fireEvent, render ,screen} from "@testing-library/react-native"
import { SelectList } from "."


describe('Component: SelectList',()=>{
    it('Should be return city details selected',()=>{
        const data =[{
            id:'1',
            name:'sao pualo',
            latitude:123,
            longitude:456
        },
        {
            id:'2',
            name:'sao aa',
            latitude:888,
            longitude:999
        }
    ]
        const onPress = jest.fn()

        render(
            <SelectList data={data} onChange={()=>{}} onPress={onPress}/>
        )
        const selectedCity =screen.getByText(/sao pualo/i)
        fireEvent.press(selectedCity)

        expect(onPress).toHaveBeenCalledWith(data[0])
        
    })

    it('Not should be show options when data props is empty',()=>{
            render(
                <SelectList data={[]} 
                onChange={()=>{}}
                onPress={()=>{}}
                />
            )

            const options = screen.getByTestId('options')
            expect(options.children).toHaveLength(0)
    })
})