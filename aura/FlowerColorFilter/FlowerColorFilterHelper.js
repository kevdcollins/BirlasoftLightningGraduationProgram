({
	onInit: function (component, event) 
	{
		var colors = component.get("c.getFlowerColors");
		colors.setStorable();
		colors.setCallback(this, function(response)
		{
			var state = response.getState();
			if (state === "SUCCESS") 
			{
					component.set("v.flowerColors", response.getReturnValue());
			}
			if(state === 'ERROR')
			{
				let errors = response.getError();
				if (errors && Array.isArray(errors) && errors.length > 0) 
				{
					alert('ERROR: ' + errors[0]);
					//self.handleErrors(errors); 	
				}
			}
		});
		$A.enqueueAction(colors);
	},
	onColorChange: function(component, event)
	{
        var myEvent = $A.get("e.c:ColorChange");
        myEvent.setParams({"color": event.target.value});
        myEvent.fire();
        var detailResetEvent = $A.get("e.c:FlowerDetailReset");
        detailResetEvent.setParams({"reset": true});
        detailResetEvent.fire();
        var priceRangeResetEvent = $A.get("e.c:FlowerPriceRangeReset");
        priceRangeResetEvent.setParams({"reset": true});
        priceRangeResetEvent.fire();
        var searchResetEvent = $A.get("e.c:FlowerSearchReset");
        searchResetEvent.setParams({"reset": true});
        searchResetEvent.fire();
	},
	doReset: function (component, event) 
	{
		var reset = event.getParam("reset");
		if(reset)
		{
			component.set('v.selectedValue', null);
		}
	},
})