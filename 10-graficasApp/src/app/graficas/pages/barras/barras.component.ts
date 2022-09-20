import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts/public_api';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };

  public barChartType: ChartType = 'bar';
  barChartPlugins = [

  ];

  barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007','2008','2009','2010','2011','2012'],
    datasets: [
      { data: [65,59,80,81,56,55,40], label: 'Series A'},
      { data: [28,48,40,19,86,27,80], label: 'Series B'}
    ]
  };

  // Eventos
  chartClicked({event, active}: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  randomize(): void {
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40
    ];

    this.chart?.update();
  }

}
