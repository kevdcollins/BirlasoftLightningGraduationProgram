({
	onLoad: function (component, event) 
	{
		var action = component.get("c.getFlowers");
		action.setStorable();
		action.setCallback(this, function(response)
		{
			var state = response.getState();
			if (state === "SUCCESS") 
			{
				var data = response.getReturnValue();
				component.set("v.flowersPagination", data);
				// 9 item will display on single screen 
                component.set("v.maxPage", Math.floor((data.length+8)/9));
				this.renderPage(component);
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
		$A.enqueueAction(action);
	},
	renderPage: function(component) 
	{
        var records = component.get("v.flowersPagination");
        var pageNumber = component.get("v.pageNumber");
        var pageRecords = records.slice((pageNumber-1)*9, pageNumber*9);
        component.set("v.flowers", pageRecords);
    },
	doSearchKeyChange: function(component, event) 
	{
		var searchKey = event.getParam("searchKey");
		var action = component.get("c.getFlowersByName");
		action.setParams(
		{
		  "searchKey": searchKey
		});
		action.setCallback(this, function(response) 
		{
			var state = response.getState();
			if (state === "SUCCESS") 
			{
				var data = response.getReturnValue();
				component.set("v.flowersPagination", data);
				// 9 item will display on single screen 
                component.set("v.maxPage", Math.floor((data.length+8)/9));
				this.renderPage(component);
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
		$A.enqueueAction(action);
	},
	doColorChange: function(component, event)
	{
		var color = event.getParam("color");
		var action = component.get("c.getFlowersByColor");
		action.setParams(
		{
			"color": color
		});
		action.setCallback(this, function(response) 
		{
			var state = response.getState();
			if (state === "SUCCESS") 
			{
				var data = response.getReturnValue();
				component.set("v.flowersPagination", data);
				// 9 item will display on single screen 
                component.set("v.maxPage", Math.floor((data.length+8)/9));
				this.renderPage(component);
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
		$A.enqueueAction(action);

	},
	doPriceRangeChange: function(component, event)
	{
		var price = event.getParam("price");
		var action = component.get("c.getFlowersByPrice");
		action.setParams(
		{
		  "price": price
		});
		action.setCallback(this, function(response) 
		{
			var state = response.getState();
			if (state === "SUCCESS") 
			{
				var data = response.getReturnValue();
				component.set("v.flowersPagination", data);
				// 9 item will display on single screen 
                component.set("v.maxPage", Math.floor((data.length+8)/9));
				this.renderPage(component);
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
		$A.enqueueAction(action);

	},
	setPriceRange: function(component, event)
	{
		
	}
})