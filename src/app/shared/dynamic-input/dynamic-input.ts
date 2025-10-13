import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR,ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-input.html',
  styleUrl: './dynamic-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicInput),
      multi: true
    }
  ]
})
export class DynamicInput implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() options?: { label: string; value: string }[];
  @Input() formControl!: FormControl;
  
  value: any = '';
  disabled = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
