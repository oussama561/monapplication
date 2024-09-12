import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { CategoryComponent } from './category/category.component';
import { ProduitComponent } from './produit/produit.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AddcategorieComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DetailAdminComponent } from './detail-admin/detail-admin.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SendmailComponent } from './sendmail/sendmail.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    CategoryComponent,
    ProduitComponent,
    AddadminComponent,
    AddClientComponent,
    AddProduitComponent,
   AddcategorieComponent,
    UpdateCategoryComponent,
    UpdateProduitComponent,
    UpdateAdminComponent,
    UpdateClientComponent,
    DetailAdminComponent,
    DetailClientComponent,
    DetailProduitComponent,
    DetailCategoryComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    SendmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
