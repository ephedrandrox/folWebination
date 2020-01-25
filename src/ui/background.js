define([ 'dojo/_base/declare', "fol/ui/layer", "dojo/dom-style"],
		 function (declare, layer, domStyle ) {
		
		return declare("UIBackground", layer, {

			constructor: function(args){
					
					
				declare.safeMixin(this, args);

				console.log("Initializing UI Background Base class constructer...\n");

			
				domStyle.set(this.domNode, {	
											"position": "absolute",
											"margin": 0,
											"padding": 0,
											"width": "100%",
											"height": "100%",
											"top": "0px",
											"left": "0px",
											"z-index" : -1,
											});
		
				

				console.log("UI Background Base class constructer created...\n");


			},

			setBackground: function(newBackground)
			{
				domStyle.set(this.domNode, "background", newBackground);
			}
		});
	});