import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-table',
  imports: [CommonModule],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css'
})
export class ResultTableComponent {
  @Input({required:true}) invData:any = [];
  
  ngOnInit(): void {
    console.log('Initial Data:', this.invData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['invData']) {
      console.log('Updated Data:', changes['invData'].currentValue);
    }
  }
  
  
}
