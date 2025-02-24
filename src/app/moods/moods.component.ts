import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MoodStepper } from "./mood-stepper/mood-stepper.component";

@Component({
    selector: 'moods',
    imports: [MatCardModule, MatListModule, MatButtonModule, MatDialogModule],
    templateUrl: './moods.component.html',
    styleUrl: './moods.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoodsComponent {
    moods = [
        'Happy',
        'Sad',
        'Angry',
        'Confused',
        'Excited'
    ];

    readonly dialog = inject(MatDialog);

    openDialog() {
        const dialogRef = this.dialog.open(NewMoodDialog);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}

@Component({
    selector: 'new-mood',
    templateUrl: './new-mood-dialog.html',
    imports: [MatDialogModule, MatButtonModule, MoodStepper],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewMoodDialog { }

