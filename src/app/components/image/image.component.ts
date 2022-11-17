import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const showModel = trigger('showModel', [
  state(
    'open',
    style({
      zIndex: 999,
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
  selector: 'app-image',
  standalone: true,
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [showModel],
  imports: [CommonModule],
})
export class ImageComponent implements OnInit {

  @Input() image!: string;
  @Input() isImageShow!: Boolean;
  @Output() showImage = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public closeWindow(): void {
    this.showImage.emit();
  }

}
