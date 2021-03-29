import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {

  id: number;
  name: string;
  surname: string;
  type = 0;
  MyWorkerType = MyWorkerType;
  EditForm : FormGroup;
  public mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  @Output() editWorker = new EventEmitter<MyWorker>();
  @Output() cancelEdit = new EventEmitter();
  @Input() workerData: object;

  constructor() { }

  ngOnInit(): void
  {
    this.id = this.workerData["id"];
    this.EditForm = new FormGroup
    ({   
      "workerName": new FormControl(this.workerData["name"], Validators.required),
      "workerSurname": new FormControl(this.workerData["surname"], Validators.required),
      "workerPhone": new FormControl(this.workerData["phone"], Validators.required),
      "workerType": new FormControl(this.workerData["type"], Validators.required)
  })
  }

  onEditWorker() // привязано к форме редактирования
  {
      this.editWorker.emit({
        id: this.id,
        name: this.EditForm.get('workerName').value,
        surname: this.EditForm.get('workerSurname').value,
        phone: this.EditForm.get('workerPhone').value,
        type: this.EditForm.get('workerType').value,
      });
  }

  closeEdit()
  {
    this.cancelEdit.emit();
  }
}
