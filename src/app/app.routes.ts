import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoodboredComponent } from './projects/moodbored/moodbored.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: '/moodbored',
                component: MoodboredComponent,
            },
        ],
    },
];
