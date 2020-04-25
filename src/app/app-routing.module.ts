import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { MenuComponent } from './menu/menu/menu.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "menu", component: MenuComponent},
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
