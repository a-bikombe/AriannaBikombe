import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'journal',
    imports: [MatCardModule, MatListModule, MatButtonModule],
    templateUrl: './journal.component.html',
    styleUrl: './journal.component.scss'
})
export class JournalComponent {
    entries = [
        'Dec 28',
        'Jan 4'
    ];
}
