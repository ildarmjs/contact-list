import { observer } from 'mobx-react-lite'
import { memo, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { asyncStore } from 'src/mobx/store'

export const GroupListPage = observer(() => {
	const { fetchGroups, groups } = asyncStore
	useEffect(() => {
		fetchGroups.bind(asyncStore)()
	}, [])
	return (
		<Row xxl={4}>
			{groups.map(groupContacts => (
				<Col key={groupContacts.id}>
					<GroupContactsCard groupContacts={groupContacts} withLink />
				</Col>
			))}
		</Row>
	)
})
