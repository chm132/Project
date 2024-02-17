export interface CurrentUserResponse {
  code: string;
  message: string;
  result: {
    id: string;
    email: string;
    name: string;
    birthYear: any;
    phoneNum: string;
    address: string;
    gender: string;
    mailAgree: boolean;
    smsAgree: boolean;
  };
}
