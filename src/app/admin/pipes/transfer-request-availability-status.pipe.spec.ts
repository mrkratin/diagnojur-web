import { TransferRequestAvailabilityStatusPipe } from './transfer-request-availability-status.pipe';

describe('TransferRequestAvailabilityStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new TransferRequestAvailabilityStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
