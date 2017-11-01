import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {


    myData ={
        "listItems":[
            { "header":"A", "items":[{"listName": "Axis & Allies"},{"listName": "Apples to Apples"}] },
            { "header":"B", "items":[{"listName": "Bang!"},{"listName": "Betrayal at House on the Hill"},{"listName": "Blokus"}] },
            { "header":"C", "items":[{"listName": "Castle Panic"}] },
            { "header":"D", "items":[{"listName": "Doom"},{"listName": "Dixit"}] },
            { "header":"E", "items":[{"listName": "Escape from Atlantis"},{"listName": "Eclipse"}] }
        ]

    };

    constructor() {
        console.log('Hello DataProvider Provider');
    }

    getData():object {
        return this.myData;
    }
}