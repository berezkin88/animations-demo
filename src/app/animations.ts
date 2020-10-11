import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [
    animate(2000)
  ])
]);

export let slide = trigger('fade', [
  state('void', style({ transform: 'translateX(-20px)' })),
  transition(':enter', [
    animate(1000)
  ]),
  transition(':leave', [
    animate(200, style({ transform: 'translateX(-400px)' }))
  ])
]);
