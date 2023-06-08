import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to the home component
    { path: 'impressum', component: ImpressumComponent },
    { path: 'datenschutz', component: DatenschutzComponent },
    // Add more routes as needed
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }