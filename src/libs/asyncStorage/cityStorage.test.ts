import { CityProps } from "@services/getCityByNameService"
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage"

describe("Storage: City Storage",()=>{
    const newCity:CityProps= {
        id:'1',
        latitude:123,
        longitude:456,
        name:'SP'
    }
    it('Should be return null when dont have a city storage',async ()=>{
        const response = await getStorageCity()

       expect(response).toBeNull()
    })

    it('Should be return city storage',async()=>{
     
         await saveStorageCity(newCity)
         const response =   await getStorageCity()
       expect(response).toEqual(newCity)
    })

    it('Should be remove city storage', async()=>{
        await saveStorageCity(newCity)
        await removeStorageCity()

        const response = await getStorageCity()
        expect(response).toBeNull()
    })
})