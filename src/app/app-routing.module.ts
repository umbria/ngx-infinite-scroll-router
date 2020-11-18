import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContentListComponent } from "./content-list/content-list.component";

const routes: Routes = [];

// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "contentList", component: ContentListComponent },
      { path: "", redirectTo: "/contentList", pathMatch: "full" }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
