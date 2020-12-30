import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import LayoutComponents from './components/layouts';
import ShoppingListComponents from './components/shopping-list';
import RecipeComponents from './components/recipes';

@NgModule({
  declarations: [
    AppComponent,
    ...LayoutComponents,
    ...RecipeComponents,
    ...ShoppingListComponents,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
