import { observer } from 'mobx-react-lite'
import { FC, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { asyncStore } from 'src/mobx/store'
import { useGetContactsQuery } from 'src/redux/contacts-api'

export const ContactPage: FC = observer(() => {
	const { contactId } = useParams<{ contactId: string }>()
	const { fetchContacts, contacts } = asyncStore

	useEffect(() => {
		fetchContacts() // Загружаем контакты при монтировании компонента
	}, [fetchContacts])

	const contact = contacts?.find(({ id }: { id: string }) => id === contactId)

	return (
		<Row xxl={3}>
			<Col className={'mx-auto'}>
				{contact ? <ContactCard contact={contact} /> : <Empty />}
			</Col>
		</Row>
	)
})
