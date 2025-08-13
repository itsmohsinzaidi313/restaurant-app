import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../../models/restaurant';
import { Observable, switchMap } from 'rxjs';
import { RepositoryService } from '../../services/repository.service';
import { MatList, MatListItem } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  imports: [ CommonModule, MatList, MatListItem, MatIconModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit {
  menuItems$!: Observable<MenuItem[]>;
  constructor(private route: ActivatedRoute, private service: RepositoryService) { }

  ngOnInit(): void {
    this.menuItems$ = this.route.paramMap.pipe(
      switchMap(params => {
        var id = Number(params.get('id'));
        return this.service.getMenuItems(id);
      })
    );
  }
}
