import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TabelaComponent } from "./tabela/tabela.component";

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        TabelaComponent,
    ],
    providers: [
        MatDatepickerModule,
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: ['l', 'LL'],
                },
                display: {
                    dateInput: 'L',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                },
            },
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
    ]
})
export class AppModule { }
