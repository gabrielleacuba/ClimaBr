import { CityHistoryTypes } from "src/domain/entities/cityHistory";
import { Storage } from '@ionic/storage-angular';
import { CityHistory } from "src/domain/services/protocols/city-history";
import { City } from "src/domain/entities/city";
import { ValueAccessor } from "@ionic/angular/directives/control-value-accessors/value-accessor";

export default class LocalStorageCityRepository extends CityHistory{

  cityHistoryTypes : CityHistoryTypes;
  private _storage: Storage;
  listCities : City[] = []
  constructor(private storage:Storage){
    
    super()
    this.init()
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

   async  getAll(): Promise<City[]> {
     if(this.listCities.length !== 0) {
       this.listCities = []
     }
     let promise : Promise<City[]> 
    promise = new Promise((resolve, reject) => {
      this.storage.forEach((value, key, index) => {
        this.listCities.push(value);
      }).then((d) => {
        resolve(this.listCities);
      });
    });
    return await promise;
  }

  public insertCity(id:string, name:string, state:string){
    this.cityHistoryTypes = {
      id : id,
      name : name,
      state : state
    }
    this.storage.set(id, this.cityHistoryTypes)
 }
}

