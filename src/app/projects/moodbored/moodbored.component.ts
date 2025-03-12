import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { JournalComponent } from './journal/journal.component';
import { MoodsComponent } from './moods/moods.component';
import { StatsComponent } from './stats/stats.component';

@Component({
    selector: 'moodbored-component',
    imports: [MoodsComponent, StatsComponent, JournalComponent, MatCardModule, MatListModule, MatButtonModule],
    templateUrl: './moodbored.component.html',
    styleUrl: './moodbored.component.scss',
})
export class MoodboredComponent {
    entries = [
        'Dec 28',
        'Jan 4'
    ];
}
