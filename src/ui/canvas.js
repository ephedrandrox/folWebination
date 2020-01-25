define([ 'dojo/_base/declare', "dojo/dom-geometry", "dojo/dom-style", "dojox/gfx"], 
		 function (declare, domGeometry, domStyle, gfx ) {
		
		return declare("UICanvas", null, {

			constructor: function(args){
					
					
				declare.safeMixin(this, args);

				console.log("Initializing UI Canvas Base class constructer...\n");

			
			
				//create surface into this.domNode
				//Must be called with another objext that has domNode
				this._surface = gfx.createSurface(this.domNode, "100%", "100%");
			
				//make sruface size of container node
				domStyle.set(this._surface.rawNode, {	
											"position": "absolute",
											"margin": 0,
											"padding": 0,
											"width": "100%",
											"height": "100%",
											"top": "0px",
											"left": "0px"
											});
		
				
				console.log("Canvas Surface created and resized...\n");


				console.log(this._surface);

			},

		
			getSurfaceCenterPoint: function(){
				var surfDim = domGeometry.getContentBox(this._surface.rawNode);
				var returnVar = {x: 0, y: 0};
				returnVar.x = surfDim.w/2;
				returnVar.y = surfDim.h/2;
				
				return returnVar;
			},
			getSurfaceNodeWidth: function(){
				return domGeometry.getContentBox(this._surface.rawNode).w;
			},
			getSurfaceNodeHeight: function(){
				return domGeometry.getContentBox(this._surface.rawNode).h;
			},
			getSurfaceNodeDimensions: function()
			{
				return domGeometry.getContentBox(this._surface.rawNode);
			}
		});
	});