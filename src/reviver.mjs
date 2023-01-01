import { setType, setAttributes, getAttributes, getType, isNull } from '@muze-nl/jsontag'
import JSONTagTypes from './JSONTagTypes.mjs'

export default function reviver(key, value, meta)
{
	let type = getType(value)
	let alltypes = {
		uuid: 'UUID',
		link: 'Link',
		date: 'Date',
		time: 'Time',
		decimal: 'Decimal',
		money: 'Money',
		null: 'Null'
	}
	if (isNull(value)) {
		return value
	}
	if (alltypes[type]) {
		let type = getType(value)
		let attributes = getAttributes(value)
		let result = JSONTagTypes[alltypes[type]].from(value)
		if (type) {
			setType(result, type)
		}
		if (Object.keys(attributes).length) {
			setAttributes(result, attributes)
		}
		return result
	}
	return value;
}