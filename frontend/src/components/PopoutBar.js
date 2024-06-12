import { Link } from 'react-router-dom'
import KanjiBlock from './KanjiBlock/KanjiBlock'

const PopoutBar = () => {

    return (
        <div className="popout-bar">
            <div className="contents">
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
                </div>


            </div>
           
        </div>
    )
  
}

export default PopoutBar