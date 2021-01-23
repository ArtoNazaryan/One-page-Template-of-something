$(document).ready(function(){
		$(".triengls").empty()
		$(".triengls").append(`
				<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-4.png" class="animimg animset1">
				<div class="animset2">
				<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-3.png" class="animimg">
				</div>
				<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-3.png" class="animimg animset3">
				<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-4.png" class="animimg animset4">
			</div>			
			`)
		$(".animimg").fadeIn(200,function(){
			$(".animset1").addClass("rotat")
			$(".animset2").animate({
				width:"200px",
				left:"720px",
			},800)	
			$(".animset3").addClass("rotat")
			$(".animset3").animate({
				width:"150px",
				top:"450px",
			},500)	
			$(".animset4").animate({
				width:"100px",
				left:"430px",
			},800)
		})
	
	$('.carousel-control-next-icon').click(function(){
		$(".animimg").css({
			display:"none",
		})
		$(".triengls").empty()
		$(".triengls2").empty()
		$(".triengls2").append(`
					<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-4.png" class="animimg animset5">
					<div class="animset6">
						<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-3.png" class="animimg">
					</div>
					<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-3.png" class="animimg animset7">
					<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-4.png" class="animimg animset8">
			`)
		$(".animimg").fadeIn(200,function(){

			$(".animset5").addClass("rotat")
			$(".animset5").animate({
				left:"550px",
			},800)
			$(".animset6").animate({
				width:"200px",
				left:"650px",
			},800)
			$(".animset7").animate({
				width:"100px",
				top:"450px",
			},800)	
			$(".animset8").animate({
				left:"50px",
			},800)
		})
		$(".triengls").append(`
				<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-4.png" class="animimg animset1">
				<div class="animset2">
				<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-3.png" class="animimg">
				</div>
				<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-3.png" class="animimg animset3">
				<img src="https://moreno.brickthemes.com/wp-content/uploads/2019/06/deco-4.png" class="animimg animset4">
			</div>			
			`)
		$(".animimg").fadeIn(200,function(){
			$(".animset1").addClass("rotat")
			$(".animset2").animate({
				width:"200px",
				left:"720px",
			},800)	
			$(".animset3").addClass("rotat")
			$(".animset3").animate({
				width:"150px",
				top:"450px",
			},500)	
			$(".animset4").animate({
				width:"100px",
				left:"430px",
			},800)
		})
	})

	$(document).scroll(function(){
		let top1 = $(".carusel").height()
		let top2 = $(".Teamview").offset().top
		let top3 = $(".contactus").offset().top
		let top4 = $(".passion").offset().top
		console.log(top1,top2,window.scrollY)
		if(top1-400<window.scrollY){
			$(".sincedesc div").fadeIn(1000).css({
		        display: 'inline-block' 
			})
		}
		if(top2-400<window.scrollY){	
			$(".teamtitle").animate({
				opacity: "1",
			},800,function(){
				$(".numb1").animate({
					opacity: "1",
				},300,function(){
					$(".numb2").animate({
					opacity: "1",
					},300,function(){
						$(".numb3").animate({
						opacity: "1",
						},300,function(){
							$(".numb4").animate({
							opacity: "1",
							},300)
						})
					})
				})				
			})
		}
		console.log(top3)
		if(top3-500<window.scrollY){
			console.log("test")
			$(".contactus h1").animate({
				opacity: "1",
			},800,function(){
				$(".contactus h5").animate({
					opacity: "1",
				},500,function(){
					$(".contactus button").animate({
						opacity: "1",
					},400)
				})
			})
		}
		if(top4-100<window.scrollY){
			$(".passionimg").animate({
				opacity: "1",
			},800)
		}
	})

	$(".a2").click(function(){
		let top = $(".continfo").offset().top
		$("html,body").animate({
			scrollTop: top 
		},4500)
	})
	$(".a3").click(function(){
		let top = $(".developing").offset().top
		$("html,body").animate({
			scrollTop: top 
		},1000)
	})
	$(".a4").click(function(){
		let top = $(".news").offset().top
		$("html,body").animate({
			scrollTop: top 
		},1000)
	})
	$(".a5").click(function(){
		let top = $(".contact").offset().top
		$("html,body").animate({
			scrollTop: top 
		},1000)
	})


	// Markers
	$('.variants').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	
})