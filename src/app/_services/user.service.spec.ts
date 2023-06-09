import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';
import { TimerService } from './timer.service';
import { Router } from '@angular/router';
import { Role, User } from '../entities/user';

describe('UserService', () => {
  let userService: UserService;
  let userAuthService: UserAuthService;
  let timerService: TimerService;
  let router: Router;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    http = {
      post: jest.fn(),
      put: jest.fn(),
      get: jest.fn(),
      delete: jest.fn(),

    } as unknown as HttpClient;

    userService = new UserService(http, userAuthService, timerService, router);

    // service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });


  describe('login', () => {
    it('should make a POST request to authenticate the user', async () => {
      //mock the post method of httpclient
      (http.post as jest.Mock).mockReturnValueOnce({});

      const loginData = { username: 'rup123', 'password': 'Rup@pass' };

      await userService.login(loginData);

      expect(http.post).toHaveBeenCalledWith(
        userService.baseURL + '/authenticate', loginData,
        { headers: userService.requestHeader }
      );
    });
  });

  describe('forAdmin', () => {
    it('should make a GET request to retrieve data for a Admin', async () => {
      //mock the GET method of httpclient
      (http.get as jest.Mock).mockReturnValueOnce('response data');

      await userService.forAdmin();

      expect(http.get).toHaveBeenCalledWith(
        userService.baseURL + '/forAdmin',
        { responseType: 'text' }
      );
    });
  });

  describe('forUser', () => {
    it('should make a GET request to retrieve data for a user', async () => {
      //mock the GET method of httpclient
      (http.get as jest.Mock).mockReturnValueOnce('response data');

      await userService.forUser();

      expect(http.get).toHaveBeenCalledWith(
        userService.baseURL + '/forUser',
        { responseType: 'text' }
      );
    });
  });

  describe('getUserDetails', () => {
    it('should make a GET request to retrieve user details', async () => {
      //mock the GET method of httpclient
      (http.get as jest.Mock).mockReturnValueOnce('response data');

      await userService.getUserDetails();

      expect(http.get).toHaveBeenCalledWith(
        userService.baseURL + '/userDetails'
      );
    });
  });


    // describe('register new User', () => {
  //   it.skip('should make a POST request to register a new user', async () => {
  //     //mock the post method of httpclient
  //     // http.post.mockResolvedValueOnce({});
  //     (http.post as jest.Mock).mockReturnValueOnce({});

  //     const registerData: User =
  //     {
  //       userName: "dhiman123",
  //       userPassword: "Dhiman@pass",
  //       userID: "SMS004",
  //       name: "Dhiman Das",
  //       age: 26,
  //       birthDate: "1992-06-13",
  //       gender: "Male",
  //       address: "Howrah",
  //       phoneNo: "6289045205",
  //       email: "dhiman@g.co",
  //       classe: "six",
  //       section: "A",
  //       department: "Science",
  //       role: new Set<Role>(
  //         [
  //           {
  //             roleName: "Teacher",
  //             roleDescription: "role for teacher"
  //           }
  //         ])
  //     };

  //     const mockResponse: User = {
  //       ...registerData
  //     };
      
  //     const role = 'Teacher';

  //     userService.register(registerData, role).subscribe(response => {
  //       expect(response).toEqual(mockResponse);
  //     });

  //     // expect(http.post).toHaveBeenCalledWith(
  //     //   userService.baseURL + '/registerNewUser', registerData, role
  //     // );
  //   });
  // });





});
