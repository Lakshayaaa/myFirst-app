import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';

  constructor() 
  {
    
  }
  
  // ngOnInit() {
  //     this.api.apiCall().subscribe((data)=>{
  //       console.warn("get api data",data);
  //     })
  // }
  //     this.freeApiService.getcomments()
  //     .subscribe
  //   (
  //     data=>
  //     {
  //         this.lstcomments=data;
  //     }
  //     );
  //   }
}
