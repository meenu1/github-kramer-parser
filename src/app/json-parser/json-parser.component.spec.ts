import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonParserComponent } from './json-parser.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './json-parser.directive';
import { CommonFacade } from '../store/common.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('JsonParserComponent', () => {
  let component: JsonParserComponent;
  let fixture: ComponentFixture<JsonParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonParserComponent,CommonModule, FormsModule, HighlightDirective,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        HttpClientTestingModule],
      providers:[CommonFacade,provideMockStore({})]
    }).compileComponents();

    fixture = TestBed.createComponent(JsonParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('searchParser', () => {

    component.listCopy = [
      {
        "Name": "BenQ SC3211",
        "NativeResolution": "1920X540",
        "Size": 256,
        "status": 1
      },
      {
        "Name": "Dell ZT60",
        "NativeResolution": "1920X1080",
        "Size": 256,
        "status": 0
      },
      {
        "Name": "Haier LE39B50",
        "NativeResolution": "1600X900",
        "Size": 128,
        "status": 1
      }];

    component.list = [...component.listCopy];
    expect(component.list.length).toBe(3);
    component.name = "BenQ";
    component.searchParser();
    console.log(component.listCopy);
    expect(component.list.length).toBe(1);
  });

  
});
