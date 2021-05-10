import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'adminteam',
    loadChildren: () => import('./adminteam/adminteam.module').then( m => m.AdminteamPageModule)
  },
  {
    path: 'admintask',
    loadChildren: () => import('./admintask/admintask.module').then( m => m.AdmintaskPageModule)
  },
  {
    path: 'admimrequest',
    loadChildren: () => import('./admimrequest/admimrequest.module').then( m => m.AdmimrequestPageModule)
  },
  {
    path: 'admindailyworkreport',
    loadChildren: () => import('./admindailyworkreport/admindailyworkreport.module').then( m => m.AdmindailyworkreportPageModule)
  },
  {
    path: 'adminworksheet',
    loadChildren: () => import('./adminworksheet/adminworksheet.module').then( m => m.AdminworksheetPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
