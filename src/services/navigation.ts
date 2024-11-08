import {
  DrawerActions,
  NavigationAction,
  NavigationContainerRefWithCurrent,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { Keyboard } from 'react-native';
import { LoadingType } from '@features/loading-page';

class NavigationActionsService {
  private static instance: NavigationActionsService;
  private navigation =
    createNavigationContainerRef<Navigation.MainStackParamList>();

  private constructor() {
    if (!NavigationActionsService.instance) {
      NavigationActionsService.instance = this;
    }
    // Initialize object
    return NavigationActionsService.instance;
  }

  static getInstance(): NavigationActionsService {
    NavigationActionsService.instance =
      NavigationActionsService.instance || new NavigationActionsService();
    return NavigationActionsService.instance;
  }

  public createNavigationRef = (
    navigation: NavigationContainerRefWithCurrent<Navigation.MainStackParamList>
  ) => {
    this.navigation = navigation;
  };

  public goBack = () => {
    Keyboard.dismiss();
    this.navigation.goBack();
  };

  public showLoading = (
    message?: string,
    type?: LoadingType
  ): Promise<void> => {
    return new Promise((resolve) => {
      try {
        if (this.navigation.isReady()) {
          this.navigation.navigate('LoadingPage', { message, type });
        } else if (
          this.navigation.current &&
          this.navigation.current.isReady()
        ) {
          this.navigation.current.navigate('LoadingPage', { message, type });
        }
        resolve();
      } catch (error) {
        console.error(error);
        resolve();
      }
    });
  };

  public hideLoading = () => {
    const currentRoute = this.navigation.getCurrentRoute();
    if (currentRoute?.name === 'LoadingPage' && this.navigation.canGoBack()) {
      this.goBack();
    }
  };

  public toggleDrawer = () => {
    if (this.navigation.isReady()) {
      this.navigation.dispatch(DrawerActions.toggleDrawer());
    }
  };

  public navigate = <RouteName extends keyof Navigation.MainStackParamList>(
    ...args: RouteName extends unknown
      ? undefined extends Navigation.MainStackParamList[RouteName]
        ?
            | [screen: RouteName]
            | [
                screen: RouteName,
                params: Navigation.MainStackParamList[RouteName],
              ]
        : [screen: RouteName, params: Navigation.MainStackParamList[RouteName]]
      : never
  ) => {
    if (this.navigation.isReady()) {
      this.navigation.navigate(...args);
    }
  };

  public push = <RouteName extends keyof Navigation.MainStackParamList>(
    screen: RouteName,
    params?: Navigation.MainStackParamList[RouteName]
  ) => {
    if (this.navigation.isReady()) {
      this.navigation.dispatch(StackActions.push(screen, params));
    }
  };

  public dispatch = (action: NavigationAction) => {
    if (this.navigation.isReady()) {
      this.navigation.dispatch(action);
    }
  };
}

const singleton = NavigationActionsService.getInstance();

export function instance(): NavigationActionsService {
  return singleton;
}
