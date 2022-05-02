import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import {
  CreateOrderRequest,
  CreateOrderResponse,
  OrderServiceController,
  OrderServiceControllerMethods,
} from './proto/order.pb';

@Controller('order')
@OrderServiceControllerMethods()
export class OrderController implements OrderServiceController {
  constructor(private readonly orderService: OrderService) {}

  public async createOrder(
    request: CreateOrderRequest,
  ): Promise<CreateOrderResponse> {
    return this.orderService.createOrder(request);
  }
}
