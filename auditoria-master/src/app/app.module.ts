import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//CRUD TABLE
//Toolbar
import { MaterialModule } from "./components/puntos-evaluar/material/material.module";
import { PuntoEvaluarService } from "./components/puntos-evaluar/shared/punto-evaluar.service.spec";
import { ReactiveFormsModule } from "@angular/forms";

//Base de Datos
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { FooterComponent } from './includes/footer/footer.component';

// Componentes de Angular
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { VisitaPreliminarComponent } from './components/visita-preliminar/visita-preliminar.component';
import { PuntosEvaluarComponent } from './components/puntos-evaluar/puntos-evaluar.component';
import { PuntoEvaluarComponent } from './components/puntos-evaluar/punto-evaluar/punto-evaluar.component';
import { PuntoEvaluarListComponent } from './components/puntos-evaluar/punto-evaluar-list/punto-evaluar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VisitaPreliminarComponent,
    PuntosEvaluarComponent,
    PuntoEvaluarComponent,
    PuntoEvaluarListComponent
  ],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    //Material Module es donde guardo todo lo que uso, ya tu sabe..! Tu me entiendes
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [PuntoEvaluarService],
  bootstrap: [AppComponent],
  entryComponents: [PuntoEvaluarComponent]
})
export class AppModule { }
