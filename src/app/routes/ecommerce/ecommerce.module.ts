import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
import { OrderviewComponent } from './orderview/orderview.component';
import { ProductsComponent } from './products/products.component';
import { ProductviewComponent } from './productview/productview.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseviewComponent } from './purchaseview/purchaseview.component';



const routes: Routes = [
    { path: 'orders', component: OrdersComponent },
    { path: 'orderview', component: OrderviewComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'productview', component: ProductviewComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'purchases', component: PurchasesComponent },
    { path: 'purchaseview', component: PurchaseviewComponent }


    


];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        OrdersComponent,
        OrderviewComponent,
        ProductsComponent,
        ProductviewComponent,
        CheckoutComponent,
        PurchasesComponent,
        PurchaseviewComponent
        
    ],
    exports: [
        RouterModule
    ]
})
export class EcommerceModule { }
