import { Injectable } from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";


@Injectable({
  providedIn: 'root'
})
export class PuntoEvaluarService{

  constructor(private firebase: AngularFireDatabase) {}

  puntoEvaluarList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    situacion: new FormControl('', Validators.required), 
    causa: new FormControl('', Validators.required),
    solucion: new FormControl('', Validators.required),
    fec_solucion: new FormControl('', Validators.required),
    responsable: new FormControl('', Validators.required)

  });

  InitializeFormGroup(){
    this.form.setValue({
      $key: null,
      situacion: '',
      causa: '',
      solucion: '',
      fec_solucion: '',
      responsable: ''
    });
  }

  getPuntoEvaluar(){
    this.puntoEvaluarList = this.firebase.list('puntoEvaluar');
    return this.puntoEvaluarList.snapshotChanges();
  }

  insertPuntoEvaluar(puntoEvaluar){
    this.puntoEvaluarList.push({
      situacion: puntoEvaluar.situacion,
      causa: puntoEvaluar.causa,
      solucion: puntoEvaluar.solucion,
      fec_solucion: puntoEvaluar.fec_solucion,
      responsable: puntoEvaluar.responsable
    });
  }

  updatePuntoEvaluar(puntoEvaluar){
    this.puntoEvaluarList.update(puntoEvaluar.$key,
      {
        situacion: puntoEvaluar.situacion,
        causa: puntoEvaluar.causa,
        solucion: puntoEvaluar.solucion,
        fec_solucion: puntoEvaluar.fec_solucion,
        responsable: puntoEvaluar.responsable
      });
  }

  deletePuntoEvaluar($key: string){
    this.puntoEvaluarList.remove($key);
  }

  populateForm(puntoEvaluar){
    this.form.setValue(puntoEvaluar);
  }

}