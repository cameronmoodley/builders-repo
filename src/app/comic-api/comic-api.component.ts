import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'comic-list',
  templateUrl: './comic-api-component.html',
  styleUrls: ['./style.css']
})

export class comicApiComponent implements OnInit{
    superHeroName: string;
    public heroForm: FormGroup;

    constructor(private _fb: FormBuilder)
    {}

    ngOnInit(){
      this.heroForm = this._fb.group({
          superHeroName: ['', [Validators.required, Validators.minLength(5)]],
      });
    }

} 
