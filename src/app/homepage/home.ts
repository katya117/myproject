import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Car } from "../car";

@Component({
  selector: "my-app",
  templateUrl: "./home.html",
  styleUrls: ["./home.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {
  elements: Car[] = [
    {
      "brand": "Chevrolet",
      "name": "Cobalt",
      "transmission": "manual",
      "data": new Date(2013, 0, 0),
      "price": 319000
    },
    {
      "brand": "Audi",
      "name": "Q5",
      "transmission": "automatic",
      "data": new Date(2014, 0, 0),
      "price": 1370000
    },
    {
      "brand": "Chevrolet",
      "name": "Aveo",
      "transmission": "manual",
      "data": new Date(2014, 0, 0 ),
      "price": 290000
    },
    {
      "brand": "Mitsubishi",
      "name": "Pajero",
      "transmission": "automatic",
      "data": new Date(2012, 0, 0),
      "price": 650000
    },
  ];
  car: Car[];
  editNumber: number = 0;
  visibility: boolean = false;
  showEditForm: boolean;
  showDialog: boolean;
  showReactiveForm: boolean;
  delete: Car[];
  add: Car[];
  edit: Car[];
  color: string;
  setred(): void {
    this.visibility = !this.visibility;
  }
  ngOnInit(): void {
    this.car = this.elements;
  }
  search(value: string): void {
    this.car = this.elements.filter(a => a.name.toLowerCase().search(value.toLowerCase()) > -1 || a.brand.toLowerCase().search
      (value.toLowerCase()) > -1 || a.transmission.toLowerCase().search
        (value.toLowerCase()) > -1);
  }
  find(value: string): void {
    this.car = this.elements.filter(a => a.data.toLocaleDateString().toLowerCase().search(value.toLowerCase()) > -1 || a.price.toLocaleString().toLowerCase().search
      (value.toLowerCase()) > -1);

  }
  constructor() {
    this.car = this.elements.slice();
  }
  sortByName(): void {
    this.car = this.elements.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }
  sortByBrand(): void {
    this.car = this.elements.sort((a, b) => (a.brand > b.brand) ? 1 : -1);
  }
  sortByTransmission(): void {
    this.car = this.elements.sort((a, b) => (a.transmission > b.transmission) ? 1 : -1);
  }
  sortByprice(): void {
    this.car = this.elements.sort((a, b) => (a.price > b.price) ? 1 : -1);
  }
  sortDate(): void {
    this.car = this.elements.sort((a, b) => (a.data > b.data) ? 1 : -1);
  }
  editChanging(n: number): number {
    this.editNumber = n;
    return this.editNumber;
  }
}

