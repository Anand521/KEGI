import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { shareReplay, retry, catchError, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const CACHE_SIZE = 1;
interface Response {
  data: Array<[]>;
  status: string;
  message: string;
}
interface ModuleResponse {
  assigned: Array<AssignType>;
  count: number;
  status: string;
  message: string;
}
interface SessionResponse {
  sessions: Array<{
    complated: string;
    facultyID: string;
    liveBatch: string;
    liveCreatedDate: string;
    liveEndTime: string;
    liveID: string;
    liveMeetingID: string;
    liveMeetingPassword: string;
    liveMeetingURL: string;
    liveName: string;
    liveStartDate: string;
    liveStartTime: string;
    liveStatus: string;
    moduleID: string;
  }>;
  count: number;
  status: string;
  message: string;
}
interface PracticeResponse {
  data: Array<{
    facultyID: string;
    lessionID: string;
    userlessionQuestions: string;
    userlessionAnswered: string;
    userFullName: string;
    userProfilePicture: string;
    LessonName: string;
    LessonNo: string;
    LessonType: string;
    moduleName: string;
    answers: string;
  }>;
  count: {
    '': {
      completed: number;
      pending: number;
      total: number;
    };
  };
  status: string;
  message: string;
}
interface PracticeTestResponse {
  data: Array<{
    answerAnswer: string;
    answerCorrectAnswer: string;
    answerFor: string;
    answerID: string;
    answerIsCorrect: string;
    answerIsVerified: string;
    answerSubmittedDate: string;
    examID: string;
    facultyID: string;
    lessionID: string;
    queID: string;
    queQuestion: string;
    queSolution: string;
    queType: string;
    userID: string;
  }>;
  status: string;
  message: string;
}
interface PracSubmitResponse {
  status: string;
  message: string;
}
interface AssignType {
  ContentFileCount: string;
  LessonCreatedDate: string;
  LessonDescription: string;
  LessonFile: string;
  LessonFileType: string;
  LessonFileURL: string;
  LessonID: string;
  LessonName: string;
  LessonNo: string;
  LessonProgress: string;
  LessonStatus: string;
  LessonType: string;
  VideoFileCount: string;
  facultyID: string;
  lessionMarkingSystem: string;
  lessionQuickTips: string;
  lessionfiles: Array<{
    LessonID: string;
    Lessonfile: string;
    LessonfileFile: string;
    LessonfileFileType: string;
    LessonfileID: string;
    LessonfileStatus: string;
  }>;
  moduleID: string;
  progress: string;
}
interface ResponseForum {
  data: Array<[]>;
  status: string;
  message: string;
  count: string;
}
interface Upload {
  fileName: string;
  status: string;
  message: string;
}
@Injectable({
  providedIn: 'root',
})
export class RootService {

  private reloadSpeaking$ = new Subject<void>();
  // Variables Declaration Of Type Observable
  private speaking$: Observable<Array<ModuleResponse>>;
  private reading$: Observable<Array<ModuleResponse>>;
  private writing$: Observable<Array<ModuleResponse>>;
  private listening$: Observable<Array<ModuleResponse>>;
  private about$: Observable<Array<Response>>;
  private terms$: Observable<Array<Response>>;
  private policy$!: Observable<Array<Response>>;
  private faq$!: Observable<Array<Response>>;
  private forumAll$: Observable<Array<ResponseForum>>;
  // faculty url's
  private loginUrl = '/restaurant/restaurant-login-password';
  private forgetPassUlr = '/restaurant/restaurant-forgot-password';
  private resetPassUrl = '/restaurant/reset-password';
  private otpVerUrl = '/restaurant/otp-verification';
  private resendUrl = '/restaurant/otp-resend';
  private updateProfilePicUrl = '/faculty/faculty-update-profile-picture';
  private updateProfileUrl = '/faculty/faculty-update-profile';
  private changePasswordUrl = '/faculty/change-password';
  private uploadFileUrl = '/users/file-upload';
  // cms url's
  private cmsPageUrl = '/cmspage/get-cmspage';
  private contactUsRegisterUrl = '/contactus/contactus';
  private faqUrl = '/faq/faq-list';
  // other url's
  private countryUrl = '/country/get-country-list';
  private stateUrl = '/state/get-state-list';
  private cityUrl = '/city/get-city-list';
  private courseModuleUrl = '/coursemodule/get-coursemodule-list';
  // feedback url
  private addFeedbackUrl = '/feedback/add-feedback';
  // faculty home url
  private facultyHomeUrl = '/faculty/faculty-home';
  // faculty Evaluation url
  private facultyPracticeUrl = '/faculty/get-faculty-practice-test';
  private facultyPracticeQuestionsUrl =
    '/faculty/get-faculty-practice-test-questions';
  private updatePracticeTestUrl = '/faculty/update-practice-test-questions';
  private fullTestUrl = '/faculty/get-faculty-exam-test';
  private fullTestQuestionsUrl = '/faculty/get-faculty-exam-questions';
  private liveSessionUrl = '/livesessions/get-faculty-live-sessions';
  // faculty lesson url
  private addLessonUrl = '/lesson/add-lesson';
  private editLessonUrl = '/lesson/edit-lesson';
  private lessonUpldateUrl = '/lesson/update-progress';
  private lessonAssignUrl = '/lesson/assign-faculty';
  // forum url's
  private forumsUrl = '/forum/get-forums';
  private addMessageUrl = '/forum/forum-add-message';
  private addEditForumUrl = '/forum/add-edit-forum';
  private updateStatusForumUrl = '/forum/forum-status-update';
  private forumMessageUrl = '/forum/get-forum-message';
  // Behavior Subject
  updateNav!: string;
  update: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.update = new BehaviorSubject(this.updateNav);
  }

  httpOptions = {
    headers: new HttpHeaders({}),
  };

  updateHeader = (nm: string) => {
    this.update.next(nm);
  };
  speakingModule = (data: string): Observable<Array<ModuleResponse>> => {
    if (!this.speaking$) {
      this.speaking$ = this.home(data).pipe(
        takeUntil(this.reloadSpeaking$),
        shareReplay(CACHE_SIZE)
      );
    }
    return this.speaking$;
  };
  forceReload = () => {
    this.reloadSpeaking$.next();
    this.speaking$ = null;
  };
  listeningModule = (data: string): Observable<Array<ModuleResponse>> => {
    if (!this.listening$) {
      this.listening$ = this.home(data).pipe(shareReplay(CACHE_SIZE));
    }
    return this.listening$;
  };
  writtingModule = (data: string): Observable<Array<ModuleResponse>> => {
    if (!this.writing$) {
      this.writing$ = this.home(data).pipe(shareReplay(CACHE_SIZE));
    }
    return this.writing$;
  };
  readingModule = (data: string): Observable<Array<ModuleResponse>> => {
    if (!this.reading$) {
      this.reading$ = this.home(data).pipe(shareReplay(CACHE_SIZE));
    }
    return this.reading$;
  };
  home = (data: string): Observable<Array<ModuleResponse>> => {
    const form = new FormData();
    const json = `[{
    "loginfacultyID": "${JSON.parse(data).loginfacultyID}",
    "facultyModules":"${JSON.parse(data).facultyModules}",
    "languageID": "${JSON.parse(data).languageID}",
    "unassigned":"${JSON.parse(data).unassigned}",
    "page":"${JSON.parse(data).page}",
    "pagesize":"${JSON.parse(data).pagesize}",
    "apiType": "Android",
    "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<ModuleResponse>>(
        `${this.facultyHomeUrl}`,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  liveSessions = (data: string): Observable<Array<SessionResponse>> => {
    const form = new FormData();
    const json = `[{
      "loginfacultyID": "${JSON.parse(data).loginfacultyID}",
      "languageID": "${JSON.parse(data).languageID}",
      "shift":"${JSON.parse(data).shift}",
      "page":"${JSON.parse(data).page}",
      "pagesize":"${JSON.parse(data).pagesize}",
      "apiType": "Android",
      "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<SessionResponse>>(
        `${this.liveSessionUrl}`,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  updateLessonProgress = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginfacultyID": "${JSON.parse(data).loginfacultyID}",
      "lessionID": "${JSON.parse(data).lessionID}",
      "facultyModules": "${JSON.parse(data).facultyModules}",
      "languageID": "${JSON.parse(data).languageID}",
      "unassigned":"",
      "LessonProgress":"${JSON.parse(data).LessonProgress}",
      "page": "0",
      "pagesize": "10",
      "apiType": "Android",
      "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.lessonUpldateUrl}`, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  practiceTests = (data: string): Observable<Array<PracticeResponse>> => {
    const form = new FormData();
    const json = `[{
      "loginfacultyID":"${JSON.parse(data).loginfacultyID}",
      "languageID":"${JSON.parse(data).languageID}",
      "isPending":"${JSON.parse(data).isPending}",
      "page":"${JSON.parse(data).page}",
      "pagesize":"${JSON.parse(data).pagesize}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<PracticeResponse>>(
        `${this.facultyPracticeUrl}`,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  fullTests = (data: string): Observable<Array<PracticeResponse>> => {
    const form = new FormData();
    const json = `[{
      "loginfacultyID":"${JSON.parse(data).loginfacultyID}",
      "languageID":"${JSON.parse(data).languageID}",
      "isPending":"${JSON.parse(data).isPending}",
      "page":"${JSON.parse(data).page}",
      "pagesize":"${JSON.parse(data).pagesize}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<PracticeResponse>>(
        `${this.fullTestUrl}`,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  fullTestQuestions = (
    data: string
  ): Observable<Array<PracticeTestResponse>> => {
    const form = new FormData();
    const json = `[{
      "loginfacultyID":"${JSON.parse(data).loginfacultyID}",
      "languageID":"${JSON.parse(data).languageID}",
      "examID":"${JSON.parse(data).examID}",
      "userID":"${JSON.parse(data).userID}",
      "page":"${JSON.parse(data).page}",
      "pagesize":"${JSON.parse(data).pagesize}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<PracticeTestResponse>>(
        `${this.fullTestQuestionsUrl}`,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  practiceTestQuestions = (
    data: string
  ): Observable<Array<PracticeTestResponse>> => {
    const form = new FormData();
    const json = `[{
      "loginfacultyID":"${JSON.parse(data).loginfacultyID}",
      "languageID":"${JSON.parse(data).languageID}",
      "lessionID":"${JSON.parse(data).lessionID}",
      "userID":"${JSON.parse(data).userID}",
      "page":"${JSON.parse(data).page}",
      "pagesize":"${JSON.parse(data).pagesize}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<PracticeTestResponse>>(
        `${this.facultyPracticeQuestionsUrl}`,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  submitAnswer = (data: string): Observable<Array<PracSubmitResponse>> => {
    const form = new FormData();
    const json = `[{
      "loginfacultyID":"${JSON.parse(data).loginfacultyID}",
      "languageID":"${JSON.parse(data).languageID}",
      "lessonID":"${JSON.parse(data).lessonID}",
      "examID":"${JSON.parse(data).examID}",
      "userID":"${JSON.parse(data).userID}",
      "answers":${JSON.stringify(JSON.parse(data).answers)},
      "apiType":"Android",
      "apiVersion":"1.0"
      }]`;
    form.append('json', json);
    return this.http
      .post<Array<PracSubmitResponse>>(
        `${this.updatePracticeTestUrl}`,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  addFeedback = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
    "languageID": "${JSON.parse(data).languageID}",
    "loginuserID":"${JSON.parse(data).loginfacultyID}",
    "feedbackName": "${JSON.parse(data).feedbackName}",
    "feedbackEmail":"${JSON.parse(data).feedbackEmail}",
    "feedbackMobile":"${JSON.parse(data).feedbackMobile}",
    "feedbackFeedback":"${JSON.parse(data).feedbackFeedback}",
    "feedback": "${JSON.parse(data).feedback}",
    "apiType": "Android",
    "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.addFeedbackUrl}`, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  addEditForum = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
    "languageID": "${JSON.parse(data).languageID}",
    "loginfacultyID":"${JSON.parse(data).loginfacultyID}",
    "forumID":"${JSON.parse(data).forumID}",
    "forumName":"${JSON.parse(data).forumName}",
    "forumSubject":"${JSON.parse(data).forumSubject}",
    "AssiDescription":"${JSON.parse(data).AssiDescription}",
    "forumFiles":"${JSON.parse(data).forumFiles}",
    "forumPic":"${JSON.parse(data).forumPic}",
    "moduleID":"${JSON.parse(data).moduleID}",
    "apiType": "Android",
    "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.addEditForumUrl}`, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  unSubForum = () => {
    this.forumAll$ = null;
  };
  getAllForums = (data: string): Observable<Array<ResponseForum>> => {
    if (!this.forumAll$) {
      this.forumAll$ = this.forumsAll(data).pipe(shareReplay(CACHE_SIZE));
    }
    return this.forumAll$;
  };
  forumsAll = (data: string): Observable<Array<ResponseForum>> => {
    const form = new FormData();
    const json = `[{
      "loginuserID":"${JSON.parse(data).loginuserID}",
      "languageID":"${JSON.parse(data).languageID}",
      "facultyID":"${JSON.parse(data).facultyID}",
      "forumID":"${JSON.parse(data).forumID}",
      "moduleID":"${JSON.parse(data).moduleID}",
      "usertype":"${JSON.parse(data).usertype}",
      "page":"${JSON.parse(data).page}",
      "pagesize":"${JSON.parse(data).pageSize}",
      "searchWord":"${JSON.parse(data).searchWord}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<ResponseForum>>(`${this.forumsUrl}`, form, this.httpOptions)
      .pipe(retry(2), shareReplay(), catchError(this.handleError));
  };
  courseModules = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginuserID":"${JSON.parse(data).loginuserID}",
      "languageID":"${JSON.parse(data).languageID}",
      "moduleType":"${JSON.parse(data).moduleType}",
      "page":"${JSON.parse(data).page}",
      "pageSize":"${JSON.parse(data).pageSize}",
      "searchWord":"${JSON.parse(data).searchWord}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.courseModuleUrl}`, form, this.httpOptions)
      .pipe(retry(2), shareReplay(), catchError(this.handleError));
  };
  addForumMsg = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginuserID":"${JSON.parse(data).loginuserID}",
      "languageID":"${JSON.parse(data).languageID}",
      "forumID":"${JSON.parse(data).forumID}",
      "facultyID":"${JSON.parse(data).facultyID}",
      "forummessMessage":"${JSON.parse(data).forummessMessage}",
      "forummessAttachment":"${JSON.parse(data).forummessAttachment}",
      "page":"${JSON.parse(data).page}",
      "pageSize":"${JSON.parse(data).pageSize}",
      "searchWord":"${JSON.parse(data).searchWord}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.addMessageUrl}`, form, this.httpOptions)
      .pipe(retry(2), shareReplay(), catchError(this.handleError));
  };
  messageList = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginuserID":"${JSON.parse(data).loginuserID}",
      "languageID":"${JSON.parse(data).languageID}",
      "forumID":"${JSON.parse(data).forumID}",
      "page":"${JSON.parse(data).page}",
      "pageSize":"${JSON.parse(data).pageSize}",
      "searchWord":"${JSON.parse(data).searchWord}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.forumMessageUrl}`, form, this.httpOptions)
      .pipe(retry(2), shareReplay(), catchError(this.handleError));
  };
  signInAssistant = (item: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "restaurantMobile":"${JSON.parse(item).restaurantMobile}",
      "languageID":"${JSON.parse(item).languageID}",
      "restaurantPassword":"${JSON.parse(item).restaurantPassword}",
      "userDeviceID": "token",
      "apiType": "Android",
      "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(this.loginUrl, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  updateProfile = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
    "languageID": "${JSON.parse(data).languageID}",
    "loginfacultyID":"${JSON.parse(data).loginfacultyID}",
    "facultyDOB":"${JSON.parse(data).facultyDOB}",
    "facultyEmail":"${JSON.parse(data).facultyEmail}",
    "facultyMobile":"${JSON.parse(data).facultyMobile}",
    "facultyFullName":"${JSON.parse(data).facultyFullName}",
    "facultyGender":"${JSON.parse(data).facultyGender}",
    "facultyProfilePicture":"${JSON.parse(data).facultyProfilePicture}",
    "facultyAddress":"${JSON.parse(data).facultyAddress}",
    "facultyPincode":"${JSON.parse(data).facultyPincode}",
    "facultyDeviceType": "Android",
    "facultyDeviceID": "token",
    "countryID":"${JSON.parse(data).countryID}",
    "stateID":"${JSON.parse(data).stateID}",
    "cityID":"${JSON.parse(data).cityID}",
    "apiType": "Android",
    "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.updateProfileUrl}`, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  updateProfilePic = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "languageID":"${JSON.parse(data).languageID}",
      "loginfacultyID":"${JSON.parse(data).facultyID}",
      "facultyProfilePicture":"${JSON.parse(data).picture}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(
        `${this.updateProfilePicUrl}`,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  forgetPassword = (item: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "restaurantEmail":"${JSON.parse(item).restaurantEmail}",
      "restaurantCountryCode":"${JSON.parse(item).restaurantCountryCode}",
      "languageID":"${JSON.parse(item).languageID}",
      "restaurantMobile":"${JSON.parse(item).restaurantMobile}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(this.forgetPassUlr, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  resetPasswordAssistant = (item: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginrestaurantID":"${JSON.parse(item).loginrestaurantID}",
      "languageID":"${JSON.parse(item).languageID}",
      "restaurantNewPassword":"${JSON.parse(item).restaurantNewPassword}",
      "apiType":"Android",
      "apiVersion":"1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(this.resetPassUrl, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  OTPverifyAssistant = (item: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginrestaurantID":"${JSON.parse(item).loginrestaurantID}",
      "restaurantOTP":"${JSON.parse(item).restaurantOTP}",
      "languageID":"${JSON.parse(item).languageID}",
      "apiType":"Android",
      "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(this.otpVerUrl, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  resendOTPAssistan = (item: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginrestaurantID":"${JSON.parse(item).loginrestaurantID}",
      "restaurantMobile":"${JSON.parse(item).loginrestaurantID}",
      "languageID":"${JSON.parse(item).loginrestaurantID}",
      "apiType":"Android",
      "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(this.resendUrl, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  changePassword = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
    "loginfacultyID": "${JSON.parse(data).loginfacultyID}",
    "facultyCurrentPassword": "${JSON.parse(data).facultyCurrentPassword}",
    "languageID": "${JSON.parse(data).languageID}",
    "facultyNewPassword": "${JSON.parse(data).facultyNewPassword}",
    "apiType": "Android",
    "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(
        `${this.changePasswordUrl}`,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  get about(): Observable<Array<Response>> {
    if (!this.about$) {
      this.about$ = this.cmsPage('aboutus').pipe(shareReplay(CACHE_SIZE));
    }
    return this.about$;
  }
  get policy(): Observable<Array<Response>> {
    if (!this.policy$) {
      this.policy$ = this.cmsPage('privacypolicy').pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.policy$;
  }
  get terms(): Observable<Array<Response>> {
    if (!this.terms$) {
      this.terms$ = this.cmsPage('Termsandcondions').pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.terms$;
  }
  cmsPage = (code: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
    "loginuserID": "1",
    "languageID": "1",
    "cmspageConstantCode": "${code}",
    "apiType": "Android",
    "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(this.cmsPageUrl, form, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  };
  get faqs(): Observable<Array<Response>> {
    if (!this.faq$) {
      this.faq$ = this.faq().pipe(shareReplay(CACHE_SIZE));
    }
    return this.faq$;
  }
  faq = (): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "languageID": "1",
      "faqtypeID": "",
      "apiVersion": "1.0",
      "apiType": "Android"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(this.faqUrl, form, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  };
  contactUsRegistration = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
    "languageID": "${JSON.parse(data).languageID}",
    "contactusName": "${JSON.parse(data).contactusName}",
    "contactusEmail": "${JSON.parse(data).contactusEmail}",
    "contactusMobile": "${JSON.parse(data).contactusMobile}",
    "contactusSubject": "${JSON.parse(data).contactusSubject}",
    "contactusRemarks": "Query",
    "apiType": "web",
    "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(
        environment.apiBaseUrl + this.contactUsRegisterUrl,
        form,
        this.httpOptions
      )
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  country = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginuserID": "0",
      "languageID": "1",
      "countryID":"${JSON.parse(data).countryID}",
      "searchWord":"${JSON.parse(data).searchWord}",
      "apiType": "Android",
      "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.countryUrl}`, form, this.httpOptions)
      .pipe(retry(2), shareReplay(), catchError(this.handleError));
  };
  state = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginuserID": "0",
      "languageID": "1",
      "countryID": "${JSON.parse(data).countryID}",
      "searchWord": "${JSON.parse(data).searchWord}",
      "page": "0",
      "pagesize": "100",
      "apiType": "Android",
      "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.stateUrl}`, form, this.httpOptions)
      .pipe(retry(2), shareReplay(), catchError(this.handleError));
  };
  city = (data: string): Observable<Array<Response>> => {
    const form = new FormData();
    const json = `[{
      "loginuserID": "0",
      "languageID": "1",
      "stateID": "${JSON.parse(data).stateID}",
      "searchWord": "${JSON.parse(data).searchWord}",
      "countryID": "${JSON.parse(data).countryID}",
      "apiType": "Android",
      "apiVersion": "1.0",
      "page": "0",
      "pagesize": "100"
    }]`;
    form.append('json', json);
    return this.http
      .post<Array<Response>>(`${this.cityUrl}`, form, this.httpOptions)
      .pipe(retry(2), shareReplay(), catchError(this.handleError));
  };
  // uploading files
  uploadFile = (fileData: any): Observable<Array<Upload>> => {
    const form = new FormData();
    const json = `[{
      "loginuserID": "${fileData.loginuserID}",
      "apiType": "Android",
      "apiVersion": "1.0"
    }]`;
    form.append('json', json);
    form.append('FileField', fileData.file);
    form.append('fileName', fileData.fileName);
    form.append('FilePath', fileData.filePath);
    return this.http
      .post<Array<Upload>>(`${this.uploadFileUrl}`, form, this.httpOptions)
      .pipe(shareReplay(), retry(2), catchError(this.handleError));
  };
  unsubs = () => {
    this.speaking$ = null;
    this.listening$ = null;
    this.writing$ = null;
    this.reading$ = null;
  };
  // this is for progress for file upload
  file = (filedata: any) => {
    const req = new HttpRequest('POST', this.uploadFileUrl, filedata.file, {
      reportProgress: true,
    });
    this.http.request(req).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
      } else if (event instanceof HttpResponse) {
      }
    });
  };
  // ErrorHandling
  handleError = (error: {
    error: { messages: string };
    status: any;
    messsage: any;
  }) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.messages;
    } else {
      errorMessage = `Error Code : ${error.status}\nMessage : ${error.messsage}`;
    }
    return throwError(errorMessage);
  };
}
