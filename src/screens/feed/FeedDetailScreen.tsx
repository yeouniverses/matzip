import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {FeedStackParamList} from '../../types/navigation';

type Props = StackScreenProps<FeedStackParamList, 'FeedDetail'>;

function FeedDetailScreen({route}: Props) {
  const {id} = route.params;

  return (
    <SafeAreaView>
      <Text>FeedDetailScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default FeedDetailScreen;
