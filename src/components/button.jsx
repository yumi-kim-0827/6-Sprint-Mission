import './button.css';

export default function Button({link, desc, children}) {
    return (
        <a className="button" href={link} alt={desc}>
            {children}
        </a>
    );
}