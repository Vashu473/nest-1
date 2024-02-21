import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { postName } from './user/dto/post-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getName')
  getName(): string {
    return this.appService.getName();
  }
  // body
  @Post('/postName')
  postName(@Body() bodyData: postName): string {
    return this.appService.postName(bodyData);
  }

  // query
  @Post('/queryName')
  queryName(@Query() queryData): string {
    return this.appService.queryName(queryData);
  }

  // param
  @Post('/paramName/:abc')
  paramName(@Param() paramData): string {
    return this.appService.paramName(paramData);
  }
}
