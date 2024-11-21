import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ConnectComponent } from './components/connect/connect.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
