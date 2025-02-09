import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {EncounterCalculatorComponent} from "./encounter-calculator/encounter-calculator.component";

export const routes: Routes = [
  {
    path: '',
    component: EncounterCalculatorComponent,
    title: 'Pathfind Encounter Calculator',
    data: {

      description: 'A simple Pathfinder 2E encounter calculator to create encounter relative to player\'s level',
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
