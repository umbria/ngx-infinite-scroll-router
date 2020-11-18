import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ContentListComponent } from "./content-list/content-list.component";

@NgModule({
  imports: [BrowserModule, FormsModule, InfiniteScrollModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, ContentListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
