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
  


  export interface ConfirmationData {
    token: string;  // token from the URL path
    code: string;   // code from the query parameters
  }



  export interface ConfirmationResponse {
    success: boolean;
    statusCode: number;
    request: {
      ip: string;
      method: string;
      url: string;
    };
    message: string;
    data?: {
      email: string;  // email of the user whose account is confirmed
    };
  }


  export interface SignInData {
    emailAddress: string; // User's email address
    password: string;     // User's password
  }
  
  export interface SignInResponse {
    success: boolean;          // Indicates if the sign-in was successful
    statusCode: number;       // HTTP status code
    message: string;          // Response message
    data?: {
      _id: string;            // User ID if sign-in is successful
      name: string;           // User's name (optional)
      emailAddress: string;   // User's email address (optional)
    };
  }