import Contactform from "../components/Contactform";

export default function Contact() {
  return (
    <div className="m-4 lg:mx-8 mt-8 lg:mt-16 lg:flex gap-8">
      <p className="rounded-md bg-white lg:bg-slate-200 lg:opacity-80 mb-8 lg:mb-0 p-4 lg:w-1/2 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, cum autem aliquid perferendis similique totam, porro architecto quos dolore, labore fuga
      </p>
      <Contactform/>
    </div>
  )
}
