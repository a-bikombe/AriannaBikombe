import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoodsComponent } from './moods/moods.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [MoodsComponent, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Arianna Bikombe\'s Personal Website!';
}
