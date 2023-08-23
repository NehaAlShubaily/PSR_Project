import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
   // dialogService: any;
  

 constructor(private router: Router) {}
  title = 'ngPrimeTest2';

  ngOnInit() {
      this.items = [
          {
              label: 'Aministrator',
              icon: 'pi pi-fw pi-file',
              items: [
                  {
                      label: 'Master Data',
                     
                      
                  },
                  {
                      label: 'Client',
                      command: () => this.openClientPage(),
                  },
                  {
                      label: 'user Registration',
                  },
                  
                  {
                      label: 'User List',
                  },
                  {
                      label: 'Product',
                  },
                  {
                      label: 'Client Properties',
                  },
                  {
                      label: 'Release Note',
                  }
              ]
          },
          {
              label: 'Client Products',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                      label: 'Left',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Right',
                      icon: 'pi pi-fw pi-align-right'
                  }
              ]
          },
          {
              label: 'Service',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-user-plus'
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-user-minus'
                  
                  }
              ]
          },
          {
              label: 'QA',
              icon: 'pi pi-fw pi-calendar',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                      
                  }
              ]
          },
          {
            label: 'Reports',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    
                }
            ]
        }
      ];
  }
  openClientPage() {
    // Navigate to the MasterDataComponent
    this.router.navigate(['client']);
     }
  
}