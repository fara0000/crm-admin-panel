import React, {FC} from 'react';

interface Props {
    fill?: string;
    width?: number;
    height?: number;
    stroke?: string;
}

const EditIcon: FC<Props> = (props) => {
    const {
        stroke,
    } = props;

    return (
        <svg
            fill="none"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M2 21H19.5H22"
                stroke={stroke}
                strokeWidth="1.5"
            />
            <path
                d="M12 7L5 14V17H8L15 10M12 7L13.7929 5.20711C14.1834 4.81658 14.8166 4.81658 15.2071 5.20711L16.7929
            6.79289C17.1834 7.18342 17.1834 7.81658 16.7929 8.20711L15 10M12 7L15 10"
                stroke={stroke}
                strokeWidth="1.5"
            />
        </svg>

    );
};

EditIcon.defaultProps = {
    fill: '#000000',
    stroke: '#000000',
};

export default EditIcon;
