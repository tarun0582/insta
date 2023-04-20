import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/firestore-service/store.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
unreport(id: any) {
    this.store.reportPost(id,false)
    this.route.navigateByUrl('/home/homepost')
}
  title = 'instagram';
  allpostData: any[] = [];
  constructor(private store :StoreService,private route:Router){
 this.getRepotedPost()
  }
  getRepotedPost(){
    this.store.getPost(true).then((res:any)=>{
        this.allpostData=res
      
    })
  }
}
