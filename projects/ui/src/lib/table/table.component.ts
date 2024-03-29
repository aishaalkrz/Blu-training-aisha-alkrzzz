import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit {



  @Input() columns: string[] | undefined;
  @Input() rows: any[] | undefined;
  searchText: any = { firstName: '', lastName: '', email: '' };


  
  ngOnInit(): void {

  }
}
