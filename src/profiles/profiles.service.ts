import { Injectable } from '@nestjs/common';
import { Profile } from 'src/graphql';

const myProfile: Profile = {
  firstName: 'David',
  lastName: 'Torroija',
  id: '1',
  birthday: '01-10-1985',
};
@Injectable({})
export class ProfilesService {
  private profiles: Profile[] = [myProfile];

  getProfile(profileId: string) {
    const profile = this.profiles.find((p) => p.id === profileId);
    if (profile) {
      return profile;
    }
  }

  getProfiles() {
    return this.profiles;
  }

  //   createProfile;
}
