import {FeedStackParamList} from '@/types/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

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
