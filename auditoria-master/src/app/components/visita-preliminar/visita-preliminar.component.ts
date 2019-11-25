import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-visita-preliminar',
  templateUrl: './visita-preliminar.component.html',
  styleUrls: ['./visita-preliminar.component.scss']
})
export class VisitaPreliminarComponent  implements OnInit {

  title = 'Visita Preliminar';
  
  vta_pre: any;
  descripcion: string;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Visita().subscribe(data => {

      this.vta_pre = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Descripcion: e.payload.doc.data()['Descripcion']
        };
      })
      console.log(this.vta_pre);

    });
  }

  CreateRecord() {
    let record = {};
    record['Descripcion'] = this.descripcion;
    this.crudService.create_NewVisita(record).then(resp => {
      this.descripcion = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.crudService.delete_Visita(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditDescripcion = record.Descripcion;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Descripcion'] = recordRow.EditDescripcion;
    this.crudService.update_Visita(recordRow.id, record);
    recordRow.isEdit = false;
  }
}