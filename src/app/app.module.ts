import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
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
    SectionHealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
