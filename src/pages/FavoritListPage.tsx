import { observer } from 'mobx-react-lite'
import { memo, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { asyncStore, favoritesStore } from 'src/mobx/store'
import { useGetContactsQuery } from 'src/redux/contacts-api'
import { useAppSelector } from 'src/redux/hooks'

export const FavoritListPage = observer(() => {
	const favoriteContacts = favoritesStore.getFavorites()
	// const { data: contactsState } = useGetContactsQuery()
	useEffect(() => {
		asyncStore.fetchContacts()
	}, [asyncStore])
	const contacts = asyncStore.contacts.filter(({ id }: { id: any }) =>
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
