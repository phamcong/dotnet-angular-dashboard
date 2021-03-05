import { Component, OnInit } from '@angular/core'
import { ChartType } from 'chart.js'

const SAMPLE_PIECHART_DATA: number[] = [350, 450, 120]
const SAMPLE_PIECHART_LABELS = ['XYZ Logistics', 'Main St Bakery', 'Acme Hosting']

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public pieChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  public pieChartData: any[] = SAMPLE_PIECHART_DATA
  public pieChartLabels: string[] = SAMPLE_PIECHART_LABELS
  public pieChartType: ChartType = 'doughnut'
  public pieChartLegend = true
  public colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


