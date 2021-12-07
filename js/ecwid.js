ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

//"GENDER" - A REQUIRED FIELD BY MOLECULAR LAB
ec.order.extraFields.gender = {
	'title': 'Gender',
	'type': 'select',
	'required': true,
	'options': [
		{ 'title': 'Male', 'value': 'male' },
		{ 'title': 'Female', 'value': 'female' }
	],
	'value': 'male', //Default value
	'checkoutDisplaySection': 'shipping_address'
};

//"panel_id" - A REQUIRED FIELD BY MOLECULAR LAB
ec.order.extraFields.panel_id = {
	'title': 'Tests required',
	'type': 'select',
	'required': true,
	'options': [
		{ 'title': 'Gonorrhea', 'value': '26' },
		{ 'title': 'Chlamydia', 'value': '27' },
		{ 'title': 'Hep B (DBS), Creatinine (DBS), HIV', 'value': '56' },
		{ 'title': 'Creatining (DBS), HIV', 'value': '84' },
		{ 'title': 'Cardiovascular', 'value': '40' },
		{ 'title': 'Fitness DNA', 'value': '36' },
		{ 'title': 'CGx Base', 'value': '65' },
		{ 'title': 'Flu', 'value': '87' }
	],
	'checkoutDisplaySection': 'shipping_address'
};

//HIDDEN FIELD "shipping_method" - A REQUIRED FIELD BY MOLECULAR LAB
ec.order.extraFields.shipping_method = {
	'value': '7'
};

//HIDDEN FIELD "physician_id" - A REQUIRED FIELD BY MOLECULAR LAB
ec.order.extraFields.physician_id = {
	'value': '98281'
};

//HIDDEN FIELD "lob" - A REQUIRED FIELD BY MOLECULAR LAB
//LOB:Line of business - now set to SC (Self Collect)
ec.order.extraFields.lob = {
	'value': 'SC'
};
Ecwid.refreshConfig && Ecwid.refreshConfig();