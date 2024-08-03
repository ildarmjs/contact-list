import React, { memo, useEffect, useState } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useDispatch, useSelector } from 'react-redux'
import { setContacts } from 'src/redux/actions/actions-contacts'
import { DATA_CONTACT } from 'src/__data__'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

export const ContactListPage = memo(() => {
	const dispatch = useAppDispatch()
	const contacts = useAppSelector(state => state.contacts)
	const groups = useAppSelector(state => state.groups)

	const onSubmit = (fv: Partial<FilterFormValues>) => {
		let findContacts: ContactDto[] = contacts

		if (fv.name) {
			const fvName = fv.name.toLowerCase()
			findContacts = findContacts.filter(({ name }) =>
				name.toLowerCase().includes(fvName)
			)
		}

		if (fv.groupId) {
			const groupContacts = groups.find(
				({ id }: { id: string }) => id === fv.groupId
			)
			if (groupContacts) {
				findContacts = findContacts.filter(({ id }) =>
					groupContacts.contactIds.includes(id)
				)
			}
		}

		dispatch(setContacts(findContacts))
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
					{contacts.map((contact: any) => (
						<Col key={contact.id}>
							<ContactCard contact={contact} withLink />
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	)
})
