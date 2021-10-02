import { TransferRequestStatusPipe } from './transfer-request-status.pipe';

describe('TransferRequestStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new TransferRequestStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
