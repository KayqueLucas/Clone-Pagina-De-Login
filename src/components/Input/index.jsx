/* eslint-disable react/prop-types */


export const Input = ({ title, ...rest }) => {
    return (
        <>
            <p>{title}</p>
            <input {...rest} />
        </>
    )
}