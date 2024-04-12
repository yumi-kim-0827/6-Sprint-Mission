import './contentContainer.css';

export default function Container({children}) {
    return (
        <div className="content-container">
            {children}
        </div>
    )
}