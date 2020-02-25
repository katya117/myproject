import { animate, animateChild, query, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Sort } from "@angular/material";
import { Car } from "../car";
const DUR = 500;

@Component({
  selector: "my-app",
  templateUrl: "./home.html",
  styleUrls: ["./home.css"],
  animations: [trigger("move", [
    state("forward", style({ transform: "translateX(0)" })),
    state("backward", style({ transform: "translateX(0)" })),
    state("backward-inactive", style({ transform: "translateX(100%)" })),
    state("forward-inactive", style({ transform: "translateX(-100%)" })),

    transition("forward => forward-inactive", [
      style({ transform: "translateX(0)" }),
      animate(DUR, style({ transform: "translateX(-100%)" })),
    ]),

    transition("forward-inactive => forward, backward-inactive => forward", [
      style({ transform: "translateX(100%)" }),
      animate(DUR, style({ transform: "translateX(0)" })),
    ]),

    transition("backward-inactive => backward, forward-inactive => backward", [
      style({ transform: "translateX(-100%)" }),
      animate(DUR, style({ transform: "translateX(0)" })),
    ]),

    transition("backward => backward-inactive, forward => backward-inactive", [
      style({ transform: "translateX(0)" }),
      animate(DUR, style({ transform: "translateX(100%)" })),
    ]),

    transition("backward => forward-inactive", [
      style({ transform: "translateX(0)" }),
      animate(DUR, style({ transform: "translateX(-100%)" })),
    ]),

  ])],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {
  direction = "forward";
  counter = 0;
  slideItems = [
    { src: "assets/img/audi.jpg", title: "Title 1" },
    { src: "assets/img/chevrolet.jpg", title: "Title 2" },
    { src: "assets/img/Mitsubishi.jpg", title: "Title 3" },
  ];

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
  filterQuery: string = "";
  setred(): void {
    this.visibility = !this.visibility;
  }
  ngOnInit(): void {
    this.car = this.elements;
  }
  search(value: string): void {
    this.car = this.elements.filter(a => a.name.toLowerCase().search(value.toLowerCase()) > -1 || a.brand.toLowerCase().search
      (value.toLowerCase()) > -1 || a.transmission.toLowerCase().search
        (value.toLowerCase()) > -1 || a.data.toLocaleDateString().toLowerCase().search(value.toLowerCase()) > -1 || a.price.toLocaleString().toLowerCase().search
        (value.toLowerCase()) > -1);
  }
  constructor() {
    this.car = this.elements.slice();
  }
  sortData(sort: Sort): void {
    const data = this.elements.slice();
    if (!sort.active || sort.direction === "") {
      this.car = data;
      return;
    }

    this.car = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "brand": return compare(a.brand, b.brand, isAsc);
        case "name": return compare(a.name, b.name, isAsc);
        case "price": return compare(a.price, b.price, isAsc);
        case "data": return compare(a.data, b.data, isAsc);
        default: return 0;
      }
    });
  }

  editChanging(n: number): number {
    this.editNumber = n;
    return this.editNumber;
  }
  showNextImage(): void {
    if (this.counter < this.slideItems.length - 1) {
      this.counter += 1;
      this.direction = "forward";
    }
  }

  showPreviousImage(): void {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
      this.direction = "backward";
    }
  }
}
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

