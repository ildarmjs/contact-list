import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useGetContactsQuery } from 'src/redux/contacts-api'
import { useAppSelector } from 'src/redux/hooks'

export const FavoritListPage = memo(() => {
	const favoriteContacts = useAppSelector(state => state.favorites)
	const { data: contactsState } = useGetContactsQuery()

	const contacts = contactsState?.filter(({ id }: { id: any }) =>
		favoriteContacts.includes(id)
	)

	return (
		<Row xxl={4} className='g-4'>
			{contacts &&
				contacts.map((contact: any) => (
					<Col key={contact.id}>
						<ContactCard contact={contact} withLink />
					</Col>
				))}
		</Row>
	)
})
