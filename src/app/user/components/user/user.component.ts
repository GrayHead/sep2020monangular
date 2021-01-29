import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input()
  user: any;

  constructor(private dataService: DataService) {

    this.dataService.bs.getValue();
  }

  ngOnInit(): void {
  }

  onClick(id): void {
    this.dataService.setData(id);
  }

}
