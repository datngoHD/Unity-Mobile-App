declare namespace Navigation {
  type BaseStackParamList = {
    SignIn: undefined;
    LoadingPage: {
      message?: string;
      type?: LoadingType;
    };
  };

  type MainStackParamList = BaseStackParamList;
}
