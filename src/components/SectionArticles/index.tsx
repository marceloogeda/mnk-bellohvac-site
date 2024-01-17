import Image from "next/image";

// ? image
import Photo02 from "@/assets/images/photo-2.jpg";
import Photo03 from "@/assets/images/photo-3.jpg";

// ? styles
import { ButtonDefault } from "../ButtonDefault";
import * as Styles from "./styles";

export function SectionArticles() {
  return (
    <Styles.Container>
      <Styles.Content>
        <article className="article">
          <div className="banner-image">
            <Image src={Photo02} alt="" width={626} height={263} />
          </div>
          <div className="description">
            <h2>Heating</h2>
            <p>
              Bello's heating services are designed to keep your spaces warm and
              comfortable, providing expert installations, repairs, and
              maintenance for heating systems. Our skilled technicians are
              dedicated to ensuring efficient functionality and optimal
              performance, so you can enjoy consistent warmth with confidence.
            </p>

            <ButtonDefault
              url=""
              content="SERVICE DETAILS"
              hasStyleButtonType="link-blue"
              includeArrow
              isLink
            />
          </div>
        </article>
        <article className="article">
          <div className="banner-image">
            <Image src={Photo03} alt="" width={626} height={263} />
          </div>
          <div className="description">
            <h2>Cooling</h2>
            <p>
              We specialize in creating cool and comfortable environments
              through our top-notch cooling services. Our expert team ensures
              efficient installation, repair, and maintenance of cooling systems
              for your ultimate comfort. Count on our skilled technicians to
              keep your space cool and enjoyable year-round.
            </p>
            <ButtonDefault
              url=""
              content="SERVICE DETAILS"
              hasStyleButtonType="link-blue"
              includeArrow
              isLink
            />
          </div>
        </article>
      </Styles.Content>
    </Styles.Container>
  );
}
