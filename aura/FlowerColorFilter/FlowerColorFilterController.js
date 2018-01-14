({
	doInit: function (component, event, helper) 
	{
		helper.onInit(component, event);
	},
	doColorChange: function (component, event, helper) 
	{
		helper.onColorChange(component, event);
	},
    reset: function (component, event, helper) 
	{
		helper.doReset(component, event);
    },
})