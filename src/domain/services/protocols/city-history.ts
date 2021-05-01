import { City } from "src/domain/entities/city";

export abstract class CityHistory{
  abstract getAll() : Promise<City[]> ;
  abstract insertCity(id:string, name:string, state:string)
}