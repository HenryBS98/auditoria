import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewVisita(record) {
    return this.firestore.collection('Visita').add(record);
  }
 
  read_Visita() {
    return this.firestore.collection('Visita').snapshotChanges();
  }
 
  update_Visita(recordID,record){
    this.firestore.doc('Visita/' + recordID).update(record);
  }
 
  delete_Visita(record_id) {
    this.firestore.doc('Visita/' + record_id).delete();
  }
}
