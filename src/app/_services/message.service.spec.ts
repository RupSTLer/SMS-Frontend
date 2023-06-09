import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('MessageService', () => {
  let msgService: MessageService;
  let http: HttpClient;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(MessageService);

    http = {
      post: jest.fn(),
      put: jest.fn(),
      get: jest.fn(),
      delete: jest.fn(),

    } as unknown as HttpClient;

    msgService = new MessageService(http);
  });

  it('should be created', () => {
    expect(msgService).toBeTruthy();
  });

  describe('send message', () => {
    it('should make a POST a request to send a new message', async () => {
      const msgMockData = {
        id: 3,
        senderId: "SMS003",
        receiverId: "SMT007",
        message: "query on angular",
        time: "30-05-2023 20:26"
      };

      (http.post as jest.Mock).mockReturnValueOnce(of('Message sent'));  //mocking

      const sendMsgPromise = msgService.addMessage(msgMockData).toPromise();
      expect(http.post).toHaveBeenCalledWith(`${msgService.baseURL}/addMsg`, msgMockData);
      expect(sendMsgPromise).resolves.toEqual(('Message sent'));

    });
  });


  describe('get a message details by senderId', () => {
    it('should make a GET request to retrieve msg details by senderId', async () => {

      const stuId = "SMS004";
      const getMsgsData = {
        id: 4,
        studentId: stuId,
        studentName:"Ritam Roy",
        startDate: "2023-06-04",
        endDate: "2023-06-08",
        status: "approved",
        reason: "marraige",
        time: "30-05-2023 20:29",
      };

      (http.get as jest.Mock).mockReturnValueOnce(Promise.resolve(getMsgsData));

      const getMsgsPromise = msgService.getMsgBySenderId(stuId);
      expect(http.get).toHaveBeenCalledWith(`${msgService.baseURL}/getMsgBySenderId/${stuId}`);
      expect(getMsgsPromise).resolves.toEqual(getMsgsData);

    });
  });

  describe('get a message details by receiverId', () => {
    it('should make a GET request to retrieve msg details by receiverId', async () => {

      const stuId = "SMS004";
      const getMsgsData = {
        id: 4,
        studentId: stuId,
        studentName:"Ritam Roy",
        startDate: "2023-06-04",
        endDate: "2023-06-08",
        status: "approved",
        reason: "marraige",
        time: "30-05-2023 20:29",
      };

      (http.get as jest.Mock).mockReturnValueOnce(Promise.resolve(getMsgsData));

      const getMsgsPromise = msgService.getMsgByReceiverId(stuId);
      expect(http.get).toHaveBeenCalledWith(`${msgService.baseURL}/getMsgByReceiverId/${stuId}`);
      expect(getMsgsPromise).resolves.toEqual(getMsgsData);

    });
  });


  describe('listAll messages', () => {
    it('should make a GET request to retrieve message list', async () => {
      const msgListMockData = [{
        id: 6,
        receiverId: 7,
        message: "query on angular",
        time: "30-05-2023 20:26"
      },
      {
        id: 5,
        receiverId: 2,
        message: "query on microservices",
        time: "23-05-2023 20:26"
      }];

      (http.get as jest.Mock).mockReturnValueOnce(of(msgListMockData));

      const listMsgsPromise = msgService.getMessages().toPromise();
      expect(http.get).toHaveBeenCalledWith(`${msgService.baseURL}/getAllMsgs`);
      expect(listMsgsPromise).resolves.toEqual(msgListMockData);
    });
  });
});
