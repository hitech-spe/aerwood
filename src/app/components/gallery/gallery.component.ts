import { Component, signal, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;

  // Encapsulated state for configurator render
  readonly currentFinish = signal<'walnut' | 'oak' | 'charcoal'>('walnut');
  readonly currentRoom = signal<'living' | 'office' | 'hotel'>('living');

  setFinish(finish: 'walnut' | 'oak' | 'charcoal'): void {
    this.currentFinish.set(finish);
  }

  setRoom(room: 'living' | 'office' | 'hotel'): void {
    this.currentRoom.set(room);
  }
}
