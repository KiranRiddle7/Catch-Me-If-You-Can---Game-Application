
		 			    numberofFaces = 5;
		 			    check=1;
		 			    score = 0;
		 			    level = 1;
		 			    
		 				leftDiv = document.getElementById("leftSide");
		 				rightDiv = document.getElementById("rightSide");
		 			function faceGeneration() {

		 						var theScore = document.getElementById("scoreDisplay");
								theScore.firstChild.data = "Your Score Is: " +score;
							
								var currentLevel = document.getElementById("currentLevel");
								currentLevel.firstChild.data = "Level: " +level;

				 				for (var i = 0; i < numberofFaces; i++) 

				 				{
				 					var smileImage = document.createElement("img");

				 					 if (check==1) {
		   							 smileImage.setAttribute("src", "images/smile.png");
		   							 }
		   							 if (check==2) {
		   							 smileImage.setAttribute("src", "images/fox.png");
		   							 }
		   							 if (check==3) {
		   							 smileImage.setAttribute("src", "images/lion.png");
		   							 }
		   							 if (check==4) {
		   							 smileImage.setAttribute("src", "images/squid.png");
		   							 }
		   							 if (check==5) {
		   							 smileImage.setAttribute("src", "images/penguin.png");
		   							 }
		   							 if (check==6) {
		   							 smileImage.setAttribute("src", "images/bird.png");
		   							 }
		   							 if (check==7) {
		   							 smileImage.setAttribute("src", "images/chicken.png");
		   							 }
		   							 if (check==8) {
		   							 smileImage.setAttribute("src", "images/Elephant.png");
		   							 }

		   							 var randomTop = Math.random() * 400;
		   							 randomTop = Math.floor(randomTop);
		   							
		   							 var randomLeft = Math.random() * 400;
		   							 randomLeft = Math.floor(randomLeft);
		   							
		   							 smileImage.style.top = randomTop + "px";
		   							 
		   							 smileImage.style.left = randomLeft + "px";

		   							 leftDiv.appendChild(smileImage);

				 				}
				 		 

				 				leftDivImages = leftDiv.cloneNode(true);
				 				x = leftDivImages.lastChild; // finding the last child in the cloned images 
				 				leftDivImages.removeChild(x); // removing the last child in the cloned images
				 				rightDiv = rightDiv.appendChild(leftDivImages); // appending the cloned images to right div after removing the last child

							    
							   leftDiv.lastChild.onclick = function nextLevel(event){

							        

							        if (level<8) {
							        event.stopPropagation(); 
							        numberofFaces += 5;
							        check++;
							        if(level<2)
							        {
							        	score += 5; 
							        }
							        else
							        {
							           score *=  2;

							        }
							       
							        level++;
                                    while(leftDiv.firstChild)
                                    {
                                    	temp = leftDiv.lastChild;
                                    	leftDiv.removeChild(temp);
                                    }
                                     while(rightDiv.firstChild)
                                    {
                                    	temp1 = rightDiv.lastChild;
                                    	rightDiv.removeChild(temp1);
                                    }

							        faceGeneration();
							        }

							        else {
							        	alert("Woah.!! You have exceptional observational skills. That's all we have. Well played..!! Cheers :D")
							        }

								}; 
							
								

								theBody = document.getElementsByTagName("body")[0];


								theBody.onclick = function gameOver() {

									

								    alert(" Game Over! " + " Your Final Score Is " + score);



								   theBody.onclick = null; //  to make sure nothing will happen when the user clicks anywhere in the web page


								   leftDiv.lastChild.onclick = null; // to make sure nothing will happen when the user clicks on the extra face.
								   	

								}; 
										 
				}

