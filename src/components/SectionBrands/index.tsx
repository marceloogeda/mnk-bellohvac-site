import Image from "next/image";

// ? image
import Logo01 from "@/assets/images/logo-01.png";
import Logo02 from "@/assets/images/logo-02.png";
import Logo03 from "@/assets/images/logo-03.png";
import Logo04 from "@/assets/images/logo-04.png";
import Logo05 from "@/assets/images/logo-05.png";
import Logo06 from "@/assets/images/logo-06.png";

// ? styles
import * as Styles from "./styles";

export function SectionBrands() {
  return (
    <Styles.ContainerSectionBrands>
      <Styles.Content>
        <Image src={Logo01} alt="" width={170} height={77} />
        <Image src={Logo02} alt="" width={170} height={77} />
        <Image src={Logo03} alt="" width={170} height={77} />
        <Image src={Logo04} alt="" width={170} height={77} />
        <Image src={Logo05} alt="" width={170} height={77} />
        <Image src={Logo06} alt="" width={170} height={77} />
      </Styles.Content>
    </Styles.ContainerSectionBrands>
  );
}
