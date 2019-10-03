const newShipClick = () => {
	javascript:showAddressDetails(countryMap, 'shipTo'); javascript:hideOptions('enterNewAddress', false)

}

const autoFill = () => {
	//Address Fill
	document.querySelector('input[name ="consigneeAddress.contactName"]').value = "ATTN: J.CREW RETURNS"
	document.querySelector('input[name ="consigneeAddress.name"]').value = "INMAR"
	document.querySelector('input[name ="consigneeAddress.city"]').value = "RURAL HALL"
	document.querySelector('select[name ="consigneeAddress.state"]').value = "NC"
	document.querySelector('select[name ="consigneeAddress.country"]').value = "US"
	document.querySelector('input[name ="consigneeAddress.postalCode"]').value = "270459575"
	document.querySelector('input[name ="consigneeAddress.street"]').value = "540 Northridge Park Drive"
	document.querySelector('input[name ="consigneeAddress.telephone"]').value = "732-212-9430"

	//Shipment Props
	document.querySelector('input[name ="packageBean.weight"]').value = "10"

}

const submit = () => {
	showOptions('samePackageAttribute', true ); checkPaymentOptionsAndContinue('US', 'Next', 'CreateAShipment');
}


const runScript = () => {
	newShipClick()
	autoFill()
	submit()
}

runScript()
