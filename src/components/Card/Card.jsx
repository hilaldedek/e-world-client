import "./Card.css";

export default function Card() {

    const rotateRightSVG = 
        (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
             <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
         </svg>)
    
    const rotateLeftSVG = 
        (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
             <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
         </svg>)

    return (
        <div className="card">
            <div className="card-faces">
                <div className="back-face">
                    <p>Once upon a time there was a wicked card!</p>
                </div>
                <div className="front-face">
                    <h4 className="card-power">22</h4>
                    <h3 className="card-name">Ferhat Khan</h3>
                </div>
            </div>
            <div className="card-buttons">
                <button className="card-button rotate-right">{rotateRightSVG}</button>
                <button className="card-button purchase">Purchase</button>
                <button className="card-button rotate-left">{rotateLeftSVG}</button>
            </div>
        </div>
    )
}