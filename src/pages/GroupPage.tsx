import React, { memo, useEffect, useState } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useSelector } from 'react-redux'
import { useAppSelector } from 'src/redux/hooks'

export const GroupPage = memo(() => {
	const { groupId } = useParams<{ groupId: string }>()
	const groupContactsState = useAppSelector(state => state.groups)
	const contactsState = useAppSelector(state => state.contacts)
	const findGroup = groupContactsState.find(({ id }) => id === groupId)
	const contacts = findGroup
		? contactsState.filter(({ id }) => findGroup.contactIds.includes(id))
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
							{contacts.map(contact => (
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
