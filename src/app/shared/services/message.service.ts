import { Injectable, TemplateRef } from '@angular/core';
import { NzMessageDataFilled, NzMessageDataOptions, NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private service: NzMessageService) {}

  ok(message: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.service.success(message, options ? options : undefined);
  }

  error(message: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.service.error(message, options ? options : undefined);
  }

  info(message: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.service.info(message, options ? options : undefined);
  }
}
