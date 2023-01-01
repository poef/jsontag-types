import JSONTag from '@muze-nl/jsontag'
import JSONTagTypes from './JSONTagTypes.mjs'

export default function reviver(key, value, meta)
{
	let type = JSONTag.getType(value)
	let alltypes = {
		uuid: 'UUID',
		link: 'Link',
		date: 'Date',
		time: 'Time',
		decimal: 'Decimal',
		money: 'Money',
		null: 'Null'
	}
	if (JSONTag.isNull(value)) {
		return value
	}
	if (alltypes[type]) {
		let type = JSONTag.getType(value)
		let attributes = JSONTag.getAttributes(value)
		let result = JSONTagTypes[alltypes[type]].from(value)
		if (type) {
			JSONTag.setType(result, type)
		}
		if (Object.keys(attributes).length) {
			JSONTag.setAttributes(result, attributes)
		}
		return result
	}
	return value;
}