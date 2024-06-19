import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
// import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { ProfilesModule } from './profiles/profiles.module';
import { join } from 'path';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,

    //   // autoSchemaFile: 'schema.gql',
    //   //transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
    //   //installSubscriptionHandlers: true,
    //   // autoSchemaFile: join(
    //   //   process.cwd(),
    //   //   'integration/graphql-code-first/schema.gql',
    //   // ),
    //   // buildSchemaOptions: {
    //   //   directives: [
    //   //     new GraphQLDirective({
    //   //       name: 'upper',
    //   //       locations: [DirectiveLocation.FIELD_DEFINITION],
    //   //     }),
    //   //   ],
    //   // },
    // }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    ProfilesModule,
  ],
})
export class AppModule {}
