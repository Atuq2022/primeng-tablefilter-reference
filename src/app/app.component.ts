import { Component, ViewChild } from '@angular/core';
import { Section, Region } from './customer';
import { CustomerService } from './customerservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
})

export class AppComponent {

  fileName = 'consequence.json';

  sections: Section[];//from .json

  nSections: number = 7;

  regions: Region[];//from .json

  nConsequences: number = 4;//number of consequences

  consequences: number[] = [...Array(this.nConsequences).keys()]// [0, 1, ...]

  consequenceVector: number[] = new Array(this.nSections);// define null vector

  selectedConsequence: any = null;

  //private fs = require('fs');

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    
    this.customerService.getCustomersLarge().then((sections) => {
      this.sections = sections;
    });

    //console.log(this.sections)

   let abc = this.customerService.getCustomerData()

   console.log(abc)

    this.regions = [
      { name: 'Region I', image: 'regionI.png' },
      { name: 'Region II', image: 'regionII.png' },
      { name: 'Region III', image: 'regionIII.png' }
    ];
  }

  /**onClick(event) {
    console.log(this.selectedConsequence);
  }*/

  public getSectionConseq(sectionId, ConsequenceId) {
    this.consequenceVector[sectionId] = ConsequenceId;
    console.log(this.consequenceVector)
  }

  public saveConsequence() {
    this.writeJSON(this.consequenceVector)
  }

  public clearConsequence() {
    this.consequenceVector = new Array(this.nSections);
    this.writeJSON(this.consequenceVector)
  }

  loadConsequence() {
    console.log("loading")
  }

  public writeJSON(data) {
    var dummy = document.createElement('a');
    dummy.setAttribute('href', 'data:text/plain;charset=utf-u,' +
      encodeURIComponent(JSON.stringify(data)));
    dummy.setAttribute('download', this.fileName); 
    dummy.click()
  }
}