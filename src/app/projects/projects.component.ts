import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'projects-component',
    imports: [MatCardModule, MatListModule, MatButtonModule, RouterLink, RouterOutlet],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    entries = [
        'Dec 28',
        'Jan 4'
    ];
}
