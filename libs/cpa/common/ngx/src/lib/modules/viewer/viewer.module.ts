import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UILayoutModule } from '@tamu-gisc/ui-kits/ngx/layout';
import { SidebarModule } from '@tamu-gisc/common/ngx/ui/sidebar';
import { LayerListModule } from '@tamu-gisc/maps/feature/layer-list';
import { LegendModule } from '@tamu-gisc/maps/feature/legend';

import { CPAFormsModule } from '../forms/cpaForms.module';
import { ParticipantComponent } from '../forms/components/participant/participant.component';
import { ViewerComponent } from './viewer.component';
import { SnapshotNavigatorComponent } from './components/snapshot-navigator/snapshot-navigator.component';

const routes: Routes = [
  {
    path: '',
    component: ViewerComponent,
    children: [
      {
        path: 'workshop/:guid',
        component: ParticipantComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CPAFormsModule,
    UILayoutModule,
    SidebarModule,
    LayerListModule,
    LegendModule
  ],
  declarations: [ViewerComponent, SnapshotNavigatorComponent],
  exports: [RouterModule]
})
export class CpaViewerModule {}
