import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { Pizza } from '../interfaces/pizza.interface';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private DB_JSON = 'assets/json/db.json';

  constructor(
    private http: HttpClient,
    private toast: HotToastService,
  ) {}

  public getAll(): Observable<Pizza[]> {
    const url = this.DB_JSON;
    const res = this.http.get<Pizza[]>(url);
    return res;
  }

  public callToast(message: string, duration: number): void {
    this.toast.success(message, {duration});
  }

}
