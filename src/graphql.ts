
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Profile {
    id: string;
    firstName: string;
    lastName: string;
    birthday: string;
}

export abstract class IQuery {
    abstract getProfile(id: number): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;

    abstract getProfiles(): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;
}

export abstract class IMutation {
    abstract createProfile(firstName: string, lastName: string): Profile | Promise<Profile>;
}

type Nullable<T> = T | null;
