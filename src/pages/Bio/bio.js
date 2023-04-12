import React from "react";
import about from "../../assets/images/hero.jpg";
export default function Bio(){
    return(
        
        <div id="me">
           
		   <section id="about-nick" className="">

				<h2 className="section-title">
					About Me
				</h2>
				<p className="backText fullWide chapterSize">
					Using a Diverse Career History<br/>
					to Deploy Versatility in<br/>
					Problem Solving
				</p>

				<div id="aboutCard">
					<div className="about-pic">		
						<img src={ about } />
					</div>
					<div className="info-box">
						<article>
							<p>
								Nashville Tennessee's premier Funk&#41;n&#41;Roll DJ-MC One&#45;Man&#45;Band!
							</p>
						</article>
					</div>
				</div>

			</section>
        </div>
        
    )
}