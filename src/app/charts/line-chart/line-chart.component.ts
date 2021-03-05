import { Component, OnInit } from '@angular/core'
import { ChartType } from 'chart.js'
import { SAMPLE_LINECHART_COLORS } from 'src/app/shared/chart.colors'

const SAMPLE_LINECHART_DATA: any[] = [
  { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis' },
  { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition' },
  { data: [52, 34, 49, 53, 68, 62], label: 'Forecasting' }
]

const SAMPLE_LINECHART_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public lineChartOptions: any = {
    maintainAspectRatio: false,
    scaleShowVerticalLines: false,
    responsive: true
  }
  public lineChartData: any[] = SAMPLE_LINECHART_DATA
  public lineChartLabels: string[] = SAMPLE_LINECHART_LABELS
  public lineChartType: ChartType = 'line'
  public lineChartLegend = true
  public lineChartColors = SAMPLE_LINECHART_COLORS

  constructor() { }

  ngOnInit(): void {
  }

}
