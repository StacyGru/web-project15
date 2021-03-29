import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  id: number;
  MyWorkerType = MyWorkerType;
  AddForm : FormGroup;
  public mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() 
  {
    this.AddForm = new FormGroup
    ({   
      "workerName": new FormControl("", Validators.required),
      "workerSurname": new FormControl("", Validators.required),
      "workerPhone": new FormControl("", Validators.required,),
      "workerType": new FormControl(0, Validators.required)
  })
  }

  ngOnInit(): void {
  }

  onAddWorker()
  {
    
      this.addWorker.emit
      ({
        name: this.AddForm.get('workerName').value,
        surname: this.AddForm.get('workerSurname').value,
        phone: this.AddForm.get('workerPhone').value,
        type: this.AddForm.get('workerType').value,
      });
    
  }
}
