import Null from '@muze-nl/jsontag'
import Link from '@muze-nl/jsontag'
import UUID from './UUID.mjs'
import Date from './Date.mjs'
import Decimal from './Decimal.mjs'
import Money from './Money.mjs'
import Time from './Time.mjs'

const JSONTagTypes = {
	UUID: UUID,
	Date: Date,
	Decimal: Decimal,
	Link: Link,
	Money: Money,
	Null: Null,
	Time: Time
}

export default JSONTagTypes

