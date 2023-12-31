import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          doloremque libero aliquam quidem accusamus sit eligendi
          necessitatibus? Dignissimos, temporibus vel? Reiciendis quidem tempora
          aliquam ab assumenda, officiis nam modi corrupti? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Consectetur aliquam tempora
          itaque, eos exercitationem non autem aspernatur deserunt molestias
          sequi accusamus impedit soluta quis odio at rerum facere eveniet quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit
          temporibus cupiditate tempore minima. Culpa facilis necessitatibus ex
          itaque blanditiis minus id ullam inventore! Nam dicta id blanditiis
          quia dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero asperiores temporibus voluptatibus repudiandae delectus
          voluptate voluptatem error labore debitis at. Eos molestiae provident
          porro ducimus ex, aliquid quo dicta corporis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Id iste dignissimos perspiciatis
          corrupti rem recusandae excepturi tempore cupiditate nesciunt quidem
          odit optio debitis aut enim, aspernatur quam deleniti, sed ratione!
        </p>
      </div>
    </div>
  );
}
export default About;
