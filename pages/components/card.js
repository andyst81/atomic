
export default function card() {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="p-6 rounded-lg border border-grey-50">
        <img className="rounded-full w-full object-cover object-center mb-6" src="https://dummyimage.com/600x600" alt="hero/minion image" />
        <h3 className="tracking-widest text-blue-400 text-xl text-center font-medium title-font">Hero Name</h3>
        <h2 className="text-gray-900 font-medium text-l title-font">Element: and percentage</h2>
        <p className="leading-relaxed text-base">Group</p>
        <p className="leading-relaxed text-base">Background</p>
        <p className="leading-relaxed text-base">Frame</p>
        <p className="leading-relaxed text-base">Left Item</p>
        <p className="leading-relaxed text-base">Right Item</p>
        <p className="leading-relaxed text-base">Left & right combo</p>
        <p className="leading-relaxed text-base">Variation / Flavour</p>
      </div>
    </div>
  )
} 
