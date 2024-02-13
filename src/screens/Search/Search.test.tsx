
import { mockCityApiResponse } from '@__tests__/mocks/api/mockCityApiReponse'
import { render,screen,fireEvent, waitFor } from '@__tests__/utils/customRender'
import {Search} from '@screens/Search'
import { api } from '@services/api'
describe('Screen: Search',()=>{
    it('should be show city option',async()=>{
        jest.spyOn(api,'get').mockResolvedValue({data:mockCityApiResponse})
       const {debug}=  render(<Search/>)
           
         const searchInput = screen.getByTestId('search-input')
         fireEvent.changeText(searchInput,'São paulo')

         const option = await waitFor(()=>screen.findByText(/são paulo/i))
         debug()
         expect(option).toBeTruthy()
    })
})