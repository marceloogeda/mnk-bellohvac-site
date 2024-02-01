import LogoWhite from "@/assets/images/logo-bellohvac-white.png";
import LogoMonkey from "@/assets/images/logo-composed-white.png";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuAtSign, LuMapPin, LuPhone } from "react-icons/lu";
import InputMask from "react-input-mask";

import { z } from "zod";

// ? components
import ActiveLink from "../ActiveLink";

// ? styles
import { ButtonDefault } from "../ButtonDefault";
import * as Styles from "./styles";

// ? types

const SignUpFormSchema = z.object({
  name: z.string().min(3),
  phone: z.string().min(11),

  message: z.string().min(5),
});

type SignUpFormObject = z.infer<typeof SignUpFormSchema>;

export function Footer() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    formState,
  } = useForm<SignUpFormObject>({
    resolver: zodResolver(SignUpFormSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      phone: "",
    },
  });

  const handleFormSubmit: SubmitHandler<SignUpFormObject> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Styles.Container>
      <Styles.Content>
        <div className="footer-container">
          <div className="footer-content">
            <div>
              <header>
                <h1>
                  <ActiveLink href="/">
                    <Image src={LogoWhite} alt="" height={56.17} width={144} />
                  </ActiveLink>
                </h1>
              </header>
              <div className="contact-infos">
                <div className="contact-item">
                  <strong>Contact us</strong>
                  <a href="mailto:">
                    {" "}
                    <LuAtSign /> yagobello@bellohvac.com
                  </a>
                  <a href="" target="_blank">
                    <LuPhone /> (857) 268-9662
                  </a>
                </div>
                <div className="contact-item">
                  <strong>Address</strong>
                  <a href="mailto:">
                    {" "}
                    <LuMapPin /> Massachusetts
                  </a>
                  <a href="" target="_blank">
                    <LuMapPin /> North Caroline
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <h3>
                {formState.isSubmitSuccessful &&
                  "Your message has been sent successfully!"}
              </h3>

              <h2>Do you need support?</h2>
              <div className="form-content">
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" {...register("name")} />

                  <span>{errors.name && <>FILL IN THIS FIELD</>}</span>
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>

                  <InputMask
                    id="phone"
                    type="text"
                    placeholder="(XX) XXXXX-XXXX"
                    {...register("phone")}
                    mask={"(99) 99999-9999"}
                  />

                  <span>{errors.phone && <>FILL IN THIS FIELD</>}</span>
                </div>
              </div>

              <div className="form-content-messsage">
                <label htmlFor="message">Message</label>
                <textarea id="message" {...register("message")} />

                <span>{errors.message && <>FILL IN THIS FIELD</>}</span>
              </div>

              <ButtonDefault
                type="submit"
                hasStyleButtonType="black"
                content="Enviar"
                // onClick={() => {
                //   reset();
                // }}
              />
            </form>
          </div>
        </div>
        <footer>
          <span>
            © Bello HVAC. All Rights Reserved {new Date().getFullYear()}.
          </span>
          <div className="logo-agency">
            <span>Made by</span>
            <Image src={LogoMonkey} alt="" height={28} width={110} />
          </div>
        </footer>
      </Styles.Content>
    </Styles.Container>
  );
}
