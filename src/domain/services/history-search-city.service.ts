import { City } from '../entities/city'
import { HistoryEmpty } from '../errors/history-empty.error';
import { CityHistory } from './protocols/city-history';

export class HistorySearchCityService {
  constructor(private readonly cityHistory: CityHistory) {}
  async getAll() : Promise<City[]> {
    console.log('Entrei no HistorySearchCityService');
    const cities: City[] = await this.cityHistory.getAll();

    if(cities.length == 0) {
      throw new HistoryEmpty ();
    }

    return cities;
  }

  insertCity(id: string, name: string, state: string) {
    this.cityHistory.insertCity(id, name, state);
  }
}
