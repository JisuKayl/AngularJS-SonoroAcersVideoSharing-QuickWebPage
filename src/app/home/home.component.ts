import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SafePipe],
})
export class HomeComponent {
  videos = [
    {
      url: 'https://www.youtube.com/embed/d1sQX4-r60s?si=UGNM0Vr3uRd89n1T',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
    {
      url: '../assets/simpleform.mp4',
      thumbnail: '../assets/placeholder.jpg',
      avatar: '../assets/profile(1).png',
      title: 'Sonoro Acers',
      author: 'Jerson Kyle Bonifacio',
      views: '100K',
      uploadedAt: '1 day ago',
    },
  ];

  showPopup = false;
  currentVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer, private safePipe: SafePipe) {}

  showVideo(videoUrl: string) {
    this.showPopup = true;
    this.currentVideoUrl = this.safePipe.transform(videoUrl);
  }

  closeVideoPopup() {
    this.showPopup = false;
    this.currentVideoUrl = null;
  }
}
