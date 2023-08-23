import { Component , OnInit} from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { MainComponent } from '../main/main.component';



interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-client-properties',
  templateUrl: './client-properties.component.html',
  styleUrls: ['./client-properties.component.scss']
})
export class ClientPropertiesComponent implements OnInit  {
  visible: boolean = false;
  value!: string;
  value1!: number;
  value2!: string;
  value3!: string;
  value4!: string;

  dialog1Visible = false; 
dialogVisible = false;



  
cities: City[] | undefined;

selectedCity: City | undefined;

ngOnInit() {
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
}

  showDialog() {
      this.dialogVisible = true;
  }

  showDialog1() {
    this.dialog1Visible = true;
    }
    

}
