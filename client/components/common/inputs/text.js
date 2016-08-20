// Client / Components / Common / Inputs / Text Field

import React from 'react';
import classnames from 'classnames';

const InputText = ({ type, value, onChange, name, id, label, error, placeholder }) => {
    return (
        <div className={ classnames("form-group", { 'has-error': error }) }>
            <label htmlFor={ id }>{ label }</label>

            <input
                type={ type }
                value={ value }
                onChange={ onChange }
                name={ name }
                className="form-control"
                id={ id }
                placeholder={ placeholder }
            />

            { error && <span className="help-block">{ error }</span>}
        </div>
    );
};

InputText.propTypes = {
    type: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
};

InputText.defaultProps = {
    type: 'text'
};

export default InputText;