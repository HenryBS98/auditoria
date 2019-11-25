import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { PuntoEvaluarService } from "../shared/punto-evaluar.service.spec";
import { NotificationService } from "../shared/notification.service.spec";

@Component({
  selector: 'app-punto-evaluar',
  templateUrl: './punto-evaluar.component.html',
  styleUrls: ['./punto-evaluar.component.scss']
})
export class PuntoEvaluarComponent implements OnInit {

  constructor(private service: PuntoEvaluarService, private notificationService: NotificationService, private dialogRef: MatDialogRef<PuntoEvaluarComponent>) { }

  ngOnInit() {
    this.service.getPuntoEvaluar();
  }

  //Limpiar campos
  onClear(){
    this.service.form.reset();
    this.service.InitializeFormGroup();
    this.notificationService.success('Guardado Exitosamente');
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value)
        this.service.insertPuntoEvaluar(this.service.form.value);
      else
      this.service.updatePuntoEvaluar(this.service.form.value);
      this.service.form.reset();
      this.service.InitializeFormGroup();
      this.notificationService.success('Guardado Exitosamente');
      this.onClose();
    }
  }

  onClose(){
    this.service.form.reset();
    this.service.InitializeFormGroup();
    this.dialogRef.close();
  }

}
