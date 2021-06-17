import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatWindowRoutingModule } from './chat-window-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { MainContainerComponent } from './main-container/main-container.component';



@NgModule({
  declarations: [SidebarComponent, ChatBodyComponent, MainContainerComponent],
  imports: [
    CommonModule,
    ChatWindowRoutingModule
  ]
})
export class ChatWindowModule { }
