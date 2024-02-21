import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName(): string {
    return 'Vashu';
  }
  postName(bodyData): string {
    return bodyData;
  }

  queryName(queryData): string {
    return queryData;
  }

  paramName(paramData): string {
    return paramData;
  }
}
