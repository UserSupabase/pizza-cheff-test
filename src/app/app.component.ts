import { Component, OnInit } from '@angular/core';
import { PizzaService } from './services/pizza.service';
import { Pizza } from './interfaces/pizza.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageComponent } from './components/image/image.component';

const showMenu = trigger('showMenu', [
  state(
    'open',
    style({
      zIndex: 99,
      opacity: 1,
    })
  ),
  state(
    'close',
    style({
      zIndex: -1,
      opacity: 0,
    })
  ),
  transition('open => close', [animate('.3s ease-out')]),
  transition('close => open', [animate('.3s ease-out')]),
]);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [showMenu],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ImageComponent,
  ],
})
export class AppComponent implements OnInit {

  pizzas$: Observable<Pizza[]> | undefined;
  isShow: boolean = false;
  isImageShow: boolean = false;
  imageProduct: any;
  form!: FormGroup;

  constructor(
    private pizzaService: PizzaService,
  ) {}

  ngOnInit(): void {
    this.pizzas$ = this.pizzaService.getAll();
    this.reactiveForm();
  }

  reactiveForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      adress: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  goScroll(t: HTMLElement): void {
    t.scrollIntoView({behavior: 'smooth'});
    this.isShow = false;
  }

  menuShow(): void {
    this.isShow = !this.isShow;
  }

  showImage(product?: Pizza): void {
    this.imageProduct = product?.image;
    this.isImageShow = !this.isImageShow;
    if(!this.isImageShow) {
      this.imageProduct = '';
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.pizzaService.callToast('Спасибо за заказ', 3000);
      this.form.reset();;
    }
  }

}
