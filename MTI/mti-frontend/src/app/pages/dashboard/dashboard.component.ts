import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { UIChart } from "primeng/components/chart/chart";
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild("chartLinha") chartLinha: UIChart;

  graficoLinha: any;
  graficoColuna: any;
  graficoPie: any;
  options: any;
  data: any[];
  labelDiario: any[];
  labelMensal: any[];
  dataTratadosDiario: any[];
  dataAbertosDiario: any[];
  data10MinDiario: any[];

  constructor(private dashboardService: DashboardService) {
    this.graficoLinha = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Tratados',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Abertos',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        },
        {
          label: '<=10Min',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    }

    this.graficoColuna = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 0, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
    this.graficoPie = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    this.options = {
      title: {
        display: false,
        text: 'My Title',
        fontSize: 16
      },
      legend: {
        display: false,
        position: 'left'
      }
    };

  }

  ngOnInit() {
    
    // Observable.interval(10000).subscribe(time => {
    //   console.log("intervalo");
    //   this.obterDados().subscribe(()=>{
    //     console.log("teste");
        
    //     this.montaGraficoLinha(this.dataTratadosDiario, this.dataAbertosDiario, this.data10MinDiario, this.labelDiario);     
    //   });;
    // })
    
  }

  montaGraficoLinha(tratadosDiario, abertosDiario, DezMinDiario, labelDiario) {
    this.graficoLinha = {
      labels: labelDiario,
      datasets: [
        {
          label: 'Tratados',
          data: tratadosDiario,
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Abertos',
          data: abertosDiario,
          fill: false,
          borderColor: '#565656'
        },
        {
          label: '<=10Min',
          data: DezMinDiario,
          fill: false,
          borderColor: '#565656'
        }
      ]
    }
    
    this.chartLinha.data.datasets = this.data
    this.chartLinha.reinit()
  }
  montaGraficoColuna(label, data) {
    this.graficoColuna = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 0, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }
  atualizaData() {

    this.data = [
      {
        label: 'First Dataset',
        data: [100, 10, 50, 81, 80, 55, 100],
        fill: false,
        borderColor: '#4bc0c0'
      },
      {
        label: 'Second Dataset',
        data: [100, 48, 10, 19, 10, 27, 90],
        fill: false,
        borderColor: '#565656'
      }
    ];
    
  }

  obterDados() {
   return Observable.forkJoin(
      this.dashboardService.obterEventos("tratados", "diario").do((data) => {
        this.dataTratadosDiario = data.data;
        this.labelDiario = data.labels;
      }),
      this.dashboardService.obterEventos("tratados", "mensal").do((data) => {
  
        
      }),
      this.dashboardService.obterEventos("naoTratados", "diario").do((data) => {
        this.dataAbertosDiario = data.data;
      
        
      }),
      this.dashboardService.obterEventos("naoTratados", "mensal").do((data) => {
       
      }),
      this.dashboardService.obterEventos("naoTratadosEmAteDezMinutos", "diario").do((data) => {
        this.data10MinDiario = data.data;
       
      }),
      this.dashboardService.obterEventos("naoTratadosEmAteDezMinutos", "mensal").do((data) => {
        
      }))    
  }

  selectData(event) {

  }
  /**
   * @method ngAfterViewInit
   */
  iniciaScrollBar = 0;
  ngAfterViewInit() {
        
  }
  ngAfterViewChecked(){    
    if(this.iniciaScrollBar == 0){
      $(".sidebar").slimScroll({
        height: ($(window).height() - $('.main-header').height()) + 'px'
      });
      //$(".sidebar").slimScroll();
    }
    this.iniciaScrollBar = 1;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    $(".sidebar").slimScroll({
      height: ($(window).height() - $('.main-header').height()) + 'px'
    });
  }
}
