import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit {

@ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.bannerVideo.nativeElement;

    // Força play e lida com bloqueio de autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('⚠️ Autoplay bloqueado:', err);
      });
    }
  }
}

