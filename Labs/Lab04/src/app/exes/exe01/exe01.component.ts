import { Component } from '@angular/core';
import { Product } from '../../product/product';

@Component({
  templateUrl: './exe01.component.html',
  styleUrls: ['./exe01.component.css']
})
export class Exe01Component {
  products: Product[] = [];
  constructor() {}
  ngOnInit(): void {
    this.products = [
      {
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2016',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 3.2,
        imageUrl:
          'https://th.bing.com/th/id/R.b7857da13fad7788ed57d815a0d9167c?rik=wtwj5Z3RSC06mg&riu=http%3a%2f%2fwww.tooled-up.com%2fartwork%2fprodzoom%2fBULBPR.jpg&ehk=O71KUNF8vBN7p6I7m6rmL8WxlhgsPMzGxNToIChe5U4%3d&risl=&pid=ImgRaw&r=0',
      },
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2016',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl:
          'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2016',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.8,
        imageUrl:
          'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
      },
      {
        productId: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2016',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3.7,
        imageUrl:
          'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
      },
      {
        productId: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2015',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4.6,
        imageUrl:
          'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
      },
    ];
  }
  
}
