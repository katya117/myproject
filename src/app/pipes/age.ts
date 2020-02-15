import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "age",
    // считает сколько лет машине
})
export class AgePipe implements PipeTransform {
    transform(value: Date): number {
        const today = new Date();
        const secondDate = new Date(value.getFullYear(),
            value.getMonth(), value.getDate());
        const age = Math.round(Math.abs((today.getFullYear() - secondDate.getFullYear())));
        return age;
    }
}
