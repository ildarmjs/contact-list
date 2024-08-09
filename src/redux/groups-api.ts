import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const groupsApiSlice = createApi({
	reducerPath: 'groups-api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
	endpoints(builder) {
		return {
			getGroups: builder.query<GroupContactsDto[], void>({
				query: () => ({ url: '/e5da10f9-dc40-4a85-b41a-0229bc4aae4a' })
			})
		}
	}
})

export const { useGetGroupsQuery } = groupsApiSlice