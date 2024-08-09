import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useGetContactsQuery } from 'src/redux/contacts-api'
import { useGetGroupsQuery } from 'src/redux/groups-api'

export const ContactListPage = memo(() => {
	const { data: contacts = [] } = useGetContactsQuery()
	const { data: groups = [] } = useGetGroupsQuery()
	const [filteredContacts, setFilteredContacts] =
		useState<ContactDto[]>(contacts)

	useEffect(() => {
		setFilteredContacts(contacts)
	}, [contacts])

	const onSubmit = (fv: Partial<FilterFormValues>) => {
		let findContacts = contacts

		if (fv.name) {
			const fvName = fv.name.toLowerCase()
			findContacts = findContacts.filter(({ name }) =>
				name.toLowerCase().includes(fvName)
			)
		}

		if (fv.groupId) {
			const groupContacts = groups.find(({ id }) => id === fv.groupId)
			if (groupContacts) {
				findContacts = findContacts.filter(({ id }) =>
					groupContacts.contactIds.includes(id)
				)
			}
		}
		setFilteredContacts(findContacts)
	}

	return (
		<Row xxl={1}>
			<Col className='mb-3'>
				<FilterForm
					groupContactsList={groups}
					initialValues={{}}
					onSubmit={onSubmit}
				/>
			</Col>
			<Col>
				<Row xxl={4} className='g-4'>
					{filteredContacts.map((contact: any) => (
						<Col key={contact.id}>
							<ContactCard contact={contact} withLink />
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	)
})
