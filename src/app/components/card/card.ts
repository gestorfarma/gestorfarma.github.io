import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

type SIZES = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'none' | 'full';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  topShadow = input<boolean>(false);

  roundSizeTop = input<SIZES>('none');
}
