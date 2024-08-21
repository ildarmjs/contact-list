import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Col, Row, Spinner, Alert } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { asyncStore } from 'src/mobx/store'

export const ContactListPage = observer(() => {
	useEffect(() => {
		asyncStore.fetchContacts()
		asyncStore.fetchGroups()
	}, [])

	if (asyncStore.loading) {
		return <div>Loading</div> // Показываем индикатор загрузки
	}

	if (asyncStore.error) {
		return <div>Ошибка: {asyncStore.error}</div>
	}

	const onSubmit = (fv: Partial<FilterFormValues>) => {
		asyncStore.filterContacts(fv)
	}

	return (
		<Row xxl={1}>
			<Col className='mb-3'>
				<FilterForm
					groupContactsList={asyncStore.groups}
					initialValues={{}}
					onSubmit={onSubmit}
				/>
			</Col>
			<Col>
				<Row xxl={4} className='g-4'>
					{asyncStore.filteredContacts.map(contact => (
						<Col key={contact.id}>
							<ContactCard contact={contact} withLink />
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	)
})
