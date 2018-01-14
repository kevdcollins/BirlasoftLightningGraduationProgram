({
	onFlowerClick: function (component, event, helper) 
	{
		var flower = component.get('v.flower');
		//alert('flower ' + JSON.stringify(flower));
		var flowerId = component.get('v.flower.Id');
		//alert('flowerId ' + flowerId);
		var flowerSelect = component.getEvent('FlowerSelect');
		//alert('flowerSelect ' + JSON.stringify(flowerSelect));
		flowerSelect.setParams({'flowerId' : flowerId});
		flowerSelect.fire();

		var flowerSelected = $A.get("e.c:FlowerSelected");
		//alert('flowerSelected BEFORE' + JSON.stringify(flowerSelected));
		flowerSelected.setParams({'flower' : flower});
		//alert('flowerSelected AFTER' + JSON.stringify(flowerSelected));
		flowerSelected.fire();
		var flower = component.get('v.flower');
	}
})