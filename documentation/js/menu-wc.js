'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">school-management-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-206e314cf04a41bcc640da5ebaaef25ea28a4b903214e84dbf067e943b8cee924f910f948596893472df66932a63a074a644fc57ce04e97ec767273315741b0b"' : 'data-bs-target="#xs-components-links-module-AppModule-206e314cf04a41bcc640da5ebaaef25ea28a4b903214e84dbf067e943b8cee924f910f948596893472df66932a63a074a644fc57ce04e97ec767273315741b0b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-206e314cf04a41bcc640da5ebaaef25ea28a4b903214e84dbf067e943b8cee924f910f948596893472df66932a63a074a644fc57ce04e97ec767273315741b0b"' :
                                            'id="xs-components-links-module-AppModule-206e314cf04a41bcc640da5ebaaef25ea28a4b903214e84dbf067e943b8cee924f910f948596893472df66932a63a074a644fc57ce04e97ec767273315741b0b"' }>
                                            <li class="link">
                                                <a href="components/AddStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddTeacherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddTeacherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplyLeaveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplyLeaveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClassScheduleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForbiddenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForbiddenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListFeesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListFeesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListLeavesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListLeavesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListMsgsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListMsgsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListTeacherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListTeacherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageTeacherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageTeacherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyFeesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyFeesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyLeavesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyLeavesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyMsgsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyMsgsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PayFeesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PayFeesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReceivedMsgsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReceivedMsgsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeacherDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateTeacherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateTeacherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewTeacherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewTeacherComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-206e314cf04a41bcc640da5ebaaef25ea28a4b903214e84dbf067e943b8cee924f910f948596893472df66932a63a074a644fc57ce04e97ec767273315741b0b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-206e314cf04a41bcc640da5ebaaef25ea28a4b903214e84dbf067e943b8cee924f910f948596893472df66932a63a074a644fc57ce04e97ec767273315741b0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-206e314cf04a41bcc640da5ebaaef25ea28a4b903214e84dbf067e943b8cee924f910f948596893472df66932a63a074a644fc57ce04e97ec767273315741b0b"' :
                                        'id="xs-injectables-links-module-AppModule-206e314cf04a41bcc640da5ebaaef25ea28a4b903214e84dbf067e943b8cee924f910f948596893472df66932a63a074a644fc57ce04e97ec767273315741b0b"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Admin.html" data-type="entity-link" >Admin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Fee.html" data-type="entity-link" >Fee</a>
                            </li>
                            <li class="link">
                                <a href="classes/Leave.html" data-type="entity-link" >Leave</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/News.html" data-type="entity-link" >News</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Student.html" data-type="entity-link" >Student</a>
                            </li>
                            <li class="link">
                                <a href="classes/Teacher.html" data-type="entity-link" >Teacher</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDetails.html" data-type="entity-link" >UserDetails</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AutoLogOutService.html" data-type="entity-link" >AutoLogOutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeeService.html" data-type="entity-link" >FeeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeaveService.html" data-type="entity-link" >LeaveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentService.html" data-type="entity-link" >StudentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeacherService.html" data-type="entity-link" >TeacherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimerService.html" data-type="entity-link" >TimerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserAuthService.html" data-type="entity-link" >UserAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});