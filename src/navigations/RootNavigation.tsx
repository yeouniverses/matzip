import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';

function RootNavigation() {
  // return <>{isLogin ? <DrawerNavigation /> : <AuthNavigation />}</>;
  return <DrawerNavigation />;
}

export default RootNavigation;
