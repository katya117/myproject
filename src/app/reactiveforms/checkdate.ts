import { AbstractControl, ValidatorFn } from "@angular/forms";
export function checkDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const maxDate = new Date();
        const difference = maxDate.getFullYear() - 10;
        const minyear = new Date(difference);
        if (new Date(control.value) > (minyear)) {
            return { "checkDate": true };
        }
    };

}


