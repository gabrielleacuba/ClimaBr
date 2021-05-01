import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { HistorySearchCityService } from 'src/domain/services/history-search-city.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  hasError: boolean = false;
  errorMessage: string;
  history: boolean = false;

  constructor(
    private readonly searchService: SearchCityService,
    private readonly historySearchCityService: HistorySearchCityService,
    private readonly router: Router
  ) {}

  async ionViewDidEnter() {
    console.log('Entrei no Enter');
    this.history = true;
    try {
      this.hasError = false;
      this.cities = await this.historySearchCityService.getAll();
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }
  async onSearch(query: string) {
    this.history = false;
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  onSelectCity(cityId: string) {
    this.router.navigateByUrl(`/weather/${cityId}`);
  }
}
