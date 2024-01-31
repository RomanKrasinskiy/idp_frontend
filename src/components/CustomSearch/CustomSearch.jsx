// import { InputAutocomplete } from "@alfalab/core-components-input-autocomplete";
import { IconButton } from "@alfalab/core-components-icon-button";
import { MagnifierMIcon } from '@alfalab/icons-glyph/MagnifierMIcon';
import { Input } from "@alfalab/core-components-input";
import { useState } from "react";
import PropTypes from 'prop-types'


export default function CustomSearch ({placeholder, size}) {
    
    const [value, setValue] = useState('');

    const handleInput = (_, { value }) => {
        setValue(value);
        
    };
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            <Input
                breakpoint={500}
                size={size}
                type="text"
                value={value}
                placeholder={placeholder}
                block={true}
                onChange={handleInput}
                leftAddons={
                    <IconButton
                        view='secondary'
                        icon={MagnifierMIcon}
                        size='xs'
                        alignIcon='right'
                    />
                } 
            />
        </div>
    );
}

CustomSearch.propTypes = {
    placeholder: PropTypes.string,
    size: PropTypes.string,
}