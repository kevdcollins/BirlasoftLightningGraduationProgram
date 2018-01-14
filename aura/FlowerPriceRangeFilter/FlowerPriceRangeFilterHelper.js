({
    setPriceRange: function (component, event) 
	{
		var prices = component.get("c.getFlowerPrices");
		prices.setStorable();
		prices.setCallback(this, function(response)
		{
			var state = response.getState();
			if (state === "SUCCESS") 
			{
				var arr = [];
				var val = response.getReturnValue();
				for (var i = 0; i < val.length; i++) 
				{ 
					arr.push(val[i]);
				}
				
				var min = arr.reduce(function(a, b) 
				{
					return Math.min(a, b);
				});
				component.set("v.minimum", min);
				var max = arr.reduce(function(a, b) 
				{
					return Math.max(a, b);
				});
				component.set("v.maximum", max);
				component.set("v.price", max);
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
		$A.enqueueAction(prices);
    },
	onRangeChange: function (component, event) 
	{
        var PriceRangeChange = $A.get("e.c:PriceRangeChange");
		var price = event.getParam("value");
		component.set("v.price", price);
        PriceRangeChange.setParams({"price": price});
        PriceRangeChange.fire();
        var colorResetEvent = $A.get("e.c:FlowerColorFilterReset");
        colorResetEvent.setParams({"reset": true});
        colorResetEvent.fire();
        var detailResetEvent = $A.get("e.c:FlowerDetailReset");
        detailResetEvent.setParams({"reset": true});
        detailResetEvent.fire();
        var searchResetEvent = $A.get("e.c:FlowerSearchReset");
        searchResetEvent.setParams({"reset": true});
        searchResetEvent.fire();
	},
	doReset: function (component, event) 
	{
		var reset = event.getParam("reset");
		if(reset)
		{
			var max = component.get('v.maximum');
			component.set("v.price", max);
		}
	},
})