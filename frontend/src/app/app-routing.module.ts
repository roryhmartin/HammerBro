import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmyBuilderComponent } from './components/army-builder/army-builder.component';
import { DarkAngelsComponent } from './components/army-builder/dark-angels/dark-angels.component';

const routes: Routes = [
  // {
  //   path: '',
  //   title: '',
  //   component:
  // },
  {
    path: 'army-builder',
    title: 'Army Builder',
    component: ArmyBuilderComponent,
    children: [
      {
        path: 'dark-angels',
        component: DarkAngelsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
