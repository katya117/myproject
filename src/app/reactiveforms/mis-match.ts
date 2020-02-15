import { FormGroup, ValidatorFn } from "@angular/forms";
export function misMatchValidator(controlBrand: string,  matchingControlName: string): ValidatorFn {
    return (formGroup: FormGroup): { [key: string]: boolean } | null => {
        const controlS = formGroup.controls[controlBrand];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.misMatch) {
            return;
        }
        if (controlS.value === matchingControl.value) {
            matchingControl.setErrors({ misMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}
