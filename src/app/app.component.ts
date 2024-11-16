import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsonParserComponent } from './json-parser/json-parser.component';

@Component({
  standalone: true,
  imports: [RouterModule, JsonParserComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kramer-parser';
}
