import {render, screen} from '@testing-library/react-native'
import {Input} from './'


describe('Component: input',()=>{

    it('Should be render without activity indicator',()=>{
        const {debug}=    render(<Input />)
        const activityIndicator = screen.queryByTestId('activityIndicator')
        expect(activityIndicator).toBeNull()
    })

    it('Should be render with activity indicator',()=>{
        const {debug}=    render(<Input isLoading/>)
        const activityIndicator = screen.queryByTestId('activityIndicator')
        expect(activityIndicator).toBeTruthy()
    })

})