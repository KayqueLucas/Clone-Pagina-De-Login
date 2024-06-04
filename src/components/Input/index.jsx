/* eslint-disable react/prop-types */


// eslint-disable-next-line no-unused-vars
export const Input = ({ title, ...rest }) => {
    return (
        <div>
            <label>{title}</label>
            <input {...rest} />
        </div>
    )
}