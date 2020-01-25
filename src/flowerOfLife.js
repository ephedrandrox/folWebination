debugger;
define([ 'dojo/_base/declare', "fol/ui/background", "fol/ui/canvas", "fol/flowerCircle", "dojo/fx", "dojox/gfx", "dojox/gfx/fx"],
		 function (declare, background, canvas, flowerCircle, fx, gfx, gfxFx) {
		
		return declare("FOLBackground", [background, canvas], {

			angleArray: [30,
						90,
						150,
						210,
						270,
						330],

			_radius: 100,
			_center : {x : 0, y: 0},
			_backgroundColor: "rgba(0,0,0,.3)",
			
			constructor: function(args){
					
					
				declare.safeMixin(this, args);


				console.log("Initializing Flower Of Life constructer...\n");
				this.setBackground("rgba(0,0,0,1)");//set BG black
				

				this._flower = this._surface.createGroup();
				this.enlargeFlowerAnimation();


			},
			centerFlower: function()
			{
				var centerPoint = this.getLayerCenterPoint();
				

				this._flower.applyTransform(gfx.matrix.translate(centerPoint.x, centerPoint.y));
				
			},
			transformFlower: function(transFactor)
			{

				this._flower.applyTransform(gfx.matrix.scale({ x: transFactor, y: transFactor}));
			},

			createFlower: function(depth){
				let i = 0;

				for(i = 0 ; i<= depth; i++)
				{
					debugger;
					var newCenter = {};
					newCenter.x = this._center.x;
					newCenter.y = this._center.y - (this._radius * i);




					this._flowerStart = new flowerCircle({parentFlower: null,
											_surface: this._surface,
											_flowerGroup: this._flower,
											_flowerDepth: i,
											_flowerSize: depth,
											_center: newCenter,
											_radius: this._radius,
											_children: [null,null,null,null,null,null] });

					var di = 0;
					var angPos = 0;
					for(angPos = 0; angPos<=5; angPos++)
					{

						var angle = this.angleArray[angPos]
						for(di = 0 ; di< i; di++)
						{
							if(!(angPos == 5 && di == i-1)){
								newCenter= this.getStartPointFromAngle(newCenter.x, newCenter.y, angle, this._radius)

								this._flowerStart = new flowerCircle({parentFlower: null,
														_surface: this._surface,
														_flowerGroup: this._flower,
														_flowerDepth: i,
														_flowerSize: depth,
														_center: newCenter,
														_radius: this._radius,
														_children: [null,null,null,null,null,null] });
							}
						}
					}

				}



				
			},
			enlargeFlowerAnimation: function()
			{

				let centerPoint = this.getLayerCenterPoint();


		          newCircleGrow = gfxFx.animateTransform({
		            duration: 30000,
		            shape: this._flower,
		            transform: 
			            [ {
			                name: "translate",
			                start: [centerPoint.x, centerPoint.y], 
			                end: [centerPoint.x,centerPoint.y]
				         },{
			                name: "scale",
			                start: [.25, .25], 
			                end: [1, 1] 
			            }]
		            
		        });
		         

       			newCircleGrow.play();

			},

			getStartPointFromAngle: function(cx, cy, a, r){
	        let returnCords = {x :0, y: 0};
	        returnCords.x = (Math.cos(a *(Math.PI/180)) *r) + cx;
	        returnCords.y = (Math.sin(a*(Math.PI/180)) *r) + cy;
	        return returnCords;
	      }
		


		});
	});