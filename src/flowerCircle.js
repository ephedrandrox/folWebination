define([ 'dojo/_base/declare', 'dojo/_base/array',"dojo/fx","dojox/gfx","dojox/gfx/fx"], 
		 function (declare, array, fx, gfx, gfxFx ) {
		
		return declare("flowerCircle" , null, {

			angleArray: [270, 
						330,
						30,
						90,
						150,
						210],
			
		constructor: function(args){
				

				declare.safeMixin(this, args);


			  this._circle =  this._flowerGroup.createCircle({
			          cx: this._center.x, cy: this._center.y, r:this._radius
			        }).setFill("rgb(0,0,0,.1)")
			        .setStroke("green").moveToBack();

			 this.animateCircle();
			


		},
		 animateCircle: function(endColor){
	    	
	    	if(endColor == null){
	    	var endColor = "rgba(" +(Math.floor((Math.random() * 100) + 1))+","+(Math.floor((Math.random() * 100) + 1))+ ","+(Math.floor((Math.random() * 100) + 1))+ " ,.2)";
	    }
	        let circleAnimations =   {
	          newCircleFade : gfxFx.animateFill({
	            shape: this._circle,
	            duration: 500,
	            color: { start: "rgba(255,255,255,0)", end: endColor }
	        }),
	          newCircleGrow: gfxFx.animateTransform({
	            duration: 1000*(this._flowerDepth+1),
	            shape: this._circle,
	            transform: [
	            {
	                name: "translate",
	                start: [this._center.x, this._center.y], 
	                end: [0, 0] 
	            },
	            {
	                name: "scale",
	                start: [0, 0], 
	                end: [1, 1] 
	            },
	            ]
	        })
	         
        	};
       			var newAnimation =  fx.combine([circleAnimations.newCircleFade,circleAnimations.newCircleGrow]);

       			var thisObj = this;
          		newAnimation.onEnd = function(){
          			thisObj.animateCircleColor();
          			
          		}
       			newAnimation.play();

      
	    },
	     animateCircleColor: function(endColor){
	    	
	    	if(endColor == null){
	    	var endColor = "rgba(" +(Math.floor((Math.random() * 125) + 1))+","+(Math.floor((Math.random() * 125) + 1))+ ","+(Math.floor((Math.random() * 125) + 1))+ " ,.2)";
	    }

	    	var duration = Math.floor((Math.random() * 3000) + 1);


	        var newAnimation =gfxFx.animateFill({
	            shape: this._circle,
	            duration: duration,
	            color: { end: endColor }
	        });
       			
       			var thisObj = this;
          		newAnimation.onEnd = function(){
          			thisObj.animateCircleColor();
          		}
       			newAnimation.play();

      
	    },

	    getStartPointFromAngle: function(cx, cy, a, r){
	        var returnCords = {x :0, y: 0};

	        
	        
	        returnCords.x = (Math.cos(a *(Math.PI/180)) *r) + cx;
	        returnCords.y = (Math.sin(a*(Math.PI/180)) *r) + cy;
	        return returnCords;
	      }
		});
	});