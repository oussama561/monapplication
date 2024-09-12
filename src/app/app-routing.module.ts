import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { CategoryComponent } from './category/category.component';
import { ProduitComponent } from './produit/produit.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AddcategorieComponent } from './add-category/add-category.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { DetailAdminComponent } from './detail-admin/detail-admin.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SendmailComponent } from './sendmail/sendmail.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"admin",component:AdminComponent},{path:"client",component:ClientComponent},
  {path:"categorie",component:CategoryComponent},
  {path:"produit",component:ProduitComponent},
  {path:"Addadmin",component:AddadminComponent},
  {path:"addclient",component:AddClientComponent},
  {path:"addproduit",component:AddProduitComponent},
  {path:"addcategory",component:AddcategorieComponent},
  {path:"updateadmin/:id",component:UpdateAdminComponent},
  {path:"updateclient/:id",component:UpdateClientComponent},
  {path:"updateproduit/:id",component:UpdateProduitComponent},
  {path:"updatecategory/:id",component:UpdateCategoryComponent},
  {path:"detailadmin/:id",component:DetailAdminComponent},
  {path:"detailclient/:id",component:DetailClientComponent},
  {path:"detailproduit/:id",component:DetailProduitComponent},
  {path:"detailcategory/:id",component:DetailCategoryComponent},
  {path:"profile/:id",component:ProfileComponent},
  {path:"sendmail",component:SendmailComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
