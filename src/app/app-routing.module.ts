import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPropertiesComponent } from './client-properties/client-properties.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'main_', 
    component: MainComponent
  },
  {
    path: 'client', 
    component: ClientPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
