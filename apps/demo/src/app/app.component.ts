import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    public gaugethresholds = {
    '0': { backgroundColor: '#32508F', bgOpacity:100, start:0, end:1 },
    '1': { backgroundColor: '#3A5EA8', bgOpacity:100, start:1, end:2 },
    '2': { backgroundColor: '#416ABA', bgOpacity:100, start:2, end:3 },
    '3': { backgroundColor: '#4974D0', bgOpacity:100, start:3, end:4 },
    '4': { backgroundColor: '#8597D1', bgOpacity:100, start:4, end:5 },
    '5': { backgroundColor: '#A8B5DE', bgOpacity:100, start:5, end:6 }
  };

  public gaugemarkers = { 
    '0': {
      color: '#555',
      size: 2,
      label: '0',
      type: 'line',
      font: "8px"
    },
    '6': {
      color: '#555',
      size: 2,
      label: '6',
      type: 'line',
      font: "8px"
    },
    "3.1": 
    { type: "star", color:'#555', size: 2, label: "3.1", font: "8px" }
  };

}
