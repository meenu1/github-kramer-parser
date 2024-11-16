import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFacade } from '../store/common.facade';
import { FormsModule } from '@angular/forms';
import { ParserInfo } from '../models/model';
import { filter, tap } from 'rxjs';
import { HighlightDirective } from './json-parser.directive';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-json-parser',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective, StoreModule],
  providers:[CommonFacade],
  templateUrl: './json-parser.component.html',
  styleUrls: ['./json-parser.component.scss'],
})
export class JsonParserComponent implements OnInit{
   private commonFacade = inject(CommonFacade);
   list: ParserInfo[] = [];
   listCopy: ParserInfo[] = [];
   listOfParsers$ = this.commonFacade.listOfParsers$.pipe(
    filter(Boolean),
    tap(listTemp=> {
      this.list = [...listTemp];
      this.listCopy = [...listTemp];
    })
   );

   name = '';

   ngOnInit(){
      this.commonFacade.getList();
   }

   searchParser(){
      this.list = this.listCopy.filter(val=>val.Name.toLowerCase().includes(this.name.toLowerCase()));
   }

}
