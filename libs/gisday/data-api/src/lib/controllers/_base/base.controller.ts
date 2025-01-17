import { Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { DeepPartial } from 'typeorm';

import { GuidIdentity } from '../../gisday-data-api';
import { BaseProvider } from '../../providers/_base/base-provider';

@Controller()
export abstract class BaseController<T> implements IBaseController<T> {
  constructor(private readonly provider: BaseProvider<T>) {}
  @Get('/all')
  public async getEntities() {
    return this.provider.getEntities();
  }

  @Get(':guid')
  public async getEntity(@Param() params) {
    return this.provider.getEntity(params.guid);
  }

  @Post()
  public async insertEntity(@Request() req) {
    if (req.user) {
      req.body.accountGuid = req.user.sub;
    }
    const _entity: DeepPartial<T> = req.body;

    return this.provider.insertEntity(_entity);
  }

  @Patch()
  public async updateEntity(@Request() req) {
    if (req.user) {
      req.body.accountGuid = req.user.sub;
    }
    const _entity: DeepPartial<T> = req.body;

    return this.provider.updateEntity(_entity);
  }

  @Delete(':guid')
  public async deleteEntity(@Param() params) {
    return this.provider.deleteEntity(params.guid);
  }
}

export interface IBaseController<T> {
  getEntity(guid: string);
  getEntities();
  insertEntity(req: DeepPartial<T>);
  updateEntity(req: DeepPartial<T>);
  deleteEntity(guid: string);
}
