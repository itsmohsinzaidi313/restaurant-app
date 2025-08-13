import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { Observable } from 'rxjs';
import { Restaurant } from '../../models/restaurant';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drawer-contents',
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, MatRippleModule, RouterLink],
  templateUrl: './drawer-contents.component.html',
  styleUrl: './drawer-contents.component.css'
})
export class DrawerContentsComponent implements OnInit {
  drawerTitle: string = 'Restaurants List';
  restaurants$!: Observable<Restaurant[]>;
  @Output() restaurntClicked: EventEmitter<any> = new EventEmitter();

  constructor(private service: RepositoryService) { }

  ngOnInit(): void {
    this.restaurants$ = this.service.getRestaurants();
  }
}
