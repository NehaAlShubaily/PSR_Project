import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ClientPropertiesComponent } from './client-properties/client-properties.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { MainComponent } from './main/main.component';
import { TableModule } from 'primeng/table';

// for translation services----------------------------------------
// import { TranslateService } from '@ngx-translate/core';
// private translateService: TranslateService
//        this.translateService.setDefaultLang('en');
// translate(lang: string) {
//  this.translateService.use(lang);
// this.translateService.get('primeng').subscribe((res: any) => this.config.setTranslation(res));
// }
//------------------------------------------------------------------------



@NgModule({
  declarations: [
    AppComponent,
    ClientPropertiesComponent,
    MainComponent
  ],
  imports: [
    TableModule,
    InputMaskModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    FormsModule,
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelMenuModule, 
    ButtonModule,
    DialogModule,
   


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
    config: any;

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {

      this.primengConfig.zIndex = {
        modal: 1100,    // dialog, sidebar
        overlay: 1000,  // dropdown, overlaypanel
        menu: 1000,     // overlay menus
        tooltip: 1100   // tooltip
      },
      this.primengConfig.filterMatchModeOptions = {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    },
        this.primengConfig.ripple = true;
    }
   
}