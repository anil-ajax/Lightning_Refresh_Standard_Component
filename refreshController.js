({
	myAction : function(component, event, helper) {
    	console.log('here');
      	var appEvt = $A.get("e.lightning:nextBestActionsRefresh");
		appEvt.setParam("recordId", "0017F00001sFjKDQA0"); // change to get it from URL
		appEvt.fire();
        
     	setTimeout(function() {
        	var a = component.get('c.myAction');
        	$A.enqueueAction(a);
        }, 2000); 
	}   
})
