({
	onSearchKeyChange: function (component, event) 
	{
        var searchEvent = $A.get("e.c:SearchKeyChange");
        searchEvent.setParams({"searchKey": event.target.value});
        searchEvent.fire();
        var colorResetEvent = $A.get("e.c:FlowerColorFilterReset");
        colorResetEvent.setParams({"reset": true});
        colorResetEvent.fire();
        var detailResetEvent = $A.get("e.c:FlowerDetailReset");
        detailResetEvent.setParams({"reset": true});
        detailResetEvent.fire();
        var priceRangeResetEvent = $A.get("e.c:FlowerPriceRangeReset");
        priceRangeResetEvent.setParams({"reset": true});
        priceRangeResetEvent.fire();
	},
	doReset: function (component, event) 
	{
		var reset = event.getParam("reset");
		if(reset)
		{
			document.getElementById('flowerSearch').value = '';
		}
	},
})