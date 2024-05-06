import { useContext } from 'react'
import './GIFContainer.css'
import { ThemeContext } from './ThemeContext'


function GIFContainer ({ giphies }) {

    const { dark } = useContext(ThemeContext)

    return (
        <div className={'giphy-container'}>
            {
                giphies.map((item, index) => {
                    return (
                        <div key={index} className="giphy">
                            <img src={item.url} height={200} width={200} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GIFContainer