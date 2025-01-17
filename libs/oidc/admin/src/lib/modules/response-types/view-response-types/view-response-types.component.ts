import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ResponseTypesService } from '@tamu-gisc/oidc/admin-data-access';
import { ResponseType } from '@tamu-gisc/oidc/common';

@Component({
  selector: 'view-response-types',
  templateUrl: './view-response-types.component.html',
  styleUrls: ['./view-response-types.component.scss']
})
export class ViewResponseTypesComponent implements OnInit {
  public $responseTypes: Observable<Array<Partial<ResponseType>>>;

  constructor(private readonly responseService: ResponseTypesService) {
    this.$responseTypes = this.responseService.getResponseTypes();
  }

  public ngOnInit(): void {}
}
