import Image from 'next/image'
import Link from 'next/link'

export default function Card(q) {

  function setBgColor(bgConc) {
    const bg = bgConc.split(' ')[0]
    if (bg > 56) {
      return 'text-gray-800'
    } else if (bg > 40) {
      return 'text-green-400'
    } else if (bg > 25) {
    return 'text-yellow-400'
    } else if (bg > 10) {
    return 'text-red-400'
    } else {
    return 'text-purple-400'  
    }
  }

  function setElColor(elConc) {
    const el = elConc.split(' ')[0]
    if (el > 130) {
      return 'text-gray-800'
    } else if (el > 84) {
      return 'text-green-400'
    } else if (el > 53) {
    return 'text-yellow-400'
    } else if (el > 17) {
    return 'text-red-400'
    } else {
    return 'text-purple-400'  
    }
  }

  function setFrameColor(frConc) {
    const fr = frConc.split(' ')[0]
    if (fr >= 1203) {
      return 'text-gray-800'
    } else if (fr >= 1091) {
      return 'text-green-400'
    } else if (fr >= 534) {
    return 'text-yellow-400'
    } else if (fr >= 267) {
    return 'text-red-400'
    } else {
    return 'text-purple-400'  
    }
  }

  function setItemColor(itemConc) {
    const item = itemConc.split(' ')[0]
    if (item > 93) {
      return 'text-gray-800'
    } else if (item > 50) {
      return 'text-green-400'
    } else if (item > 20) {
    return 'text-yellow-400'
    } else if (item > 10) {
    return 'text-red-400'
    } else {
    return 'text-purple-400'  
    }
  }

  function setOtherColor(otherConc) {
    let other = otherConc.split(' ')[3]
    other = other.replace(/[^0-9.]/g, '')
    // console.log(other)
    if (other >= 42){
      return 'text-gray-800'
    } else if (other >= 30) {
      return 'text-green-400'
    } else if (other >= 15) {
    return 'text-yellow-400'
    } else if (other >= 10) {
    return 'text-red-400'
    } else {
    return 'text-purple-400'  
    }
  }

  return (
    <div className="p-6 rounded-lg border border-grey-50 flex-1">
      <Link href={`/heroes/${q.ID}`} passHref>
        <Image className="rounded-full w-full object-cover object-center mb-6" 
          src={"https://ipfs.blockfrost.dev/ipfs/" + q.Image} 
          height='600vw'
          width='600vw'
          alt={q.Name} />
      </Link>
      <h3 className="tracking-widest text-blue-400 text-xl text-center font-medium title-font">{q.Name}</h3>
      <div className="grid grid-cols-3">
        <div className="leading-relaxed text-base">Element: </div>
        <div>{q.Element}</div>
        <div className={"text-sm " + setElColor(q.elem_conc)}>{q.elem_conc}</div>

        <div className="leading-relaxed text-base">Background: </div>
        <div>{q.Background}</div>
        <div className={"text-sm " + setBgColor(q.bg_conc)}> {q.bg_conc}</div>

        <div className="leading-relaxed text-base">Frame: </div>
        <div>{q.Frame}</div>
        <div className={"text-sm " + setFrameColor(q.frame_conc)}>{q.frame_conc}</div>

        <div className="leading-relaxed text-base">Left Item:</div>
        <div>{q.Left_Item} </div>
        <div className={"text-sm " + setItemColor(q.left_conc)}>{q.left_conc} </div>

        <div className="leading-relaxed text-base">Right Item:</div>
        <div> {q.Right_Item} </div>
        <div className={"text-sm " + setItemColor(q.right_conc)}>{q.right_conc}</div>
      </div>
        
      {q.Flavor === 'None' ? '' : 
        <div className="grid grid-cols-3">
          <div className="leading-relaxed text-base">Flavour:</div>
          <div>{q.Flavor}</div>
          <div className={"text-sm " + setOtherColor(q.flav_conc)}>{q.flav_conc}</div>
        </div>
      }

      {q.Variation === 'None' ? '' : 
        <div className="grid grid-cols-3">
          <div className="leading-relaxed text-base">Variation:</div>
          <div>{q.Variation}</div>
          <div className={"text-sm " + setOtherColor(q.var_conc)}>{q.var_conc}</div>
        </div>
      }

      {q.Stance === 'None' ? '' :
        <div className="grid grid-cols-3">
          <div className="leading-relaxed text-base">Stance:</div>
          <div>{q.Stance}</div>
          <div className={"text-sm " + setOtherColor(q.stance_conc)}>{q.stance_conc}</div>
        </div>
      }
      <h6 className="leading-relaxed text-base">Group: {q.Group}</h6>
    </div>
  )
} 
