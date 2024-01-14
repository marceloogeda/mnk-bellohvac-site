import { useRouter } from "next/navigation";

// ? icons
import * as IconHi from "react-icons/hi";

// ? styles
import * as Styles from "./styles";

export function ButtonBack({ ...props }: Styles.ButtonPostType) {
  const router = useRouter();

  return (
    <Styles.Container
      className="btn-back"
      onClick={() => {
        router.back();
      }}
      addBottom={props.addBottom}
      addLeft={props.addLeft}
    >
      <span>
        <IconHi.HiArrowNarrowLeft />
      </span>
      <span>Voltar</span>
    </Styles.Container>
  );
}
