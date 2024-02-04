import { CityAPIResponse} from '../../src/services/getCityByNameService'

export const mockCityApiResponse:CityAPIResponse = {
    id:'1',
    name:'São paulo',
    sys:{
        country:"BR"
    },
    coord:{
        lat:123,
        lon:456
    }
}