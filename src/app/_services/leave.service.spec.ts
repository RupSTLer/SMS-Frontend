import { TestBed } from '@angular/core/testing';

import { LeaveService } from './leave.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('LeaveService', () => {
  let leaveService: LeaveService;
  let http: HttpClient;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(LeaveService);

    http = {
      post: jest.fn(),
      put: jest.fn(),
      get: jest.fn(),
      delete: jest.fn(),

    } as unknown as HttpClient;

    leaveService = new LeaveService(http);
  });

  it('should be created', () => {
    expect(leaveService).toBeTruthy();
  });

  describe('apply leave', () => {
    it('should make a POST a request to apply a new leave', async () => {
      const leaveMockData = {
        id: 13,
        studentId: "SMS003",
        studentName:"Rupam Roy",
        startDate: "2023-05-30",
        endDate: "2023-05-31",
        status: "pending",
        reason: "sick",
        time: "30-05-2023 20:29",
      };

      (http.post as jest.Mock).mockReturnValueOnce(of('Leave Applied'));  //mocking

      // await feeService.payFees(payMockData).toPromise();

      const applyLeavePromise = leaveService.applyLeave(leaveMockData).toPromise();
      expect(http.post).toHaveBeenCalledWith(`${leaveService.baseURL}/applyLeave`, leaveMockData, {responseType: 'text'});
      expect(applyLeavePromise).resolves.toEqual(('Leave Applied'));

    });
  });


  describe('update leave details', () => {
    it('should make a PUT a request to update leave details', async () => {
      const updateMockData = {
        id: 13,
        studentId: "SMS003",
        studentName:"Rupam Roy",
        startDate: "2023-05-30",
        endDate: "2023-05-31",
        status: "pending",
        reason: "sick",
        time: "30-05-2023 20:29",
      };

      (http.put as jest.Mock).mockReturnValueOnce(of('Leave updated'));  //mocking

      const updateLeavePromise = leaveService.updateLeave(updateMockData).toPromise();
      expect(http.put).toHaveBeenCalledWith(`${leaveService.baseURL}/updateLeave`, updateMockData, {responseType: 'text'});
      await expect(updateLeavePromise).resolves.toEqual(('Leave updated'));

    });
  });


  describe('listAll leaves', () => {
    it('should make a GET request to retrieve leaves list', async () => {
      const leaveListMockData = [{
        id: 3,
        studentId: "SMS003",
        studentName:"Rupam Roy",
        startDate: "2023-05-30",
        endDate: "2023-05-31",
        status: "pending",
        reason: "sick",
        time: "30-05-2023 20:29",
      },
      {
        id: 4,
        studentId: "SMS004",
        studentName:"Ritam Roy",
        startDate: "2023-06-04",
        endDate: "2023-06-08",
        status: "approved",
        reason: "marraige",
        time: "30-05-2023 20:29",
      }];

      (http.get as jest.Mock).mockReturnValueOnce(of(leaveListMockData));

      const listLeavesPromise = leaveService.listLeaves().toPromise();
      expect(http.get).toHaveBeenCalledWith(`${leaveService.baseURL}/listLeaves`);
      expect(listLeavesPromise).resolves.toEqual(leaveListMockData);
    });
  });


  describe('get a leave details by studentId', () => {
    it('should make a GET request to retrieve leave details by studentId', async () => {

      const stuId = "SMS004";
      const getLeavesData = {
        id: 4,
        studentId: stuId,
        studentName:"Ritam Roy",
        startDate: "2023-06-04",
        endDate: "2023-06-08",
        status: "approved",
        reason: "marraige",
        time: "30-05-2023 20:29",
      };

      (http.get as jest.Mock).mockReturnValueOnce(Promise.resolve(getLeavesData));

      const getLeavePromise = leaveService.getLeaveDetailsByStudentId(stuId);
      expect(http.get).toHaveBeenCalledWith(`${leaveService.baseURL}/getLeaveDetailsByStudentId/${stuId}`);
      expect(getLeavePromise).resolves.toEqual(getLeavesData);

    });
  });


});
