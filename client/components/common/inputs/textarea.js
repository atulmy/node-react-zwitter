// Client / Components / Common / Inputs / Textarea Field

import React from 'react';
import classnames from 'classnames';

const InputTextarea = ({ value, onChange, name, id, label, error, placeholder, rows }) => {
    return (
        <div className={ classnames("form-group", { 'has-error': error }) }>
            <label htmlFor={ id }>{ label }</label>

            <textarea
                onChange={ onChange }
                name={ name }
                className="form-control"
                id={ id }
                placeholder={ placeholder }
                rows={ rows }
                value={ value }
            />

            { error && <span className="help-block">{ error }</span>}
        </div>
    );
};

InputTextarea.propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
};

InputTextarea.defaultProps = {
    rows: 3
};

export default InputTextarea;