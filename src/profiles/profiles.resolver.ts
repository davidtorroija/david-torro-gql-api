import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProfilesService } from './profiles.service';

@Resolver()
export class ProfilesResolver {
  constructor(private ProfilesService: ProfilesService) {}

  @Query()
  getProfiles() {
    return this.ProfilesService.getProfiles();
  }

  //   @Mutation()
  //   createPost(@Args('title') title: string, @Args('content') content: string) {
  //     return this.ProfilesService.createPost(title, content);
  //   }

  //   @Mutation()
  //   addComment(@Args('input') { text, user, postId }: AddCommentInput) {
  //     return this.ProfilesService.addComment(postId, text, user);
  //   }
}
