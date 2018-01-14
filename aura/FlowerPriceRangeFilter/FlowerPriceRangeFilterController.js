({
    onRangeChange: function (component, event, helper) 
	{
		//alert('ENTER onRangeChange!');
		helper.onRangeChange(component, event);
    },
    doInit: function (component, event, helper) 
	{
		helper.setPriceRange(component, event);
    },
    reset: function (component, event, helper) 
	{
		helper.doReset(component, event);
    },
})