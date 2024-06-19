import { Injectable } from '@nestjs/common';
import { Profile } from 'src/graphql';

@Injectable({})
export class ProfilesService {
  private profiles: Profile[] = [];

  getProfile(profileId: string) {
    const profile = this.profiles.find((p) => p.id === profileId);
    if (profile) {
      return profile;
    }
  }

  //   createProfile;
}
