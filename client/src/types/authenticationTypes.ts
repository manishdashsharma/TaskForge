export interface SignUpData {
    name: string;
    emailAddress: string;
    password: string;
    phoneNumber: string;
    consent: boolean;
  }

  export interface SignUpResponse {
    success: boolean;
    statusCode: number;
    request: {
      ip: string;
      method: string;
      url: string;
    };
    message: string;
    data: {
      _id: string;
    };
  }
  