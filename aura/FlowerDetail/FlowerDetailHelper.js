({
	onFlowerSelected: function (component, event) 
	{
        var flower = event.getParam("flower");
        var Id = event.getParam("Id");
		var tempRec = component.find("service");
        tempRec.set("v.recordId", flower.Id);
        tempRec.reloadRecord();
	},
	doReset: function (component, event) 
	{
		var reset = event.getParam("reset");
		if(reset)
		{
			component.set('v.flower', null);
		}
	},
})