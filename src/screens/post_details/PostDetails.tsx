import React from 'react';
import { View, Image, ActivityIndicator, ScrollView, Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import styles from './styles';
import CustomText from '../../components/CustomText';
import { IMAGE_BASE_URL } from '../../networking/endpoints';

interface PostDetailsComponentProps {
  title: string;
  body: string;
  username: string;
  firstName: string;
  maidenName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  birthDate: string;
  loading: boolean;
  error: string | null;
  onBackPress: () => void;
  postId: string;
}

const PostDetails: React.FC<PostDetailsComponentProps> = ({
  title,
  body,
  username,
  firstName,
  maidenName,
  lastName,
  email,
  phone,
  gender,
  birthDate,
  loading,
  error,
  onBackPress,
  postId,
}) => {
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      <CustomHeader
        title={`Post details`}
        onBackPress={onBackPress}
        showBackButton={true}
        showLogoutButton={false}
      />
      {loading && <View style={styles.loaderContainer}><ActivityIndicator size="large" color="#0000ff" testID="loadingIndicator" /></View>}
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <>
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${postId}/300/200` }}
              style={styles.image}
              resizeMode="stretch"
            />
            <CustomText title={title} style={styles.title} />
            <CustomText title={body} style={styles.description} />
            <CustomText title={'USER INFO:'} style={styles.userInfo} />
            <CustomText title={`Username: ${username}`} style={styles.commonText} />
            <CustomText title={`Name: ${firstName} ${maidenName} ${lastName}`} style={styles.commonText} />
            <CustomText title={`Email: ${email}`} style={styles.commonText} />
            <CustomText title={`Phone: ${phone}`} style={styles.commonText} />
            <CustomText title={`Gender: ${gender}`} style={styles.commonText} />
            <CustomText title={`Birthdate: ${birthDate}`} style={styles.commonText} />
          </>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostDetails;