import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component';
import { ProductsService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DeleteProductModalComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
