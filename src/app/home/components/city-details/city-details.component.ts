import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HistorySearchCityService } from 'src/domain/services/history-search-city.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() state: string;
  @Output() selectCity: EventEmitter<string> = new EventEmitter();

  constructor(private readonly historySearchCityService: HistorySearchCityService) {}

  ngOnInit() {}

  onClick() {
    this.historySearchCityService.insertCity(this.id,this.name,this.state);
    this.selectCity.emit(this.id);
  }
}
