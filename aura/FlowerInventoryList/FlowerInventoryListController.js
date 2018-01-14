({
	doInit: function (component, event, helper) 
	{
		helper.onLoad(component, event);
	},
    renderPage: function(component, event, helper) 
	{
        helper.renderPage(component);
    },
	onSearchKeyChange: function(component, event, helper) 
	{
		helper.doSearchKeyChange(component, event);
	},
	onColorChange: function (component, event, helper) 
	{
		helper.doColorChange(component, event, component.get("v.pageNumber"), component.get("v.currentPagesCount"));
	},
	onFlowerSelect: function(component, event)
	{
        var flowerId = event.getParam("flowerId");
		component.set('v.selectedFlowerId', flowerId);
	},
	onPriceRangeChange: function (component, event, helper) 
	{
		helper.doPriceRangeChange(component, event);
	},
})