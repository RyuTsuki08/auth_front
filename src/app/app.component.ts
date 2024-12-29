import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppModule } from './app.module';
import { UserComponent } from "./components/user/user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';
}
