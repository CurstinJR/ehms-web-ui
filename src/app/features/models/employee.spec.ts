import { Employee } from './employee.model';
import describe from "node:test";
import it from "node:test";
import '@types/jest';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});
