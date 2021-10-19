import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CronoComponent } from './crono/crono.component';
import { DispoComponent } from './dispo/dispo.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { QuestComponent } from './quest/quest.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { SignupComponent } from './signup/signup.component';
import { NavsComponent } from './navs/navs.component';
import { ListaSignupComponent } from './lista-signup/lista-signup.component';

const routes: Routes = [
    {path: "", component:NavComponent},
    {path: "login", component:LoginComponent},
    {path: "signup", component:SignupComponent},
    {path: "root-nav", component:RootNavComponent},
    {path: "quest", component:QuestComponent},
    {path: "dispo", component:DispoComponent},
    {path: "crono", component:CronoComponent},
    {path: "navs", component:NavsComponent},
    {path: "lista", component:ListaSignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
