import { Component, OnInit, ViewChild} from '@angular/core';
import { PuntoEvaluarService } from '../shared/punto-evaluar.service.spec';
import { MatTableDataSource, MatSort, MatPaginator} from "@angular/material";
import {MatDialog, MatDialogConfig} from "@angular/material";
import { PuntoEvaluarComponent } from '../punto-evaluar/punto-evaluar.component';
import { NotificationService } from '../shared/notification.service.spec';
import { $ } from 'protractor';

@Component({
  selector: 'app-punto-evaluar-list',
  templateUrl: './punto-evaluar-list.component.html',
  styleUrls: ['./punto-evaluar-list.component.scss']
})
export class PuntoEvaluarListComponent implements OnInit {

  constructor(private service: PuntoEvaluarService, private dialog: MatDialog, private notificationService: NotificationService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['situacion', 'causa', 'solucion', 'fec_solucion', 'responsable', 'actions'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  searchKey: string;


  ngOnInit() {

    this.service.getPuntoEvaluar().subscribe(
      list => {
        let array = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;

        //No se para que es lo de abajo xD lo olvide :'v
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLocaleLowerCase().indexOf(filter) != -1;
          });
        };
      });
    }

    onSearchClear(){
      this.searchKey="";
      this.applyFilter();
    }

    applyFilter(){
      this.listData.filter = this.searchKey.trim().toLocaleLowerCase();
    }

    onCreate(){
      this.service.InitializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(PuntoEvaluarComponent, dialogConfig);
    }

    onEdit(row){
      this.service.populateForm(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(PuntoEvaluarComponent, dialogConfig);

    }

    
  onDelete($key){
    if(confirm('Esta seguro que desea eliminar?')){
    this.service.deletePuntoEvaluar($key);
    this.notificationService.warn('Eliminado exitosamente'); 
    }
  }
}
