import './style.scss';

interface Props {
    title: string
}

const SectionTitle = ({ title }:Props) => {
    return (
        <h2 className="section-title">
            {title}
        </h2>
    )
}

export default SectionTitle;
