/* eslint-disable react/prop-types */


export const Input = ({ title, value, ...rest }) => {
    return (
        <>
            <p>{title}</p>
            <input {...rest} />
        </>
    )
}