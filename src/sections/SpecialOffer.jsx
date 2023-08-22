import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" />
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You  <br />
            <span className="text-coral-red" >Super</span>
            <span className="text-coral-red " > Quality </span>
            Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our metculously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfiction.</p>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer