 import { Component, Inject, inject } from '@angular/core'
 import { DialogModule } from '@angular/cdk/dialog'
 import { DialogRef } from '@angular/cdk/dialog'
 import { DIALOG_DATA } from '@angular/cdk/dialog'
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
 import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons'
 import { BtnComponent } from "../btn/btn.component"
 import { ToDo } from '../../models/todo.model'

 interface InputData {
     todo: ToDo
 }

 interface OutPutData {
     rta: boolean
 }

 @Component({
     selector: 'app-todo-dialog',
     standalone: true,
     templateUrl: './todo-dialog.component.html',
     imports: [DialogModule, BtnComponent, FontAwesomeModule]
 })
 export class TodoDialogComponent {



     todo: ToDo
     constructor(
         @Inject(DIALOG_DATA) data: InputData
      ) {

         this.dialogRef.disableClose = true
         this.todo = data.todo
         console.log(this.todo);
     }

     dialogRef = inject (DialogRef<OutPutData>)

     faClose = faClose
     faCheckToSlot = faCheckToSlot
     faBars = faBars
     faUser = faUser
     faTag = faTag
     faCheckSquare = faCheckSquare
     faClock = faClock

     close() {

         this.dialogRef.close()
     }
     closeWithRta(rta: boolean) {
         this.dialogRef.close({ rta });
     }
 }
