import Image from './Image'

const ShoppingCard = ({ key, title, description, imgSrc, price, href, color, sold }) => (
  <div className={`block rounded-lg relative mx-3 ${sold && 'opacity-60'}`}>
    {sold && (
      <div className="w-5 rounded-full bg-red-700 block absolute right-[-5px] bottom-[-5px] aspect-square z-10" />
    )}

    <div className="relative aspect-square block">
      <Image className="rounded-lg" src={imgSrc} alt="" layout="fill" objectFit="contain" />
    </div>

    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm ">
          <a href={!sold && href}>
            <span aria-hidden="true" className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{color ? color : description}</p>
      </div>
      <p className="text-sm font-medium">${price / 100}</p>
    </div>
  </div>
)

export default ShoppingCard
