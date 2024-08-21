import { makeAutoObservable } from "mobx";
import { DATA_CONTACT } from "src/__data__";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import axios from "axios";
export const favoritesStore = makeAutoObservable({
	favorites: [
		DATA_CONTACT[0].id,
		DATA_CONTACT[1].id,
		DATA_CONTACT[2].id,
		DATA_CONTACT[3].id,
	] as FavoriteContactsDto,

	getFavorites() {
		return this.favorites;
	},
})


export const asyncStore = makeAutoObservable({
	contacts: [] as ContactDto[],
	groups: [] as GroupContactsDto[],
	filteredContacts: [] as ContactDto[],
	loading: false,
	error: null as string | null,

	async fetchContacts() {
		this.loading = true;
		this.error = null;

		try {
			const response = await axios.get('https://mocki.io/v1/d05f4f2b-47b5-41b7-b673-02faba0f0368');
			this.contacts = response.data;
			this.filteredContacts = response.data;
		} catch (error: any) {
			this.error = error.message;
		} finally {
			this.loading = false;
		}
	},

	async fetchGroups() {
		this.loading = true
		this.error = null;

		try {
			const response = await axios.get('https://mocki.io/v1/e5da10f9-dc40-4a85-b41a-0229bc4aae4a')
			this.groups = response.data
		} catch (error: any) {
			this.error = error.message
		} finally {
			this.loading = false;
		}
	},

	filterContacts(fv: Partial<{ name: string; groupId: string }>) {
		let findContacts = this.contacts;

		if (fv.name) {
			const fvName = fv.name.toLowerCase();
			findContacts = findContacts.filter(({ name }) =>
				name.toLowerCase().includes(fvName)
			);
		}

		if (fv.groupId) {
			const groupContacts = this.groups.find(({ id }) => id === fv.groupId);
			if (groupContacts) {
				findContacts = findContacts.filter(({ id }) =>
					groupContacts.contactIds.includes(id)
				);
			}
		}

		this.filteredContacts = findContacts;
	},
});