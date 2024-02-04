import { mockCityApiResponse } from "@__tests__/mocks/mockCityApiReponse"
import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"

describe('API: getCityByNameService',()=>{
    it('should return city information',async()=>{
      
        jest.spyOn(api,'get').mockResolvedValue({data:mockCityApiResponse})
      const res = await getCityByNameService('São paulo')
      expect(res.length).toBeGreaterThan(0)
    })
})