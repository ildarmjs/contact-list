import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const SET_CONTACTS = 'SET_CONTACTS';
export const SET_FAVORITE_CONTACTS = 'SET_FAVORITE_CONTACTS';
export const SET_GROUP_CONTACTS = 'SET_GROUP_CONTACTS';

interface ISetContacts {
	type: typeof SET_CONTACTS
	payload: ContactDto[]
}
interface ISetFavoritesContacts {
	type: typeof SET_FAVORITE_CONTACTS
	payload: FavoriteContactsDto[]
}
interface ISetGroups {
	type: typeof SET_GROUP_CONTACTS
	payload: GroupContactsDto[]
}


export const setContacts = (contacts: ContactDto[]): ISetContacts => ({
	type: SET_CONTACTS,
	payload: contacts,
});

export const setFavoriteContacts = (favorites: FavoriteContactsDto[]): ISetFavoritesContacts => ({
	type: SET_FAVORITE_CONTACTS,
	payload: favorites,
});

export const setGroupContacts = (groups: GroupContactsDto[]): ISetGroups => ({
	type: SET_GROUP_CONTACTS,
	payload: groups,
});

export type ProjectActions = ISetContacts | ISetFavoritesContacts | ISetGroups