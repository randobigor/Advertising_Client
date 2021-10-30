import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss']
})
export class AdminSectionComponent implements OnInit {

  //#region Chart config
  public chartType: string = 'horizontalBar';
  //#endregion

  report: Array<Object> = new Array<Object>();

  constructor(private httpS: HttpService) {
  }

  ngOnInit(): void {
    this.changeTimeGap('daily');
  }

  public chartDatasets: Array<any> = [
    {data: [], label: 'Daily report'}
  ];

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  changeTimeGap(timePeriod: string) {
    this.httpS.get(`report/${timePeriod}`).subscribe((data: Array<Object>) => {
      console.log(data);
      this.chartLabels = data.map(v => {
        return v['name'];
      });
      this.chartDatasets = [{
        data: data.map(v => {
          return v['count'];
        }), label: 'Количество поданных объявлений за все время'
      }];
    });
  }
}
