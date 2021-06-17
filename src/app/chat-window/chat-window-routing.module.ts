import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {path:'sidebar',component:SidebarComponent},
  {path:'main',component:MainContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatWindowRoutingModule { }
