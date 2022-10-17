import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-data-table-toolbar',
  templateUrl: './data-table-toolbar.component.html',
  styleUrls: ['./data-table-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableToolbarComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      timer: [1000, [Validators.required]],
      size: [10, [Validators.required]],
    });
  }

  public submitForm(): void {
    this.dataService.generateItems(this.form.value.size);
  }
}
