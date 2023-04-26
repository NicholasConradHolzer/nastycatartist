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
					The world is an Illusion<br/>
					designed to trap your soul<br/>
					built by a dick spirit that wanted to be a god
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