define([ 'dojo/_base/declare', 'dojo/dom-geometry', 'dojo/dom-construct'], 
		 function (declare, domGeometry, domConstruct ) {
		
		return declare("UILayer", null, {

			constructor: function(args){
					
					
				declare.safeMixin(this, args);

				console.log("Initializing UI Layer Base class constructer...\n");

				this.domNode = domConstruct.create("div", null, document.body, "first");

				//set up event Handlers


			},
			getLayerCenterPoint: function(){
				var surfDim = domGeometry.getContentBox(this.domNode);
				var returnVar = {x: 0, y: 0};
				returnVar.x = surfDim.w/2;
				returnVar.y = surfDim.h/2;
				
				return returnVar;
				
			},
			getLayerWidth: function(){
				return domGeometry.getContentBox(this.domNode).w;
			},
			getLayerHeight: function(){
				return domGeometry.getContentBox(this.domNode).h;
			},
			getLayerDimensions: function()
			{
				return domGeometry.getContentBox(this.domNode);
			}
		});
	});