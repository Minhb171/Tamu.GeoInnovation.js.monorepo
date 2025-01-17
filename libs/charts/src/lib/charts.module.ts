import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseChartComponent } from './components/base/base.component';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';

import { BarChartComponent } from './components/bar/bar.component';
import { LineChartComponent } from './components/line/line.component';
import { DoughnutChartComponent } from './components/doughnut/doughnut.component';
import { PieChartComponent } from './components/pie/pie.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BaseChartComponent,
    BarChartComponent,
    ChartContainerComponent,
    LineChartComponent,
    DoughnutChartComponent,
    PieChartComponent
  ],
  exports: [BaseChartComponent, BarChartComponent, LineChartComponent, DoughnutChartComponent, PieChartComponent]
})
export class ChartsModule {}
