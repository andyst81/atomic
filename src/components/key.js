
export default function Key() {
  return (
    <div className="py-4">
      <div className="font-bold text-xl text-gray-800">Rarities Color Key</div>
      <div className="">Common - <span className="text-gray-800">No color</span></div>
      <div className="">Uncommon - <span className="text-green-400">Green</span></div>
      <div className="">Rare - <span className="text-yellow-400">Yellow</span></div>
      <div className="">Very Rare - <span className="text-red-400">Red</span></div>
      <div className="">Ultra Rare - <span className="text-purple-400">Purple</span></div>
    </div>
  )
}