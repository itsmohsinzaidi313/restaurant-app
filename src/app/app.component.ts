import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DrawerContentsComponent } from './components/drawer-contents/drawer-contents.component';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatIconModule, MatButtonModule, MatToolbarModule, DrawerContentsComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurant-app';

  constructor(private router: Router) {}

  onMenuButtonClicked(drawer: MatDrawer): void {
    drawer.toggle();
  }

  onRestaurantClicked(id: number): void {
    this.router.navigateByUrl('restaurants/${$id}')
  }
}
