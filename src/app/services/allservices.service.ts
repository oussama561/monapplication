import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllservicesService {

  constructor(private http:HttpClient) { }
  httpOptions:any

  CreateAdmin(Data:any)
  {
    return this.http.post(`${environment.baseUrl}/admin/create`,Data)
  }


  CreateClient(Data:any)
  {
    return this.http.post(`${environment.baseUrl}/client/create`,Data)
  }

  CreateProduit(Data:any,idcat:String)
  {
    return this.http.post(`${environment.baseUrl}/produit/create/${idcat}`,Data)
  }

  CreateCategory(Data:any)
  {
    return this.http.post(`${environment.baseUrl}/category/create`,Data)
  }
     
  AllAdmin()
  {return this.http.get(`${environment.baseUrl}/admin/list`)}

  AllClient()
  {return this.http.get(`${environment.baseUrl}/client/list`)}

  AllProduit()
  {return this.http.get(`${environment.baseUrl}/produit/list`)}

  AllCategory()
  {return this.http.get(`${environment.baseUrl}/category/list`)}

  Detailadmin(id:String)
    {return this.http.get(`${environment.baseUrl}/admin/one/${id}`)}
  

  DetailClient(id:String)
    {return this.http.get(`${environment.baseUrl}/client/one/${id}`)}

  DetailProduit(id:String)
    {return this.http.get(`${environment.baseUrl}/produit/one/${id}`)}

  DetailCategory(id:String)
    {return this.http.get(`${environment.baseUrl}/category/one/${id}`)}  
 
    UpdateAdmin(id:String,Data:any)
    {return this.http.put(`${environment.baseUrl}/admin/update/${id}`,Data)}
    
    UpdateClient(id:String,Data:any)
    {return this.http.put(`${environment.baseUrl}/client/update/${id}`,Data)}
 
    UpdateProduit(id:String,idcat:String,Data:any)
    {return this.http.put(`${environment.baseUrl}/produit/update/${id}/${idcat}`,Data)}

    UpdateCategory(id:String,Data:any)
    { return this.http.put(`${environment.baseUrl}/category/update/${id}`,Data)}

    DeleteAdmin(id:String)
    { return this.http.delete(`${environment.baseUrl}/admin/delete/${id}`)}

    DeleteClient(id:String)
    { return this.http.delete(`${environment.baseUrl}/client/delete/${id}`)}

    DeleteProduit(id:String)
    { return this.http.delete(`${environment.baseUrl}/produit/delete/${id}`)}

    DeleteCategory(id:String)
    { return this.http.delete(`${environment.baseUrl}/category/delete/${id}`)}

    Login(Data:any){
      return this.http.post(`${environment.baseUrl}/authentification/login `,Data)
    }

    logout(){
      this.httpOptions  = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
           'Authorization':`Bearer` +` `+ localStorage.getItem("token")
          })
        }
       //console.log("****************httpheadrs**",this.httpOptions);
       return this.http.get(`${environment.baseUrl}/authentification/logout`,this.httpOptions)
      }

      Sendmail(Data:any){
        return this.http.post(`${environment.baseUrl}/admin/sendmail`,Data)
      }
}
