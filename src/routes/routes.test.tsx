import { act, screen, waitFor } from "@testing-library/react-native"
import { Routes } from "."
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import {render} from '@__tests__/utils/customRender'
import { api } from "@services/api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mocksWeatherApiReponse"

describe('Routes',()=>{
    it('should be render search screen when city is not selected',async()=>{
            render(
                <Routes/>
            )
    const title = await waitFor(()=>act(()=>screen.findByText(/^escolha um local/i)))
    expect(title).toBeTruthy()
    })
    
    it('should be render Dashboard when has city selected',async()=>{
        jest.spyOn(api,'get').mockResolvedValue({data:mockWeatherAPIResponse})
        const city = {
            id:'1',
            name:'São paulo',
            latitude:123,
            longitude:456
        }
        await saveStorageCity(city)
    await act(()=>waitFor(()=>render(  <Routes/>)))  
      const title = screen.getByText(city.name)
      expect(title).toBeTruthy()
    })
})