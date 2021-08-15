import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RootService } from 'src/app/rootservice.service';
interface Login {
  restaurantPassword: string;
  restaurantMobile: string;
  languageID: string;
}
interface restaurantResponse {
  data: restaurant[];
  status: string;
  message: string;
}
interface ResponseForgot {
  data: Forgot[];
  status: string;
  message: string;
}
interface ResponseResend {
  status: string;
  message: string;
}
interface Forgot {
  restaurantID: string;
  restaurantMobile: string;
}
interface restaurant {
  restaurantID: string;
  restaurantFirstName: string;
  restaurantLastName: string;
  restaurantEmail: string;
  restaurantCountryCode: string;
  restaurantMobile: string;
  restaurantPassword: string;
  restaurantProfilePicture: string;
  languageID: string;
  restaurantDeviceType: string;
  restaurantDeviceID: string;
  restaurantVerified: string;
  restaurantEmiratesID: string;
  restaurantPassport: string;
  restaurantPassportCountryID: string;
  restaurantPassportImage: string;
  restaurantDegree: string;
  restaurantDegreeImage: string;
  restauranterviceChangeNotification: string;
  restaurantPushNotification: string;
  restaurantystemNotification: string;
  restauranttatus: string;
  restaurantOTP: string;
  restaurantCreatedDate: string;
  restaurantLastLoginDate: string;
}
interface Forget {
  restaurantMobile: string;
  restaurantEmail: string;
  restaurantCountryCode: string;
  languageID: string;
}
interface Otp {
  restaurantID: string;
  restaurantOTP: string;
  languageID: string;
  restaurantOTP1: string;
  restaurantOTP2: string;
  restaurantOTP3: string;
  restaurantOTP4: string;
}
interface Resend {
  restaurantID: string;
  restaurantMobile: string;
  languageID: string;
}
interface Reset {
  loginrestaurantID: string;
  restaurantNewPassword: string;
  restaurantReNewPassword: string;
  languageID: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .backlogin {
        font-size: 14px;
        color: #dd5709;
        min-width: 47px;
      }
      .resend {
        cursor: pointer;
        float: right;
        margin-right: 9px;
        margin-top: 10px;
        margin-bottom: -10px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  hide = true;
  bModalRef: BsModalRef | undefined;
  logInOfficerestaurant: FormGroup;
  verificationOfficerestaurantForm: FormGroup;
  logInSupervisor: FormGroup;
  logInEngineer: FormGroup;
  forgetFormOfficerestaurantForm: FormGroup;
  resetOfficerestaurantForm: FormGroup;
  new = true;
  confirm = true;
  error: string;
  data: Forget = {
    restaurantMobile: '',
    restaurantEmail: '',
    restaurantCountryCode: '+91',
    languageID: '1',
  };
  forgetResponse = {
    restaurantID: '',
    restaurantMobile: '',
  };
  @ViewChild('emailInputrestaurant', { static: false })
  emailInputrestaurant: ElementRef;
  @ViewChild('passwordInputrestaurant', { static: false })
  passwordInputrestaurant: ElementRef;
  @ViewChild('forgotrestaurantEmail', { static: false })
  forgotrestaurantEmail: ElementRef;
  @ViewChild('restaurantInputOTP1', { static: false }) restaurantOTP1: ElementRef;
  @ViewChild('restaurantInputOTP2', { static: false }) restaurantOTP2: ElementRef;
  @ViewChild('restaurantInputOTP3', { static: false }) restaurantOTP3: ElementRef;
  @ViewChild('restaurantInputOTP4', { static: false }) restaurantOTP4: ElementRef;
  @ViewChild('assisNewPassword', { static: false })
  assisNewPassword: ElementRef;
  @ViewChild('assisReNewPassword', { static: false })
  assisReNewPassword: ElementRef;
  constructor(
    private fb: FormBuilder,
    private service: RootService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    // for Login Officerestaurant
    this.logInOfficerestaurant = this.fb.group({
      restaurantMobile: [
        '',
        Validators.compose([
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ]),
      ],
      restaurantPassword: [null],
      languageID: ['1'],
    });
    // for Login Supervisor
    this.logInSupervisor = this.fb.group({
      restaurantMobile: [
        '',
        Validators.compose([
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ]),
      ],
      restaurantPassword: [null],
      languageID: ['1'],
    });
    // for Login Engineer
    this.logInEngineer = this.fb.group({
      restaurantMobile: [
        '',
        Validators.compose([
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ]),
      ],
      restaurantPassword: [null],
      languageID: ['1'],
    });
    // forgot
    this.forgetFormOfficerestaurantForm = this.fb.group({
      restaurantMobile: [
        null,
        Validators.compose([
          Validators.pattern(
            /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
          ),
        ]),
      ],
      restaurantCountryCode: ['+91'],
      languageID: ['1'],
    });
    // otp verification
    this.verificationOfficerestaurantForm = this.fb.group({
      restaurantOTP1: [
        null,
        Validators.compose([Validators.pattern('^[0-9]*$')]),
      ],
      restaurantOTP2: [
        null,
        Validators.compose([Validators.pattern('^[0-9]*$')]),
      ],
      restaurantOTP3: [
        null,
        Validators.compose([Validators.pattern('^[0-9]*$')]),
      ],
      restaurantOTP4: [
        null,
        Validators.compose([Validators.pattern('^[0-9]*$')]),
      ],
      loginrestaurantID: [''],
      restaurantMobile: [''],
      restaurantOTP: [''],
      languageID: [''],
    });
    // reset-password
    this.resetOfficerestaurantForm = this.fb.group(
      {
        restaurantNewPassword: [
          '',
          Validators.compose([
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
          ]),
        ],
        restaurantReNewPassword: [''],
      },
      { validators: this.checkPasswords }
    );
  }
  checkPasswords = (group: FormGroup) => {
    // here we have the 'passwords' group
    const password = group.get('restaurantNewPassword').value;
    const confirmPassword = group.get('restaurantReNewPassword').value;
    if (password && confirmPassword) {
      return password === confirmPassword ? null : { confirmedValidator: true };
    }
  };
  loginOfficeAssistant = (post: Login) => {
    if (!post.restaurantMobile && !post.restaurantPassword) {
      this.emailInputrestaurant.nativeElement.focus();
      this.logInOfficerestaurant
        .get('restaurantMobile')
        .setValidators([
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
          Validators.required,
        ]);
      this.logInOfficerestaurant
        .get('restaurantPassword')
        .setValidators([Validators.required]);
      this.logInOfficerestaurant

        .get('restaurantMobile')
        .updateValueAndValidity({ onlySelf: true });
      this.logInOfficerestaurant
        .get('restaurantPassword')
        .updateValueAndValidity({ onlySelf: true });
    } else if (!post.restaurantMobile && post.restaurantPassword) {
      this.emailInputrestaurant.nativeElement.focus();
      this.logInOfficerestaurant
        .get('restaurantMobile')
        .setValidators([
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
          Validators.required,
        ]);
      this.logInOfficerestaurant
        .get('restaurantMobile')
        .updateValueAndValidity({ onlySelf: true });
    } else if (post.restaurantMobile && !post.restaurantPassword) {
      this.passwordInputrestaurant.nativeElement.focus();
      this.logInOfficerestaurant
        .get('restaurantPassword')
        .setValidators([Validators.required]);
      this.logInOfficerestaurant
        .get('restaurantPassword')
        .updateValueAndValidity({ onlySelf: true });
    } else {
      this.markFormTouched(this.logInOfficerestaurant);
      if (
        this.logInOfficerestaurant.valid &&
        this.findInvalidControlsLogin().length === 0
      ) {
        this.error = '';
        this.spinner.show();
        const data: Login = {
          restaurantMobile: post.restaurantMobile,
          restaurantPassword: post.restaurantPassword,
          languageID: '1',
        };
        this.login(JSON.stringify(data))
          .then((success: unknown) => {
            this.logInOfficerestaurant.reset();
            this.logInOfficerestaurant
              .get('restaurantPassword')
              ?.clearValidators();
            this.logInOfficerestaurant
              .get('restaurantMobile')
              ?.clearValidators();
            this.logInOfficerestaurant
              .get('restaurantMobile')
              ?.updateValueAndValidity({ onlySelf: true });
            this.logInOfficerestaurant
              .get('restaurantPassword')
              ?.updateValueAndValidity({ onlySelf: true });
            sessionStorage.setItem('restaurant', JSON.stringify(success));
            this.router.navigate(['/office-assistant']);
          })
          .catch((error: string) => {
            this.spinner.hide();
            this.error = error;
            this.cd.markForCheck();
          });
        }
    }
  };
  loginEngineer = (post: Login) => {
    if (!post.restaurantMobile && !post.restaurantPassword) {
      this.emailInputrestaurant.nativeElement.focus();
      this.logInEngineer
        .get('restaurantMobile')
        .setValidators([
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
          Validators.required,
        ]);
      this.logInEngineer
        .get('restaurantPassword')
        .setValidators([Validators.required]);
      this.logInEngineer.get('restaurantMobile')
        .updateValueAndValidity({ onlySelf: true });
      this.logInEngineer
        .get('restaurantPassword')
        .updateValueAndValidity({ onlySelf: true });
    } else if (!post.restaurantMobile && post.restaurantPassword) {
      this.emailInputrestaurant.nativeElement.focus();
      this.logInEngineer
        .get('restaurantMobile')
        .setValidators([
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
          Validators.required,
        ]);
      this.logInEngineer
        .get('restaurantMobile')
        .updateValueAndValidity({ onlySelf: true });
    } else if (post.restaurantMobile && !post.restaurantPassword) {
      this.passwordInputrestaurant.nativeElement.focus();
      this.logInEngineer
        .get('restaurantPassword')
        .setValidators([Validators.required]);
      this.logInEngineer
        .get('restaurantPassword')
        .updateValueAndValidity({ onlySelf: true });
    } else {
      this.markFormTouched(this.logInEngineer);
      if (
        this.logInEngineer.valid &&
        this.findInvalidControlsLogin().length === 0
      ) {
        this.error = '';
        this.spinner.show();
        const data: Login = {
          restaurantMobile: post.restaurantMobile,
          restaurantPassword: post.restaurantPassword,
          languageID: post.languageID,
        };
        this.login(JSON.stringify(data))
          .then((success: unknown) => {
            this.logInEngineer.reset();
            this.logInEngineer
              .get('restaurantPassword')
              ?.clearValidators();
            this.logInEngineer
              .get('restaurantMobile')
              ?.clearValidators();
            this.logInEngineer
              .get('restaurantMobile')
              ?.updateValueAndValidity({ onlySelf: true });
            this.logInEngineer
              .get('restaurantPassword')
              ?.updateValueAndValidity({ onlySelf: true });
            sessionStorage.setItem('restaurant', JSON.stringify(success));
            this.router.navigate(['/engineer']);
          })
          .catch((error: string) => {
            this.spinner.hide();
            this.error = error;
            this.cd.markForCheck();
          });
      }
    }
  };

  login = (post: string) => {
    return new Promise((resolve, reject) => {
      this.service.signInAssistant(post).subscribe(
        (response: any) => {
          if (response[0].status === 'true') {
            resolve(response[0].data[0]);
          } else {
            reject('Invalid email or password.');
          }
        },
        () => reject('Invalid email or password.')
      );
    });
  };

  markFormTouched = (group: FormGroup | FormArray) => {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) {
        control.markAsTouched();
        this.markFormTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  };
  findInvalidControlsLogin = () => {
    const invalid = [];
    const controls = this.logInOfficerestaurant.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  };
  forgotOfficerestaurant = (post: Forget) => {
    if (!post.restaurantMobile) {
      this.forgotrestaurantEmail.nativeElement.focus();
      this.forgetFormOfficerestaurantForm
        .get('restaurantMobile')
        .setValidators([
          Validators.pattern(
            /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
          ),
          Validators.required,
        ]);
      this.forgetFormOfficerestaurantForm
        .get('restaurantMobile')
        .updateValueAndValidity({ onlySelf: true });
    } else {
      this.markFormTouched(this.forgetFormOfficerestaurantForm);
      if (
        this.forgetFormOfficerestaurantForm.valid &&
        this.findInvalidControlsForgot().length === 0
      ) {
        this.error = '';
        if (!isNaN(+post.restaurantMobile)) {
          this.data.restaurantMobile = post.restaurantMobile;
          this.data.restaurantEmail = '';
          this.forgetPassword(JSON.stringify(this.data))
            .then((res: any) => {
              this.forgetResponse.restaurantID = res.restaurantID;
              this.forgetResponse.restaurantMobile = res.restaurantMobile;
              this.verificationOfficerestaurantForm
                .get('restaurantMobile')
                .patchValue(post.restaurantMobile);
              this.verificationOfficerestaurantForm
                .get('restaurantOTP1')
                .patchValue('');
              this.verificationOfficerestaurantForm
                .get('restaurantOTP2')
                .patchValue('');
              this.verificationOfficerestaurantForm
                .get('restaurantOTP3')
                .patchValue('');
              this.verificationOfficerestaurantForm
                .get('restaurantOTP4')
                .patchValue('');
              this.forgetFormOfficerestaurantForm.reset();
              setTimeout(() => {
                this.spinner.hide();
                $('#recoverform-office-restaurant').slideUp(),
                  $('#OTP_verification_restaurant').fadeIn();
                this.toastr.success(
                  'We have sent OTP on your registered mobile.'
                );
              }, 200);
            })
            .catch((error) => {
              this.spinner.hide();
              this.error = error ? error : 'Please enter valid email';
              this.cd.markForCheck();
            });
        } else {
          this.data.restaurantEmail = post.restaurantMobile;
          this.data.restaurantMobile = '';
          this.forgetPassword(JSON.stringify(this.data))
            .then((res: any) => {
              this.forgetResponse.restaurantID = res.restaurantID;
              this.forgetResponse.restaurantMobile = res.restaurantMobile;
              this.verificationOfficerestaurantForm
                .get('restaurantMobile')
                .patchValue(post.restaurantMobile);
              this.verificationOfficerestaurantForm
                .get('restaurantOTP1')
                .patchValue('');
              this.verificationOfficerestaurantForm
                .get('restaurantOTP2')
                .patchValue('');
              this.verificationOfficerestaurantForm
                .get('restaurantOTP3')
                .patchValue('');
              this.verificationOfficerestaurantForm
                .get('restaurantOTP4')
                .patchValue('');
              this.forgetFormOfficerestaurantForm.reset();
              setTimeout(() => {
                this.spinner.hide();
                $('#recoverform-office-restaurant').slideUp(),
                  $('#OTP_verification_restaurant').fadeIn();
                this.toastr.success(
                  'We have sent OTP on your registered email.'
                );
              }, 200);
            })
            .catch((error) => {
              this.spinner.hide();
              this.error =
                error === 'Please check your email for further details.'
                  ? 'Please enter valid email'
                  : error;
              this.cd.markForCheck();
            });
        }
      }
    }
  };
  forgetPassword = (post: string) => {
    this.spinner.show();
    return new Promise((resolve, reject) => {
      this.service.forgetPassword(post).subscribe(
        (response: any) => {
          if (response[0].status === 'true') {
            resolve(response[0].data[0]);
          } else {
            reject('Please enter valid email');
          }
        },
        () => reject('Please enter valid email')
      );
    });
  };
  onResendClick = () => {
    this.error = '';
    this.spinner.show();
    const json: Resend = {
      languageID: '1',
      restaurantID: this.forgetResponse.restaurantID,
      restaurantMobile: this.forgetResponse.restaurantMobile,
    };
    this.service.resendOTPAssistan(JSON.stringify(json)).subscribe(
      (response: ResponseResend[]) => {
        if (response[0].status === 'true') {
          this.verificationOfficerestaurantForm.reset();
          this.spinner.hide();
          this.toastr.success(response[0].message, 'success');
        } else {
          this.spinner.hide();
          this.error = response[0].message;
        }
      },
      (error) => {
        this.spinner.hide();
        console.error(error);
      }
    );
  };
  checkInputFocus = (post: Otp) => {
    let temp = false;
    Object.keys(post).forEach((key) => {
      if (key === 'restaurantOTP1' && !post[key] && !temp) {
        this.restaurantOTP1.nativeElement.focus();
        temp = true;
      }
      if (key === 'restaurantOTP2' && !post[key] && !temp) {
        this.restaurantOTP2.nativeElement.focus();
        temp = true;
      }
      if (key === 'restaurantOTP3' && !post[key] && !temp) {
        this.restaurantOTP3.nativeElement.focus();
        temp = true;
      }
      if (key === 'restaurantOTP4' && !post[key] && !temp) {
        this.restaurantOTP4.nativeElement.focus();
        temp = true;
      }
    });
  };
  onrestaurantOTP = (post: Otp) => {
    this.checkInputFocus(post);
    if (!post.restaurantOTP1) {
      this.verificationOfficerestaurantForm
        .get('restaurantOTP1')
        .setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
      this.verificationOfficerestaurantForm
        .get('restaurantOTP1')
        .updateValueAndValidity({ onlySelf: true });
    }
    if (!post.restaurantOTP2) {
      this.verificationOfficerestaurantForm
        .get('restaurantOTP2')
        .setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
      this.verificationOfficerestaurantForm
        .get('restaurantOTP2')
        .updateValueAndValidity({ onlySelf: true });
    }
    if (!post.restaurantOTP3) {
      this.verificationOfficerestaurantForm
        .get('restaurantOTP3')
        .setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
      this.verificationOfficerestaurantForm
        .get('restaurantOTP3')
        .updateValueAndValidity({ onlySelf: true });
    }
    if (!post.restaurantOTP4) {
      this.verificationOfficerestaurantForm
        .get('restaurantOTP4')
        .setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
      this.verificationOfficerestaurantForm
        .get('restaurantOTP4')
        .updateValueAndValidity({ onlySelf: true });
    }
    this.markFormTouched(this.verificationOfficerestaurantForm);
    const invalidinput = this.findInvalidControlsOTP();
    if (
      this.verificationOfficerestaurantForm.valid &&
      invalidinput.length === 0
    ) {
      this.error = '';
      const json = {
        languageID: '1',
        loginrestaurantID: this.forgetResponse.restaurantID,
        restaurantOTP: `${post.restaurantOTP1}${post.restaurantOTP2}${post.restaurantOTP3}${post.restaurantOTP4}`,
      };
      this.submitOTP(JSON.stringify(json))
        .then(() => {
          this.verificationOfficerestaurantForm.reset();
          setTimeout(() => {
            this.spinner.hide();
            this.toastr.success('OTP verified successfully!');
            $('#OTP_verification_restaurant').slideUp(),
              $('#newpasswordrestaurant').fadeIn();
          }, 200);
        })
        .catch((error) => {
          this.spinner.hide();
          this.error = error;
          this.cd.markForCheck();
        });
    }
  };
  submitOTP = (post: string) => {
    this.spinner.show();
    return new Promise((resolve, reject) => {
      this.service.OTPverifyAssistant(post).subscribe(
        (response: any) => {
          if (response[0].status === 'true') {
            resolve(JSON.stringify(response[0].data[0]));
          } else {
            reject(response[0].message);
          }
        },
        () => reject('Some error occured, please try again later')
      );
    });
  };
  onrestaurantReset = (post: Reset) => {
    if (!post.restaurantNewPassword && !post.restaurantReNewPassword) {
      this.assisNewPassword.nativeElement.focus();
      this.resetOfficerestaurantForm
        .get('restaurantNewPassword')
        .setValidators([
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
        ]);
      this.resetOfficerestaurantForm
        .get('restaurantNewPassword')
        .updateValueAndValidity({ onlySelf: true });
      this.resetOfficerestaurantForm
        .get('restaurantReNewPassword')
        .setValidators([Validators.required]);
      this.resetOfficerestaurantForm
        .get('restaurantReNewPassword')
        .updateValueAndValidity({ onlySelf: true });
    }
    if (post.restaurantNewPassword && !post.restaurantReNewPassword) {
      this.assisReNewPassword.nativeElement.focus();
      this.resetOfficerestaurantForm
        .get('restaurantReNewPassword')
        .setValidators([Validators.required]);
      this.resetOfficerestaurantForm
        .get('restaurantReNewPassword')
        .updateValueAndValidity({ onlySelf: true });
    }
    this.markFormTouched(this.resetOfficerestaurantForm);
    if (
      this.resetOfficerestaurantForm.valid &&
      this.findInvalidControlsReset().length === 0
    ) {
      this.error = '';
      const json = {
        loginrestaurantID: this.forgetResponse.restaurantID,
        restaurantNewPassword: post.restaurantNewPassword,
        languageID: '1',
      };
      this.reset(JSON.stringify(json))
        .then((data: any) => {
          if (data) {
            this.resetOfficerestaurantForm.reset();
            this.resetOfficerestaurantForm
              .get('restaurantNewPassword')
              .setValidators(null);
            this.resetOfficerestaurantForm
              .get('restaurantReNewPassword')
              .setValidators(null);
            this.resetOfficerestaurantForm
              .get('restaurantNewPassword')
              .updateValueAndValidity({ onlySelf: true });
            this.resetOfficerestaurantForm
              .get('restaurantReNewPassword')
              .updateValueAndValidity({ onlySelf: true });
            setTimeout(() => {
              this.spinner.hide();
              this.toastr.success('Password updated successfully');
              $('#newpasswordrestaurant').slideUp(), $('#loginform').fadeIn();
            }, 200);
          } else {
            this.error = 'error occured, please try again later.';
            this.spinner.hide();
            this.cd.markForCheck();
          }
        })
        .catch((error) => {
          this.error = error;
          this.spinner.hide();
          console.error(error);
          this.cd.markForCheck();
        });
    }
  };
  reset = (post: string) => {
    this.spinner.show();
    return new Promise((resolve, reject) => {
      this.service.resetPasswordAssistant(post).subscribe(
        (response: any) => {
          if (response[0].status === 'true') {
            resolve(JSON.stringify(response[0].data[0]));
          } else {
            reject(response[0].message);
          }
        },
        () => reject('Some error occured, please try again later')
      );
    });
  };
  findInvalidControlsReset = () => {
    const invalid = [];
    const controls = this.resetOfficerestaurantForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  };
  findInvalidControlsOTP = () => {
    const invalid = [];
    const controls = this.verificationOfficerestaurantForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  };
  findInvalidControlsForgot = () => {
    const invalid = [];
    const controls = this.forgetFormOfficerestaurantForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  };
  openForgetOfficerestaurant = () => {
    $('#loginform').slideUp(), $('#recoverform-office-restaurant').fadeIn();
    if (this.error) {
      this.error = '';
    }
    this.clearControlrestaurantLogin();
  };
  openForgetEngineer = () => {
    $('#loginform').slideUp(), $('#recoverform-engineer').fadeIn();
    if (this.error) {
      this.error = '';
    }
    this.logInEngineer.reset();
  };
  openForgetSupervisor = () => {
    $('#loginform').slideUp(), $('#recoverform-supervisor').fadeIn();
    if (this.error) {
      this.error = '';
    }
    this.logInSupervisor.reset();
  };
  backToLoginOfficerestaurant = () => {
    $('#recoverform-office-restaurant').slideUp(), $('#loginform').fadeIn();
    if (this.error) {
      this.error = '';
    }
    this.clearControlrestaurantForgot();
  };
  backToLoginEngineer = () => {
    $('#recoverform-engineer').slideUp(), $('#loginform').fadeIn();
    if (this.error) {
      this.error = '';
    }
  };
  backToLoginSupervisor = () => {
    $('#recoverform-supervisor').slideUp(), $('#loginform').fadeIn();
    if (this.error) {
      this.error = '';
    }
  };
  backToforgot = () => {
    $('#OTP_verification').slideUp(), $('#recoverform').fadeIn();
    if (this.error) {
      this.error = '';
    }
  };
  clearControlrestaurantLogin = () => {
    Object.keys(this.logInOfficerestaurant.value).forEach((key: string) => {
      this.logInOfficerestaurant.get(`${key}`).patchValue('');
      if (this.logInOfficerestaurant.get(`${key}`).validator) {
        const validator = this.logInOfficerestaurant
          .get(`${key}`)
          .validator({} as AbstractControl);
        if (validator && validator.required) {
          this.logInOfficerestaurant.get(`${key}`).clearValidators();
          this.logInOfficerestaurant
            .get(`${key}`)
            .updateValueAndValidity({ onlySelf: true });
        }
      }
    });
  };
  clearControlrestaurantForgot = () => {
    Object.keys(this.forgetFormOfficerestaurantForm.value).forEach(
      (key: string) => {
        this.forgetFormOfficerestaurantForm.get(`${key}`).patchValue('');
        if (this.forgetFormOfficerestaurantForm.get(`${key}`).validator) {
          const validator = this.forgetFormOfficerestaurantForm
            .get(`${key}`)
            .validator({} as AbstractControl);
          if (validator && validator.required) {
            this.forgetFormOfficerestaurantForm.get(`${key}`).clearValidators();
            this.forgetFormOfficerestaurantForm
              .get(`${key}`)
              .updateValueAndValidity({ onlySelf: true });
          }
        }
      }
    );
  };
  ngOnInit(): void {
    this.spinner.hide();
    $('.preloader').fadeOut();
    this.focus();
    this.jquery();

  }
  /**jquery = ()=>{
    $('#recoverform-supervisor').hide();
    $('#recoverform-engineer').hide();
    $('#recoverform-office-restaurant').hide();
    $('#to-reset-supervisor').hide();

  }*/
  jquery = ()=>{
    $('#recoverform-supervisor').hide();
    $('#recoverform-engineer').hide();
    $('#recoverform-office-restaurant').hide();
    $('#to-reset-supervisor').hide();
    $('#OTP_verification_restaurant').hide();
    $('#newpasswordrestaurant').hide();
  }
  focus = () => {
    // tslint:disable-next-line:typedef
    $('.digit-group')
      .find('input')
      .each(function () {
        $(this).attr('maxlength', 1);
        // tslint:disable-next-line:typedef
        $(this).on('keyup', function (e) {
          const parent = $($(this).parent());
          if (e.keyCode === 8 || e.keyCode === 37) {
            const prev = parent.find('input#' + $(this).data('previous'));
            if (prev.length) {
              $(prev).select();
            }
            // tslint:disable-next-line:max-line-length
          } else if (
            (e.keyCode >= 48 && e.keyCode <= 57) ||
            (e.keyCode >= 65 && e.keyCode <= 90) ||
            (e.keyCode >= 96 && e.keyCode <= 105) ||
            e.keyCode === 39
          ) {
            const next = parent.find('input#' + $(this).data('next'));
            if (next.length) {
              $(next).select();
            } else {
              if (parent.data('autosubmit')) {
                parent.submit();
              }
            }
          }
        });
      });
  };
}
