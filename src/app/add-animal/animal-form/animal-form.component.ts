import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css'],
})
export class AnimalFormComponent implements OnInit {
  imagePath;
  imgURL: any;
  images: any[] = [];
  message: string;
  constructor() {}

  ngOnInit(): void {}

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.images.push(reader.result);
    };
  }
  onDeleteImage(index: number) {
    console.log(index);
    this.images = this.images.filter((img, ind) => {
      console.log('Din array: ' + ind);
      return ind !== index;
    });
  }
}
