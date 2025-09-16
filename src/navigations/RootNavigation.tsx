import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigateion';

function RootNavigation() {
  return (
    <>
      ( isLogin ? <DrawerNavigation></DrawerNavigation> :
      <AuthNavigation></AuthNavigation>)
    </>
  );
}

export default RootNavigation;
