import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem, Restaurant } from '../models/restaurant';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private apiUrl = "assets/restaurants.json";
  constructor(private client: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.client.get<{ restaurants: Restaurant[] }>(this.apiUrl).pipe(
      map(data => data.restaurants)
    );
  }

  getMenuItems(restaurantId: number): Observable<MenuItem[]> {
    return this.client.get<{ menuItems: MenuItem[] }>(this.apiUrl).pipe(
      map(data => data.menuItems.filter(item => item.restaurantId === restaurantId))
    );
  }
}
