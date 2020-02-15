import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "initial"
    // берет инициалы от имени и фамилии
})
export class InitialPipe implements PipeTransform {
    transform(value: string): string {
        const nameSurname = value.split(" ");
        let initial: string;
        initial = nameSurname[0].slice(0, 1).toUpperCase() + ".";
        return initial;
    }
}
