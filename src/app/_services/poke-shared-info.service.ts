import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeSharedInfoService {
  private value$ = new Subject<string>();
  constructor() { }

  getValue(): Subject<string> {
    return this.value$;
  }

  setValue(val: string): void {
    this.value$.next(val);
  }
}
