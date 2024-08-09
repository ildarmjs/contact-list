import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const contactsApiSlice = createApi({
	reducerPath: 'contacts-api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
	endpoints(builder) {
		return {
			getContacts: builder.query<ContactDto[], void>({
				query: () => ({ url: '/d05f4f2b-47b5-41b7-b673-02faba0f0368' })
			})
		}
	}
})

export const { useGetContactsQuery } = contactsApiSlice