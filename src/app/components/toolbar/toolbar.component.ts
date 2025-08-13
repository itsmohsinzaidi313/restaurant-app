import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatDrawer } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Input() drawer!: MatDrawer;
  @Output() menuPressed: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>();

  onMenuButtonClicked(): void {
    this.menuPressed.emit(this.drawer);
  }
}
