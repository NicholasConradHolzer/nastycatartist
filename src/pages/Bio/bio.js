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
								Nashville Tennessee's premier Funk'n'Roll DJ-MC One-Man-Band!
							</p>
						</article>
					</div>
				</div>

			</section>
        </div>
        
    )
}