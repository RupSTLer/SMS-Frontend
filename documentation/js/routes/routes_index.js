var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","component":"HomeComponent"},{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"admin","component":"AdminComponent","canActivate":["AuthGuard"],"data":{"roles":["Admin"]}},{"path":"user","component":"UserComponent","canActivate":["AuthGuard"],"data":{"roles":["User"]}},{"path":"login","component":"LoginComponent"},{"path":"register","component":"RegisterComponent"},{"path":"forbidden","component":"ForbiddenComponent"},{"path":"studentDashboard","component":"StudentDashboardComponent"},{"path":"addStudent","component":"AddStudentComponent","canActivate":["AuthGuard"],"data":{"roles":["Admin"]}},{"path":"listStudent","component":"ListStudentComponent"},{"path":"viewStudent/:studentId","component":"ViewStudentComponent"},{"path":"updateStudent/:studentId","component":"UpdateStudentComponent","canActivate":["AuthGuard"],"data":{"roles":["Admin"]}},{"path":"msgTeacher","component":"MessageTeacherComponent"},{"path":"applyLeave","component":"ApplyLeaveComponent"},{"path":"payFees","component":"PayFeesComponent"},{"path":"schedule","component":"ClassScheduleComponent"},{"path":"myMsgs","component":"MyMsgsComponent"},{"path":"myFees","component":"MyFeesComponent"},{"path":"myLeaves","component":"MyLeavesComponent"},{"path":"teacherDashboard","component":"TeacherDashboardComponent"},{"path":"addTeacher","component":"AddTeacherComponent","canActivate":["AuthGuard"],"data":{"roles":["Admin"]}},{"path":"listTeacher","component":"ListTeacherComponent"},{"path":"viewTeacher/:teacherId","component":"ViewTeacherComponent"},{"path":"updateTeacher/:teacherId","component":"UpdateTeacherComponent","canActivate":["AuthGuard"],"data":{"roles":["Admin"]}},{"path":"listLeaves","component":"ListLeavesComponent"},{"path":"listFees","component":"ListFeesComponent"},{"path":"listMsgs","component":"ListMsgsComponent"},{"path":"receivedMsgs","component":"ReceivedMsgsComponent"},{"path":"userProfile","component":"UserProfileComponent"},{"path":"news","component":"NewsComponent"}],"kind":"module"}]}
