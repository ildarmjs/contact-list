import { memo, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useGetGroupsQuery } from 'src/redux/groups-api'
import { useGetContactsQuery } from 'src/redux/contacts-api'
import { asyncStore } from 'src/mobx/store'

export const GroupPage = memo(() => {
	const { groupId } = useParams<{ groupId: string }>()
	const { loading, error, fetchContacts, fetchGroups, contacts, groups } =
		asyncStore

	useEffect(() => {
		fetchContacts()
		fetchGroups()
	}, [fetchContacts, fetchGroups])
	const findGroup = groups.find(({ id }) => id === groupId)

	const filteredContacts = findGroup
		? contacts.filter(({ id }) => findGroup.contactIds.includes(id))
		: []

	return (
		<Row className='g-4'>
			{findGroup ? (
				<>
					<Col xxl={12}>
						<Row xxl={3}>
							<Col className='mx-auto'>
								<GroupContactsCard groupContacts={findGroup} />
							</Col>
						</Row>
					</Col>
					<Col>
						<Row xxl={4} className='g-4'>
							{filteredContacts?.map(contact => (
								<Col key={contact.id}>
									<ContactCard contact={contact} withLink />
								</Col>
							))}
						</Row>
					</Col>
				</>
			) : (
				<Empty />
			)}
		</Row>
	)
})
