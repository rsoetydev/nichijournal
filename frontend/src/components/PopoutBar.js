import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import KanjiBlock from './KanjiBlock/KanjiBlock'
import LeftIcon from '../assets/images/left_tri.svg'
import PopLeft from '../assets/images/pop_left.svg'
import PopRight from '../assets/images/pop_right.svg'
import RightIcon from '../assets/images/right_tri.svg'

const PopoutBar = () => {

    const [open, setOpen] = useState(true)

    const [arrow, setArrow] = useState(PopLeft)
    const [alt, setAlt] = useState("Close")
    
    const togglePop = () => {
      setOpen(!open)
    }

    useEffect(() => {
        if (arrow == PopLeft){
            setArrow(PopRight)
            setAlt("Close")
          } else {
            setArrow(PopLeft)
            setAlt("Open")
          }
    }, [open])

     

    return (
        <div className={`popout-bar ${open ? "popOpen" : ""}`}>
            <button className="pop-button" onClick={togglePop}>
                <img src={arrow} alt={alt} />
            </button>
            <div className={`contents ${open ? "popOpen" : ""}`}>
                <input type ="text" placeholder= "Search.."></input>
                <div className="definition-block">
                    <div className="word">
                        <span className="furigana">にちじょう</span>
                        <span className="kanji">日常</span>
                    </div>
                    <div className="definition">
                        <p>1. everyday; daily; ordinary; usual; routine; regular​</p>
                    </div>
                </div>
                <hr />
                <div className="kanji-section">
                        <span className="headline">Kanji in this Word</span>
                        <KanjiBlock />
                        <KanjiBlock />
                        <KanjiBlock />
                        <KanjiBlock />
                        <KanjiBlock />
                        <KanjiBlock />
                        <KanjiBlock />
                        <KanjiBlock />
                </div>


            </div>
           
        </div>
    )
  
}

export default PopoutBar