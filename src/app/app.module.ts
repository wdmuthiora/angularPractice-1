//Import modules from Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Import local modules and components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';



//DECLARATIONS OF modules, services and components
@NgModule({
  //declare components
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
  ],

  //declare modules
  imports: [BrowserModule, AppRoutingModule, FormsModule],

  //declare services
  providers: [],

  //declare ???
  bootstrap: [AppComponent],
})
export class AppModule {}
