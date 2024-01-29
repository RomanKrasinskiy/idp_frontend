// import { InputAutocomplete } from "@alfalab/core-components-input-autocomplete";
import { IconButton } from "@alfalab/core-components-icon-button";
import { MagnifierMIcon } from '@alfalab/icons-glyph/MagnifierMIcon';
import { Input } from "@alfalab/core-components-input";
import { useState } from "react";


export default function CustomSearch () {
    
    const [value, setValue] = useState('');

    const handleInput = (_, { value }) => {
        setValue(value);
        
    };
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            <Input
                breakpoint={500}
                size='s'
                type="text"
                value={value}
                placeholder='Поиск'
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