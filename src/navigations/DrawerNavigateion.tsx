import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../screens/map/MapHomeScreen';
import FeedListScreen from '../screens/feed/FeedListScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import {createStaticNavigation} from '@react-navigation/native';

const MainDrawer = createDrawerNavigator({
  screens: {
    Map: MapHomeScreen,
    Feed: FeedListScreen,
    Calender: CalendarScreen,
  },
});

const DrawerNavigation = createStaticNavigation(MainDrawer);

export default DrawerNavigation;
