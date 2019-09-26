import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
@Component({
  selector: 'app-tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.css']
})
export class TablonComponent implements OnInit {
  chartOption : any = {
      color: ['#3398DB'],
      tooltip : {
          trigger: 'axis',
          axisPointer : {          
              type : 'shadow'  
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
        {
            name:'',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
  };
  chartOption2 = {
    xAxis: {
        type: 'category',
        data: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00',
        '00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00' ]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320820, 932, 901, 934, 1290, 1330, 1320
          ,820, 932, 901, 934],
        type: 'line'
    }]
};

  
  constructor() {
  }

  ngOnInit() {
  }
  


}
