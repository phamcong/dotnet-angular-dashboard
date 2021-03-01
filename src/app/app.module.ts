import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartsModule } from 'ng2-charts'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BarChartComponent } from './charts/bar-chart/bar-chart.component'
import { LineChartComponent } from './charts/line-chart/line-chart.component'
import { PieChartComponent } from './charts/pie-chart/pie-chart.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SectionHealthComponent } from './sections/section-health/section-health.component'
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component'
import { SectionSalesComponent } from './sections/section-sales/section-sales.component'
import { SidebarComponent } from './sidebar/sidebar.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
