import './style.scss';

interface Props {
    title: string,
    content: string
}

export const AboutItem = ({title, content}:Props) => {
    return (
        <div className='about-item'>
            <h3 className="about-item-title">{ title }</h3>
            <p className="about-item-content">{ content }</p>
        </div>
    )
}

export default AboutItem;
